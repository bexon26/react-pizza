import React from "react";

import { useSelector } from "react-redux";
// import {  useNavigate } from "react-router-dom";

import Categories from "../components/Categories/Categories";

import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/Skeleton/Skeleton";
import Pagination from "../components/Pagination";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";

import { useAppDispatch } from "../redux/store";
import { selectFilter } from "../redux/filter/selectors";
import { selectPizzaData } from "../redux/pizza/selectors";
import { fetchPizzas } from "../redux/pizza/asynkActions";
import { fetchDish } from "../redux/dish/asynkActions";
import { selectDishData } from "../redux/dish/selectors";
import { selectAuthData } from "../redux/auth/selectors";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  // const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectPizzaData); // вытаскиваем данные из запроса к мокапи
  const { items1 } = useSelector(selectDishData); // вытаскиваем данные из стэйта запроса к своему бекенду
  const userData = useSelector(selectAuthData); //  вытаскиваем данные о авторизованном пользователе
  //  console.log(userData.admin)
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    selectFilter
  );

  // const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    // setIsLoading(true);
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      //@ts-ignore
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      })
    );
  };

  // Если был первый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  //Запрос к бекенд

  React.useEffect(() => {
    // axios.get('http://localhost:4444/dish')
    dispatch(fetchDish());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pizzas1 = items1.map((obj: any) => (
    <PizzaBlock
      key={obj._id}
      _id={obj._id}
      title={obj.title}
      description={obj.description}
      weight={obj.weight}
      price={obj.price}
      image={
        obj.imageUrl ? `http://localhost:4444` + obj.imageUrl : ""
        // obj.imageUrl ? `https://family-food-backend-production.up.railway.app` + obj.imageUrl : ""
      }
      category={obj.category}
      isEditable={userData.admin ? userData.admin : false}
    />
  ));

  const pizzas = items.map((obj: any) => (
    <PizzaBlock
      key={obj._id}
      _id={obj._id}
      title={obj.title}
      description={obj.description}
      weight={obj.weight}
      price={obj.price}
      image={obj.imageUrl}
      category={obj.category}
      isEditable={userData.admin ? userData.admin : false}
    />
  ));

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>
            Произошла ошибка<span>😕</span>
          </h2>
          <p>
            К сожалению, не удалось получить пиццы. Попробуйте повторить попытку
            позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : [...pizzas1, ...pizzas]}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
