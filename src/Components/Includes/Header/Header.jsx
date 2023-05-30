import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import LogoMattelsa from './Assets/Img/LogoMattelsa.jsx'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import RedeemIcon from '@mui/icons-material/Redeem';
import Avatar from '@mui/material/Avatar';
import colombia from './Assets/Img/colombia.jpg'
import './Assets/styles.css'
function Header() {
  return (
    <div>

<AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>

        <Typography className='icon'  variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        <Link  to="/">
        <LogoMattelsa/>
           
           </Link>
          </Typography>
        
          
          <nav className='nav'>
           <div className='menu'>


           <Link
              variant="button"
              color="text.primary"
              to="/Mens"
              sx={{ my: 1, mx: 1.5 }}
            >
              hombre
            </Link>

            <Link
              variant="button"
              color="text.primary"
              to="/woman"
              sx={{ my: 1, mx: 1.5 }}
            >
              mujer
            </Link>

            <Link
              variant="button"
              color="text.primary"
            to="/things"
              sx={{ my: 1, mx: 1.5 }}
            >
              cosas
            </Link>

          

            <Link
              variant="button"
              color="text.primary"
              to="/store"
              sx={{ my: 1, mx: 1.5 }}
            >
              tiendas
            </Link>
            <Link
            onClick={()=>window.open('https://comunidad.mattelsa.net/activismo')}
            >
              activismo
            
            </Link>
            <Link
            className='sale'
              variant="button"
              color="text.primary"
             
              sx={{ my: 1, mx: 1.5 }}
            >
              sale
            </Link>
            </div> 
           

            <div className='userMenu'>
              <AccountCircleIcon className='userMenu-item'/>
              <SearchIcon className='userMenu-item'/>
              <RedeemIcon className='userMenu-item'/>
              <div className='line userMenu-item'/>
              <div className='userMenu-item flagAndText'>
             <div className='avatar'> <Avatar sx={{ width: 24, height: 24 }} src={colombia} /> </div>
               <p>COP</p>
              </div>
            </div>
           
          </nav>
        
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Header


