import React,{Component} from 'react';

interface errorBoundaryProps{
	children?: JSX.Element;
}

interface errorBoundaryState{
	ErrorState:boolean;
}

class ErrorBoundary extends Component<errorBoundaryProps,errorBoundaryState>{
	constructor(props:errorBoundaryProps){
		super(props);
		this.state={
			ErrorState:false
		}
	}
	componetDidCatch(){
		this.setState({ErrorState:true})
	}
	render(){
		if(this.state.ErrorState){
			return <h1 className='f-3 tc'>Oops Could not Load Contents.Try Again Later</h1>
		}
		return this.props.children;
	}
}
export default ErrorBoundary;