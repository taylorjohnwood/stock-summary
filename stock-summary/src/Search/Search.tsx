import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
	Container,
	IconButton,
	TextField,
	Toolbar,
	Typography,
} from '@material-ui/core';

import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			alignItems: 'center',
		},
	})
);

const Search = ({ ticker, setTicker }: any) => {
	// Get the style classes
	const classes = useStyles();

	/*This search bar has its own state for its text because we want to be able
	 * to search for another ticker without changing the ticker variable until
	 * we submit.
	 */

	const [searchText, setSearchText] = useState('');
	const [contMargin, setContMargin] = useState(100);

	// We have to manually update the value of search bar with this callback
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	// Handle submission of the ticker
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTicker(searchText);
	};

	return (
		<Spring
			from={{ opacity: 0 }}
			config={{ duration: 750 }}
			to={{ opacity: 1, marginTop: 30 }}
		>
			{(props: any) => (
				<Container maxWidth='md' style={props}>
					<Typography variant='h3' align='center'>
						Search for any stock
					</Typography>
					<Typography variant='h5' align='center'>
						Just enter the ticker below
					</Typography>
					<form onSubmit={onSubmit} style={{ width: '100%', flexGrow: 1 }}>
						<Toolbar>
							<TextField
								fullWidth={true}
								variant='outlined'
								value={searchText}
								onChange={onChange}
							/>
							{ticker !== '' && (
								<IconButton onClick={() => setSearchText('')}>
									<ClearIcon display='inline-block' />
								</IconButton>
							)}
						</Toolbar>
					</form>
				</Container>
			)}
		</Spring>
	);
};

export default Search;
