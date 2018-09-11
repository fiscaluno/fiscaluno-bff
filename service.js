const axios = require('axios');

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getCoursesByInstitutionID() {
  try {
    const response = await axios.get('http://localhost:5001/courses');
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports.getCoursesByInstitutionID = getCoursesByInstitutionID
// module.exports.getUser = getUser