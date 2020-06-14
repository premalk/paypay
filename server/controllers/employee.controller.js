const Employee = require('../models/employees.model.js');
exports.create = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      msg:'Content cant be empty'
    });
  }
  const employee = new Employee({
    emp_id: req.body.emp_id,
    emp_name: req.body.emp_name,
    feedBackActive: req.body.feedBackActive,
  });
  Employee.addEmployee(employee, (err, data)=>{
    if(err) {
      res.status(500).send({
        msg:
        err.message || 'Some Error occurred while creating the employee.'
      }); 
    } else res.send(data);
  })
};
exports.findAll = (req, res) => {
  Employee.allEmployees((err, data)=>{
    if(err) {
      res.status(500).send({
        msg:
        err.message || 'Some Error occurred while finding the employee.'
      }); 
    } else res.send(data);
  });
};
exports.findOne = (req, res) => {
  Employee.findById(req.params.empId, (err, data)=>{
    if(err) {
      console.log('err',err);
        res.status(500).send({
          msg:`Error retrieving employee with Id ${req.params.empId}`
        });
    } else res.send(data);
  });
};
exports.update = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      msg:'Content Cant be Empty'
    });
  }
  Employee.updateEmployee(
    req.params.empId,
    new Employee(req.body),
    (err, data) => {
      if(err) {
        if(err.kind === 'not_found'){
          res.status(404).send({
            msg:`Not Found with Id ${req.params.empId}`
          });
        } else {
          res.status(500).send({
            msg:`Error Updating Employee Id ${req.params.empId}`
          });
        }
      } else res.send(data);
    }
  )
};
exports.delete = (req, res) => {
  Employee.removeEmployee(req.params.empId, (err, data)=>{
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          msg:`Not Found Employee with Id ${req.params.empId}`
        });
      } else {
        res.status(500).send({
          msg:`Could not delete employee with id ${req.params.empId}`
        });
      }
    } else res.send({msg:'Employee Deleted Successfully.'})
  });
};
exports.deleteAll = (req, res) => {
  Employee.removeAllEmployees((err, data)=>{
    if(err){
      res.status(500).send({
        msg: err.message || "Some error occurred while removing all employees."
      });
    } else res.send({ msg: `All Employees were deleted successfully!` });
  })
};
exports.addFeedback = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      msg:'Content cant be empty'
    });
  }
  const employee = new Employee({
    emp_id: req.body.emp_id,
    feedback: req.body.feedback,
    feedback_given_by: req.body.feedback_given_by,
  });
  Employee.addEmployeeFeedBack(employee, (err, data)=>{
    if(err) {
      res.status(500).send({
        msg:
        err.message || 'Some Error occurred while adding the feedback.'
      }); 
    } else res.send(data);
  })
};
exports.updateFeedback = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      msg:'Content cant be empty'
    });
  }
  const employee = new Employee({
    emp_id: req.body.emp_id,
    feedback: req.body.feedback,
    feedBackGivenBy: req.body.feedback_given_by,
  });
  Employee.updateEmployeeFeedBack(employee, (err, data)=>{
    if(err) {
      res.status(500).send({
        msg:
        err.message || 'Some Error occurred while aading the feedback.'
      }); 
    } else res.send(data);
  })
};
exports.findFeedback = (req, res) => {
  Employee.getEmployeeFeedBack(req.params.empId, (err, data)=>{
    if(err) {
      console.log('err',err);
        res.status(500).send({
          msg:`Error retrieving feedback with Id ${req.params.empId}`
        });
    } else res.send(data);
  });
};
exports.findAllFeedback = (req, res) => {
  Employee.allFeedbacks((err, data)=>{
    if(err) {
      res.status(500).send({
        msg:
        err.message || 'Some Error occurred while finding the employee.'
      }); 
    } else res.send(data);
  });
};