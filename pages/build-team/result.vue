<template>
  <div class="build-team">
    <div v-if="showSuccessMessage" class="success-message">
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
          <span class="green-title">The AI-powered</span>
          solution for project
          <span class="green-title">estimation</span>
          and team
          <span class="green-title">staffing</span>
        </h1>
      </AppearFromMask>
      <p class="requirements-text">{{ requirements }}</p>
    </section>
    <section>
      <div v-if="requirements">
        <div id="requirements-container" class="requirements">
          <div id="page_1" class="requirements_page_wrapper">
            <div class="requirements_page">

              <div v-if="details">
                <h3>Project summary</h3>
                <div class="blocks">
                  <div
                    v-for="(value, key) in details"
                    :key="key"
                    class="blocks-wrapper"
                  >
                    <div class="blocks-item">
                      <img
                        class="icon"
                        src="/icons/blocks.svg"
                        alt="tab-icon-1"
                      />
                      <p class="blocks-item_title">{{ key }}</p>
                      <div v-if="key === 'Project Features' || key === 'Target Users'">
                        <p
                          v-for="(item, index) in value"
                          :key="index"
                          class="blocks-item_text"
                        >
                          <template v-if="item.name">
                            <div><span class="mark bold">{{ item.name }}</span></div>
                          </template>
                          <template v-if="item.userStory">
                            {{ item.userStory }}
                          </template>
                          <template v-if="item.description">
                            {{ item.description }}
                          </template>
                        </p>
                      </div>
                      <div v-else-if="key === 'Press Release FAQ'">
                        <p
                          v-for="(item, index) in value"
                          :key="index"
                          class="blocks-item_text"
                        >
                          {{ item }}
                        </p>
                      </div>
                      <p v-else class="blocks-item_text">{{ value }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="technologies">
                <h3>List of technologies</h3>
                <div class="blocks">
                  <div
                    v-for="(mainTech, mainTechKey) in technologies"
                    :key="mainTechKey"
                    class="blocks-wrapper"
                  >
                    <p class="blocks-item_title block">{{ mainTechKey }}</p>
                    <div
                      v-for="(tech, techKey) in mainTech"
                      :key="techKey"
                      class="blocks-item"
                    >
                      <p class="blocks-item_text">
                        <span class="mark bold"
                          >{{ tech.technologySelected }}:</span
                        >
                        {{ tech.description }}
                      </p>
                      <p class="blocks-item_text">
                        {{ tech.explanation }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="estimate" class="estimate-wrapper">
                <h3>Estimate</h3>
                <div class="estimate">
                  <div
                    v-for="(value, key) in estimate"
                    :key="key"
                    class="estimate-item"
                  >
                    <p v-if="key === 'Total Duration In Parallel'" class="estimate-item_title">Total Duration</p>
                    <p v-else class="estimate-item_title">{{ key }}</p>
                    <p class="estimate-item_period">
                      <span>{{ value.estimate }}</span> Months
                    </p>
                    <div class="break"></div>
                    <p class="blocks-item_text">
                      {{ value.explanation }}
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
              <div v-if="teamComposition">
                <h3>Team composition</h3>
                <div class="team">
                  <div class="blocks">
                    <div
                      v-for="(value, key) in teamComposition"
                      :key="key"
                      class="blocks-wrapper full"
                    >
                      <p class="blocks-item_title block">{{ key }}</p>
                      <div class="blocks-item">
                        <p class="blocks-item_type">
                          <span class="mark">Technologies Required</span>
                          <span class="employees">
                            <span>{{ value.numberOfEmployeesRequired }} </span>
                            Employees
                          </span
                          >
                        </p>
                        <div class="team-technologies">
                          <span
                            v-for="(item, index) in value.technologiesRequired"
                            :key="index"
                            >{{ item }}</span
                          >
                        </div>
                        <p>{{ value.explanation }}</p>
                      </div>
                      <b-row
                        v-if="slTeamComposition && slTeamComposition[key]"
                        class="developers"
                      >
                        <b-col
                          v-for="(dev, index) in slTeamComposition[key]"
                          :key="index"
                          cols="12"
                          md="6"
                          xl="4"
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

        <div v-if="!finished && !error" class="loading">
          <span class="loading__dot"></span>
          <span class="loading__dot"></span>
          <span class="loading__dot"></span>
        </div>
        <p v-if="!finished && !error" class="loading-text">
          We are forming a response to your request, this may take some time
        </p>
        <div v-if="finished" class="buttons-wrapper">
          <nuxt-link to="/build-team" class="refresh-btn"> Refresh </nuxt-link>
          <div>
            <BaseButton class="export-btn" @click="exportToPDF(false)"
              >Save as PDF</BaseButton
            >
            <BaseButton class="reserve-btn" @click="showModal()">Reserve Team</BaseButton>
          </div>
        </div>
      </div>

      <p v-else>No requirements found.</p>

      <div v-if="error" class="error-container">
        <p>Ooops! Something went wrong.</p>
        <BaseButton @click="refresh()">Try Again</BaseButton>
      </div>
    </section>

    <OurSuperpowers />
    <RequestTeamModal
      v-show="isModalVisible"
      :get-file="exportToPDF"
      :success-message="successMessage"
      @close="closeModal"
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
    }
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
  mounted() {
    const requirements = this.$store.getters['requirements/GET_REQUIREMENTS']

    if (!requirements) return this.$router.push('/build-team')

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
  methods: {
    async exportToPDF(returnFile) {
      this.$gtm.push({ event: 'SAVE AS PDF' })

      const container = document.getElementById('requirements-container')
      const exportContainer = container.cloneNode(true)
      exportContainer?.classList.add('export')

      // Move estimate block on the second page if it does not fit on the first page
      // const page1 = container?.querySelector('#page_1')
      // if (page1?.offsetHeight > 1500) {
      //   const estimate = exportContainer?.querySelector('.estimate-wrapper')

      //   estimate?.classList.add('hide')

      //   const page2 = exportContainer?.querySelector('#page_2')
      //   const title = page2?.querySelector('.requirements_title')

      //   title?.parentNode.insertBefore(estimate, title.nextSibling)
      // }

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
    margin: 20px 0 0;

    @include tablet-and-up {
      margin: 40px 0 0;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 20px 0;
      order: 2;

      @include tablet-and-up {
        flex-direction: row;
        margin: 40px 0;
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

      @media (hover: hover) {
        &:hover {
          color: $main-black;
          background-color: $main-green;
          transition: all 0.4s ease;
        }
      }

      &:active {
        color: $main-black;
        background-color: $main-green;
        transition: all 0.4s ease;
      }
    }

    .reserve-btn {
      font-weight: 400;
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