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
        <h3>Team composition</h3>
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
        <BaseButton class="export-btn" @click="exportToPDF()"
          >Save as PDF</BaseButton
        >
        <BaseButton @click="exportToPDF()">Request Team</BaseButton>
      </div>
    </section>
    <OurSuperpowers />
  </div>
</template>

<script>
import OurSuperpowers from '~/components/pages/home/OurSuperpowers'

export default {
  components: {
    OurSuperpowers,
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
    async exportToPDF() {
      const container = document.getElementById('requirements-container')
      const options = {
        margin: [10, 10],
        filename: 'file-name.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 1.6,
          // dpi: 192,
          // letterRendering: true,
          // ignoreElements: true,
        },
        jsPDF: {
          unit: 'px',
          format: 'a4',
          orientation: 'p',
          hotfixes: ['px_scaling'],
        },
      }
      // this.$html2pdf(document.getElementById('requirements-container'), {
      //   margin: 1,
      //   filename: 'file-name.pdf',
      //   image: { type: 'jpeg', quality: 0.98 },
      //   html2canvas: {
      //     scale: 1,
      //     dpi: 192,
      //     letterRendering: true,
      //     ignoreElements: true,
      //   },
      //   jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
      // })

      const res = await this.$html2pdf().set(options).from(container).save()

      console.log(res)
    },
    // exportToPDF() {
    //   html2pdf(document.getElementById('requirements-container'))
    // },
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
    font-size: 20px;
  }

  .loading__dot {
    animation: dot ease-in-out 1.5s infinite;
    background-color: #d9d9d9;
    display: inline-block;
    height: 32px;
    margin: 10px;
    border-radius: 16px;
    width: 32px;
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
    margin: 100px 0;

    @include tablet-and-up {
      flex-direction: row;
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