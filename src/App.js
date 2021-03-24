import './App.css';
import React, { useEffect, useState } from 'react'
import CustomAppBar from './CustomAppBar';
import MainSection from './MainSection';
import { makeStyles } from '@material-ui/core';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { fetchCoinStats } from './service/fetchData'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import CoinDetail from './component/CoinDetail';
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

function App() {
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
    // <div className={classes.appContainer}>
    //   <CustomAppBar setLanguage={setLanguage} />
    //   <main className={classes.root}>
    //     <MainSection language={language} coins={coins} coinNames={coinNames} isLoading={isLoading} className={classes.mainSection} />
    //     <Sidebar coins={coins} coinNames={coinNames} isLoading={isLoading} className={classes.sideBar} />
    //   </main>
    //   <Footer />

    // </div >
    <BrowserRouter basename="/react-blockchain">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/coins/:coinName" component={CoinDetail} />
      </Switch>
    </BrowserRouter>


  )
}

export default App;
