'use strict';

require('../less/react-growable-textarea.less');

/**
*
* GrowableTextarea expands a textarea field as you type based on css attributes and is therefore a fast(er) way of processing
* changes to the size of the textarea
* 
* Example
*
* <GrowableTextarea name="myFormEl" value="Some initial text"/>
* <GrowableTextarea name="myFormEl" maxHeight={125} placeholder="max height:125px"/>
* <GrowableTextarea name="myFormEl" minHeight={60} maxHeight={125} placeholder="min height: 60px; max height:125px"/>
*/

var React = require('react');

var GrowableTextarea = React.createClass({
	displayName: 'GrowableTextarea',
	propTypes:{
		minHeight:React.PropTypes.number,
		maxHeight:React.PropTypes.number
	},
	getDefaultProps:function(){
		return {
			name:'formEl',
			value:'',
			maxHeight:-1,
			minHeight:75
		}
	},
	getInitialState:function(){
		return {
			height:'100%',
			value:this.props.value
		}
	},
	shouldComponentUpdate:function(nextProps,nextState){
		return this.state.value !== nextState.value;
	},
	componentDidMount:function(){
		this.handleChange({
			target:{
				value:this.props.value
			}
		});
	},
	handleChange:function(e){
		this.setState({	
			value:e.target.value
		});
	},
	render: function() {
		var styleTxt = {
			height:this.state.height
		},
		stylePre = {
			minHeight:this.props.minHeight,
			maxHeight:this.props.maxHeight > -1	? this.props.maxHeight : 'none'
		};
		
		return (
			<div className="react-msa-growable-textarea active">
				<pre style={stylePre}><span ref="shim">{this.state.value}</span><br/></pre>
				<textarea ref="textarea" name={this.props.name} onChange={this.handleChange} onScroll={this.handleChange} style={styleTxt} value={this.state.value} placeholder={this.props.placeholder}></textarea>
			</div>
		)
	}
});

module.exports = GrowableTextarea;
