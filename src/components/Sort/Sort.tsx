import React from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../redux/filter/slice";
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";
import { Sort, SortPropertyEnum } from "../../redux/filter/types";

import i18n from "../../i18n";

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PupupClick = MouseEvent & {
  path: Node[];
};

export const sortList: SortItem[] = [
  { name: "популярности ↓", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "популярности ↑", sortProperty: SortPropertyEnum.RATING_ASC },
  { name: "цене ↓", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "цене ↑", sortProperty: SortPropertyEnum.PRICE_ASC },
  {
    name: "алфавиту ↓",
    sortProperty:
      i18n.language === "en"
        ? SortPropertyEnum.TTTLE_DESC_EN
        : SortPropertyEnum.TITLE_DESC,
  },
  {
    name: "алфавиту ↑",
    sortProperty:
      i18n.language === "en"
        ? SortPropertyEnum.TTTLE_ASC_EN
        : SortPropertyEnum.TITLE_ASC,
  },
];

type SortPopupProps = {
  value: Sort;
};

const SortPopup: React.FC<SortPopupProps> = React.memo(({ value }) => {
  console.log(value);
  // sortList[4].sortProperty =  i18n.language === "en" ? SortPropertyEnum.TTTLE_DESC_EN : SortPropertyEnum.TITLE_DESC;
  // sortList[5].sortProperty =  i18n.language === "en" ? SortPropertyEnum.TTTLE_ASC_EN : SortPropertyEnum.TITLE_ASC;
  const dispatch = useDispatch();

  const sortRef = React.useRef(null);

  useWhyDidYouUpdate("SortPopup", { value });

  const [open, setOpen] = React.useState(false);

  const onClickMenuItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  // Закрытие попап при нажатии на область вне попап
  React.useEffect(() => {
    console.log(i18n.language);

    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PupupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="sort__label"
      >
        <b>Сортировка по:</b>
        <span
          onClick={() => {
            setOpen(!open);
          }}
        >
          {value.name}
        </span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickMenuItem(obj)}
                className={
                  value.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
            {/* <li className="active">популярности</li>
            <li>цене</li>
            <li>алфавиту</li> */}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;
