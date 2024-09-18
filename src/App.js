import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav';
import Page from './page';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import './darkmode.js';
function App() { 
    return (
        <Router>
            <React.Fragment>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Page />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                </Routes>
            </React.Fragment>
        </Router>
    );
}

export default App;

