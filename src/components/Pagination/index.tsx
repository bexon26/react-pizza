import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";
import { useSelector } from "react-redux";
import { selectDishData } from "../../redux/dish/selectors";
import { fetchDishCount } from "../../redux/dish/asynkActions";
import { useAppDispatch } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => {
 
  // Если был первый рендер, то запрашиваем пиццы
  const dispatch = useAppDispatch();
  const { categoryId } = useSelector(selectFilter);
  const { count } = useSelector(selectDishData);
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  React.useEffect(() => {
    console.log({ category });
    dispatch(fetchDishCount({ category }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={Math.ceil(Number(count) / 8)}
      // pageCount={2}
      forcePage={currentPage - 1}
      // renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
