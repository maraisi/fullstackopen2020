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
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10
	}
	const part2 = {
		name: 'Using props to pass data',
		exercises: 7
	}
	const part3 = {
		name: 'State of a component',
		exercises: 14
	}

	return (
		<div>

			<Header course={course}/>
			<Content 
				p1={part1.name} ex1={part1.exercises}
				p2={part2.name} ex2={part2.exercises}
				p3={part3.name} ex3={part3.exercises}
			/>
			<Total total={part1.exercises + part2.exercises + part3.exercises} />

		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))