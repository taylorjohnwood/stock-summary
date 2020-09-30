import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, IconButton, Toolbar } from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		popup: {
			position: 'fixed',
			width: '100%',
			height: '100%',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			margin: 'auto',
		},
		popupInner: {
			position: 'absolute',
			color: theme.palette.primary.contrastText,
			left: '25%',
			right: '25%',
			top: '25%',
			bottom: '25%',
			margin: 'auto',
			borderRadius: 5,
			padding: 20,
			backgroundColor: theme.palette.primary.main,
		},
	})
);

const About = ({ setShowPopup }: any) => {
	const classes = useStyles();
	return (
		<div className={classes.popup}>
			<Spring
				from={{ opacity: 0 }}
				config={{ duration: 300 }}
				to={{ opacity: 1 }}
			>
				{(props: any) => (
					<Box className={classes.popupInner} style={props}>
						<Toolbar>
							<h1 style={{ flexGrow: 1 }}>About</h1>
							<IconButton onClick={() => setShowPopup(false)}>
								<ClearIcon />
							</IconButton>
						</Toolbar>
						<p>
							I wrote this software as a way of testing out a bunch of different
							technologies in one project.
						</p>
						<p>
							The frontend was created with: React / Typescript, Material-UI,
							React Spring (for animations) and React-Chart-JS2 (for the
							charts).
						</p>
						<p>
							The backend uses a Micronaut server written in Groovy. The service
							retrieves market data from
							<a href='https://www.alphavantage.co/'> Alpha Vantage</a> and then
							calculates useful summary statistics on the stocks performance.
						</p>
					</Box>
				)}
			</Spring>
		</div>
	);
};

export default About;
