import React, {useRef} from 'react'
import {Typography, Grid, Card, CardContent, Button,TextField} from '@material-ui/core';
import emailjs from '@emailjs/browser';

function Volunteer() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_smhzw', 'smhzw_volunteer', form.current, 'user_SeWGNWkKA3O46nHXfr60y')
      .then((result) => {
          console.log(result.text);
          alert('Details successfully submitted');
      }, (error) => {
          console.log(error.text);
          alert('Error! Please try again');
      });
      form.current.reset()
  };

    return (
        <div>
            <br/>
            <Typography gutterBottom variant="h3" align="center">
               Join Us
            </Typography>
            <Grid>
               <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                   <CardContent> 
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom align="center">
                           Fill in your details and we will get back to you as fast as we can
                        </Typography> 
                        <form ref={form} onSubmit={sendEmail}>  
                           <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                   <TextField placeholder="Enter first name" label="First Name" name='name' variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                   <TextField placeholder="Enter last name" label="Last Name" name='surname' variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                   <TextField type="email" placeholder="Enter email" label="Email" name='email' variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                   <TextField type="number" placeholder="Enter phone number" label="Phone" name='phone' variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default Volunteer
