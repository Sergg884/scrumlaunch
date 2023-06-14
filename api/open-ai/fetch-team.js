const axios = require('axios').default;

async function fetchTeam(teamComposition) {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://scrumteams.herokuapp.com/v2/external/employees/by_technology',
      headers: { 'HTTP-API-KEY': process.env.SCRUMTEAMS_API_KEY },
      data: teamComposition
    });
    return response.data
  } catch (error) {
    console.log(error);
  }
}

module.exports = fetchTeam;