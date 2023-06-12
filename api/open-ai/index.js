const { Configuration, OpenAIApi } = require("openai");
const utils = require("../utils");
const prompts = require("./prompts");

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);
const OPENAI_MODEL = "gpt-3.5-turbo";

function makeRequest(messages) {
  console.log(messages)
  return new Promise((resolve, reject) => {
    openai.createChatCompletion({
      model: OPENAI_MODEL,
      messages
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

  const technicalTaskToJSON = JSON.parse(utils.cleanString(technicalTask))
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
  }]);

  const technologiesToJSON = JSON.parse(utils.cleanString(technologies))
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

  const estimateToJSON = JSON.parse(utils.cleanString(estimate))
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
  }]);

  const teamCompositionToJson = JSON.parse(utils.cleanString(teamComposition))
  console.log(teamComposition)

  resultCallbackFn({ data: teamCompositionToJson, type: "teamComposition", finished: true });
  stepCallbackFn("Done");

  process.stdout.write(JSON.stringify({
    termsOfReference: JSON.parse(utils.cleanString(technicalTask)),
    technologies: JSON.parse(utils.cleanString(technologies)),
    estimate: JSON.parse(utils.cleanString(estimate)),
    teamComposition: JSON.parse(utils.cleanString(teamComposition))
  }));
}

module.exports = {
  askAi: start
};