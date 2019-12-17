import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        marginRight: '32px',
        paddingBottom: '27px',
    },
    color: {
        width: '137px',
        height: '44px',
        borderRadius: '6px',
    },
    description: {
        height: '137px',
        height: '45px',
    },
});

export default function PaletteItem({ type, colorCSS, colorStr }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.color} style={{ background: colorCSS }}></div>
            <div className={classes.description}>
                <label>{type}</label>
                <label>{colorStr}</label>
            </div>
        </div>
    );
}
