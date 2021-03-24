import './App.css';
import React, { useEffect, useState } from 'react'
import CustomAppBar from './CustomAppBar';
import MainSection from './MainSection';
import { makeStyles } from '@material-ui/core';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { fetchCoinStats } from './service/fetchData'
const useStyles = makeStyles((theme) => ({
    appContainer: {
        background: '#fff'
    },
    root: {
        display: 'flex',
        minHeight: '100vh',
        padding: theme.spacing(2)
    },
    mainSection: {
        width: '100%',
        background: 'red'
    },
    sideBar: {
        width: '30%',
        background: 'black'
    }

}))

function MainPage() {
    const classes = useStyles();
    const [coins, setCoins] = useState({})
    const [coinNames, setCoinNames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [language, setLanguage] = useState("US");

    useEffect(() => {
        setIsLoading(true)
        fetchCoinStats().then(
            data => {
                setCoinNames(Object.getOwnPropertyNames(data.data));
                setCoins(data.data)
                setIsLoading(false)
            }
        )

    }, [])
    return (
        <div className={classes.appContainer}>
            <CustomAppBar setLanguage={setLanguage} />
            <main className={classes.root}>
                <MainSection language={language} coins={coins} coinNames={coinNames} isLoading={isLoading} className={classes.mainSection} />
                <Sidebar coins={coins} coinNames={coinNames} isLoading={isLoading} className={classes.sideBar} />
            </main>
            <Footer />

        </div >
    )
}

export default MainPage
