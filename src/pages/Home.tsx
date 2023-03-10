import React from 'react';
import qs from 'qs';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Categories from '../components/Categories/Categories';
import Sort, { sortList } from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/Skeleton/Skeleton';
import Pagination from '../components/Pagination';


import { setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectPizzaData } from '../redux/pizza/selectors';
import { fetchPizzas } from '../redux/pizza/asynkActions';


const Home:React.FC = () =>{
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectPizzaData); // вытаскиваем данные
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);



  const [isLoading, setIsLoading] = React.useState(true);



  const onChangeCategory = React.useCallback((idx:number) => {
    dispatch(setCategoryId(idx));
  },[])

  const onChangePage = (page:number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    setIsLoading(true);
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';



    dispatch(
      //@ts-ignore
      fetchPizzas({
        order, 
        sortBy, 
        category, 
        search, 
        currentPage: String(currentPage)
    }));



  };

  // Если изменили параметры и был первый рендер
  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });
     

  //     navigate(`?${queryString}`);
  //   }
  //   if (!window.location.search) {
  //     dispatch(fetchPizzas({}))
  //   }
  //   isMounted.current = true;
  // }, [categoryId, sort.sortProperty, currentPage]);

  //Если был первый рендер, то проверяем URL параметры и сохраняем в Redux
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
      
  //     dispatch(setFilters({
  //       searchValue: params.search,
  //       categoryId:Number(params.category),
  //       currentPage:Number(params.currentPage),
  //       sort: sort || sortList[0]
  //     }));
  //     isSearch.current = true;
  //   }
  // }, []);

  // Если был первый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj:any) => (
    <PizzaBlock
      key = {obj.id}
      id={obj.id}
      title={obj.title}
      price={obj.price}
      image={obj.imageUrl}
      sizes={obj.sizes}
      types={obj.types}
    />
  ));

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className='content__error-info'>
          <h2>Произошла ошибка<span>😕</span></h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (<div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>


      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
