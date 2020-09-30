import React, { Fragment } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import InfoIcon from '@material-ui/icons/Info';
import { GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		help_button: {
			marginLeft: theme.spacing(0),
		},
		title: {
			flexGrow: 1,
			marginLeft: theme.spacing(1),
		},
	})
);

const NavBar = ({ setShowPopup }: any) => {
	const classes = useStyles();
	return (
		<Fragment>
			<AppBar>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Stock Summary
					</Typography>
					<IconButton className={classes.help_button}>
						<GitHub />
					</IconButton>
					<IconButton className={classes.help_button}>
						<LinkedIn />
					</IconButton>
					<IconButton
						className={classes.help_button}
						onClick={() => setShowPopup(true)}
					>
						<InfoIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</Fragment>
	);
};

export default NavBar;
