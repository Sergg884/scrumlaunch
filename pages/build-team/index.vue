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
    <section>
      <div v-if="error">
        <p>Oops, something went wrong, please try again.</p>
      </div>
      <div v-else>
        <div id="requirements-container" class="requirements">
          <p class="requirements_title">
            <span>The best talents for your project</span>
            <Logo :fill="'#1E1F21'" />
          </p>

          <div v-if="details">
            <h3>Project details</h3>
            <div class="blocks">
              <b-row>
                <b-col
                  cols="12"
                  md="6"
                  v-for="(value, key) in details"
                  :key="key"
                >
                  <div class="blocks-item">
                    <img
                      class="icon"
                      src="/icons/blocks.svg"
                      alt="tab-icon-1"
                    />
                    <p class="blocks-item_title">{{ key }}</p>
                    <p class="blocks-item_text">{{ value }}</p>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>

          <div v-if="technologies">
            <h3>List of technologies</h3>
            <div class="blocks">
              <b-row>
                <b-col
                  cols="12"
                  md="6"
                  v-for="(mainTech, mainTechKey) in technologies"
                  :key="mainTechKey"
                >
                  <p class="blocks-item_title block">{{ mainTechKey }}</p>

                  <div
                    class="blocks-item"
                    v-for="(tech, techKey) in mainTech"
                    :key="techKey"
                  >
                    <p class="blocks-item_type">
                      <span class="mark">{{ techKey }}</span>
                    </p>
                    <p
                      class="blocks-item_text"
                      v-for="(value, key) in tech"
                      :key="key"
                    >
                      <span class="bold">{{ key }}:</span> {{ value }}
                    </p>
                  </div>
                </b-col>
              </b-row>
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

          <div v-if="teamComposition">
            <h3>Team composition</h3>
            <div class="team">
              <div class="blocks">
                <div v-for="(value, key) in teamComposition" :key="key">
                  <p class="blocks-item_title block">{{ key }}</p>
                  <div class="blocks-item">
                    <p class="blocks-item_type">
                      <span class="mark">Technologies Required</span>
                      <span class="employees"
                        ><span>{{ value.numberOfEmployeesRequired }} </span
                        >Employees</span
                      >
                    </p>
                    <b-row class="team-technologies">
                      <b-col
                        cols="12"
                        md="3"
                        v-for="(item, index) in value.technologiesRequired"
                        :key="index"
                      >
                        <span>{{ item }}</span>
                      </b-col>
                    </b-row>
                    <b-row class="developers">
                      <!-- <b-col cols="12" md="6" xl="4">
                        <div class="developers-item">
                          <img
                            :src="'/pages/blog/default-author.jpg'"
                            :alt="'developer-img'"
                          />
                          <div class="developers-item_data">
                            <p class="name">Mykhailo Harponenko</p>
                            <p class="exp">
                              Middle <span class="years"> 5 </span>years of exp.
                            </p>
                          </div>
                        </div>
                      </b-col>
                      <b-col cols="12" md="6" xl="4">
                        <div class="developers-item">
                          <img
                            :src="'/pages/blog/default-author.jpg'"
                            :alt="'developer-img'"
                          />
                          <div class="developers-item_data">
                            <p class="name">Mykhailo Harponenko</p>
                            <p class="exp">
                              Middle <span class="years"> 5 </span>years of exp.
                            </p>
                          </div>
                        </div>
                      </b-col> -->
                    </b-row>
                  </div>
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

        <div class="loading" v-if="!finished">
          <span class="loading__dot"></span>
          <span class="loading__dot"></span>
          <span class="loading__dot"></span>
        </div>
        <p class="loading-text">
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

    // if (requirements) {
    //   socket.emit('fetch-requirements', { query: requirements })

    //   socket.on('update-step', (step) => {
    //     console.log(step)
    //   })

    //   socket.on('update-result', (result) => {
    //     console.log(result)
    //     this[result.type] = result.data

    //     if (result.finished) {
    //       this.finished = true
    //     }

    //     if (result.error) {
    //       this.error = true
    //     }
    //   })

    //   console.log(socket)
    // }
  },
  beforeUnmount() {
    socket.off('update-step')
    socket.off('update-result')
  },
  data() {
    return {
      isModalVisible: false,
      finished: true,
      error: false,
      // details: null,
      // technologies: null,
      // estimate: null,
      // teamComposition: null,
      details: {
        'Project Goal':
          'To develop a new mobile application that provides users with an intuitive method to track their daily food consumption and exercise routine.',
        'Project Features':
          'The mobile app should allow users to log their meals, search nutritional information, and set daily goals. Also, it should include features such as reminders, progress tracking, and syncing with wearables.',
        'Target Users':
          'The target audience for this app are health-conscious individuals who are willing to invest in their health and fitness goals.',
        'Platform Requirements':
          'The app should be developed for both iOS and Android platforms, and should be optimized for both smartphone and tablet devices.',
        'Team Structure':
          'The project requires a team of developers, UX/UI designers, and quality assurance specialists. Additionally, there should be a project manager to oversee the development process and ensure timely delivery of the final product.',
      },
      estimate: {
        Frontend: 3,
        Backend: 4,
        Deployment: 1,
        'Other Parts': 1,
        'Total Duration': 4,
      },
      technologies: {
        Frontend: {
          'Mobile App UI': {
            'React Native':
              'A framework for building native mobile apps using React',
          },
        },
        Backend: {
          'API and Data Storage': {
            'Node.js':
              'A server-side JavaScript runtime environment used for building the API',
            MongoDB: 'A document-oriented NoSQL database used for data storage',
          },
        },
        Deployment: {
          'Cloud Hosting': {
            'Amazon Web Services (AWS)':
              'A cloud computing platform used for hosting the app servers and databases',
          },
        },
        'Other Parts': {
          'Integration with Wearables': {
            'Google Fit API':
              'An API used for syncing with wearable fitness devices such as smartwatches',
          },
          'Project Management': {
            Jira: 'A project management tool used for tracking tasks, bugs, and progress',
          },
        },
      },
      teamComposition: {
        Frontend: {
          technologiesRequired: ['React Native'],
          numberOfEmployeesRequired: 3,
        },
        Backend: {
          technologiesRequired: ['Node.js', 'MongoDB'],
          numberOfEmployeesRequired: 4,
        },
        Deployment: {
          technologiesRequired: ['Amazon Web Services (AWS)'],
          numberOfEmployeesRequired: 1,
        },
        Design: {
          numberOfEmployeesRequired: 1,
        },
        Management: {
          numberOfEmployeesRequired: 1,
        },
      },
    }
  },
  methods: {
    async exportToPDF(returnFile) {
      const container = document.getElementById('requirements-container')
      container.classList.add('export')
      container.offsetHeight

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
          .from(container)
          .toPdf()
          .output('datauristring')

        return file
      } else {
        await this.$html2pdf().set(options).from(container).save()
      }

      container.classList.remove('export')
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