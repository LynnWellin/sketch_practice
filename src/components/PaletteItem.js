import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        paddingTop: '16px',
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

export default function PaletteItem({ color, type }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.color} style={{ background: getColor(color, type) }}></div>
            <div className={classes.description}>
                <label>{type}</label>
                <label>{getColorText(color, type)}</label>
            </div>
        </div>
    );
}

function getColor(color, type) {
    switch (type) {
        case 'RGBA': {
            return `rgba(${getColorText(color, 'RGBA')})`;
        }
        case 'HEX': {
            return color;
        }
    }
}

function getColorText(color, type) {
    switch (type) {
        case 'RGBA': {
            return `${color.r},${color.g},${color.b},${color.a}`;
        }
        case 'HEX': {
            return color;
        }
    }
}
