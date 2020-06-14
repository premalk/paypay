import React, {useState} from 'react';
import Alert from '../common/Alert.jsx';
import {postCall} from '../API/apiCall';
const AddEmployee = () => {
  const [alertMsg, setAlertMsg] = useState(false);
  const handleOnClick = () => {
    const emp_id = document.getElementById('empId').value;
    const emp_name = document.getElementById('empName').value;
    const feedBackActive = 0;
    const params = {emp_id, emp_name, feedBackActive};
    postCall('addEmployee', params).then((result)=>{
      if(result.status === 200){
        setAlertMsg(true);
      }
    })
  }
  return (
    <>
    {alertMsg ? <Alert /> : null }
        <div className="uk-card uk-card-default uk-card-hover uk-grid-match uk-grid-small uk-padding">
  <h3 className="uk-card-title uk-text-center">Add New Employee</h3>
  <div>
    <div>
      <input type="text" id="empId" placeholder="Enter Employee Id (Id should be Predefined with WL e.g. WL22)" style={{marginBottom:'5px'}} className="uk-input" />
      <input type="text" id="empName" placeholder="Enter Employee name" className="uk-input" />
    </div>
    <div className="uk-margin-top uk-text-center">
      <button className="uk-button uk-button-primary" onClick={(e)=>{handleOnClick()}}>Submit</button>
    </div>
  </div>
</div>
</>)
};
export default AddEmployee;
