//var React = require('react-addons');
var ReactDOM = require('react-dom');
//window.React = React;
console.log("Hello from JSX");
// This is possible because of Browserify
var GroceryItemList = require('./components/GroceryItemList.jsx');

ReactDOM.render(<GroceryItemList/>,app)