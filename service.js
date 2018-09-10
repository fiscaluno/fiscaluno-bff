const axios = require('axios');

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getCoursesByInstitutionID() {
  try {
    const response = await axios.get('localhost:5001/courses?ID=1');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

module.exports.getCoursesByInstitutionID = getCoursesByInstitutionID;