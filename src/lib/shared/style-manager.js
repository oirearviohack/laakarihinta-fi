import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import { cyan, pink } from 'material-ui/styles/colors';


const createStyleManager = () => (
    MuiThemeProvider.createDefaultContext({
        theme: createMuiTheme({
            palette: createPalette({
                primary: cyan,
                accent: pink,
                type: 'light',
                alternateTextColor: 'white'
            })
        })
    })
);

export default createStyleManager;
