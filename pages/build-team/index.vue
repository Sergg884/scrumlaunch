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
      <div id="requirements-container" class="requirements">
        <p class="requirements_title">
          <span>The best talents for your project</span>
          <Logo :fill="'#1E1F21'" />
        </p>

        <h3>Project details</h3>

        <div class="blocks">
          <b-row>
            <b-col
              cols="12"
              md="6"
              v-for="(item, index) in projectDetails"
              :key="index"
            >
              <div class="blocks-item">
                <img class="icon" src="/icons/blocks.svg" alt="tab-icon-1" />
                <p class="blocks-item_title">{{ item.title }}</p>
                <p class="blocks-item_text">{{ item.text }}</p>
              </div>
            </b-col>
          </b-row>
        </div>

        <h3>List of technologies</h3>

        <div class="blocks">
          <b-row>
            <b-col
              cols="12"
              md="6"
              v-for="(item, index) in technologies"
              :key="index"
            >
              <div class="blocks-item">
                <p class="blocks-item_title">{{ item.title }}</p>
                <p class="blocks-item_type">
                  <span class="mark">{{ item.type }}</span>
                </p>
                <p class="blocks-item_text">{{ item.text }}</p>
              </div>
            </b-col>
          </b-row>
        </div>

        <h3>Estimate</h3>

        <div class="estimate">
          <div
            class="estimate-item"
            v-for="(item, index) in estimate"
            :key="index"
          >
            <p class="estimate-item_title">{{ item.title }}</p>
            <p :class="`estimate-item_period ${item.total ? 'total' : ''}`">
              <span>{{ item.number }}</span> {{ item.period }}
            </p>
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
      <div class="requirements">
        <h3>Team composition</h3>

        <div class="team">
          <div class="blocks">
            <p class="blocks-item_title block">FRONTEND</p>

            <div class="blocks-item">
              <p class="blocks-item_type">
                <span class="mark">Technologies Required</span>
                <span class="employees"><span>3 </span>Employees</span>
              </p>
              <b-row class="team-technologies">
                <b-col cols="12" md="3"> <span>UI/UX</span> </b-col>
                <b-col cols="12" md="3"> <span>UI/UX</span> </b-col>
              </b-row>
              <b-row class="developers">
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
                </b-col>
              </b-row>
            </div>

            <p class="blocks-item_title block">BACKEND</p>

            <div class="blocks-item">
              <p class="blocks-item_type">
                <span class="mark">Technologies Required</span>
              </p>
              <b-row class="team-technologies">
                <b-col cols="6" xl="3"> <span>UI/UX</span> </b-col>
                <b-col cols="6" xl="3"> <span>UI/UX</span> </b-col>
                <b-col cols="6" xl="3"> <span>UI/UX</span> </b-col>
                <b-col cols="6" xl="3"> <span>UI/UX</span> </b-col>
              </b-row>
              <b-row class="developers">
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
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>

      <div class="loading">
        <span class="loading__dot"></span>
        <span class="loading__dot"></span>
        <span class="loading__dot"></span>
      </div>
      <p class="loading-text">
        We form a response to your request, this may take some time
      </p>
      <div class="buttons-wrapper">
        <BaseButton class="export-btn" @click="exportToPDF(false)"
          >Save as PDF</BaseButton
        >
        <BaseButton @click="showModal()">Request Team</BaseButton>
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
import {formatDate} from '~/utils'

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
  data() {
    return {
      isModalVisible: false,
      projectDetails: [
        {
          title: 'Project Goal',
          text: ' To create a platform that showcases industries and educational-style creators, and positively impacts the education of younger generations from all backgrounds and socioeconomic classes.',
        },
        {
          title: 'Project Features',
          text: ' Platform will curate a more interested audience, highlighting experienced individuals and educational-style creators.',
        },
        {
          title: 'Target Users',
          text: 'Younger generations from all backgrounds and socioeconomic classes who are interested in learning about different industries and gaining knowledge from experienced individuals.',
        },
      ],
      technologies: [
        {
          title: 'Frontend ',
          type: 'UX/UI design',
          text: 'React: A popular, efficient, and flexible JavaScript library for building user interfaces.',
        },
        {
          title: 'Frontend ',
          type: 'UX/UI design',
          text: 'React: A popular, efficient, and flexible JavaScript library for building user interfaces.',
        },
        {
          title: 'Frontend ',
          type: 'UX/UI design',
          text: 'React: A popular, efficient, and flexible JavaScript library for building user interfaces.',
        },
      ],
      estimate: [
        {
          title: 'FRONTEND',
          number: 5,
          period: 'Months',
        },
        {
          title: 'BACKEND',
          number: 5,
          period: 'Months',
        },
        {
          title: 'DEPLOYMENT',
          number: 5,
          period: 'Months',
        },
        {
          title: 'OTHER PARTS',
          number: 5,
          period: 'Months',
        },
        {
          title: 'TOTAL DURATION',
          number: 5,
          period: 'Months',
          total: true,
        },
      ],
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
          format: [1440, container.offsetHeight],
          orientation: 'p',
          hotfixes: ['px_scaling'],
        },
      }

      if (returnFile) {
        let file = await this.$html2pdf()
          .set({options})
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