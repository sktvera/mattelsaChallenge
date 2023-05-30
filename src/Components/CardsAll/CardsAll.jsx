import React from 'react'
import './Assets/styles.css'

function CardsAll({items, title, price, alt}) {
  return (
    <div className='bodyCard'>
      <img src={items.img} alt={alt} /> 
     <div className='tittles'>
         <p>{title}</p>
      <p className='cardItem'>{price}</p>
     </div>
    </div>

  )
}

export default CardsAll
