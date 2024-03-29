import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

import styles from "./Login.module.scss";
import { useAppDispatch } from "../../redux/store";
import { fetchAuth, selectIsAuth } from "../../redux/auth/auth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchCart } from "../../redux/dish/asynkActions";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
   
    formState: { errors},
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: { email: String; password: String }) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      return alert("Не удалось авторизоваться!");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      window.localStorage.setItem("userId", data.payload._id);
      dispatch(fetchCart( data.payload._id ));
    }
  };
  if (isAuth) {
    return <Navigate to="/react-pizza/" />;
  }


  
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          type="email"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email", { required: "Укажите почту" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", { required: "Введите пароль" })}
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  );
};
