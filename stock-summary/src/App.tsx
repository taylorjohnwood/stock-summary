import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box, CssBaseline } from '@material-ui/core';

// import About from './About/About';
import NavBar from './Navagation/NavBar';
import Search from './Search/Search';
import GraphView from './GraphView/GraphView';
import About from './About/About';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#8FBCBB', contrastText: '#ECEFF4' },
		text: { primary: '#2E3440' },
	},
});

function App() {
	const [ticker, setTicker] = useState('');
	const [showPopup, setShowPopup] = useState(false);

	return (
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<Box style={{ opacity: showPopup ? 0.6 : 1 }}>
					<CssBaseline />
					<NavBar setShowPopup={setShowPopup} />
					<Search ticker={ticker} setTicker={setTicker} />
					{ticker !== '' && <GraphView ticker={ticker} />}
				</Box>
				{showPopup ? <About setShowPopup={setShowPopup} /> : null}
			</ThemeProvider>
		</React.StrictMode>
	);
}

export default App;
