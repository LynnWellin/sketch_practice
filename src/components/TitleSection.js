import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TitleSample from './TitleSample';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '19px',
        '& label': {
            fontSize: '13px',
            color: '#1a1a1a',
            fontWeight: 600,
            letterSpacing: '-0.1px',
        },
    },
});

export default function TitleSection({ textSizes }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {textSizes.map(el => (
                <TitleSample {...el} />
            ))}
        </div>
    );
}
