import vacancies from '../seo/vacancies.json'

function make_slug(name, jobLocation, vacanciesId) {
  const slug = name + '-' + jobLocation + '-' + vacanciesId

  return `/remote-developer-jobs/${slug
    .replace(/\s+/g, '-')
    .replace(/\//g, '_')
    .toLowerCase()}`
}

const skills = [
  'React JS',
  'React Native',
  'Node JS',
  'Python',
  'DevOps',
  'PHP',
  'Ruby on Rails',
  'Machine Learning Engineer',
  'Data Scientist',
  'Angular',
  'Vue',
  '.NET',
  'Solidity Developer',
  'Java',
  'Go',
  'Flutter',
  'Kotlin',
  'Swift',
  'Product Owner',
  'Project Manager',
  'UI/UX Designer',
]

const locations = [
  'Brazil',
  'Argentina',
  'Colombia',
  'Costa Rica',
  'Ukraine',
  'Poland',
  'Turkey',
  'Georgia',
  'Estonia',
  'Lithuania',
  'Latvia',
  'Kazakhstan',
  'Kyrgyzstan',
  'Uzbekistan',
  'Armenia',
  'Azerbaijan',
  'India',
  'Pakistan',
  'Sri Lanka',
  'Nigeria',
  'Kenya',
  'United States',
  'Canada',
  'Mexico',
]

const generateVacancy = (
  name,
  jobLocation,
  description = null,
  datePosted = '12 / 06 / 2022',
  vacanciesId
) => ({
  name,
  jobLocation,
  remote: true,
  open: !!description,
  datePosted,
  hiringOrganisation: 'ScrumLaunch',
  employmentType: 'Full Time',
  baseSalary: '$10-20 / hour',
  description,
  vacanciesId,
})

const createVacancies = () => {
  const googleVacancies = vacancies.map((el) =>
    generateVacancy(
      el.title,
      el.applicantLocationRequirements?.map((e) => e.name).join('/') || '',
      el.description,
      el.datePosted,
      el.vacanciesId
    )
  )

  return [...googleVacancies]
}

export const state = () => ({
  vacancies: createVacancies(),
})

export const getters = {
  getVacancies: (state) => (skill, location) => {
    return state.vacancies
      .filter((item) => {
        if (skill && !location) {
          return item.name.includes(skill)
        }

        if (!skill && location) {
          return item.jobLocation.includes(location)
        }

        if (skill && location) {
          return (
            item.name.includes(skill) && item.jobLocation.includes(location)
          )
        }

        return item.open
      })
      .map((item) => ({
        ...item,
        slug: make_slug(item.name, item.jobLocation, item.vacanciesId),
      }))
  },

  getAllSkills: (state) => {
    const rawSkills = [...skills]

    state.vacancies.map((item) => {
      if (!rawSkills.includes(item.name)) {
        rawSkills.push(item.name)
      }

      return item
    })

    return rawSkills
  },

  getAllLocations: (state) => {
    const rawLocations = [...locations]

    state.vacancies.map((item) => {
      if (!rawLocations.includes(item.jobLocation)) {
        rawLocations.push(item.jobLocation)
      }

      return item
    })

    return locations
  },
}
