import React from 'react'
import {Cards, Charts, CountryPicker, Footer, NavBar} from './components';
import styles from './App.module.css';
import {useState,useEffect} from 'react';
import {fetchData } from './api';
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";

function App() {
    const [darkMode, setDarkMode] = useState(false)
    const [country, setCountry] = useState("");
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData(country).then(res => {
            const active=res.data.confirmed.value-res.data.recovered.value-res.data.deaths.value;
            const modifiedData ={
                confirmed:res.data.confirmed,
                recovered:res.data.recovered,
                deaths:res.data.deaths,
                active:active,
                lastUpdate:res.data.lastUpdate
            }
            setData(modifiedData);
        });
    }, [country])

    const handelCountryChange = async(country)=>{
            setCountry(country);
    }

    const theme = createMuiTheme({
        palette:{
            type: darkMode ?"dark" : "light"
        }
    });

    const Toggeltheme = () =>{
        setDarkMode(!darkMode);
    }

    return (
        <div className={darkMode?'maincontainerdark':'maincontainerlight'}>
        <ThemeProvider theme={theme}>
            <NavBar theme={darkMode} Toggeltheme={Toggeltheme}/>
            <Cards data={data}/>
            <CountryPicker handelCountryChange={handelCountryChange} country={country}/>
            <Charts data={data} country={country} />
            <Footer/>
        </ThemeProvider>
        </div>
    )
}

export default App
