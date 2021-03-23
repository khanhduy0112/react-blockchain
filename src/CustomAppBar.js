import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        background: '#2C3E50'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
function CustomAppBar({ setLanguage }) {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography align="center" variant="h4" className={classes.title}>
                    COINSTATS
          </Typography>
                {/* <Button color="inherit">Login</Button> */}
                <FormControl>
                    <select onChange={(e) => { setLanguage(e.target.value) }}>
                        <option value="VN">
                            US
            </option>
                        <option value="CN">VN</option>

                    </select>
                </FormControl>
                <img src="/public/vn-flag.png" alt="" />
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar
