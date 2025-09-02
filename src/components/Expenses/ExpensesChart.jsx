import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sept", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  console.log("1111",props);

  for(const ex of props.expense){
    const expenseMonth=ex.date.getMonth();
    chartDataPoints[expenseMonth].value+=ex.amount;
  }

  return <Chart dataPoints={chartDataPoints}/>;
};
export default ExpensesChart;