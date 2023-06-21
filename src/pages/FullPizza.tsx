import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { _id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63527937a9f3f34c373e9fa1.mockapi.io/Items/" + _id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы");
     
        navigate("/react-pizza");
      }
    }
    fetchPizza();
    // eslint-disable-next-line
  }, []);
  if (!pizza) {
    return <>'Загрузка ...'</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.imageUrl}/>
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
