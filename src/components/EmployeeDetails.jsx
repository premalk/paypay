import React, {useState, useEffect} from 'react';
import { putCall } from '../API/apiCall';
import Feedback from './Feedback.jsx';

const EmployeeDetails = ({
  emp_id,
  emp_name,
  feedBackActive,
  feedbackArray,
  empObj,
  alertCallBack,
}) => {
  const [feedbackButton, setFeedbackbutton] = useState(feedBackActive);
  useEffect(() => {
    setFeedbackbutton(feedBackActive);
  }, [feedBackActive]);
  const updateFeedback = (e,empObj) => {
    if(empObj.feedBackActive === 0) empObj.feedBackActive = 1;
    else empObj.feedBackActive = 0;
    putCall(`employees/${empObj.emp_id}`, empObj).then((res)=>{
      if(res.status === 200){
        alertCallBack(true);
      }
    });
  };
  return  <>
  <div className="uk-width-1-3@xl uk-width-1-3@l uk-width-1-2@m uk-width-1-1@s">
  <div className="uk-card uk-card-default uk-card-hover uk-card-body">
      <h3 className="uk-card-title uk-text-center">{emp_id}</h3>
      <div>
        <h3>Employee Name</h3>
        <div>
          <input type="text" name="" placeholder="Enter your name" className="uk-input" value={emp_name} />
        </div>
        <div>
        <h3>Feedback Details</h3></div>
        {feedbackArray
        && feedbackArray.length
        && feedbackArray.map((feedbackObj)=> {
          return <Feedback feedback={feedbackObj} />
        })
        }
        <div className="uk-margin-top uk-text-center">
          <button className="uk-button uk-button-primary" onClick={(e)=>{updateFeedback(e,empObj)}}>{feedbackButton === 0 ? 'Allow to Feedback' : 'Remove feedback'}</button>
        </div>
      </div>
  </div>
</div> </>
}

export default EmployeeDetails;
