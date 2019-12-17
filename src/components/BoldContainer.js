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
        padding: '30px 0 16px 0',
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
                <BoldType fontWeight={700} type="Bold" />
                <BoldType fontWeight={600} type="Semiold" />
                <BoldType fontWeight={400} type="Regular" />
            </div>
        </div>
    );
}

function BoldType({ fontWeight, type }) {
    return <label style={{ fontWeight, paddingRight: '40px' }}>{`${type} (${fontWeight})`}</label>;
}
