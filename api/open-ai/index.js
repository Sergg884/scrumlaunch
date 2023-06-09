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

async function start(projectDescription, callbackFn) {
  console.log(projectDescription)
  callbackFn("Fetching terms of reference...");
  const technicalTask = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getTechnicalTask(
        projectDescription
      )
    )
  }]);

  console.log(technicalTask)

  callbackFn({ termsOfReference: technicalTask });
  callbackFn("Fetching technologies...");

  const technologies = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getListOfTechnologies(
        utils.cleanString(technicalTask)
      )
    )
  }]);

  console.log(technologies)

  callbackFn({ technologies });
  callbackFn("Fetching estimate...");

  const estimate = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getEstimate(
        utils.cleanString(technicalTask)
      )
    )
  }]);

  callbackFn({ estimate });
  callbackFn("Fetching team composition...");

  await utils.delay(20000);
  const teamCompositon = await makeRequest([{
    role: "user",
    content: utils.cleanString(
      prompts.getTeamComsition(
        utils.cleanString(technologies),
        utils.cleanString(estimate)
      )
    )
  }]);

  callbackFn({ teamCompositon });
  callbackFn("Done");

  process.stdout.write(JSON.stringify({
    termsOfReference: JSON.parse(utils.cleanString(technicalTask)),
    techologies: JSON.parse(utils.cleanString(technologies)),
    estimate: JSON.parse(utils.cleanString(estimate)),
    teamCompositon: JSON.parse(utils.cleanString(teamCompositon))
  }));
}

module.exports = {
  askAi: start
};