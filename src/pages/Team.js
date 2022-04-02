import React from 'react'
import {Typography, Grid, Card,  CardContent,  CardMedia, Container} from '@material-ui/core';


import ashley from "../assets/images/team/ashley.jpg";
import cindy from "../assets/images/team/cindy.jpg";
import denis from "../assets/images/team/denis.jpg";
import dombo from "../assets/images/team/dombo.jpg";
import godwill from "../assets/images/team/godwill.jpg";
import ngoni from "../assets/images/team/ngoni.jpg";
import nkosilathi from "../assets/images/team/nkosilathi.jpeg";
import michelle from "../assets/images/team/michelle.jpg";
import shamma from "../assets/images/team/shamma.jpg";
import zoey from "../assets/images/team/tillscent.jpeg";
import tinashe from "../assets/images/team/tinashe.jpg";
import yanano from "../assets/images/team/yanano.jpeg";
import zviko from "../assets/images/team/zviko.jpg";
import thuba from "../assets/images/team/thuba.jpg";
import leslie from "../assets/images/team/leslie.jpg";




function Team() {
    return (
        <div>
            <br/>
            <br/>
            <Container maxWidth='sm' >
                <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
                    Our Team
                </Typography>
                <Typography variant='h6' align='center' color='textSecondary' paragraph>
                    With our diverse skills and backgrounds, we believe that we are up to the task in addressing the mental wellness of Zimbabwean students
                </Typography>
            </Container>
            <br/>
            <Container maxWidth="lg">
               <Grid container spacing={5} padding='40px, 0'  alignItems='stretch'>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={cindy}
                            alt="Rutendo Cindy Matsa"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Rutendo Cindy Matsa
                                </Typography>
                                <Typography variant='p' >
                                   Executive Director
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={ngoni}
                            alt="Ngoni Chakanza"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Ngoni Chakanza
                                </Typography>
                                <Typography variant='p' >
                                   Programs Director
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={yanano}
                            alt="Yanano Mabhoko"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Yanano Mabhoko
                                </Typography>
                                <Typography variant='p' >
                                   Marketing And Public Relations
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={denis}
                            alt="Denis Siduna"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Denis Siduna
                                </Typography>
                                <Typography variant='p' >
                                   Administrator
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={tinashe}
                            alt="Tinashe Banda"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Tinashe Banda
                                </Typography>
                                <Typography variant='p' >
                                   Finance Director
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={thuba}
                            alt="Thubelihle Ndlovu"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Thubelihle Ndlovu
                                </Typography>
                                <Typography variant='p' >
                                   Assistant Administrator
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '94%'}}
                            component="img"
                            image={ashley}
                            alt="Ashley Kufandirori"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Ashley Kufandirori
                                </Typography>
                                <Typography variant='p' >
                                   Assistant Finance Director
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={zviko}
                            alt="Zvikomborero Mziti"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Zvikomborero Mziti
                                </Typography>
                                <Typography variant='p' >
                                   Media Officer
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={dombo}
                            alt="Takudzwa Dombo"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Takudzwa Dombo
                                </Typography>
                                <Typography variant='p' >
                                   Assistant Finance Director
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={shamma}
                            alt="Shamma Huni"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Shamma Huni
                                </Typography>
                                <Typography variant='p' >
                                   Media Officer
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={leslie}
                            alt="Leslie Hove"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Leslie Hove
                                </Typography>
                                <Typography variant='p' >
                                   Media Officer
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={godwill}
                            alt="Godwill Zulu"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Godwill Zulu
                                </Typography>
                                <Typography variant='p' >
                                   Monitoring and Evaluation
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                    
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={zoey}
                            alt="Tillscent Mashavira"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Tillscent Mashavira
                                </Typography>
                                <Typography variant='p' >
                                   Media Officer
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={michelle}
                            alt="Michelle Sefaidiga"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Michelle Sefaidiga
                                </Typography>
                                <Typography variant='p' >
                                   Projects Officer
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                        sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                            style ={{height: '100%'}}
                            component="img"
                            image={nkosilathi}
                            alt="Nkosi"
                            />
                            <CardContent sx={{ flexGrow: 1 }} >
                                <Typography gutterBottom variant="h6" component="h2" >
                                    Nkosi Mabuza
                                </Typography>
                                <Typography variant='p' >
                                   Media Officer
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Team

