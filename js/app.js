var React = require('react');
var ReactDOM = require('react-dom');

export default class Node extends React.Component{
    render(){
        return (
            <h1> hahahah </h1>
        );
    }
}

ReactDOM.render(
    <Node/>,
    document.getElementById('root')
)