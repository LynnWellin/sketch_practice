import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ThemeColor from './components/ThemeColor';
import SectionTitle from './components/SectionTitle';
import TitleSection from './components/TitleSection';
import BoldContainer from './components/BoldContainer';
import Hero from './components/Hero';
import TextCombo from './components/TextCombo';
import { colorsDark, colorsPrimary, bodySizes, titleSizes } from './data/data';
import theme from './theme/theme';
import GridSystem from './components/GridSystem';

const useStyles = makeStyles({
    root: {
        maxWidth: '1044px',
        color: theme.palette.gray,
        '& label': {
            paddingTop: '12px',
            display: 'block',
            fontWeight: '700',
        },
    },
    body: {
        padding: theme.margins.pageMargin,
        background: theme.palette.white,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: '20px',
    },
});

function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Hero />
                {/* <ColorScheme /> */}
                <div className={classes.body}>
                    <ThemeColor colors={colorsDark} type="Dark" />
                    <ThemeColor colors={colorsPrimary} type="Primary" />
                    <SectionTitle title="Typography" />
                    <BoldContainer />
                    <label>Title Sizes</label>
                    <TitleSection textSizes={titleSizes} />
                    <label>Body Sizes</label>
                    <TitleSection textSizes={bodySizes} />
                    <SectionTitle title="Text Combinations" />
                    <TextCombo />
                    <SectionTitle title="Grid System" />
                    <GridSystem />
                </div>
            </div>
            <footer className={classes.footer}>
                <label>
                    Design based on <a href="https://sketch.cloud/s/y5EAE/a/bYMAK9">Sketch</a>
                </label>
            </footer>
        </React.Fragment>
    );
}

export default App;
