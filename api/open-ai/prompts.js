const GET_LIST_OF_TECHNOLOGIES = (projectDescription) => {
  return (`You are a software architect. Create a list of technologies for this project: 
  "${projectDescription}". 
  Use this as an example of format:
  {
    Frontend: [
      {
        technologySelected: TEXT,
        description: TEXT,
        explanation: \${EXPLANATION FOR SELECTED TECHNOLOGY}
      }
    ],
    Backend: [
      {
        technologySelected: TEXT,
        description: TEXT,
        explanation: \${EXPLANATION FOR SELECTED TECHNOLOGY}
      }
    ],
    'Quality Assurance': [
      {
        technologySelected: TEXT,
        description: TEXT,
        explanation: \${EXPLANATION FOR SELECTED TECHNOLOGY}
      }
    ],
    Deployment: [
      {
        technologySelected: TEXT,
        description: TEXT,
        explanation: \${EXPLANATION FOR SELECTED TECHNOLOGY}
      }
    ],
    OTHER: [
      {
        technologySelected: TEXT,
        description: TEXT,
        explanation: \${EXPLANATION FOR SELECTED TECHNOLOGY}
      }
    ]
  }
  Select only one technology for each part. Response with only JSON. Ensure you are using correct format.`
  );
};

const GET_ESTIMATE = (projectDescription) => {
  return(`You are a software architect. Create an optimistic estimate for this project: 
    "${projectDescription}"
    Use this JSON format:
    {
      "Frontend": {
        "estimate": APPROXIMATE TIME(MONTH),
        "explanation": EXPLANATION OF ESTIMATE
      },
      "Backend": {
        "estimate": APPROXIMATE TIME(MONTH),
        "explanation": EXPLANATION OF ESTIMATE
      },
      "Quality Assurance": {
        "estimate": APPROXIMATE TIME(MONTH),
        "explanation": EXPLANATION OF ESTIMATE
      },
      "Deployment": {
        "estimate": APPROXIMATE TIME(MONTH),
        "explanation": EXPLANATION OF ESTIMATE
      },
      "Other Parts": {
        "estimate": APPROXIMATE TIME(MONTH),
        "explanation": EXPLANATION OF ESTIMATE
      },
      "Total Duration": {
        "estimate": APPROXIMATE TIME (assuming that we can make tasks in parallel)(MONTH)
      }
    }. Response with only JSON.`
  );
};

const GET_TEAM_COMPOSITION = (technologies, estimate) => {
  return (`
    Define a team composition, assuming that we need to create a design and then manage and test the code and team, for this technologies:
    "${technologies}"
    with these estimates:
    ${estimate}
    Return me result in this JSON format: {
      Frontend: {
        technologiesRequired: [TECHNOLOGIES REQUIRED(STRING)],
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED},
        explanation: \${EXPLANATION FOR NUMBER OF EMPLOYEES REQUIRED}
      },
      Backend: {
        technologiesRequired: [TECHNOLOGIES REQUIRED(STRING)],
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED},
        explanation: \${EXPLANATION FOR NUMBER OF EMPLOYEES REQUIRED}
      },
      'Quality Assurance': {
        technologiesRequired: [TECHNOLOGIES REQUIRED(STRING)],
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED},
        explanation: \${EXPLANATION FOR NUMBER OF EMPLOYEES REQUIRED}
      },
      Deployment: {
        technologiesRequired: [TECHNOLOGIES REQUIRED(STRING)],
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED},
        explanation: \${EXPLANATION FOR NUMBER OF EMPLOYEES REQUIRED}
      },
      Design: {
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED},
        explanation: \${EXPLANATION FOR NUMBER OF EMPLOYEES REQUIRED}
      },
      Management: {
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED},
        explanation: \${EXPLANATION FOR NUMBER OF EMPLOYEES REQUIRED}
      }
    }. Response with only JSON. Ensure you are using correct format.
  `);
};

const GET_TECHNICAL_TASK = (projectDescription) => {
  return (
    `Create a terms of reference for this project: "${projectDescription}". Send response in JSON format:
    {
      "Project Goal": STRING,
      "Platform Requirements": STRING(EXPLAIN EACH POINT),
      "Target Users": [{
        "name": STRING,
        "description": STRING,
      }, ...],
      "Project Features": [{
        "name": STRING,
        "userStory": STRING
      }, ...],
      "KPI": STRING,
      "Press Release FAQ": ARRAY OF STRINGS,
    }. Exclude budget and timeline. Response with only JSON. Ensure you are using correct format.`
  );
}

module.exports = {
  getListOfTechnologies: GET_LIST_OF_TECHNOLOGIES,
  getEstimate: GET_ESTIMATE,
  getTeamComsition: GET_TEAM_COMPOSITION,
  getTechnicalTask: GET_TECHNICAL_TASK
};