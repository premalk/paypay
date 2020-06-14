import React, {useState, useEffect} from 'react';
import { getCall } from '../API/apiCall';
import { getEmployeeFeedback } from '../common/common.jsx';
import EmployeeDetails from './EmployeeDetails.jsx';
import Alert from '../common/Alert.jsx';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [alertMsg, setAlertMsg] = useState(false);
  useEffect(()=>{ 
    getCall('employees').then((result) => {
      setEmployees(result.data);
    });
    getCall(`allFeedbacks`).then((result) => {
      if(result && result.data && result.data.length) {
        setFeedback(result.data);
      }   
    });
  }, []);
  const alertStatus = (AlertStatus) => {
    setAlertMsg(AlertStatus);
  };

  return (
    <>
    {alertMsg ? <Alert
      status={alertMsg}
    /> : null }
    <div className="uk-grid-match uk-grid-small uk-padding" uk-grid="true">
    {employees
    && employees.length
    ? employees.map((empObj) => {
      const { emp_id, emp_name, feedBackActive } = empObj;
      const feedbackArray = getEmployeeFeedback(emp_id, feedback);
      return <EmployeeDetails
        emp_id={emp_id}
        emp_name={emp_name}
        feedBackActive={feedBackActive}
        feedbackArray={feedbackArray}
        empObj={empObj}
        alertCallBack={alertStatus}
      />
    }) : null
    } 
</div>
</>
  );
};
export default Employee;
