import React from 'react';
import Countdown from './Countdown';
import Stopwatch from './Stopwatch';

class App extends React.Component{
    constructor(props){
    super();
    this.state = {
        stopwatch : false,
        countdown : false,

    }
    this.close = key => {
      this.setState({
        [key]: false
      });
    };
  }  
  
  render(){
  return (
    <div className="App">
    <h1 className='text-center text-7xl p-12 text-orange-500'>🚀 Timers 🚀</h1>
    <div className='flex justify-center Timer'>
        {this.state.stopwatch ? <Stopwatch close={this.close} /> : (

            <button onClick={() => this.setState({ stopwatch: true })} className='p-4 px-6 text-4xl font-bold bg-blue-400 rounded-md border-2 border-blue-500 mx-5' >Stopwatch</button>
)} 

        {this.state.countdown ? <Countdown close={this.close} /> : (
           
           <button onClick={() => this.setState({ countdown: true })} className='p-4 px-6 text-4xl font-bold bg-blue-400 rounded-md border-2 border-blue-500 mx-5' >Countdown</button>

)} 
</div>

</div>

  );
}
}

export default App;







