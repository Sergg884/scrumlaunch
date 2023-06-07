const GET_LIST_OF_TECHNOLOGIES = (projectDescription) => {
  return (`You are a software architect. Create a list of technologies for this project: 
          "${projectDescription}". 
          Use this JSON format: {
            "Frontend": 
              {\${FRONTEND PART N}: 
                {\${TECHNOLOGY SELECTED}: \${TECHNOLOGY DESCRIPTION}
              }
            },
            "Backend": 
              {\${BACKEND PART N}: 
                {\${TECHNOLOGY SELECTED}: \${TECHNOLOGY DESCRIPTION}
              }
            },
            "Deployment": 
              {\${DEPLOYMENT PART N}: 
                {\${TECHNOLOGY SELECTED}: \${TECHNOLOGY DESCRIPTION}
              }
            },
            \${OTHER PART N}: 
              {\${OTHER PARTS PART N}: 
                {\${TECHNOLOGY SELECTED}: \${TECHNOLOGY DESCRIPTION}
              }
            }
          }.
          Select only one technology for each part. Response with only JSON.`
  );
};

const GET_ESTIMATE = (projectDescription) => {
  return (`You are a software architect. Create a optimistic estimate for this project: 
    "${projectDescription}"
    Use this JSON format:
    {
        "Frontend": \${APPROXIMATE TIME} month,
        "Backend": \${APPROXIMATE TIME} month,
        "Deployment": \${APPROXIMATE TIME} month,
        "Other Parts": \${APPROXIMATE TIME} month,
        "Total Duration": \${APPROXIMATE TIME (assuming that we can make tasks in parallel)} month
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
        technologiesRequired: \${TECHNOLOGIES REQUIRED},
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED}
      },
      Backend: {
        technologiesRequired: \${TECHNOLOGIES REQUIRED},
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED}
      },
      Deployment: {
        technologiesRequired: \${TECHNOLOGIES REQUIRED},
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED}
      },
      Design: {
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED}
      },
      Management: {
        numberOfEmployeesRequired: \${NUMBER OF EMPLOYEES REQUIRED}
      }
    }. Response with only JSON.
  `);
};

const GET_TECHNICAL_TASK = (projectDescription) => {
  return (
    `Write a terms of reference for this project: "${projectDescription}". Send response in this JSON format: 
    {
      "Project Goal": \${DESCRIPTION},
      "Project Features": \${DESCRIPTION},
      "Target Users": \${DESCRIPTION},
      "Platform Requirements": \${DESCRIPTION},
      "Team Structure": \${DESCRIPTION},
    }. Exclude budget and timeline. Response with only JSON.`
  );
}

module.exports = {
  getListOfTechnologies: GET_LIST_OF_TECHNOLOGIES,
  getEstimate: GET_ESTIMATE,
  getTeamComsition: GET_TEAM_COMPOSITION,
  getTechnicalTask: GET_TECHNICAL_TASK
};