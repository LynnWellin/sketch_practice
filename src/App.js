import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ColorScheme from './components/ColorScheme';
import TextCombinations from './components/TextCombinations';
import GridSystemCont from './components/GridSystemCont';
import Typography from './components/Typography';
import { theme } from './theme/theme';
import './index.css';
// require('/fonts');
// Import fonts to ensure they are bundled during build
// import './fonts/Inter/Inter-Bold.woff';
// import './fonts/Inter/Inter-Bold.woff2';
// import './fonts/Inter/Inter-Regular.woff';
// import './fonts/Inter/Inter-Regular.woff2';
// import './fonts/Inter/Inter-SemiBold.woff';
// import './fonts/Inter/Inter-SemiBold.woff2';

const useStyles = makeStyles({
    root: {
        // '@font-face': {
        //     'font-family': 'Inter - Semi Bold',
        //     'font-style': 'normal',
        //     'font-weight': 600,
        //     'font-display': 'swap',
        //     src:
        //         'local(Inter), url(./fonts/Inter/Inter-SemiBold.woff2) format("woff2"),' +
        //         'url(./fonts/Inter/Inter-SemiBold.woff?v=3.11) format("woff")',
        // },

        // '@font-face': {
        //     'font-family': 'Inter - Bold',
        //     'font-style': 'normal',
        //     'font-weight': 700,
        //     'font-display': 'swap',
        //     src:
        //         'local(Inter), url("./fonts/Inter/Inter-Bold.woff2?v=3.11") format("woff2"),' +
        //         'url("./fonts/Inter/Inter-Bold.woff?v=3.11") format("woff")',
        // },

        // '@font-face': {
        //     'font-family': 'Inter - Regular',
        //     'font-style': 'normal',
        //     'font-weight': '400',
        //     'font-display': 'swap',
        //     src:
        //         'url(./fonts/Inter/Inter-Regular.woff2?v=3.11) format("woff2"),' +
        //         'url(./fonts/Inter/Inter-Regular.woff?v=3.11) format("woff")',
        // },
        maxWidth: '1044px',
        margin: 0,
        padding: 0,
        color: theme.palette.gray,
        '& h2': {
            fontFamily: '"Inter - Semi Bold"',
            padding: 0,
            margin: 0,
            fontSize: '17px',
            paddingTop: '12px',
            paddingBottom: '16px',
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
        height: '100px',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <ColorScheme />
                <Typography />
                <TextCombinations />
                <GridSystemCont />
            </div>
            <footer className={classes.footer}>
                <label>
                    Design based on a{' '}
                    <a href="https://sketch.cloud/s/y5EAE/a/bYMAK9">Slice Sample Sketch file</a>
                </label>
                <label>
                    Implemented in React by <a href="https://personalwebsite-189620.web.app/">YL</a>
                </label>
            </footer>
        </React.Fragment>
    );
}

export default App;
