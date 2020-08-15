const testcontroller = {};

testcontroller.getTest = (req, res, next) => {
  console.log('Reached GET controller')
  next();
}

testcontroller.putTest = (req, res, next) => {
  console.log('Reached PUT controller')
  next();
}

testcontroller.postTest = (req, res, next) => {
  console.log('Reached POST controller')
  next();
}

testcontroller.deleteTest = (req, res, next) => {
  console.log('Reached DELETE controller')
  next();
}

module.exports = testcontroller;