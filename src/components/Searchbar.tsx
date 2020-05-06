import React from 'react';

interface searchbarProps{
	onSearchChange(event:React.SyntheticEvent<HTMLInputElement>):void;
}

const Searchbar=({onSearchChange}:searchbarProps)=>{
	return(
		<input className='tc pa2 ma3 ba-1 b--gold bg-light-yellow' type='search' placeholder='Search Destination' onChange={onSearchChange} />
	);
}
export default Searchbar;