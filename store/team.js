export const state = () => ({
  team: [
    {
      name: 'Charlie Lambropoulos',
      position: 'Chief Executive Officer',
      position_2: 'Co-founder',
      inLink: 'https://www.linkedin.com/in/charlielambropoulos/',
      photo: 'charlie_lambropoulos.jpg',
    },
    {
      name: 'Andy Daidone',
      position: 'Co-founder',
      inLink: 'https://www.linkedin.com/in/andy-daidone/',
      photo: 'andy_daidone.jpg',
    },
    {
      name: 'Dmytro Riazanov',
      position: 'Co-founder',
      inLink: 'https://www.linkedin.com/in/dmytro-riazanov-2180a427/',
      photo: 'dmytro_riazanov.jpg',
    },
    {
      name: 'Mikhaylo Shatskiy',
      position: 'Chief Research & Innovation Officer',
      inLink: 'https://www.linkedin.com/in/michael-shatskiy-387990bb/',
      photo: 'mikhaylo_shatskiy.jpg',
    },
    {
      name: 'Yuliia Hlushkina',
      position: 'Head of Design Department',
      inLink: 'https://www.linkedin.com/in/yuliia-hlushkina-682627155/',
      photo: 'yuliia_hlushkina.jpg',
    },
    {
      name: 'Mikhaylo Khizov',
      position: 'COO',
      inLink: 'https://www.linkedin.com/in/mikhail-khizov-5a9b74140/',
      photo: 'mikhaylo_khizov.jpg',
    },
    {
      name: 'Dmitriy Yefremov',
      position: 'CTO / Head of Mobile/Angular Development Department',
      inLink: 'https://www.linkedin.com/in/dmytro-yefremov-208023141/',
      photo: 'dmitriy_yefremov.jpg',
    },
    {
      name: 'Dmitriy Khmaruk',
      position: 'Head of Backend Department',
      inLink: 'https://www.linkedin.com/in/дмитрий-хмарук-a8bb83138/',
      photo: 'dmitriy_khmaruk.jpg',
    },
    {
      name: 'Dmitry Khristich',
      position: 'Head of Frontend Department',
      inLink: 'https://www.linkedin.com/in/dmitry-khristich-a78b8b121/',
      photo: 'dmitriy_khrystych.jpg',
    },
    {
      name: 'Vlad Aleksandrov',
      position: 'Head of Project Management Department',
      inLink: 'https://www.linkedin.com/in/vladyslav--aleksandrov/',
      photo: 'vlad_aleksandrov.jpg',
    },
    {
      name: 'Maria Moskalenko',
      position: 'Head of QA Department',
      inLink: 'https://www.linkedin.com/in/maria-moskalenko-6911a7150/',
      photo: 'maria_moskalenko.jpg',
    },
    {
      name: 'Anna Mateichenko',
      position: 'Head of People Management Department',
      inLink: 'https://www.linkedin.com/in/anna-m-09240617a/',
      photo: 'anna_mateichenko.jpg',
    },
  ],
})

export const getters = {
  getAllTeam: (state) => {
    return state.team
  },
}
