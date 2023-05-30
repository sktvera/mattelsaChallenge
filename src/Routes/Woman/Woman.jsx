import React from 'react'
import Womancategories from '../../Components/Womancategories/Womancategories'
import MensinteractiveMenu from '../../Components/MensinteractiveMenu/MensinteractiveMenu'
import WomansCard from '../../Components/WomansCard/WomansCard'

function Woman() {
  return (
    <div>
   
     <Womancategories/>
   <div className='bodyMens'>
    <MensinteractiveMenu/>
    <WomansCard/>
   </div>
    </div>
  )
}

export default Woman


