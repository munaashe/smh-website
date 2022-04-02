import React from 'react';
import {Box, Container, Typography} from '@material-ui/core'


const background ={
    background: 'linear-gradient(45deg, #2B79D0 15%, #32CD32 90%)',
};

function Copyright () {
    
   
    return (
        <Typography variant='body2'  style={{color: '#fff'}} align='center' >
            {'Copyright ©'}  {new Date().getFullYear()}
        </Typography>
    )
}

export default function Footer() {
   

    return (
      <div >
      <Box component='footer' sx={{ py:6}} style={background}>
          <Container maxWidth='lg'>
              <Typography variant='h6' align='center' gutterBottom  style={{color: '#fff'}}>
                  Student Mental Health Zimbabwe{'.'}
              </Typography>
              <Typography variant='subtitle1' align='center'  style={{color: '#fff'}} component='p'>
                  All rights reserved
              </Typography>
              <Copyright/>
          </Container>
      </Box>
      </div>
    )
}




