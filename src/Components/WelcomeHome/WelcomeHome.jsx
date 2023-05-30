import React from 'react'
import{ Button,Grid,Box }  from '@mui/material'
import { useNavigate } from "react-router-dom";


import './Assets/styles.css'

function WelcomeHome() {
  const navigate = useNavigate();

/*  ---------------- NAVIGATE TO CARDS ----------------------------*/
  const navigateToMens = () => {
    navigate(`/Mens`);
    }
    const navigateToWoman = () => {
      navigate(`/Woman`);
      }

  return (
    <div className='containerWelcome'>
        <Grid >
             
              
              <Box className='itemWelcome'>
                <div className='buttonContainer'>
                <Button
                  onClick={navigateToMens} 
                  variant="contained" 
                  className='buttonWelcome'>hombre</Button>
                </div>

                <div className='buttonContainer'>
                <Button
                  onClick={navigateToWoman} 
                  variant="contained" 
                  className='buttonWelcome'>mujer</Button>
                </div>
                
              </Box>
        </Grid>
    </div>
  )
}

export default WelcomeHome
