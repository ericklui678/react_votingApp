import React from 'react';
import ReactDOM from 'react-dom';
import VoteBox from './components/vote_box';

const App = (props) => {
  return (
    <div className='container mt-3'>
      <div><VoteBox text='React'/></div>
      <div><VoteBox text='Vue'/></div>
      <div><VoteBox text='Angular'/></div>
      <div><VoteBox text='Ember'/></div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
