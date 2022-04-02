import React from 'react';
import {Typography, Grid, Card,  CardContent, CardMedia, Container} from '@material-ui/core';


import advocacy from "../assets/images/causes/advocacy.jpg";
import infortainment from "../assets/images/causes/infortainment.jpg";
import research from "../assets/images/causes/research.jpg";
import support from "../assets/images/causes/support.jpg";

function Causes() {
  return (
    <div>
        <br/>
        <br/>
        <Container maxWidth='sm' >
            <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
                Our Causes 
            </Typography>
            <Typography variant='h6' align='center' color='textSecondary' paragraph>
                The zeal to improve the mental wellness of students in Zimbabwe has entrenched us into these noble causes. 
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
                        image={support}
                        alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }} style ={{backgroundColor: "#32CD32"}}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: '#fff'}}>
                                Support
                            </Typography>
                            <Typography style={{color: '#fff'}}>
                               We believe that where there's help, there's a way. We are here for you. 
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
                        image={advocacy}
                        alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }} style ={{backgroundColor: "#2B79D0"}}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: '#fff'}}>
                                Advocacy
                            </Typography>
                            <Typography style={{color: '#fff'}}>
                               Achieving positive change through engagements with all stakeholders.
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
                        image={infortainment}
                        alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }} style ={{backgroundColor: "#2B79D0"}}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: '#fff'}}>
                                Infotainment
                            </Typography >
                            <Typography style={{color: '#fff'}}>
                               Dissemination of information packaged in youth-friendly, entertaining forms. 
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
                        image={research}
                        alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }} style ={{backgroundColor: "#32CD32"}}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: '#fff'}}>
                                Research
                            </Typography>
                            <Typography style={{color: '#fff'}}>
                               Contributing to the decision and policy making through scientific researches.
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

export default Causes