import React from 'react'
import {Typography, Grid, Card,  CardContent, CardMedia, Container} from '@material-ui/core';



import documentaries from "../assets/images/projects/documentaries.jpeg";
import peerCounselling from "../assets/images/projects/peerCounselling.jpg";
import outreaches from "../assets/images/projects/outreaches.jpg";
import podcast from "../assets/images/projects/podcast.jpg" ;


function Projects() {
  return (
    <div>
        <br/>
        <br/>
        <Container maxWidth='sm' >
            <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
                Our Projects
            </Typography>
            <Typography variant='h6' align='center' color='textSecondary' paragraph>
                We believe in teamwork, and through our network of partners, stakeholders and volunteers; these are some of the projects we have and are currently undertaking. 
            </Typography>
        </Container>
        <br/>
        <Container maxWidth="lg">
           <Grid container spacing={5} padding='40px, 0'  alignItems='stretch'>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card
                    sx={{ height: '150', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardMedia
                        style ={{height: '220px'}}
                        component="img"
                        image={documentaries}
                        alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }} style ={{backgroundColor: "#2B79D0"}}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: '#fff'}}>
                                Documentaries
                            </Typography>
                            <Typography style={{color: '#fff'}}>
                               Starting mental health dialogue by shining a light on pressing issues.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card
                    sx={{ height: '150', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardMedia
                        style ={{height: '220px'}}
                        component="img"
                        image={outreaches}
                        alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }} style ={{backgroundColor: "#32CD32"}}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: '#fff'}}>
                                Outreaches
                            </Typography>
                            <Typography style={{color: '#fff'}}>
                               Reaaching out to students and youths on mental health issues in youth-friendly methods.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card
                    sx={{ height: '150', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardMedia
                        style ={{height: '220px'}}
                        component="img"
                        image={podcast}
                        alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }} style ={{backgroundColor: "#32CD32"}}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: '#fff'}}>
                                Podcast
                            </Typography >
                            <Typography style={{color: '#fff'}}>
                               A voice for the mental wellness of students by students, for the students.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card
                    sx={{ height: '150', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardMedia
                        style ={{height: '220px'}}
                        component="img"
                        image={peerCounselling}
                        alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }} style ={{backgroundColor: "#2B79D0"}}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: '#fff'}}>
                                Peer Counselling 
                            </Typography>
                            <Typography style={{color: '#fff'}}>
                               Addressing the gap between fewer psychologists and the many students in institutions.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        <br/>
        <br/>
    </div>
  )
}

export default Projects