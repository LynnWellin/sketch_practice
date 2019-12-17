import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TitleSample from './TitleSample';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: '19px',
        '& label': {
            fontSize: '13px',
            color: '#1a1a1a',
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
