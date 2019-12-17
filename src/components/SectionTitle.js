import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    headerTitle: {
        display: 'block',
        paddingTop: '20px',
        fontSize: '34px',
        fontFamily: 'Inter - Bold',
        margin: '6px 0',
    },
    dark: {
        boxShadow: 'inset 0 -1px 0 rgba(26, 26, 26, 0.1)',
    },
    light: {
        boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
    },
});

export default function SectionTitle({ title, type }) {
    const classes = useStyles();
    return (
        <div className={clsx((type === 'Light' && classes.light) || classes.dark)}>
            <h1 className={classes.headerTitle}>{title}</h1>
        </div>
    );
}
