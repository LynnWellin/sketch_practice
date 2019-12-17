import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    details: {
        marginRight: '125px',
    },
});

export default function TitleSample({ type, fontSize, letterSpacing, lineHeight }) {
    const classes = useStyles();
    return (
        <div className={classes.details}>
            <label style={{ fontSize, letterSpacing, lineHeight }}>{type}</label>
            <label>{`font-size: ${fontSize}`}</label>
            <label>{`letter-spacing: ${letterSpacing}`}</label>
            <label>{`line-height: ${lineHeight}`}</label>
        </div>
    );
}
