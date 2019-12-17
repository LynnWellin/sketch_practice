import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    details: {
        marginRight: '100px',
        '& label': {
            fontSize: '13px',
            display: 'block',
            lineHeight: '25px',
            fontFamily: '"Inter - Semi Bold"',
        },
    },
});

export default function TitleSample({ fontFamily, type, fontSize, letterSpacing, lineHeight }) {
    const classes = useStyles();
    return (
        <div className={classes.details}>
            <label style={{ fontFamily, fontSize, letterSpacing, lineHeight }}>{type}</label>
            <label>{`font-size: ${fontSize};`}</label>
            <label>{`letter-spacing: ${letterSpacing};`}</label>
            <label>{`line-height: ${lineHeight};`}</label>
        </div>
    );
}
