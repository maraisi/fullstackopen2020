import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
		console.log(props)	
		return <h1>{props.course}</h1>
}

const Part = (props) => {
	console.log(props)	
	return (
		<p>{props.part} {props.exercise}</p>
	)
}

const Content = (props) => {
	console.log(props)
	return (
		<div>
			< Part part={props.p1} exercise={props.ex1} />
			< Part part={props.p2} exercise={props.ex2} />
			< Part part={props.p3} exercise={props.ex3} />
		</div>
	)
}


const Total = (props) => {
	console.log(props)	
	return (
		<p> Number of exercises {props.total} </p>
	)	
}


const App = () => {
	const course = 'Half Stack application development'
	const parts = [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	]

	return (
		<div>

			<Header course={course}/>
			<Content 
				p1={parts[0].name} ex1={parts[0].exercises}
				p2={parts[1].name} ex2={parts[1].exercises}
				p3={parts[2].name} ex3={parts[2].exercises}
			/>
			<Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />

		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))