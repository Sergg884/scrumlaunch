<template>
  <div class="build-team">
    <div class="success-message" v-if="showSuccessMessage">
      <div class="success-message_img">
        <nuxt-img
          format="webp"
          src="/pages/success-team-reserved.png"
          alt="rocket"
        />
      </div>
      <h1 class="title-big">
        <span class="green-title">Congratulations!</span>
        Your team request has been successfully submitted!
      </h1>
    </div>
    <section>
      <AppearFromMask class="title-mask">
        <h1 class="title-big">
          <span class="green-title">Came up</span>
          with a business idea. <br />
          <span class="green-title">Describe</span>
          in details.
          <span class="green-title">Get</span>
          a real team.
        </h1>
      </AppearFromMask>
      <p class="requirements-text">{{ requirements }}</p>
    </section>
    <section>
      <div v-if="requirements">
        <div id="requirements-container" class="requirements">
          <div id="page_1" class="requirements_page_wrapper">
            <div class="requirements_page">
              <p class="requirements_title">
                <span>The right tech talent for your project</span>
                <Logo :fill="'#1E1F21'" />
              </p>

              <div v-if="details">
                <h3>Project summary</h3>
                <div class="blocks">
                  <div
                    class="blocks-wrapper"
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

              <div v-if="estimate" class="estimate-wrapper">
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
              <div class="sl-info">
                <div>
                  <img class="icon" src="/icons/mail.svg" alt="tab-icon-1" />
                  <span>hello@scrumlaunch.com</span>
                </div>
                <span>© 2023 ScrumLaunch LLC</span>
              </div>
            </div>
          </div>

          <div id="page_2" class="requirements_page_wrapper">
            <div class="requirements_page">
              <p class="requirements_title">
                <span>The right tech talent for your project</span>
                <Logo :fill="'#1E1F21'" />
              </p>
              <div v-if="teamComposition">
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
                            <div
                              class="developer-avatar"
                              :class="{ default: !dev.avatar_url }"
                            >
                              <img
                                :src="
                                  dev.avatar_url || '/icons/default-avatar.svg'
                                "
                                :alt="'developer-img'"
                              />
                            </div>
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
          </div>
        </div>

        <div class="loading" v-if="!finished && !error">
          <span class="loading__dot"></span>
          <span class="loading__dot"></span>
          <span class="loading__dot"></span>
        </div>
        <p class="loading-text" v-if="!finished && !error">
          We form a response to your request, this may take some time
        </p>
        <div class="buttons-wrapper" v-if="finished">
          <div>
            <BaseButton class="export-btn" @click="exportToPDF(false)"
              >Save as PDF</BaseButton
            >
            <BaseButton @click="showModal()">Request Team</BaseButton>
          </div>
          <nuxt-link to="/build-team" class="refresh-btn"> Refresh </nuxt-link>
        </div>
      </div>

      <p v-else>No requirements found.</p>

      <div class="error-container" v-if="error">
        <p>Ooops! Something went wrong.</p>
        <BaseButton @click="refresh()">Try Again</BaseButton>
      </div>
    </section>

    <OurSuperpowers />
    <RequestTeamModal
      v-show="isModalVisible"
      @close="closeModal"
      :getFile="exportToPDF"
      :successMessage="successMessage"
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

        if (result.finished) {
          this.finished = true

          setTimeout(() => {
            socket.removeAllListeners()
          }, 2000)
        }

        if (result.error) {
          this.error = true
        }
      })
    }
  },
  beforeUnmount() {
    socket.removeAllListeners()
    this.$store.commit('requirements/SET_REQUIREMENTS', null)
  },
  data() {
    return {
      requirements: null,
      isModalVisible: false,
      showSuccessMessage: false,
      finished: false,
      error: false,
      details: null,
      technologies: null,
      estimate: null,
      teamComposition: null,
      slTeamComposition: null,
      pdfDownloaded: false,
      // details: {
      //   'Project Goal':
      //     'To develop a user-friendly crowdfunding platform that allows clients to create their own pages for collecting donations.',
      //   'Project Features':
      //     'User account creation, customizable donation pages, secure payment processing, social media integration, analytics and reporting tools, and responsive design.',
      //   'Target Users':
      //     'Individuals, non-profit organizations, and small businesses seeking to raise funds for their projects, causes, or events..',
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
      //     {
      //       name: 'Anastasia',
      //       avatar_url:
      //         'https://scrumlaunch-teams.s3.amazonaws.com/profile/avatars/_1673631463005_96159.jpeg',
      //       user_skills:
      //         'figma, responsive-design, design-patterns, application-design, designer',
      //       experience: 3,
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
      exportContainer?.classList.add('export')

      const page1 = container?.querySelector('#page_1')

      // Move estimate block on the second page if it does not fit on the first page
      if (page1?.offsetHeight > 1500) {
        const estimate = exportContainer?.querySelector('.estimate-wrapper')

        estimate?.classList.add('hide')

        const page2 = exportContainer?.querySelector('#page_2')
        const title = page2?.querySelector('.requirements_title')

        title?.parentNode.insertBefore(estimate, title.nextSibling)
      }

      const options = {
        filename: `ScrumLaunch-Build-Team-${formatDate('-')}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 1.6, logging: false, scrollX: 0, scrollY: 0 },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
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

        this.pdfDownloaded = true
      }
    },
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    successMessage() {
      this.showSuccessMessage = true
      this.showModal = false

      setTimeout(() => {
        this.showSuccessMessage = false

        if (this.pdfDownloaded) {
          this.$router.push('/')
        }
      }, 5000)
    },
  },
}
</script>

<style lang="scss" scoped>
.build-team {
  section {
    margin: 50px auto;

    @include tablet-and-up {
      margin: 90px auto;
      padding: 0 30px;
    }

    @include desktop-and-up {
      padding: 0 120px;
    }
  }

  .requirements-text {
    text-align: center;
    font-style: italic;
    margin: 0 auto;

    @include tablet-and-up {
      max-width: 70%;
    }

    @include desktop-and-up {
      max-width: 50%;
    }
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    p {
      width: 100%;
      padding: 20px 0;
      margin-bottom: 40px;
      border: 1px solid #ff0000;
      text-align: center;
      font-weight: 700;
      font-size: 14px;

      color: #ff0000;

      @include tablet-and-up {
        font-size: 18px;
        margin-bottom: 40px;
        padding: 30px 0;
      }

      @include desktop-and-up {
        font-size: 24px;
        margin-bottom: 80px;
      }
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
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 40px 0 20px;
      order: 2;

      @include tablet-and-up {
        flex-direction: row;
        margin: 60px 0 40px;
      }
    }

    button {
      @include tablet-and-up {
        padding: 20px;
        min-width: 200px;
      }
      @include desktop-and-up {
        min-width: 280px;
      }
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

      @include desktop-and-up {
        margin-right: 30px;
      }

      &:hover {
        color: $main-black;
        background-color: $main-green;
        transition: all 0.4s ease;
      }
    }

    .refresh-btn {
      margin-bottom: 80px;
      font-weight: 600;
      font-size: 14px;
      color: #1e1f21;
      line-height: 1;
      text-decoration: underline;

      @include tablet-and-up {
        margin-bottom: 140px;
        font-size: 16px;
      }

      @include desktop-and-up {
        font-size: 18px;
      }
    }
  }

  .success-message {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background-color: #fff;
    z-index: 102;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
      margin: 0 20px;
      font-size: 24px;

      @include tablet-and-up {
        font-size: 48px;
      }

      @include desktop-and-up {
        max-width: 75%;
        font-size: 48px;
      }
    }

    &_img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 215px;
      height: 160px;
      margin-bottom: 30px;

      @include tablet-and-up {
        width: 379px;
        height: 282px;
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>