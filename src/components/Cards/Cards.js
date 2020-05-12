import React from 'react'
import {Card , CardContent, Typography, Grid} from '@material-ui/core';
import './Cards.css';
import Countup from 'react-countup';
import cx from 'classnames';

function Cards(props) {  
    const data = props.data;
    
    if (!data) {
        return "loading..."
    }
    return (
        <div className='container'>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} sm={12} md={2} className={cx('card', 'infected')}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={data.confirmed.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} sm={12} md={2} className={cx('card', 'recovered')}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={data.recovered.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Recovered from COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} sm={12} md={2} className={cx('card', 'deaths')}>
                    <CardContent>   
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={data.deaths.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Deaths from COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} sm={12} md={2} className={cx('card', 'active')}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={data.active} duration={1} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
