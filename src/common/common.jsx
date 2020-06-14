export const getEmployeeFeedback = (empId, FeedbackArray) => {
  if(FeedbackArray && FeedbackArray.length) {
    return FeedbackArray.map((feedbackObj) => {
      if(feedbackObj.emp_id === empId) return feedbackObj.feedback;
    }).filter((obj)=> typeof obj === 'string');
  }
};
