import React, { Component } from 'react';
import {graphql , compose} from 'react-apollo' //binds react to apollo
import {addWibesAppUserMutation} from '../queries/queries';

class RegistrationPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      human_name:'',
      portal_name:'',
      pass_code:''
    };
  }

  submitForm(e){
  e.preventDefault();
  console.log("entered submit form");
  this.props.addWibesAppUserMutation({
    variables:{
      human_name:this.state.human_name,
      pass_code:this.state.pass_code,
      backup_code:"backs",
      personal_key:"ps keys",
      reverb_coins:"29",
      reputation:"0.6",
      portal_name:this.state.portal_name,
      wibe_wallet:"id and some",
      block:"yet to come"
    }
  }) //name is used here of mutation
}


  render() {
    return (
      <form id="sign-up" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Human name:</label>
          <input type="text" onChange={(e) => this.setState({human_name:e.target.value})}/>
        </div>
        <div className="field">
          <label>Portal Name:</label>
          <input type="text" onChange={(e) => this.setState({portal_name:e.target.value})}/>
        </div>
        <div className="field">
          <label>Pass Code:</label>
          <input type="text" onChange={(e) => this.setState({pass_code:e.target.value})}/>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default compose(
graphql(addWibesAppUserMutation,{name:"addWibesAppUserMutation"})
)(RegistrationPage);
