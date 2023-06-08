// Import the React and ReactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

function User (props) {
    return <li>{ props.name }</li>;
  }

function App() {
const users = [
    {id: 1, name: 'Red Biim'},
    {id: 2, name: 'Brbara Wu'},
    {id: 3, name: 'John Smith'},
    {id: 4, name: 'Baky Wong'},
    
];
return (
  <>
      <ul>
       {users.map((user) => <User key={user.id} name={user.name} />)}
     </ul>
           </>
        );
    

}
 // Tale the react component and show it on the screen
 ReactDOM.render(
    <App />,
    document.querySelector('#root')
 );
