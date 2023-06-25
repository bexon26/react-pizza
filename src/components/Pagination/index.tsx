import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";
import { useSelector } from "react-redux";
import { selectDishData } from "../../redux/dish/selectors";
import { fetchDishCount } from "../../redux/dish/asynkActions";
import { useAppDispatch } from "../../redux/store";

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => {
  
  //  console.log(countDishes)
  // Если был первый рендер, то запрашиваем пиццы
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchDishCount())
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dishState = useSelector(selectDishData);
console.log(dishState.count)
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={Math.ceil(Number(dishState.count)/8)}
      // pageCount={2}
      forcePage={currentPage - 1}
      // renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
