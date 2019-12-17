import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colorsPrimary } from '../data/data';
import { theme } from '../theme/theme';
import clsx from 'clsx';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        padding: '23px 0 82px 0',
    },
    sampleContainer: {
        // paddingRight: '32px',
        '& label': {
            color: '#1a1a1a',
        },
    },
    date: {
        fontWeight: 400,
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        marginRight: '32px',
    },
    grid: {
        background: theme.palette.lightBlue,
    },
    // sizeLabelCont: {
    //     // flexGrow: 1,
    // },
    connection: {
        width: '1px',
        background: theme.palette.lightBlue,
        position: 'absolute',
        top: 0,
        bottom: 20,
        right: '50%',
        left: '50%',
        zIndex: 0,
    },
    sizeLabel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // display: 'block',
        fontSize: '13px',
        color: '#ffffff',
        // textAlign: 'center',
        height: '20px',
        width: '26px',
        marginTop: '10px',
        background: theme.palette.lightBlue,
        borderRadius: '6px',
        zIndex: 1,
    },
});

const gridSizes = [80, 60, 44, 32, 24, 16, 12, 8, 4, 2];

export default function GridSystem() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {gridSizes.map(el => (
                <GridItem size={el} />
            ))}
        </div>
    );
}

function GridItem({ size }) {
    const classes = useStyles();
    return (
        <div className={classes.gridContainer}>
            <div className={classes.grid} style={{ width: size, height: size }}></div>
            <div className={classes.sizeLabelCont}>
                <div className={classes.connection} />
                <div className={classes.sizeLabel}>{size}</div>
                {/* <label style={{ paddingTop: 0 }}>{size}</label> */}
            </div>
        </div>
    );
}
