import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        '& label': {
            color: '#1a1a1a',
        },
        paddingBottom: '32px',
    },
    boldSamples: {
        display: 'flex',
    },
    title: {
        fontFamily: '"Inter - Bold"',
        padding: '24px 0 16px 0',
        fontSize: '68px',
        display: 'block',
    },
});

export default function BoldContainer() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <label className={classes.title}>Inter UI</label>
            <div className={classes.boldSamples}>
                <label style={{ fontFamily: '"Inter - Bold"', paddingRight: '40px' }}>
                    Bold (700)
                </label>
                <label style={{ fontFamily: '"Inter - Semi Bold"', paddingRight: '40px' }}>
                    Semibold (600)
                </label>
                <label style={{ fontFamily: '"Inter - Regular"', paddingRight: '40px' }}>
                    Regular (400)
                </label>
            </div>
        </div>
    );
}
