import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItemById } from "../../redux/cart/selectors";
import { addItem } from "../../redux/cart/slice";
import { CartItem } from "../../redux/cart/types";
import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Clear";

import { fetchRemoveDish } from "../../redux/dish/asynkActions";
import { store, useAppDispatch } from "../../redux/store";


type PizzaBlockProps = {
  _id: string;
  title: string;
  description: string;
  weight: number;
  price: number;
  image: string;
  category: number;
  isEditable: boolean;
};
const PizzaBlock: React.FC<PizzaBlockProps> = ({
  _id,
  title,
  description,
  weight,
  price,
  image,
  category,
  isEditable ,
}) => {
  const dispatch = useDispatch();
  const useDeleteDispatch = useAppDispatch();
  const cartItem = useSelector(selectCartItemById(_id));
  // const [activeType, setActiveType] = React.useState(0);
  // const [activeSize, setActiveSize] = React.useState(0);

  const addedCount = cartItem ? cartItem.count : 0;
  
  const onClickAdd = () => {
    const item: CartItem = {
      _id,
      title,
      description,

      weight,
      price,
      image,
      category,
      
      count: 0,
    };
    dispatch(addItem(item));
  };

  const { t, i18n } = useTranslation();

  const OnClickRemove =  () => {
    if (window.confirm('Вы действительно удалить блюдо?')){
      
      
    }
    useDeleteDispatch(fetchRemoveDish(_id))
  };
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        {isEditable && (
          <div className="edit-buttons">
            <a href={`/react-pizza/dish/${_id}/edit`}>
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
            </a>
            <IconButton onClick={OnClickRemove} color="secondary">
              <DeleteIcon />
            </IconButton>
          </div>
        )}
        <Link key={_id} to={`pizza/${_id}`} >
          <div className="pizza-block-container">
            <img className="pizza-block__image" src={image} />
          </div>

          <h4 className="pizza-block__title">{t(`${title}.title`)}</h4>
          <p className="pizza-block__description">
            {t(`${title}.description`)}
          </p>
          <p className="pizza-block__weigth">
            {t("Вес")}: {weight} {category !== 6 ? `${t("гр")}` : `${t("л")}`}{" "}
          </p>
        </Link>

        <div className="pizza-block__bottom">
          <div className="pizza-block__price">
            {price} {t("фунтов")}
          </div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>{t("Добавить")}</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
