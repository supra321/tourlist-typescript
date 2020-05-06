import React from 'react';
import './Scroll.css'

type scrollProps={
	children?: JSX.Element
}

const Scroll=(props:scrollProps)=>{
	return (
		<div id='scroll'>
      		{props.children}
    	</div>
	);
}
export default Scroll;