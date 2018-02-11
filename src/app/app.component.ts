import { Component } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactHelper from './uir.jsx'

// class Hello extends React.Component {
//   render() {
//     return React.createElement('div', null, `Hello from React`);
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 ngOnInit(){
   //console.log(ReactHelper.go());
   let y = new ReactHelper();
   y.go();
 }
// ReactDOM.render(<Rapp />, document.getElementById('react12'));
}
