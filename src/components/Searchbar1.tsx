import React from 'react';

interface searchbar1Props{
	onSearchChange(event:React.SyntheticEvent<HTMLInputElement>):void;
}

const Searchbar1=({onSearchChange}:searchbar1Props)=>{
	return(
		<input className='tc pa2 ma3 ba-1 b--gold bg-light-yellow' type='search' placeholder='Search State' onChange={onSearchChange} />
	);
}
export default Searchbar1;