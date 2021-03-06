    /* App.js */
    
	import React, {Component} from 'react'
	import Demand from './components/demand'
	import './App.css'



  
    class App extends Component {
    	render() {
    		
    		return (
				<div className="App">
					<input type='button' style={{float:'left',paddingLeft : '80px'}} id='button' class="button" value='Demand of Energy'/>
					<input type='button' style={{float:'left',paddingLeft : '80px'}} id='button' class="button" value='Supply of Energy'/>
				</div>
    		
    		);
    	}
		
    }
    export default App;