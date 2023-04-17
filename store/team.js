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
      position: 'CTO',
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
      inLink: 'https://www.linkedin.com/in/mykhailo-khizov-002934173/',
      photo: 'mikhaylo_khizov.jpg',
    },
    {
      name: 'Dmitriy Yefremov',
      position: 'Head of Mobile Department',
      inLink: 'https://www.linkedin.com/in/dmitriy-yefremov-208023141/',
      photo: 'dmitriy_yefremov.jpg',
    },
    {
      name: 'Dmitriy Khmaruk',
      position: 'Head of Backend Department',
      inLink:
        'https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D1%85%D0%BC%D0%B0%D1%80%D1%83%D0%BA-a8bb83138/',
      photo: 'dmitriy_khmaruk.jpg',
    },
    {
      name: 'Dmitriy Khrystych',
      position: 'Head of Frontend Department',
      inLink: '#',
      photo: 'dmitriy_khrystych.jpg',
    },
    {
      name: 'Vlad Aleksandrov',
      position: 'Head of Project Management Department',
      inLink: '#',
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
      inLink: '#',
      photo: 'anna_mateichenko.jpg',
    },
  ],
})

export const getters = {
  getAllTeam: (state) => {
    return state.team
  },
}
