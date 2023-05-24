export const state = () => ({
  projects: [
    {
      url: '/campus-reel',
      type: 'Web Application',
      id: 1,
      year: '2021',
      name: 'CampusReel',
      tags: ['Design', 'Frontend', 'Backend'],
    },
    {
      url: '/comunity-founded',
      type: 'Web Application',
      id: 2,
      year: '2021',
      name: 'Community Funded',
      tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    },
    {
      url: '/full-court-ai',
      type: 'Mobile Application & Data Pipeline',
      id: 3,
      year: '2021',
      name: 'Full Court AI',
      tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    },
    {
      url: '/fgn',
      type: 'Mobile Application',
      id: 4,
      year: '2021',
      name: 'Seven: brain teasers & puzzles',
      tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    },
    {
      url: '/helmm',
      type: 'e-Commerce',
      id: 5,
      year: '2021',
      name: 'Helmm',
      tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    },
    {
      url: '/vesta',
      type: 'Web & Mobile Application',
      id: 6,
      year: '2021',
      name: 'Vesta Home',
      tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    },
    {
      url: '/harvest',
      type: 'Web & Mobile Application',
      id: 7,
      year: '2021',
      name: 'Harvest',
      tags: ['UX/UI Design', 'Development'],
    },
    {
      url: '/gipper',
      type: 'Web & Mobile Application',
      id: 8,
      year: '2016',
      name: 'Gipper',
      tags: ['UX/UI Design', 'Development'],
    },
  ],
})

export const getters = {
  getAllProjects: (state) => {
    return state.projects
  },

  getMainPageProjects: (state) => {
    return state.projects.slice(0, 4)
  },
}
