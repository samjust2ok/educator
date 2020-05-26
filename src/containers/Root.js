import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import App from '../App.js';
import '../css/Root.css'
import { themed } from '../constants/theme'


const Root = ()=>{
    return (
        <ThemeProvider theme = {themed}>
            <div className = "Root">
                <Router>
                    <App/>
                </Router>
            </div>
        </ThemeProvider>
    );
}


export default Root;