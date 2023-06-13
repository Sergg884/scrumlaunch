const { Configuration, OpenAIApi } = require("openai");
const utils = require("../utils");
const prompts = require("./prompts");
const fetchTeam = require("./fetch-team");

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);
const OPENAI_MODEL = "gpt-4";

function makeRequest(messages, temperature = 0.5) {
  console.log(messages)
  return new Promise((resolve, reject) => {
    openai.createChatCompletion({
      model: OPENAI_MODEL,
      messages,
      temperature
    }).then((response) => {
      resolve(response.data.choices[0].message.content)
    }).catch((error) => {
      reject(error);
    });
  });
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
  const technicalTaskToJSON = JSON.parse(technicalTask)
  console.log(technicalTask)

  resultCallbackFn({ data: technicalTaskToJSON, type: "details" });
  stepCallbackFn("Fetching technologies...");

  const technologies = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getListOfTechnologies(
        utils.cleanString(technicalTask)
      )
    )
  }], 0);

  const technologiesToJSON = JSON.parse(technologies)
  console.log(technologies)

  resultCallbackFn({ data: technologiesToJSON, type: "technologies" });
  stepCallbackFn("Fetching estimate...");

  const estimate = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getEstimate(
        utils.cleanString(technicalTask)
      )
    )
  }]);

  const estimateToJSON = JSON.parse(estimate)
  console.log(estimate)

  resultCallbackFn({ data: estimateToJSON, type: "estimate" });
  stepCallbackFn("Fetching team composition...");

  await utils.delay(20000);
  const teamComposition = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getTeamComsition(
        utils.cleanString(technologies),
        utils.cleanString(estimate)
      )
    )
  }], 0);

  const teamCompositionToJson = JSON.parse(teamComposition)
  console.log(teamComposition)

  resultCallbackFn({ data: teamCompositionToJson, type: "teamComposition", finished: true });
  stepCallbackFn("Done");

  const team = await fetchTeam({teamComposition: teamCompositionToJson});

  console.log(team);
}

module.exports = {
  askAi: start
};