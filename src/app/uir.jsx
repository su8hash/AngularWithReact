import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  Rapp from './Rapp.jsx'

export default   class ReactHelper{

    constructor(){
        console.log("Reacg Consr");
        // this.go();
    }
     go()    {
        console.log("ngINit");
        ReactDOM.render(
        React.createElement(Rapp, null, `Hello from React`),
        document.getElementById('react12'));
        }
}