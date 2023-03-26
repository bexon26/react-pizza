import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};
const categories = [
  { name: "Салаты", image: "🥗" },
  { name: "Горячее", image: "🍲" },
  { name: "Супы", image: "🥘" },
  { name: "Десерты", image: "🍰" },
  { name: "Соусы", image: <svg style={{position:"relative", top:'2px'}} xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="16" viewBox="0 0 497 497" width="16"> <g> <path d="m136.916 0h-16.831c-3.767 0-6.949 2.794-7.437 6.529l-10.898 83.471 26.75 30 26.75-30-10.898-83.471c-.487-3.735-3.67-6.529-7.436-6.529z" fill="#ffba48"></path> <path d="m173.5 90-30 90h60v-60c0-16.569-13.431-30-30-30z" fill="#ff5a35"></path> <path d="m143.5 90-30 90h60v-90z" fill="#ff7a3c"></path> <path d="m113.5 90-30 90h60v-90z" fill="#ff9a42"></path> <path d="m83.5 90-30 90h60v-90z" fill="#ff7a3c"></path> <path d="m53.5 120v60h30v-90c-16.569 0-30 13.431-30 30z" fill="#ff9a42"></path> <path d="m203.5 150h-30v347h30c16.569 0 30-13.431 30-30v-287c0-16.569-13.431-30-30-30z" fill="#ff9a42"></path> <path d="m203.5 467v-287c0-16.569-13.431-30-30-30h-120c-16.569 0-30 13.431-30 30v287c0 16.569 13.431 30 30 30h120c16.569 0 30-13.431 30-30z" fill="#ffba48"></path> <path d="m376.916 0h-16.831c-3.767 0-6.949 2.794-7.437 6.529l-10.898 83.471 26.75 30 26.75-30-10.898-83.471c-.487-3.735-3.67-6.529-7.436-6.529z" fill="#ff3a2f"></path> <path d="m413.5 90-30 90h60v-60c0-16.569-13.431-30-30-30z" fill="#ff3a2f"></path> <path d="m383.5 90-30 90h60v-90z" fill="#ff5a35"></path> <path d="m353.5 90-30 90h60v-90z" fill="#ff7a3c"></path> <path d="m323.5 90-30 90h60v-90z" fill="#ff5a35"></path> <path d="m293.5 120v60h30v-90c-16.569 0-30 13.431-30 30z" fill="#ff7a3c"></path> <path d="m443.5 150h-30v347h30c16.569 0 30-13.431 30-30v-287c0-16.569-13.431-30-30-30z" fill="#db2116"></path> <path d="m443.5 467v-287c0-16.569-13.431-30-30-30h-120c-16.569 0-30 13.431-30 30v287c0 16.569 13.431 30 30 30h120c16.569 0 30-13.431 30-30z" fill="#ff3a2f"></path> </g> </svg>  },
  { name: "Напитки", image: "🥤" },
];

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map(({ name, image }, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? "active" : ""}
              style={{ display: "flex", columnGap: "10px" }}
            >
              <div>{image}</div>
              <div>{name}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
