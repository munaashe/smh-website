import React from 'react';
import {Typography, Grid, Card, CardActions, CardContent,  Container} from '@material-ui/core';
import {Link} from 'react-router-dom';

function AboutUs() {
  return (
    <div>
        <br/>
        <br/>
        <Container maxWidth='lg'>
           <Grid container spacing={5} padding='40px, 0'  alignItems='stretch' >
               <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Card>
                       <CardContent style ={{backgroundColor: "#2B79D0" , height: '200px'}}>
                            <Typography variant='h4' style={{color: '#fff'}} gutterBottom>
                                About Us
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#fff'}}>
                                 We are a youth-led non-profit organisation (reg: Trust 1215/2019) that seeks to promote mental wellness in Zimbabwean students
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography style={{color: '#2B79D0'}} align='center'>
                                <a href='https://drive.google.com/file/d/1ExaD8WZjZgaJUFds070076kZjqgrrz2l/view?usp=sharing' style={{ textDecoration: 'none' }}> LEARN MORE</a>
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12}  sm={6} md={4} lg={3} >
                   <Card>
                        <CardContent style ={{backgroundColor: "#32CD32" , height: '200px' }} >
                            <Typography variant='h4' style={{color: '#fff'}} gutterBottom>
                                Our Vision
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#fff'}}>
                                We envisage a Zimbabwe where students get to learn and lead wholesome, productive and more fulfilling lives
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant='body1' align='center'>
                                <Link style={{color: '"#2B79D0"', textDecoration: 'none'}} to="/story">READ OUR STORY</Link>
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Card>
                       <CardContent style ={{backgroundColor: "#32CD32" , height: '200px'}}>
                            <Typography variant='h4' style={{color: '#fff'}} gutterBottom>
                               Code of Ethics
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#fff'}}>
                                We are fully committed to upholding an exceptional unparalleled ethical standard that conforms to standard best practice.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography style={{color: '#2B79D0'}}>
                                <a href='https://drive.google.com/file/d/1dPZ7uX9QOn99ZZ1KM4swqicChLHzNkVb/view?usp=sharing' style={{ textDecoration: 'none' }}> CODE OF ETHICS</a>
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} >
                   <Card>
                       <CardContent style ={{backgroundColor: "#2B79D0" , height: '200px'}} >
                            <Typography variant='h4' style={{color: '#fff'}} gutterBottom>
                               Core Values
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#fff'}}>Honesty and Integrity</Typography>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#fff'}}>Innovation and Growth</Typography>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#fff'}}>Professionalism</Typography>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#fff'}}>Inclusivity</Typography>
                        </CardContent>
                        <CardActions>
                            <Typography style={{color: '#2B79D0'}}>
                                <a href='https://drive.google.com/file/d/1ExaD8WZjZgaJUFds070076kZjqgrrz2l/view?usp=sharing' style={{ textDecoration: 'none' }}> LEARN MORE</a>
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        <br/>
        <br/>
    </div>
  )
}

export default AboutUs