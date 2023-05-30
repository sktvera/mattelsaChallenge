import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import Hidden from '@mui/material/Hidden';
import './Assets/styles.css'

function Footer(props) {
  return (
  <div className='containedFooter'>

<div className='body-containedFooter'>
<ul>
  <li>CONTACTO</li>
  <li onClick={()=>window.open('https://api.whatsapp.com/send?phone=573005071000')}>300 507 10 00</li>
  <li><strong>PBX:</strong>01 8000 41 37 57</li>
  <li onClick={()=>window.open('https://comunidad.mattelsa.net/contacto')}> Escríbenos</li>
</ul>

<ul>
  <li>QUIENES SOMOS</li>
  <li onClick={()=>window.open('https://comunidad.mattelsa.net/cultura')}>Cultura</li>
  <li onClick={()=>window.open('https://comunidad.mattelsa.net/cultura')}> Trabaja aquí</li>
  <li onClick={()=>window.open('https://comunidad.mattelsa.net/la-vida-en-mattelsa')}>La vida en Mattelsa</li>
  <li onClick={()=>window.open('https://www.mattelsa.net/art-series')}>Art Series & Friends</li>
</ul>



<ul>
  <li>AYUDA</li>
  <li onClick={()=>window.open('https://www.mattelsa.net/envios')}>Envíos</li>
  <li onClick={()=>window.open('https://www.mattelsa.net/garantias')}>Cambios y garantías</li>
  <li onClick={()=>window.open('https://www.mattelsa.net/preguntas-frecuentes')}>Preguntas frecuentes</li>
</ul>

<div className='iconsSocialMedia'>
  <p>SÍGUENOS</p>

  <FacebookIcon
  className='iconsSocialMedia'
  onClick={()=>window.open('https://www.instagram.com/mattelsa/')}
  />

<InstagramIcon
 className='iconsSocialMedia'
onClick={()=>window.open('https://www.instagram.com/mattelsa/')}
/>

<TwitterIcon
 className='iconsSocialMedia'
onClick={()=>window.open('https://twitter.com/Mattelsa_net')}
/>

<QueueMusicIcon
 className='iconsSocialMedia'
onClick={()=>window.open('https://open.spotify.com/user/mattelsa_net')}
/>



</div>

</div>
<Hidden only={['xs']}> 
<div> <Typography variant="body2" color="text.secondary" align="center" {...props}>
   {'Copyright © '}
   <Link color="inherit" href="#">
   ULTIMA ENTREGA MERCADEO DIGITAL
   </Link>{' '}
   {new Date().getFullYear()}
   {'All rights reserved Juan Pablo Gomez Quiceno, Isabella Hernandez, Vanesa Cervantes .'}
 </Typography></div>
 </Hidden>
  </div>
  );
}

export default Footer
