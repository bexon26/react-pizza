import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import styles from "./Login.module.scss";
import { useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../../redux/auth/auth";
import { useAppDispatch } from "../../redux/store";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { CartUser } from "../../redux/cart/types";
import { addItem } from "../../redux/cart/slice";
import instance from "../../redux/dish/asynkActions";

export const createEmptyCard = async () => {
  const item: CartUser = {
    userId: window.localStorage.getItem("userId"),
    dishes:[],
    count: 0,
  };
  // dispatch(addItem(item));
  await instance.post("/cart", item);
};


export const Registration = () => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: {
    fullName: String;
    email: String;
    password: String;
  }) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert("Не удалось зарегистрироваться!");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      window.localStorage.setItem("userId", data.payload._id);
      createEmptyCard()
    }
  };
  if (isAuth) {
    return <Navigate to="/react-pizza/" />;
  }

 



  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          type="text"
          {...register("fullName", { required: "Укажите полное имя" })}
          className={styles.field}
          label="Полное имя"
          fullWidth
        />
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
        <Button
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
