import React from 'react';

const Feedback = ({ feedback }) => {
  return <div className="uk-flex uk-flex-middle uk-margin-top">
    <input type="text" style={{marginRight: '5px'}} name="" placeholder="feedback" className="uk-input" value = {feedback} disabled />
  </div>
}

export default Feedback;
