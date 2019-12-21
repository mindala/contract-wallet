import React, { Component } from 'react'
import './App.css'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Genwallet from './components/Genwallet'
import Recoverwallet from './components/Recoverwallet'


class App extends Component {
  constructor() {
    super()

  }

  render() {
   /* const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="card">
          <div clasName="card-header">
           <h3> {todo.title} </h3>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
          </div>
        </div>
      )
    })*/
    return (
      <div className="App">
     {/*<Navigation title="Mi primera navegacion"/>}*/}
      <Navbar bg="light" expand="lg">
          <Nav>
            <NavDropdown title="Wallet Manager" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Generate Wallet</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Recover Wallet</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Load Wallet</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Test Wallet</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar>
      <Genwallet/>
      
      
        

      
      </div>
    );
  }
}

export default App;
