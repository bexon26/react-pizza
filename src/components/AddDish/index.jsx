import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import SimpleMDE from 'react-simplemde-editor';

// import 'easymde/dist/easymde.min.css';
import styles from "./AddDish.module.scss";
import { useSelector } from "react-redux";
import { selectIsAuthAdmin } from "../../redux/auth/auth";
import { useParams } from "react-router-dom";
import instance from "../../redux/dish/asynkActions";

export const AddDish = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const isAuthAdmin = useSelector(selectIsAuthAdmin);

  // const [isLoading, setLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [titleEN, setTitleEN] = React.useState("");
  const [descriptionEN, setDescriptionEN] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [raiting, setRaiting] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [price, setPrice] = React.useState("");
  const inputFileRef = React.useRef(null);

  const isEditing = Boolean(id);
  console.log(id);
  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];

      formData.set("image", file);

      const { data } = await instance({
        method: "post",
        url: "/upload",
        data: formData,
        headers: { "content-type": "application/x-www-form-urlencoded" },
      });
      setImageUrl(data.url);
    } catch (error) {
      console.warn(error);
      alert("Ошибка при загрузке файла!");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  // const onChange = React.useCallback((valuse)=>{
  //   setValue(value)
  // },[])

  const onSubmit = async () => {
    try {
      // setLoading(true);
      const fields = {
        title,
        description,
        titleEN,
        descriptionEN,
        category,
        raiting,
        weight,
        price,
        imageUrl,
      };
      isEditing
        ? await instance.patch(`/dish/${id}`, fields)
        : await instance.post("/dish", fields);
      // alert(id)
      // const id = data._id
      // navigate(`/dish/${id}`)
    } catch (error) {
      alert("Ошибка при добавлении блюда!");
    }
  };

  React.useEffect(() => {
    if (id) {
      instance.get(`/dish/${id}`).then(({ data }) => {
        console.log(id, data);
        setTitle(data.title);
        setDescription(data.description);
        setTitleEN(data.titleEN);
        setDescriptionEN(data.descriptionEN);
        setCategory(data.category);
        setRaiting(data.raiting);
        setWeight(data.weight);
        setPrice(data.price);
        setImageUrl(data.imageUrl);
      });
    }
  }, [id]);

  if (!isAuthAdmin) {
    alert("dfsfs");
    // return <Navigate to="/react-pizza/" />;
  }
  console.log(selectIsAuthAdmin, isAuthAdmin);

  return (
    <Paper style={{ padding: 30 }}>
      <Button
        onClick={() => inputFileRef.current.click()}
        variant="outlined"
        size="large"
      >
        Загрузить превью
      </Button>
      <input
        type="file"
        ref={inputFileRef}
        onChange={handleChangeFile}
        hidden
      />
      {imageUrl && (
        <>
          <Button
            variant="contained"
            color="error"
            onClick={onClickRemoveImage}
          >
            Удалить
          </Button>
          <img
            className={styles.image}
            src={`https://family-food-backend-production.up.railway.app${imageUrl}`}
            alt="Uploaded"
          />
        </>
      )}

      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Название блюда..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        classes={{ root: styles.titleEnglish }}
        variant="standard"
        placeholder="Название блюда на английском..."
        value={titleEN}
        onChange={(e) => setTitleEN(e.target.value)}
        fullWidth
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Описание на английском"
        value={descriptionEN}
        onChange={(e) => setDescriptionEN(e.target.value)}
        fullWidth
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Категория"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Рейтинг"
        value={raiting}
        onChange={(e) => setRaiting(e.target.value)}
        fullWidth
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Вес"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        fullWidth
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
      />

      {/* <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options} /> */}
      <div className={styles.buttons}>
        <Button onClick={onSubmit} size="large" variant="contained">
          {isEditing ? "Сохранить" : "Опубликовать"}
        </Button>
        <a href="/">
          <Button size="large">Отмена</Button>
        </a>
      </div>
    </Paper>
  );
};
