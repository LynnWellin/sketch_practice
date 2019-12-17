import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ThemeColor from './ThemeColor';
import SectionTitle from './SectionTitle';
import TitleSection from './TitleSection';
import { colorsDark, colorsLight, colorsPrimary, bodySizes, titleSizes } from '../data/data';
import theme from '../theme/theme';

const useStyles = makeStyles({
    header: {
        backgroundColor: theme.palette.black,
        padding: theme.margins.pageMargin,
    },
    headerTitle: {
        boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
        paddingTop: '20px',
        fontSize: '34px',
        fontFamily: 'Inter - Bold',
        margin: '6px 0',
    },
});

export default function Hero() {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <label className={classes.pageLabel}>Styleguide</label>
            <SectionTitle title="Color Scheme" type="Light" />
            <ThemeColor colors={colorsLight} type="Light" />
        </div>
    );
}
