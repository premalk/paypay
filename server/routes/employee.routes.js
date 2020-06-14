module.exports = app => {
  const employees = require('../controllers/employee.controller.js');
  app.post('/addEmployee', employees.create);
  app.get('/employees', employees.findAll);
  app.get('/employees/:empId', employees.findOne);
  app.put('/employees/:empId', employees.update);
  app.delete('/employees/:empId', employees.delete);
  app.delete('/employees', employees.deleteAll);
  app.post('/addFeedback', employees.addFeedback);
  app.put('/updateFeedback', employees.updateFeedback);
  app.get('/findFeedback/:empId', employees.findFeedback);
  app.get('/allFeedbacks', employees.findAllFeedback);
}
