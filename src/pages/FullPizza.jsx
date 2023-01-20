import axios from 'axios';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const FullPizza = () => {
   const [pizza, setPizza] = React.useState();
   const { id } = useParams();
   const navigate = useNavigate();

   React.useEffect(() => {
      async function fetchPizza() {
         try {
            const { data } = await axios.get('https://63527937a9f3f34c373e9fa1.mockapi.io/Items/' + id)
            setPizza(data);

         } catch (error) {
            alert('Ошибка при получении пиццы')
            navigate('/react-pizza')
         }

      }
      fetchPizza();
   }, [])
   if (!pizza) {
      return 'Загрузка ...'
   }

   return (

      <div className='container'>
         <img src={pizza.imageUrl} />
         <h2>{pizza.title}</h2>
         <h4>{pizza.price} ₽</h4>
      </div>
   )
}

export default FullPizza;