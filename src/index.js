import React from 'react';
import ReactDOM from 'react-dom';


const App = () =>{
    return (
        <div className="newElement">
            <h1>Hello React!!</h1>
            <div>hey</div>
        </div>
    )
    
}


ReactDOM.render(<App/>, document.querySelector('#root'));