import React from 'react'
import './Assets/styles.css'

function MensinteractiveMenu() {
  return (
    <div className='MensinteractiveMenu'>
      <div>
       <div className='menuCategories'>
       <ul>
          <li>Categoría</li>
          <li>Camisetas</li>
          <li>Tanks</li>
          <li>Polos</li>
          <li>Buzos y Chaquetas</li>
          <li>Camisas</li>
          <li>Shorts y Pantalonetas</li>
          <li>Jeans</li>
          <li>Pantalones</li>
          <li>Joggers</li>
          <li>Ropa Deportiva</li>
          <li>Gorras</li>
        </ul>
       </div>
     <div className='MensinteractiveMenu-colors'> 
     <div className='Colors'>
            <p>Color</p>
            <div className='colors-Contained'>
                <div style={{backgroundColor:'yellow'}} className='colorSquare'/>
                <div style={{backgroundColor:'red'}} className='colorSquare'/>
                <div style={{backgroundColor:'green'}} className='colorSquare'/>
                <div style={{backgroundColor:'white'}} className='colorSquare'/>
                <div style={{backgroundColor:'blue'}} className='colorSquare'/>
                <div style={{backgroundColor:'pink'}} className='colorSquare'/>
                <div style={{backgroundColor:'aqua'}} className='colorSquare'/>
                <div style={{backgroundColor:'blueviolet'}} className='colorSquare'/>
                <div style={{backgroundColor:'brown'}} className='colorSquare'/>
                <div style={{backgroundColor:'bisque'}} className='colorSquare'/>
                <div style={{backgroundColor:'chartreuse'}} className='colorSquare'/>
                <div style={{backgroundColor:'darkslategray'}} className='colorSquare'/>
                <div style={{backgroundColor:'grey'}} className='colorSquare'/>
                <div style={{backgroundColor:'plum'}} className='colorSquare'/>
                <div style={{backgroundColor:'black'}} className='colorSquare'/>
            </div>
       </div>
     </div>
     <div className='MensinteractiveMenu-sizeCards'>
     <div className='sizeCards'>
        <p className='title'>Talla</p>
        <div className='colors-Contained'>
        <div className='sizeSquare'><p>S</p></div>
        <div className='sizeSquare'><p>M</p></div>
        <div className='sizeSquare'><p>L</p></div>
        <div className='sizeSquare'><p>XL</p></div>
        </div>
       </div>
     </div>
      </div>
    </div>
  )
}

export default MensinteractiveMenu

