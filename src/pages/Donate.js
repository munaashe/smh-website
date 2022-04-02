import React from 'react'
import {Container, Typography, Button, Link} from '@material-ui/core'

function Donate() {
  return (
    <div>
      <Container maxWidth='md'>
        <br/>
        <br/>
        <Typography variant='h4' align='center'>
          Donate to Us
        </Typography>
        <Typography variant='h6' align='center'>
          We pay for services from some of our service providers when undertaking some projects. You can help us by chipping in a few dollars. Your donation can drastically transform the life of Zimbabwean students. Click on the donate button below. 
        </Typography>
        <br/>
        <br/>
        < div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Link  target="_blank" href='https://www.paypal.com/donate/?hosted_button_id=WZTS4QVC38NXS'>
            <Button variant="contained" color='#32CD32'>Donate</Button>
          </Link>
          <br/>
          <br/>
        </div>
      </Container>
    </div>
  )
}

export default Donate