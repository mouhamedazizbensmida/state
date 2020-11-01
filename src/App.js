import React from 'react'
import logo from './logo.svg';
import './App.css';
export default class App extends React.Component {
  state = {
    personne: {
      fullName: 'aiz ben smida',
      bio: 'bio',
      imgSrc: '',
      profession: 'profession',
      
    },
    show: false,
    counter:0,
  }
  handleClick = () => this.setState({ show: !(this.state.show) },)
componentDidMount(){
  setInterval(()=>{
    this.setState({counter:this.state.counter + 1,});
  },1000);
}
  render() {
    const { show } = this.state;
    return (
      <>
        <div>
          {show ? (
            <>
          
            <div  className="app">
              <center>
           <h1>{this.state.counter}</h1></center>
             <center></center>
             <img src={logo} alt="me" />
             <center>
              <div>
                <h3>{this.state.personne.fullName}</h3>
              </div></center>
              <center>
              <div><h3>{this.state.personne.bio}</h3>
              </div></center>
              <center>
              <div>
              <h3>{this.state.personne.profession}</h3>
              </div></center>
              </div>
            </>) : (<>
              <div>

                <div>
                  <button onClick={this.handleClick}>button</button>
                </div>
              </div>
            </>)}

        </div>
      </>
    );

  }
}