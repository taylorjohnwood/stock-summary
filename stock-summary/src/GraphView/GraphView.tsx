import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		graph_container: {
			marginTop: theme.spacing(5),
		},
	})
);

const GraphView = ({ ticker }: any) => {
	const classes = useStyles();
	const chartRef: React.Ref<any> = React.createRef();

	const [chart, setChart] = useState();
	const [chartData, setChartData] = useState([20, 15, 100]);
	const [config, setConfig] = useState({
		labels: ['Jan', 'Feb', 'March'],
		//Bring in data
		datasets: [
			{
				label: 'Price',
				data: chartData,
				borderColor: 'rgba(94, 129, 172, 0.5)',
			},
		],
		options: {
			//Customize chart options
		},
	});

	// This runs when the component maps
	useEffect(() => {}, []);

	useEffect(() => {
		let newData = [
			Math.random() * 100,
			Math.random() * 10,
			Math.random() * 100,
		];
		config.datasets[0].data = newData;
		setChartData(newData);
	}, [ticker]);

	return (
		<Container className={classes.graph_container} maxWidth='sm'>
			<Typography>S&P 500 ({ticker})</Typography>
			<Line data={config} />
		</Container>
	);
};

export default GraphView;
