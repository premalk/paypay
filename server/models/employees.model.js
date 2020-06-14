const sql = require('../config/db.js');

const Employee = function(employee) {
  this.emp_id = employee.emp_id;
  this.emp_name = employee.emp_name;
  this.feedBackActive = employee.feedBackActive;
  this.feedback = employee.feedback;
  this.feedBackGivenBy = employee.feedBackGivenBy;
};

Employee.findById = (empId, result) => {
  sql.query(`select * from emp_details where emp_id = '${empId}'`, (err, res)=>{
    if(err) {
      result(err, null);
      return;
    }
    if(res.length){
      result(null, res[0]);
      return;
    }
    result({error:1}, null);
  });
};
Employee.allEmployees = (result) => {
  sql.query(`select * from emp_details`, (err, res)=>{
    if(err) {
      console.log('err', err);
      result(err, null);
      return;
    }
    if(res.length){
      result(null, res);
      return;
    }
    result({error:1}, null);
  });
};
Employee.allFeedbacks = (result) => {
  sql.query(`select * from feedbacks`, (err, res)=>{
    if(err) {
      console.log('err', err);
      result(err, null);
      return;
    }
    if(res.length){
      result(null, res);
      return;
    }
    result({error:1}, null);
  });
};
Employee.updateEmployee = (empId, empObj, result) => {
  sql.query(`update emp_details set emp_name = ?, feedBackActive = ? where emp_id = ?`,
  [empObj.emp_name,empObj.feedBackActive, empId],
  (err, res)=>{
    if(err) {
      console.log('err', err);
      result(err, null);
      return;
    }
    if(res.affectedRows == 0){
      console.log('No Employees Found', res);
      result({error:0}, res);
      return;
    }
    console.log("updated employee: ", { id: empId, ...empObj });
    result(null, { id: empId, ...empObj });
  });
};
Employee.addEmployee = (newEmp ,result) => {
  sql.query(`insert into emp_details set emp_id='${newEmp.emp_id}', emp_name='${newEmp.emp_name}', feedBackActive='${newEmp.feedBackActive}'`, newEmp, (err, res)=>{
    if(err) {
      console.log('err', err);
      result(err, null);
      return;
    }
    sql.query(`insert into login_details set emp_id = '${newEmp.emp_name}', password = 'sample123' `, (err1, res)=>{
      if(err1) {
        console.log('err', err1);
        result(err1, null);
        return;
      } 
    });
    console.log("created customer: ", { id: res.insertId, ...newEmp });
    result(null, { id: res.insertId, ...newEmp });
  });
};
Employee.removeEmployee = (empId ,result) => {
  sql.query(`delete from emp_details where emp_id = ? `, empId, (err, res)=>{
    if(err) {
      console.log('err', err);
      result(err, null);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted employee with id: ", empId);
    result(null, res);
  });
};
Employee.removeAllEmployees = (result) => {
  sql.query(`delete from emp_details`, (err, res)=>{
    if(err) {
      console.log('err', err);
      result(err, null);
      return;
    }
    console.log(`deleted ${res.affectedRows} employees`);
    result(null, res);
  });
};
Employee.getEmployeeFeedBack = (empId, result) => {
  sql.query(`select * from feedbacks where emp_id = '${empId}'`, (err, res)=>{
    if(err) {
      console.log('err', err);
      result(err, null);
      return;
    }
    console.log(`Found ${res.affectedRows} Entries`);
    result(null, res);
  });
}
Employee.addEmployeeFeedBack = (empObj, result) => {
  console.log('empObj', empObj);
  sql.query(`insert into feedbacks set feedback='${empObj.feedback}', feedback_given_by='${empObj.feedback_given_by}', emp_id='${empObj.emp_id}'`, (err, res)=>{
    if(err) {
      console.log('err', err);
      result(err, null);
      return;
    }
    console.log(`Inserted Successfully.`);
    result(null, res);
  });
}
Employee.updateEmployeeFeedBack = (empObj, result) => {
  console.log('empObj', empObj);
  const { feedback, emp_id, feedBackGivenBy } = empObj;
  sql.query(`update feedbacks set feedback = '${feedback}' where emp_id = '${emp_id}' and feedback_given_by = '${feedBackGivenBy}' `, (err, res)=>{
    if(err) {
      console.log('err', err);
      result(err, null);
      return;
    }
    console.log(`Updated Successfully.`);
    result(null, res);
  });
}
module.exports = Employee;
