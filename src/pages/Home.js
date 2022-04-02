import React from 'react';
import {Parallax} from 'react-parallax';
import { Typography,} from '@material-ui/core';
import {Link} from 'react-router-dom';

import AboutUs from '../home/AboutUs';
import Causes from '../home/Causes';
import Projects from '../home/Projects';

import image1 from "../assets/images/parallax/1.jpg";
import image2 from "../assets/images/parallax/2.jpg";
import image3 from "../assets/images/parallax/3.jpg";
import image4 from "../assets/images/parallax/4.jpg";

const imageText = {
    background: 'rgba(50, 205, 50, 0.6)',
    left: '50%',
    top: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
  }

function Home() {
  return (
    <div>

        <Parallax bgImage= {image1} strength={450}>
            <div style={{height: 500}}>
                <div style={imageText}>
                    <Typography  style={{color: '#fff'}} variant= "h3" align='center' >
                        Promoting Mental Wellness in Zimbabwean Students 
                    </Typography>
                    <Typography style={{color: '#fff'}} variant= "h6" align='center' >
                       Live While You Learn
                    </Typography>
                </div>
            </div>
        </Parallax>

        <AboutUs/>

        <Parallax bgImage= {image2} strength={450} blur={{min: -50, max: 0}}>
           <div style={{height: 500}}>
                <div style={imageText}>
                    <Typography  style={{color: '#fff'}} variant= "h4" align='center' >
                        You Too Can Make a Change at Your School!
                    </Typography>
                    < Typography style={{color: '#fff'}} variant= "h6" align='center' >
                        Volunteer with us
                    </Typography>
                    <Typography variant='body1' align='center'>
                        <Link style={{color: '#fff'}} to="/volunteer">Click Here</Link>
                    </Typography>
                </div>
            </div>
       </Parallax>

        <Causes/>

        <Parallax bgImage= {image3} strength={450} blur={{min: -50, max: 0}}>
            <div style={{height: 500}}>
                <div style={imageText}>
                    <Typography  style={{color: '#fff'}} variant= "h4" align='center' >
                         Stories And Thoughts By People Like You
                    </Typography>
                    <Typography style={{color: '#fff'}} variant= "h6" align='center' >
                        Check Out Our Blog 
                    </Typography> 
                    <Typography variant='body1' align='center'>
                        <Link style={{color: '#fff'}} to="/blog">Click Here</Link>
                    </Typography>
                    
                </div>
            </div>
        </Parallax>
        

        <Projects/>

        <Parallax
        bgImage= {image4} 
        strength={200}
        >
            <div style={{height: 500}}>
                <div style={imageText}>
                    <Typography  style={{color: '#fff'}} variant= "h4" align='center' >
                         No Amount Is Too Small
                    </Typography>
                    <Typography style={{color: '#fff'}} variant= "h6" align='center' >
                        Donate to us 
                    </Typography>
                    <Typography variant='body1' align='center'>
                        <Link style={{color: '#fff'}} to="/donate">Click here</Link>
                    </Typography>
                </div>
            </div>
        </Parallax>
    </div>
  )
}

export default Home