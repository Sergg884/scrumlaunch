const axios = require('axios').default;

async function fetchTeam(teamCompositon) {
  console.log(teamCompositon);
  try {
    const response = await axios({
      method: 'post',
      url: 'https://scrumteams.herokuapp.com/v2/external/employees/by_technology',
      headers: { 'HTTP-API-KEY': process.env.SCRUMTEAMS_API_KEY },
      data: teamCompositon
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

module.exports = fetchTeam;