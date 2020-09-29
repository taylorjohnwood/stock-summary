import React, { Fragment } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { InfoIcon, GitHub } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		help_button: {
			marginLeft: theme.spacing(3),
		},
		title: {
			flexGrow: 1,
			marginLeft: theme.spacing(1),
		},
	})
);

const NavBar = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<AppBar>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Stock Summary
					</Typography>
					<Typography>
						Created by{' '}
						<a href='https://www.linkedin.com/in/taylor-wood-developer/'>
							Taylor Wood
						</a>
					</Typography>
					<IconButton className={classes.help_button}>
						<InfoIcon />
					</IconButton>
					<IconButton className={classes.help_button}>
						<GitHub />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</Fragment>
	);
};

export default NavBar;
