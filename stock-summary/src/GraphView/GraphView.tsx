import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		graph_container: {
			marginTop: theme.spacing(5),
			marginBottom: theme.spacing(5),
		},
	})
);

const GraphView = ({ ticker }: any) => {
	const classes = useStyles();

	const [chartData, setChartData]: [Array<number>, any] = useState([0, 0, 0]);
	const [chartLabels, setChartLabels]: [Array<string>, any] = useState([]);
	const [config, setConfig] = useState({
		labels: [
			'None',
			'None',
			'None',
			'None',
			'None',
			'None',
			'None',
			'None',
			'None',
			'None',
			'None',
			'None',
		],
		//Bring in data
		datasets: [
			{
				label: 'Price',
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				borderColor: 'rgba(94, 129, 172, 0.5)',
			},
		],
		options: {
			//Customize chart options
		},
	});

	// This runs when the component maps
	useEffect(() => {
		const getData = async () => {
			const res = await fetch(
				`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${ticker}&apikey=LQ25ZKRG5PBZGB85`
			).then((res) => res.json());

			let data: Array<number> = [];
			let labels: Array<string> = [];
			let i = 0;
			console.log(res);
			for (var month in res['Monthly Time Series']) {
				labels.push(month);
				data.push(parseFloat(res['Monthly Time Series'][month]['4. close']));
				if (i >= 11) break;
				i++;
			}

			if (ticker !== '') {
				const setCL = async () => {
					await setChartLabels(labels.reverse());
				};
				setCL();
				setChartData(data);
			}
		};
		getData();
	}, [ticker]);

	useEffect(() => {
		setConfig({
			//Bring in data
			datasets: [
				{
					label: 'Price',
					data: chartData,
					borderColor: 'rgba(94, 129, 172, 0.5)',
				},
			],
			labels: chartLabels,
			options: {
				//Customize chart options
			},
		});
	}, [chartData]);

	return (
		<Container className={classes.graph_container} maxWidth='sm'>
			<Typography>({ticker})</Typography>

			{chartData.length > 0 && <Line data={config} />}
		</Container>
	);
};

export default GraphView;
