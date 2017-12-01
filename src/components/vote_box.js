import React, { Component } from 'react';

class VoteBox extends Component {
  constructor({text}) {
    super(text);
    this.onClick = this.onClick.bind(this);
    this.state = {
      'text': text,
      'vote': 0
    };
  }
  render() {
    return (
      <div className='row'>
        <h1 className='col'>
          {this.state.vote}
        </h1>
        <h1 className='col-8 text-center'>
          {this.state.text}
        </h1>
        <h1 className='col'>
          <i className="fa fa-plus" aria-hidden="true"
            onClick={() => this.onClick()}/>
        </h1>
      </div>
    );
  }
  onClick() {
    this.setState({vote: this.state.vote + 1});
    console.log(this.state.text, this.state.vote);
  }
}

export default VoteBox;
