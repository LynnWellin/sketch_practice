import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PaletteItem from './PaletteItem';

const useStyles = makeStyles({
    container: {
        paddingTop: '12px',
    },
    paletteContainer: {
        display: 'flex',
        '& label': {
            paddingTop: '12px',
            display: 'block',
            fontWeight: '700',
            fontSize: '13px',
        },
    },
    light: {
        color: '#FFFFFF',
    },
    dark: {
        color: '#000000',
    },
});

export default function ThemeColor({ colors, type }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h2>{type}</h2>
            <div
                className={clsx(
                    classes.paletteContainer,
                    (type === 'Light' && classes.light) || classes.dark
                )}
            >
                {colors.map(el => (
                    <PaletteItem {...el} />
                ))}
            </div>
        </div>
    );
}
