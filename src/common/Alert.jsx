import React from 'react';

const Alert = ({ status }) => {
  return <div id="modal-close-default" className={`uk-modal ${status ? 'uk-open' : ''}`} uk-modal="true" style={{display: 'block'}}>
  <div class="uk-modal-dialog uk-modal-body">
      <button class="uk-modal-close-default" type="button" uk-close="true"></button>
      <h2 class="uk-modal-title">Message</h2>
      <p>Query Updated Successfully.</p>
  </div>
</div>
}

export default Alert;
