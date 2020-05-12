import React from 'react'
import { AppBar, Toolbar, Typography, Switch, FormControlLabel } from "@material-ui/core";

function NavBar({darkMode, Toggeltheme}) {

    return (
        <AppBar position="static" color={"primary"}>
            <Toolbar>
                <Typography variant="h6" style={{flexGrow:1}} color="inherit">Covid-19 Stats</Typography>
                <FormControlLabel
                control={
                <Switch checked={darkMode} onChange={()=>Toggeltheme()} edge="end" color="secondary" />
                }
                label="Dark mode"
                />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
