var React = require('react');
window.React = React; // This actually defines the React.
var groceryList=React.createClass({
    render:function(){
        return (
                <div> <h1>Grocery Listify</h1></div>
            )
    }
    
});
module.exports = groceryList;