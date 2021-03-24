import React, { useEffect, useState } from 'react'
import { FormControl, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import CustomDataGrid from './CustomDataGrid';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '300px',
        padding: theme.spacing(1)
    },
    paperContainer: {


    },
    title: {
        fontSize: '25px',
        fontWeight: '300',
    },
    green: {
        fontSize: '15px',
        color: 'green',
        marginRight: '10px'
    },
    red: {
        fontSize: '15px',
        color: 'red'
    },
    paperNumber: {
    },
    coinLogo: {
        width: '30px',
        marginRight: '10px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },


}))
function MainSection({ isLoading, coins, coinNames, language }) {
    const classes = useStyles();

    const [coinName, setCoinName] = useState("bitcoin");
    const [transactionsData, setTransactionsData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);


    const [rows, setRows] = useState([])
    const [cols, setCols] = useState([])
    const [year, setYear] = useState(2021)
    const [month, setMonth] = useState('01')



    useEffect(() => {
        const fetch = async () => {
            setIsFetching(true);
            const q = `time(${year}-${month})`;
            const url = `https://api.blockchair.com/${coinName}/transactions?limit=100&q=${q}&key=G___AFk2svd8DASfpqc45P335cgMKi8f`;
            try {
                const res = await axios.get(url)
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
                        'time': item.time
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
                    {
                        field: 'time',
                        headerName: 'Time',
                        width: 200,
                    }
                ];
                setCols(columns);
                setIsFetching(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetch();
    }, [coinName, month, year])



    return (
        <div className={classes.root}>

            <div className="charts">
                <div>

                    <h3
                        style={{ textTransform: 'uppercase', fontSize: '18px', textAlign: 'center', textDecoration: 'underline', letterSpacing: '2px', margin: '1rem 0' }}
                    >
                        {coinName} Biggest Transactions in  {month} - {year}
                    </h3>

                    <FormControl className={classes.formControl}>
                        <Select
                            native
                            onChange={
                                (e) => setCoinName(e.target.value)
                            }
                        >

                            {
                                coinNames.map((name, i) => (
                                    <option key={i} value={name}>{name}</option>
                                ))
                            }

                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Select
                            native
                            onChange={
                                (e) => setMonth(e.target.value)
                            }
                        >
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                                    <option key={item} value={String(item).padStart(2, '0')}>{item}</option>
                                ))
                            }

                        </Select>

                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Select
                            defaultValue="2021"
                            native
                            onChange={
                                (e) => setYear(e.target.value)
                            }
                        >
                            {
                                [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010].map((item) => (
                                    <option
                                        key={item}
                                        value={item}>
                                        {item}
                                    </option>
                                ))


                            }

                        </Select>

                    </FormControl>

                </div>
                <div>
                    {
                        <CustomDataGrid isFetching={isFetching} rows={rows} cols={cols} />
                    }
                </div>
            </div>
        </div>
    )
}

export default MainSection
