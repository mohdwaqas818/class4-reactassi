import React from 'react';

function Count(props) {
	return(
		<h1>The value is:  <span className={`assiBox ${props.counter>=0 ? 'valueGreen' : 'valueRed'}`}>{props.counter}</span></h1>
	);
}

export default Count;