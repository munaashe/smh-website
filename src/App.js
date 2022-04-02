import React from 'react';
import './App.css';
import { HashRouter, Switch, Route} from "react-router-dom";
//import { ThemeProvider } from '@material-ui/styles';
//import {createTheme} from '@material-ui/core/styles'
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Home from './pages/Home';
import Team from './pages/Team';
import Volunteer from './pages/Volunteer';
import Blog from './pages/Blog';
import Story from './pages/Story';
import Header from './components/Header';
import SinglePost from './blog/SinglePost';


export default class App extends React.Component {
  
  render() {


  return (
   <div>
    <HashRouter>
      <Header/>
      <Switch>
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/donate" component={Donate} />
        <Route path="/story" component={Story} />
        <Route path= "/blog/:id" component={SinglePost} />
        <Route path="/blog" component={Blog} />
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </HashRouter>
    </div>
  );
}
}


