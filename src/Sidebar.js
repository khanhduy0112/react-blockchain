import React from 'react'
import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react'
import { Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        maxWidth: '400px',
        marginLeft: theme.spacing(1)
    },
    paper: {
        margin: '1rem 0',
        width: '300px',
        padding: theme.spacing(1),
        background: '#2C3E50'
    },
    paperContainer: {
        height: '100vh',
        overflowY: 'scroll'
    },
    title: {
        fontSize: '20px',
        fontWeight: '300',
        color: '#00C6B5',
        textTransform: 'uppercase'
    },
    green: {
        fontSize: '15px',
        color: '#c9c9c9',
        marginRight: '10px',

    },
    red: {
        color: 'green',
        fontSize: '15px',
    },
    paperNumber: {
    },
    coinLogo: {
        width: '30px',
        marginRight: '10px'
    },
    price: {
        marginRight: '5px',
        color: '#c9c9c9'
    }


}))
function Sidebar({ isLoading, coins, coinNames }) {
    const classes = useStyles();

    const [coinName, setCoinName] = useState("bitcoin");
    const [transactionsData, setTransactionsData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`https://api.blockchair.com/${coinName}/transactions?q=time(2021-02)&limit=100`)
                const data = await res.data;
                setTransactionsData(data.data);
                let rows = [];
                data.data.forEach((item, index) => {
                    rows.push({
                        'id': index,
                        'block_id': item.block_id,
                        'hash': item.hash,
                        'input_count': item.input_count,
                        'input_total_usd': item.input_total_usd,
                    });
                })
                setRows(rows);

                const columns = [
                    { field: 'id', headerName: 'TOP', width: 100 },
                    { field: 'block_id', headerName: 'ID', width: 200 },

                    { field: 'hash', headerName: 'Hash', width: 200 },
                    { field: 'input_count', headerName: 'Input Count', width: 130 },
                    {
                        field: 'input_total_usd',
                        headerName: 'Total USD',
                        width: 200,
                    },
                ];
                setCols(columns);
                setIsFetching(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetch();
    }, [])
    return (
        <div className={classes.root}>
            <div className={classes.paperContainer}>
                {
                    !isLoading && (
                        coinNames.map((name, index) => {
                            const logoSrc = `https://loutre.blockchair.io/images/new/logos/${name}.svg`
                            const link = `/coins/${name}`;
                            if (name !== "cross-chain") {
                                return (
                                    <Paper className={classes.paper} variant="outlined" elevation={0} key={index} >
                                        <Typography className={classes.title} variant="h1">
                                            <Link to={link}>
                                                <img className={classes.coinLogo} src={logoSrc} alt="" />
                                                {name}
                                            </Link>
                                        </Typography>
                                        <div className={classes.paperNumber}>
                                            <div >
                                                <span className={classes.price}>
                                                    Block :
                                               </span>
                                                <span style={{ fontSize: '15px', color: 'white' }}>
                                                    <CountUp
                                                        duration={1}
                                                        start={0}
                                                        end={coins[name]["data"]["blocks"]}
                                                    />
                                                </span>
                                            </div>

                                            <div>
                                                <span className={classes.price}>
                                                    Transaction
                                               </span>
                                                <span style={{ fontSize: '15px', color: 'white' }}>
                                                    <CountUp
                                                        separator="."
                                                        duration={1}
                                                        decimal="."
                                                        suffix=" ( BTC )"
                                                        start={0}
                                                        end={coins[name]["data"]["transactions"]}
                                                    />
                                                </span>

                                            </div>
                                            <div >
                                                <span className={classes.price}>
                                                    Price
                                               </span>
                                                <span
                                                    style={{ fontSize: '18px', color: 'green' }}
                                                >
                                                    <CountUp
                                                        separator="."
                                                        duration={1}
                                                        decimal="."
                                                        suffix="(USD/BTC)"
                                                        start={0}
                                                        end={coins[name]["data"]["market_price_usd"]}
                                                    />
                                                </span>

                                            </div>
                                        </div>
                                    </Paper>
                                )
                            }
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar
