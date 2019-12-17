import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BoldContainer from './BoldContainer';
import SectionTitle from './SectionTitle';
import TitleSection from './TitleSection';
import { colorsDark, colorsLight, colorsPrimary, bodySizes, titleSizes } from '../data/data';
import { themeClasses, theme } from '../theme/theme';

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
    body: themeClasses.body,
});

export default function Typography() {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <SectionTitle title="Typography" />
            <BoldContainer />
            <h2>Title Sizes</h2>
            <TitleSection textSizes={titleSizes} />
            <h2>Body Sizes</h2>
            <TitleSection textSizes={bodySizes} />
        </div>
    );
}
