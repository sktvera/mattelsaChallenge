import React from 'react'
import BlusaBlancaMini from './Assets/Img/BlusaBlancaMini.jpg'
import BlusaMangaLarga from './Assets/Img/BlusaMangaLarga.jpg'
import ShortJeanMini from './Assets/Img/ShortJeanMini.jpg'
import blusaBlanca from './Assets/Img/blusaBlanca.jpg'
import blusaCafe from './Assets/Img/blusaCafe.jpg'
import blusaCafeMini from './Assets/Img/blusaCafeMini.jpg'
import blusaDeportiva from './Assets/Img/blusaDeportiva.jpg'
import blusaFlamenco from './Assets/Img/blusaFlamenco.jpg'
import blusaVerde from './Assets/Img/blusaVerde.jpg'
import blusaWhite from './Assets/Img/blusaWhite.jpg'
import busoPollo from './Assets/Img/busoPollo.jpg'
import camisaAzul from './Assets/Img/camisaAzul.jpg'
import camisetaDragon from './Assets/Img/camisetaDragon.jpg'
import jean from './Assets/Img/jean.jpg'
import overol from './Assets/Img/overol.jpg'
import pantalonUrbano from './Assets/Img/pantalonUrbano.jpg'
import patalonPink from './Assets/Img/patalonPink.jpg'
import pijama from './Assets/Img/pijama.jpg'
import CardsAll from '../../Components/CardsAll/CardsAll'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

import './Assets/styles.css'




function WomansCard() {


const Cards =[
  {
    title:'Camisilla Blanca',
    price:'$69.000',
    img:BlusaBlancaMini,
    alt:'camisilla Black'
},
{
  title:'Blusa Pink',
  price:'$95.000',
  img:BlusaMangaLarga,
  alt:'coat Green'
},
{
  title:'Short',
  price:'$123.000',
  img:ShortJeanMini,
  alt:'coat White'
},
{
  title:'Blusa White',
  price:'$109.000',
  img:blusaBlanca,
  alt:'coat White Lettering'
},
{
  title:'Blusa Brown',
  price:'$119.000',
  img:blusaCafe,
  alt:'hoodi eWhite'
},
{
  title:'Blusa Brown Mini',
  price:'$143.000',
  img:blusaCafeMini,
  alt:'pants Grey'
},
{
  title:'Brown Deportiva',
  price:'$143.000',
  img:blusaDeportiva,
  alt:'pants White'
},

 {
    title:'Brown Flamenco',
    price:'$143.000',
    img:blusaFlamenco,
    alt:'pnat sGray'
},
 {
    title:'Brown Verde',
    price:'$69.000',
    img:blusaVerde,
    alt:'shirt Brown'
},
{
  title:'Brown White Mini',
  price:'$55.000',
  img:blusaWhite,
  alt:'tShirt Aqua'
},
 {
    title:'Buso Pollito',
    price:'$55.000',
    img:busoPollo,
    alt:'tShir tBlack'
},
{
  title:'Camisa Mini Blue',
  price:'',
  img:camisaAzul,
  alt:'tShirt Black And White'
},
{
  title:'Camiseta Dragon',
  price:'$79.000',
  img:camisetaDragon,
  alt:'tShirt Black Serius'
},
{
  title:'jeans',
  price:'$43.000',
  img:jean,
  alt:'tShirt Salmon'
},
{
  title:'Overol',
  price:'$48.000',
  img:overol,
  alt:'tShirt White Points'
},
{
  title:'Pantalon Urbano',
  price:'$39.000',
  img:pantalonUrbano,
  alt:'tshirt Black Ruedas'
},
{
  title:'Pantalon Clasics',
  price:'$39.000',
  img:patalonPink,
  alt:'tshirt Black Lettering'
},
{
  title:'Pijama',
  price:'$89.000',
  img:pijama,
  alt:'tshir White'
}
]

  return (
    <div>
      <div>
        <div className='ordered'>
        <div>ordenar por:</div>
        <ViewCarouselIcon/>
        </div>
       
<div className='cardsGrid'>
{Cards.map((items)=>{
  return(
<CardsAll
      items={items}
      title={items.title}
      price={items.price}
      alt={items.alt}
      />
  )
})}
</div>

      </div>
      
    </div>
  )
}

export default WomansCard