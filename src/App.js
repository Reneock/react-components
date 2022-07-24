import React, { Component } from 'react'

function App() {
  return (
    <div >
      
      <WelcomeCoders name="Codetrain "/>
      <WelcomeCoders name="Virtual Class"/>
    
    </div>
  );
}

export default App;

class  WelcomeCoders  extends Component {
  render() {
    return (
			<>
				<h1>{this.props.name} is awesome, react works!!!!</h1>
			</>
		);
  }
}