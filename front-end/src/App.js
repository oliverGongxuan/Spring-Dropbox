import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import NewerHomePage from "./components/NewerHomePage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (

            <div className="App">
                <MuiThemeProvider>
                    <BrowserRouter>
                        <NewerHomePage/>
                    </BrowserRouter>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
