import React,{Component} from 'react';
import {Placelists} from '../components/Placelists';
import Placeset from '../components/Placeset';
import './App.css'
import Scroll from '../components/Scroll';
import Searchbar from '../components/Searchbar'
import Searchbar1 from '../components/Searchbar1'
import ErrorBoundary from './ErrorBoundary'

interface user{
	name: string,
  	id: number,
  	email: string
}

interface appProps{
}

interface appState{
	placelists: Array<user>;
	searchDestination: string;
	searchState: string;
}

class App extends Component<appProps,appState>{
	constructor(props:appProps){
		super(props)
		this.state={
			placelists:[],
			searchDestination:'',
			searchState:''
		}
	}
	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
    .then(user => {this.setState({ placelists: user})}).catch(()=>console.log("Error in FETCH URL"));
  	}
	onSearchChangeDestination=(event:React.SyntheticEvent<HTMLInputElement>):void=>{
		this.setState({searchDestination:event.currentTarget.value});
	}
	onSearchChangeState=(event:React.SyntheticEvent<HTMLInputElement>):void=>{
		this.setState({searchState:event.currentTarget.value});
	}
	render(){
		const {placelists,searchDestination,searchState}=this.state;
		console.log(placelists);
		const filteredplaces=Placelists.filter(placelist=>{
			return placelist.destination.toLowerCase().includes(searchDestination.toLowerCase())&&placelist.state.toLowerCase().includes(searchState.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f-5'>Tour Gallery</h1>
				<Searchbar1 onSearchChange={this.onSearchChangeState} />
				<Searchbar onSearchChange={this.onSearchChangeDestination} />
				<br/>
				<br/>
				<Scroll>
					{
						!placelists.length?<h1 className='f-3 tc'>Loading Please Wait!!!</h1>:
						<ErrorBoundary>
							<Placeset Placelists={filteredplaces} />
						</ErrorBoundary>
					}
				</Scroll>
			</div>
		);
	}
}
export default App;