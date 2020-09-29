import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// import About from './About/About';
import NavBar from './Navagation/NavBar';
import Search from './Search/Search';
import GraphView from './GraphView/GraphView';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#8FBCBB', contrastText: '#ECEFF4' },
		text: { primary: '#2E3440' },
	},
});

function App() {
	const [ticker, setTicker] = useState('');

	return (
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NavBar />
				<Search ticker={ticker} setTicker={setTicker} />
				{ticker !== '' && <GraphView ticker={ticker} />}
			</ThemeProvider>
		</React.StrictMode>
	);
}

export default App;
