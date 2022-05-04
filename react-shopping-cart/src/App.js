import React from 'react';


import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
    return(
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element= {<Home />} />
            </Routes>
            <Footer />
          </Router>
    );
}

export default App;