import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { sampleText, sampleTitle, titleSizes, bodySizes } from '../data/data';
import theme from '../theme/theme';
import clsx from 'clsx';

const useStyles = makeStyles({
    samples: {
        display: 'flex',
        paddingBottom: '44px',
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
});

const largeSample = [
    { titleSize: titleSizes[0], bodySize: bodySizes[0] },
    { titleSize: titleSizes[1], bodySize: bodySizes[1] },
];
const smallSample = [
    { titleSize: titleSizes[2], bodySize: bodySizes[2] },
    { titleSize: titleSizes[3], bodySize: bodySizes[3] },
];

console.log(largeSample);
export default function TextCombo() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.samples}>
                {largeSample.map(el => (
                    <SampleText {...el} />
                ))}
            </div>
            <div className={classes.samples}>
                {smallSample.map(el => (
                    <SampleText {...el} />
                ))}
            </div>
        </div>
    );
}

function SampleText({ bodySize, titleSize }) {
    const classes = useStyles();
    return (
        <div className={classes.sampleContainer}>
            <label style={{ ...titleSize }}>{sampleTitle}</label>
            <label style={{ ...bodySize, fontWeight: '400' }}>{sampleText}</label>
            <label className={classes.date}>August 14, 2018</label>
        </div>
    );
}
