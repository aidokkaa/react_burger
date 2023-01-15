import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addItem} from '../../redux/slices/cartSlices'

const typeNames=['Тонкое','Традиционное'];


export default function PizzaBlock ({id,title,price,imageUrl,sizes,types,rating}){
  const dispatch=useDispatch()

  const cartItem=useSelector((state)=>state.cart.items.find((obj)=>obj.id===id))
    const[ pizzaCount,setPizzaCount]=React.useState(0);
    const typeNames=['Тонкое','Традиционное'];
    const [activeType,setActiveType]=React.useState(0);
    const [activeSize,setActiveSize]=React.useState(0);

    const addedCount= cartItem?cartItem.count:0

    const onClickAdd=()=>{
      const item={
        id,
        title,
        price,imageUrl,
        type:typeNames[activeType],
        size:activeSize
      }
      dispatch(addItem(item))
    }

    return(
    <>
    <div class="pizza-block">
  <img
    class="pizza-block__image"
    src={imageUrl}
    alt="Pizza"
  />
  <h4 class="pizza-block__title">{title}</h4>
  <div class="pizza-block__selector">
   <ul>
       {types.map((typeId)=><li key={typeId} onClick={()=>setActiveType(typeId)} className={activeType===typeId ? 'active' : ''}>{typeNames[typeId]}</li>)}
    </ul>
    <ul>
      {sizes.map((size,i)=> (<li key={i} onClick={()=>setActiveSize(i)} className={activeSize===i ? 'active' : ''}>{size}</li>))}
     </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">{price} тг</div>
    <button onClick={onClickAdd} class="button  button--outline button--add">
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
      <span>Добавить</span>
        {addedCount>0 &&<i>{addedCount}</i>}
    </button>
  </div>
</div>
    </>
    )
}