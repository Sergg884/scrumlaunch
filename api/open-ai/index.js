const { Configuration, OpenAIApi } = require("openai");
const utils = require("../utils");
const prompts = require("./prompts");
// const fetchTeam = require("./fetch-team");

const configuration = new Configuration({
  apiKey: process.env.GTP_API_KEY,
});

const openai = new OpenAIApi(configuration);
// const OPENAI_MODEL = "gpt-4";
const OPENAI_MODEL = "gpt-3.5-turbo";

async function makeRequest(messages, temperature = 0.5, retries = 5, retryDelay = 10) {

  let currentRetry = 0;

  async function callApi() {
    try {
      const result = await openai.createChatCompletion({
        model: OPENAI_MODEL,
        messages,
        temperature
      });
      return(JSON.parse(result.data.choices[0].message.content));
    } catch(error) {
      if (currentRetry < retries) {
        await utils.delay(retryDelay * 1000);
        currentRetry++;
        return await callApi();
      } else {
        throw new Error("Something bad happened");
      }
    }
  }

  return await callApi();
}

async function start(projectDescription, stepCallbackFn, resultCallbackFn) {

  stepCallbackFn("Fetching terms of reference...");
  const technicalTask = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getTechnicalTask(
        projectDescription
      )
    )
  }]);

  console.log(technicalTask)

  resultCallbackFn({ data: technicalTask, type: "details" });
  stepCallbackFn("Fetching technologies...");

  const technologies = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getListOfTechnologies(
        utils.cleanString(JSON.stringify(technicalTask))
      )
    )
  }], 0);

  console.log(technologies)

  resultCallbackFn({ data: technologies, type: "technologies" });
  stepCallbackFn("Fetching estimate...");

  const estimate = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getEstimate(
        utils.cleanString(JSON.stringify(technicalTask))
      )
    )
  }]);

  console.log(estimate)

  resultCallbackFn({ data: estimate, type: "estimate" });
  stepCallbackFn("Fetching team composition...");

  const teamComposition = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getTeamComsition(
        utils.cleanString(JSON.stringify(technologies)),
        utils.cleanString(JSON.stringify(estimate))
      )
    )
  }], 0);

  console.log(teamComposition);

  try {
    for (const depName in teamComposition) {
      if (Object.hasOwnProperty.call(teamComposition, depName)) {
        const depRequirements = teamComposition[depName];
        if (depName !== 'Frontend') {
          depRequirements.numberOfEmployeesRequired = depRequirements.numberOfEmployeesRequired / 2;
        }
      }
    }
  } catch(error) {
    console.log(error);
  }

  resultCallbackFn({ data: teamComposition, type: "teamComposition", finished: true });
  stepCallbackFn("Done");

  // const fetchTeamResult = await fetchTeam({ teamComposition });

  // stepCallbackFn("Done");
  // resultCallbackFn({ data: fetchTeamResult?.teamComposition, type: "slTeamComposition", finished: true });
}

module.exports = {
  askAi: start
};