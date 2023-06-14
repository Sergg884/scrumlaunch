<template>
  <div class="build-team">
    <section>
      <AppearFromMask class="title-mask">
        <h1 class="title-big">
          <span class="green-title">Came up</span>
          with a business idea. <br />
          <span class="green-title">Describe</span>
          in details.
          <br />
          <span class="green-title">Get</span>
          a real team.
        </h1>
      </AppearFromMask>
    </section>
    <section v-if="requirements">
      <div>
        <div id="requirements-container" class="requirements">
          <p class="requirements_title">
            <span>The best talents for your project</span>
            <Logo :fill="'#1E1F21'" />
          </p>

          <div v-if="details">
            <h3>Project details</h3>
            <div class="blocks">
              <div
                class="blocks-wrapper"
                v-for="(value, key) in details"
                :key="key"
              >
                <div class="blocks-item">
                  <img class="icon" src="/icons/blocks.svg" alt="tab-icon-1" />
                  <p class="blocks-item_title">{{ key }}</p>
                  <p class="blocks-item_text">{{ value }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="technologies">
            <h3>List of technologies</h3>
            <div class="blocks">
              <div
                class="blocks-wrapper"
                v-for="(mainTech, mainTechKey) in technologies"
                :key="mainTechKey"
              >
                <p class="blocks-item_title block">{{ mainTechKey }}</p>
                <div
                  class="blocks-item"
                  v-for="(tech, techKey) in mainTech"
                  :key="techKey"
                >
                  <!-- <p class="blocks-item_type">
                    <span class="mark">{{ tech.technologySelected }}</span>
                  </p> -->
                  <p class="blocks-item_text">
                    <span class="mark bold"
                      >{{ tech.technologySelected }}:</span
                    >
                    {{ tech.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="estimate">
            <h3>Estimate</h3>
            <div class="estimate">
              <div
                class="estimate-item"
                v-for="(value, key) in estimate"
                :key="key"
              >
                <p class="estimate-item_title">{{ key }}</p>
                <p class="estimate-item_period">
                  <span>{{ value }}</span> Months
                </p>
              </div>
            </div>
          </div>

          <div v-if="teamComposition" class="hide">
            <h3>Team composition</h3>
            <div class="team">
              <div class="blocks">
                <div
                  class="blocks-wrapper full"
                  v-for="(value, key) in teamComposition"
                  :key="key"
                >
                  <p class="blocks-item_title block">{{ key }}</p>
                  <div class="blocks-item">
                    <p class="blocks-item_type">
                      <span class="mark">Technologies Required</span>
                      <span class="employees"
                        ><span>{{ value.numberOfEmployeesRequired }} </span
                        >Employees</span
                      >
                    </p>
                    <div class="team-technologies">
                      <span
                        v-for="(item, index) in value.technologiesRequired"
                        :key="index"
                        >{{ item }}</span
                      >
                    </div>
                  </div>
                  <b-row
                    class="developers"
                    v-if="slTeamComposition && slTeamComposition[key]"
                  >
                    <b-col
                      cols="12"
                      md="6"
                      xl="4"
                      v-for="(dev, index) in slTeamComposition[key]"
                      :key="index"
                    >
                      <div class="developers-item">
                        <img :src="dev.avatar_url" :alt="'developer-img'" />
                        <div class="developers-item_data">
                          <p class="name">{{ dev.name }}</p>
                          <!-- <p class="exp">
                            Middle <span class="years"> 5 </span>years of exp.
                          </p> -->
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </div>
          <div class="sl-info">
            <div>
              <img class="icon" src="/icons/mail.svg" alt="tab-icon-1" />
              <span>hello@scrumlaunch.com</span>
            </div>
            <span>© 2023 ScrumLaunch LLC</span>
          </div>
        </div>

        <div v-if="error">
          <p>Oops, something went wrong, please try again.</p>
        </div>

        <div class="loading" v-if="!finished">
          <span class="loading__dot"></span>
          <span class="loading__dot"></span>
          <span class="loading__dot"></span>
        </div>
        <p class="loading-text" v-if="!finished">
          We form a response to your request, this may take some time
        </p>
        <div class="buttons-wrapper" v-if="finished">
          <BaseButton class="export-btn" @click="exportToPDF(false)"
            >Save as PDF</BaseButton
          >
          <BaseButton @click="showModal()">Request Team</BaseButton>
        </div>
      </div>
    </section>
    <p v-else>No requirements found.</p>
    <OurSuperpowers />
    <RequestTeamModal
      v-show="isModalVisible"
      @close="closeModal"
      :getFile="exportToPDF"
    />
  </div>
</template>

<script>
import OurSuperpowers from '~/components/pages/home/OurSuperpowers'
import RequestTeamModal from '~/components/shared/RequestTeamModal'
import { formatDate } from '~/utils'
import socket from '~/plugins/socket.io.js'
export default {
  components: {
    OurSuperpowers,
    RequestTeamModal,
  },
  head: {
    title: 'Build Team with Scrum AI',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Interested in working with us?  Get in touch · hello@scrumlaunch.com · Let’s talk about elevating and accelerating your digital experience.',
      },
    ],
  },
  async mounted() {
    const requirements = this.$store.getters['requirements/GET_REQUIREMENTS']

    this.requirements = requirements

    if (requirements) {
      socket.emit('fetch-requirements', { query: requirements })

      socket.on('update-step', (step) => {
        console.log(step)
      })

      socket.on('update-result', (result) => {
        this[result.type] = result.data

        console.log('result,', result)

        if (result.finished) {
          this.finished = true

          socket.removeAllListeners()
        }

        if (result.error) {
          this.error = true
        }
      })
    }
  },
  beforeUnmount() {
    socket.removeAllListeners()
  },
  data() {
    return {
      requirements: null,
      isModalVisible: false,
      finished: false,
      error: false,
      details: null,
      technologies: null,
      estimate: null,
      teamComposition: null,
      slTeamComposition: null,
      // details: {
      //   'Project Goal':
      //     'To develop a user-friendly crowdfunding platform that allows clients to create their own pages for collecting donations.',
      //   'Project Features':
      //     'User account creation, customizable donation pages, secure payment processing, social media integration, analytics and reporting tools, and responsive design.',
      //   'Target Users':
      //     'Individuals, non-profit organizations, and small businesses seeking to raise funds for their projects, causes, or events.',
      //   'Platform Requirements':
      //     'Web-based application compatible with all major browsers, mobile app for iOS and Android devices, and compliance with data protection and privacy regulations.',
      //   'Team Structure':
      //     'Project Manager, UX/UI Designer, Front-end Developer, Back-end Developer, QA Tester, and Marketing Specialist.',
      // },
      // technologies: {
      //   Frontend: [
      //     {
      //       technologySelected: 'React',
      //       description:
      //         'A popular JavaScript library for building user interfaces, allowing for efficient and reusable components.',
      //     },
      //   ],
      //   Backend: [
      //     {
      //       technologySelected: 'Node.js',
      //       description:
      //         "A JavaScript runtime built on Chrome's V8 engine, allowing for scalable and efficient server-side development.",
      //     },
      //   ],
      //   Database: [
      //     {
      //       technologySelected: 'MongoDB',
      //       description:
      //         'A NoSQL database that stores data in flexible, JSON-like documents, allowing for easy integration with the JavaScript-based stack.',
      //     },
      //   ],
      //   Deployment: [
      //     {
      //       technologySelected: 'AWS',
      //       description:
      //         'A comprehensive cloud services platform that offers a wide range of tools for deploying, scaling, and managing web applications.',
      //     },
      //   ],
      //   Mobile: [
      //     {
      //       technologySelected: 'React Native',
      //       description:
      //         'A framework for building native mobile apps using React, allowing for code reuse between the web and mobile platforms.',
      //     },
      //   ],
      //   Payment: [
      //     {
      //       technologySelected: 'Stripe',
      //       description:
      //         'A secure and flexible payment processing platform that supports a wide range of payment methods and currencies.',
      //     },
      //   ],
      //   SocialMediaIntegration: [
      //     {
      //       technologySelected: 'OAuth',
      //       description:
      //         'An open standard for secure access delegation, allowing users to log in and share information from their social media accounts.',
      //     },
      //   ],
      //   Analytics: [
      //     {
      //       technologySelected: 'Google Analytics',
      //       description:
      //         'A powerful web analytics service that tracks and reports website traffic, providing insights into user behavior and engagement.',
      //     },
      //   ],
      // },
      // estimate: {
      //   Frontend: 2,
      //   Backend: 2,
      //   Deployment: 1,
      //   'Other Parts': 1,
      //   'Total Duration': 3,
      // },
      // teamComposition: {
      //   Frontend: {
      //     technologiesRequired: ['React', 'React Native'],
      //     numberOfEmployeesRequired: 2,
      //   },
      //   Backend: {
      //     technologiesRequired: ['Node.js', 'MongoDB'],
      //     numberOfEmployeesRequired: 2,
      //   },
      //   Deployment: {
      //     technologiesRequired: ['AWS', 'Stripe', 'OAuth', 'Google Analytics'],
      //     numberOfEmployeesRequired: 1,
      //   },
      //   Design: {
      //     numberOfEmployeesRequired: 1,
      //   },
      //   Management: {
      //     numberOfEmployeesRequired: 1,
      //   },
      // },
      // slTeamComposition: {
      //   Backend: [
      //     {
      //       name: 'Vitalii',
      //       avatar_url: 'https://scrumlaunch-teams.s3.amazonaws.com/',
      //       user_skills: '',
      //       experience: null,
      //       stack: 'Node.js',
      //     },
      //     {
      //       name: 'Nikolenko',
      //       avatar_url: null,
      //       user_skills: '',
      //       experience: null,
      //       stack: 'Node.js',
      //     },
      //   ],
      //   Frontend: [
      //     {
      //       name: 'Nikolay',
      //       avatar_url: null,
      //       user_skills: '',
      //       experience: null,
      //       stack: 'React Native',
      //     },
      //     {
      //       name: 'Ann',
      //       avatar_url: null,
      //       user_skills: '',
      //       experience: null,
      //       stack: 'React Native',
      //     },
      //   ],
      //   Design: [
      //     {
      //       name: 'Yuliia',
      //       avatar_url: null,
      //       user_skills: '',
      //       experience: null,
      //       stack: 'Design',
      //     },
      //   ],
      //   Deployment: [
      //     {
      //       name: 'Yuriy',
      //       avatar_url: null,
      //       user_skills: '',
      //       experience: null,
      //       stack: 'DevOps',
      //     },
      //   ],
      //   Management: [
      //     {
      //       name: 'Mykhailo',
      //       avatar_url:
      //         'https://scrumlaunch-teams.s3.amazonaws.com/profile/avatars/_1669140085048_scaled_307c8f47cd160bd39826c80e79a48089267.jpeg',
      //       user_skills: '',
      //       experience: null,
      //       stack: 'PM',
      //     },
      //   ],
      // },
    }
  },
  methods: {
    async exportToPDF(returnFile) {
      const container = document.getElementById('requirements-container')
      const exportContainer = container.cloneNode(true)
      exportContainer.classList.add('export')

      const options = {
        filename: `ScrumLaunch-Build-Team-${formatDate('-')}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: 'px',
          format: 'a4',
          orientation: 'p',
          hotfixes: ['px_scaling'],
        },
      }

      if (returnFile) {
        let file = await this.$html2pdf()
          .set({ options })
          .from(exportContainer)
          .toPdf()
          .output('datauristring')

        return file
      } else {
        await this.$html2pdf().set(options).from(exportContainer).save()
      }
    },
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.build-team {
  section {
    margin: 50px auto;
    padding: 0;

    @include tablet-and-up {
      margin: 90px auto;
      padding: 0 30px;
    }

    @include desktop-and-up {
      padding: 0 120px;
    }
  }

  h1 {
    font-size: 32px;
    text-align: center;

    @include tablet-and-up {
      font-size: 56px;
    }
  }

  .loading {
    align-items: center;
    display: flex;
    justify-content: center;

    @include tablet-and-up {
      margin-top: 40px;
    }
  }

  .loading-text {
    margin-top: 20px;
    color: #a9a69e;
    font-weight: 400;
    font-size: 16px;

    @include tablet-and-up {
      font-size: 20px;
    }
  }

  .loading__dot {
    animation: dot ease-in-out 1.5s infinite;
    background-color: #d9d9d9;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 10px;
    border-radius: 16px;

    @include tablet-and-up {
      height: 32px;
      width: 32px;
    }
  }

  .loading__dot:nth-of-type(2) {
    animation-delay: 0.3s;
    background-color: #a9a69e;
  }

  .loading__dot:nth-of-type(3) {
    animation-delay: 0.5s;
    background-color: #12e2b0;
  }

  @keyframes dot {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  .buttons-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px 0 70px;

    @include tablet-and-up {
      flex-direction: row;
      margin: 100px 0;
    }

    .export-btn {
      margin-bottom: 15px;
      background-color: transparent;
      border: 1px solid #1e1f21;
      font-weight: 400;

      @include tablet-and-up {
        margin-right: 30px;
        margin-bottom: 0;
      }

      &:hover {
        color: $main-black;
        background-color: $main-green;
        transition: all 0.4s ease;
      }
    }
  }
}
</style>