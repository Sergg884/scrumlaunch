<template>
  <div class="home">
    <section class="hero">
      <h2 class="title">
        Accelerate your AI transformation with <span class="mark">Generative AI Automation</span>
      </h2>
      <p class="text">
        Improve your business exponentially with the right AI workflows.
      </p>
      <nuxt-img class="hero-img" src="/pages/consulting/ai-arm.png"/>
      <div v-if="!withRequirements" class="contact">
        <!-- <client-only>
          <script defer type="text/javascript">
            hbspt.forms.create({
              region: "na1",
              portalId: "43665306",
              formId: "395db3ac-77c5-4c11-80b7-e83c4e8fcecb"
            });
          </script>
        </client-only> -->
        <div class="input-container">
          <b-form-group
            id="contact-us-fieldset"
            class="email-input"
            label="Email"
            label-for="email-input"
            plaintext
          >
            <InputComponent
              id="email-input"
              class="contact-form--wrapper--input input-email"
              :model-value="email"
              placeholder="Enter your email here"
              name="email"
              :error-message="emailError"
              @update:modelValue="handleFieldChange('email', $event)"
            />
          </b-form-group>
        </div>
        <div class="button">
          <BaseButton @click="sendEmail()"> Schedule a call </BaseButton>
        </div>
      </div>
    </section>
    <section class="section-eco">
      <h2 class="title">The AI ecosystem is <br /> changing at <span class="mark">lightning speed</span></h2>

      <div class="eco-block">
        <div class="text-block">
          <h3>ScrumLaunch is at the Forefront of New AI Technologies</h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_3828_4400)">
                <rect width="20" height="20" rx="10" fill="#1E1F21"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.7029 8.13941C13.9498 7.79371 13.8697 7.31329 13.524 7.06636C13.1783 6.81943 12.6979 6.8995 12.451 7.2452L9.13261 11.8909L7.46701 10.2253C7.1666 9.9249 6.67955 9.9249 6.37915 10.2253C6.07875 10.5257 6.07875 11.0128 6.37915 11.3132L8.68684 13.6209C8.84673 13.7807 9.06887 13.8622 9.29422 13.8435C9.51956 13.8249 9.72529 13.708 9.85672 13.524L13.7029 8.13941Z" fill="#12E2B0"/>
              </g>
              <defs>
                <clipPath id="clip0_3828_4400">
                  <rect width="20" height="20" rx="10" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <p>
              <span>Shaping the future.</span> In the world of artificial intelligence,
              changes are happening so rapidly that we are not just following
              these changes - we are shaping the future
            </p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_3828_4400)">
                <rect width="20" height="20" rx="10" fill="#1E1F21"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.7029 8.13941C13.9498 7.79371 13.8697 7.31329 13.524 7.06636C13.1783 6.81943 12.6979 6.8995 12.451 7.2452L9.13261 11.8909L7.46701 10.2253C7.1666 9.9249 6.67955 9.9249 6.37915 10.2253C6.07875 10.5257 6.07875 11.0128 6.37915 11.3132L8.68684 13.6209C8.84673 13.7807 9.06887 13.8622 9.29422 13.8435C9.51956 13.8249 9.72529 13.708 9.85672 13.524L13.7029 8.13941Z" fill="#12E2B0"/>
              </g>
              <defs>
                <clipPath id="clip0_3828_4400">
                  <rect width="20" height="20" rx="10" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <p>
              <span>Pace of Innovation.</span> Artificial intelligence technologies are
              constantly advancing. We closely monitor the latest achievements
              and apply them to create unique solutions for our clients
            </p>
          </div>
        </div>
        <div class="img-block">
          <nuxt-img class="img-chart" src="/pages/consulting/chart.png"/>
          <nuxt-img class="img-dt" src="/pages/consulting/dark-theme2.png"/>
        </div>
      </div>

      <div class="eco-block">
        <div class="text-block">
          <h3>Experience and Expertise with Scalable Implementations</h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_3828_4400)">
                <rect width="20" height="20" rx="10" fill="#1E1F21"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.7029 8.13941C13.9498 7.79371 13.8697 7.31329 13.524 7.06636C13.1783 6.81943 12.6979 6.8995 12.451 7.2452L9.13261 11.8909L7.46701 10.2253C7.1666 9.9249 6.67955 9.9249 6.37915 10.2253C6.07875 10.5257 6.07875 11.0128 6.37915 11.3132L8.68684 13.6209C8.84673 13.7807 9.06887 13.8622 9.29422 13.8435C9.51956 13.8249 9.72529 13.708 9.85672 13.524L13.7029 8.13941Z" fill="#12E2B0"/>
              </g>
              <defs>
                <clipPath id="clip0_3828_4400">
                  <rect width="20" height="20" rx="10" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <p>
              <span>Adaptation to Change.</span> In an environment where everything changes rapidly,
              flexibility and readiness for change are crucial. We adapt to new
              challenges and find opportunities in every change.
            </p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_3828_4400)">
                <rect width="20" height="20" rx="10" fill="#1E1F21"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.7029 8.13941C13.9498 7.79371 13.8697 7.31329 13.524 7.06636C13.1783 6.81943 12.6979 6.8995 12.451 7.2452L9.13261 11.8909L7.46701 10.2253C7.1666 9.9249 6.67955 9.9249 6.37915 10.2253C6.07875 10.5257 6.07875 11.0128 6.37915 11.3132L8.68684 13.6209C8.84673 13.7807 9.06887 13.8622 9.29422 13.8435C9.51956 13.8249 9.72529 13.708 9.85672 13.524L13.7029 8.13941Z" fill="#12E2B0"/>
              </g>
              <defs>
                <clipPath id="clip0_3828_4400">
                  <rect width="20" height="20" rx="10" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <p>
              <span>Expertise and Experience.</span> Our team members possess deep knowledge and
              years of experience in the field of artificial intelligence. We
              create solutions that work and deliver results.
            </p>
          </div>
        </div>
        <div class="img-block">
          <nuxt-img class="img-ta" src="/pages/consulting/team-alocation.png"/>
          <nuxt-img class="img-wt" src="/pages/consulting/white-theme.png"/>
          <nuxt-img class="img-stack" src="/pages/consulting/stack.png"/>
        </div>
      </div>

      <div class="eco-block">
        <div class="text-block">
          <h3>Ongoing Support & Optimization</h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_3828_4400)">
                <rect width="20" height="20" rx="10" fill="#1E1F21"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.7029 8.13941C13.9498 7.79371 13.8697 7.31329 13.524 7.06636C13.1783 6.81943 12.6979 6.8995 12.451 7.2452L9.13261 11.8909L7.46701 10.2253C7.1666 9.9249 6.67955 9.9249 6.37915 10.2253C6.07875 10.5257 6.07875 11.0128 6.37915 11.3132L8.68684 13.6209C8.84673 13.7807 9.06887 13.8622 9.29422 13.8435C9.51956 13.8249 9.72529 13.708 9.85672 13.524L13.7029 8.13941Z" fill="#12E2B0"/>
              </g>
              <defs>
                <clipPath id="clip0_3828_4400">
                  <rect width="20" height="20" rx="10" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <p>
              <span>Partnership.</span> In the world of artificial intelligence, changes are
              happening so rapidly that we are not just following these changes
              - we are shaping the future
            </p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_3828_4400)">
                <rect width="20" height="20" rx="10" fill="#1E1F21"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.7029 8.13941C13.9498 7.79371 13.8697 7.31329 13.524 7.06636C13.1783 6.81943 12.6979 6.8995 12.451 7.2452L9.13261 11.8909L7.46701 10.2253C7.1666 9.9249 6.67955 9.9249 6.37915 10.2253C6.07875 10.5257 6.07875 11.0128 6.37915 11.3132L8.68684 13.6209C8.84673 13.7807 9.06887 13.8622 9.29422 13.8435C9.51956 13.8249 9.72529 13.708 9.85672 13.524L13.7029 8.13941Z" fill="#12E2B0"/>
              </g>
              <defs>
                <clipPath id="clip0_3828_4400">
                  <rect width="20" height="20" rx="10" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <p>
              <span>Beyond Expectations.</span> Our creativity doesn't stop here. This block
              was generated with the help of cutting-edge AI technology,
              underlining our commitment to innovation and excellence.
            </p>
          </div>
        </div>
        
        <div class="img-block"> 
          <nuxt-img class="img-dt" src="/pages/consulting/dark-theme.png"/>
          <nuxt-img class="img-chat" src="/pages/consulting/chat.png"/>
        </div>
      </div>

    </section>
    <section class="section-ai">
      <h2 class="title">Expertise in Generative <span class="mark">AI Operations</span></h2>
      <div class="ai-list row">
        <div class="ai-item">
          <nuxt-img src="/services/green&white/icon-1.svg" />
          <div>
            <h3>Discovery</h3>
            <p>Where and how will Generative AI implementation most impact your business?</p>
          </div>
        </div>
        <div class="ai-item">
          <nuxt-img src="/services/green&white/icon-9.svg" />
          <div>
            <h3>Deployment</h3>
            <p>Configure and launch your LLM pipeline on scalable infrastructure.</p>
          </div>
        </div>
        <div class="ai-item">
          <nuxt-img src="/services/green&white/icon-4.svg" />
          <div>
            <h3>Fine Tuning</h3>
            <p>Maximize the value of your data by selecting and fine-tuning the right model.</p>
          </div>
        </div>
        <div class="ai-item">
          <nuxt-img src="/services/green&white/icon-5.svg" />
          <div>
            <h3>Prompt Engineering</h3>
            <p>Where and how will Generative AI implementation most impact your business?</p>
          </div>
        </div>
        <div class="ai-item">
          <nuxt-img src="/services/green&white/icon-8.svg" />
          <div>
            <h3>Scaling</h3>
            <p>Ensure your Generative AI implementation scales as your needs grow.</p>
          </div>
        </div>
        <div class="ai-item">
          <nuxt-img src="/services/green&white/icon-7.svg" />
          <div>
            <h3>Monitoring</h3>
            <p>Automate your monitoring, alerts, and error logging systems to ensure 99% uptime.</p>
          </div>
        </div>
        <div class="ai-item">
          <nuxt-img src="/services/green&white/icon-6.svg" />
          <div>
            <h3>Model Selection & Optimization</h3>
            <p>Select & optimize the right model for your needs</p>
          </div>
        </div>
        <div class="ai-item">
          <nuxt-img src="/services/green&white/icon-2.svg" />
          <div>
            <h3>Security</h3>
            <p>Using the right models and best practices to keep your proprietary information safe.</p>
          </div>
        </div>
        <div class="ai-item">
          <nuxt-img src="/services/green&white/icon-3.svg" />
          <div>
            <h3>Cost Optimization</h3>
            <p>Continuous monitoring and analysis of your tooling costs and usage metrics.</p>
          </div>
        </div>
      </div>
      <div class="ai-block">
        <h3>
          The benefits of working with ScrumLaunch to build and manage your Generative AI workflows and LLM data pipelines.
        </h3>
        <hr />
        <ul>
          <li>A team of Generative AI experts with hands-on experience across multiple industries and Generative AI models.</li>
          <li>Flexible engagements to support you across the entire Generative AI lifecycle.</li>
          <li>Implementation expertise across both cloud and localized Generative AI models, depending on your needs.</li>
        </ul>
      </div>
    </section>
    <section class="section-ways" >
      <h2 class="title-global">We help high-growth tech companies <span class="mark">in two ways</span></h2>
      <div class="ways-block">
        <div class="col-md-6">
          <nuxt-img src="/services/icon-1.svg" />
          <h3>Build your first Generative AI system</h3>
          <p>Discovery process to define your needs</p>
          <p>Implement and configure your Generative AI tech stack</p>
          <p>Deploy high-impact Generative AI functionality within your business</p>
        </div>
        <div class="col-md-6">
          <nuxt-img src="/services/icon-4.svg" />
          <h3>Maintain and optimize your existing implementation</h3>
          <p>Audit and optimize your current Generative AI workflows</p>
          <p>Ongoing systems maintenance</p>
          <p>Expand your Generative AI capabilities and functionality</p>
        </div>
      </div>
    </section>
    <section class="section-expert">
      <h2 class="title-global"><span class="mark">Generative AI Experts<br/></span> as a Service</h2>
      <div class="row">
        <div class="col-xl-6">
          <hr />
          <div class="text-block">
            <nuxt-img src="/services/icon-2.svg" />
            <p>Flexible monthly contracts</p>
          </div>
          <hr />
          <div class="text-block">
            <nuxt-img src="/services/icon-1.svg" />
            <p>Project-specific or monthly retainer cost model, depending on your needs</p>
          </div>
          <hr />
        </div>
        <div class="col-xl-6">
          <nuxt-img src="/pages/consulting/ai-dev.svg" />
        </div>
      </div>
    </section>
    <SuccessModal
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>

<script>
import SuccessModal from '~/components/shared/SuccessModal'

export default {
  components: {
    SuccessModal,
  },

  props: {
    withRequirements: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isModalVisible: false,
      emailError: null,
      email: '',
    }
  },

  head: {
    title: 'Hire Full Stack Developers - Top 1% of 2 million + skilled engineers',
    meta: [
      { hid: 'description', name: 'description', content: 'ScrumLaunch enables start-ups, businesses, and organizations to hire developers from a growing network of top talent in the world. Our React, Python, PHP, Kotlin experts ready to work full-time, part-time, or hourly who will seamlessly integrate into your team.' }
    ],
  },

  methods: {
    handleFieldChange(name, value) {
      this[name] = value
    },
    closeModal() {
      this.isModalVisible = false
    },
    sendEmail() {
      const data = {
        name: '',
        email: this.email,
        details: '',
      }

      if (this.validateEmail(this.email)) {
        this.is_blocked = true

        this.$axios.$post('/api/contact-us', data).then(() => {
          this.is_sent = true
          this.is_blocked = false
          this.is_done = true

          this.track()
          this.isModalVisible = true

          setTimeout(() => {
            this.is_sent = false
            this.is_done = false
            this.name = ''
            this.email = ''
            this.project = ''
          }, 5000)
        })
      }
    },
    validateEmail(email) {
      // eslint-disable-next-line prefer-regex-literals
      const emailRegEx = new RegExp(
        '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
        'i'
      )
      this.emailError = !emailRegEx.test(email.trim())
        ? 'Enter a valid email'
        : null

      if (this.emailError === null) {
        return true
      }

      return false
    },
    track() {
      if (this.$gtag !== undefined) {
        this.$gtag.event('conversion', {
          send_to: 'AW-10868833249/37WpCK7nhbQDEOH31L4o',
        })
      }
    },
  },

  getters: {
    features: (state) => state.modals
  },
  
}

</script>

<style lang="scss" scoped>

.home {
  @include tablet-and-up {
    overflow: hidden;
  }
}

.section-eco {

  @include desktop-and-up {}

  .title {
    margin-bottom: 40px;
  }

  h3 {
    margin-top: 40px;
    margin-bottom: 16px;    
  }

  .eco-block {
    @include tablet-and-up {
      display: flex;
      margin-bottom: 60px;

      .img-block {
        position: relative;
        width: 100%;

        img {
          position: absolute;
        }

        .img-dt, .img-wt {
          left: 0;
          width: 500px;

          @include desktop-and-up {
            width: 580px;
          }
        }
        .img-chart {
          left: 0;
          top: 20px;
          z-index: 1;
          width: 135px;
          height: 90px;

          @include desktop-and-up {
            top: 0;
            left: -60px;
            width: 239px;
            height: 161px;
          }
        }
        .img-ta {
          top: -20px;
          right: -80px;
          z-index: 1;
          width: 119px;
          height: 86px;

          @include desktop-and-up {
            right: -75px;
            width: 212px;
            height: 154px;
          }
        }
        .img-stack {
          left: 0;
          bottom: -50px;
          width: 205px;
          height: 79px;

          @include desktop-and-up {
            bottom: -70px;
            width: 336px;
            height: 130px;
          }
        }
        .img-chat {
          bottom: -50px;
          left: 70px;
          width: 174px;
          height: 85px;

          @include desktop-and-up {
            left: unset;
            bottom: -150px;
            right: -60px;
            width: 300px;
            height: 143px;
          }
        }
      }
    }

    @include desktop-and-up {
      h3 {
        font-size: 30px;
        text-align: left;
      }
    }
  }

  .text-block {
    div {
      display: flex;

      svg {
        min-width: 20px;
        width: 20px;
        height: 20px;
      }

      p {
        margin-left: 12px;
        text-align: left;

        span {
          font-weight: 600;
        }

        @include desktop-and-up {
          font-size: 18px;
        }
      }
    }

    @include desktop-and-up {
      min-width: 550px;
      width: 550px;
      margin-right: 80px;
    }
  }

  .img-block {
    position: relative;
   
    .img-chart {
      position: absolute;
      top: -12px;
      right: 33px;
      width: 112px;
      height: 75px;
    }

    .img-dt2 {
      width: 100%;
    }
    .img-wt {
      width: 100%;
      margin: auto;
    }
    .img-stack{
      position: absolute;
      width: 153px;
      height: 59px;
      bottom: -6px;
      left: 29px;

      @include desktop-and-up {
        bottom: -6px;
      }
    }
    .img-ta {
      position: absolute;
      width: 94px;
      height: 68px;
      top: -12px;
      right: 33px;
    }
    .img-chat {
      position: absolute;
      width: 110px;
      height: 54px;
      bottom: 0;
      right: 20px;
    }
    .img-dt {
      width: 100%;
    }
  }

  img {
    width: 100%;
  }
}

.section-ai {
  background-color: #1E1F21;
  padding-top: 80px;
  padding-bottom: 80px;

  .title {
    color: #FFF;
    margin-bottom: 40px;
  }
  .mark {
    background-color: #1E1F21;
    color: #12E2B0;
  }

  .ai-list {
    @include tablet-and-up {
      display: flex;
      flex-wrap: wrap;
    }
    margin-bottom: 40px;
  }

  .ai-item {
    display: flex;

    div {
      margin-left: 16px;
    }

    @include tablet-and-up {
      flex: 0 0 50%;
      max-width: 50%;
    }

    @include desktop-and-up {
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }
  }
  .ai-block {
    border: 1px solid var(--White, #FFF);
    padding: 20px;

    @include desktop-and-up {
      display: flex;
    }

    h3 {
      font-size: 24px;

      @include desktop-and-up {
        font-size: 30px;
        min-width: 50%;
        width: 50%;
      }
    }

    hr {
      background: #FFF;
    }

    ul {
      padding: 0;
      margin: 0;
      color: #FFF;
      list-style: none;

      @include desktop-and-up {
        border-left: 1px solid #FFF;
        padding-left: 40px;
      }
    }
    li {
      position: relative;
      text-align: left;
      margin-left: 30px;
      margin-bottom: 16px;
    }
    li::before {
      content: "";
      display: block;
      position: absolute;
      background-color: #12E2B0;
      left: -30px;
      top: calc(50% - 5px);
      border-radius: 50%;
      width: 10px;
      height: 10px;
    }
  }

  img {
    width: 24px;
    height: 24px;

    @include desktop-and-up {
      width: 36px;
      height: 36px;
    }
  }
  h3 {
    text-transform: capitalize;
    color: #FFF;
    font-family: 'Proxima Nova';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    text-align: left;

    @include desktop-and-up {
      font-size: 26px;
    }
  }
  p {
    color: #FFF;
    font-family: 'Proxima Nova';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    text-align: left;
    @include tablet-and-up {
      font-size: 14px;
    }
    @include desktop-and-up {
      font-size: 18px;
    }
  }
}

.section-ways {
  img {
    display: block;
    width: 36px;
    height: 36px;
    margin-bottom: 30px;
    margin-top: 40px;
  }
  .ways-block {
    @include tablet-and-up {
      display: flex;
      div {
        margin: 10px;
      }
    }
  }
  h2 {
    margin-bottom: 40px;
  }
  h3 {
    text-align: left;
  }
  p {
    text-align: left;
  }
}

.section-expert {

  h2 {
    @include desktop-and-up {
      text-align: right;
      margin-bottom: 40px;
    }
  }
  .text-block {
    display: flex;
    align-items: center;
    margin: 40px 0;

    img {
      width: 36px;
      height: 36px;
    }
  }

  hr {
    background-color: #1E1F21;
  }

  p {
    text-align: left;
    margin-left: 20px;
    margin-bottom: 0;
    color: var(--Eerie-Black, #1E1F21);
    font-family: 'Proxima Nova';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 25.2px */

    @include tablet-and-up {
      font-size: 24px;
    }
  }

  img {
    width: 100%;
  }

}

.title {
  color: var(--black1, #1E1F21);
  text-align: center;
  font-family: 'Proxima Nova';
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 140%; /* 44.8px */
  letter-spacing: -0.32px;
  text-transform: uppercase;

  @include tablet-and-up {
    font-size: 48px;
    margin-bottom: 20px;
  }
}

h3 {
  color: #000;
  text-align: center;
  font-family: 'Proxima Nova';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
}

.text {
  color: var(--Eerie-Black, #1E1F21);
  text-align: center;
  font-family: 'Proxima Nova';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  margin-bottom: 40px;

  @include tablet-and-up {
    font-size: 20px;
  }
}

.hero {
  display: grid;

  @include desktop-and-up {
    grid-template-columns: repeat(2, 1fr);

    .title, p {
      text-align: left;
    }
  }
}

.hero-img {
  width: 100%;
  margin-bottom: 40px;

  @include desktop-and-up {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
    height: 485px;
  }
}

#contact-us-fieldset {
  font-weight: 900;
  font-size: 18px;
  line-height: 140%;
  color: $main-black;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  @include tablet-and-up {
    font-size: 30px;
  }

  @include desktop-and-up {
    font-size: 36px;
  }
}

.contact {
  .input-container {
    text-align: left;
    margin-bottom: 40px;

    @include desktop-and-up {
      margin-bottom: 0;
    }
  }

  button {
    width: 255px;
    margin: auto;
    margin-top: 20px;

    color: var(--Eerie-Black, #1E1F21);
    text-align: center;
    font-family: 'Proxima Nova';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.14px;
    text-transform: uppercase;

    @include tablet-and-up {
      width: 280px;
    }
  }

  .email-input {
    margin-bottom: 0;

    input {
      color: $main-black;
      border: none;
      border-radius: 0;
      padding-left: 0;
      font-size: 18px;
      line-height: 150%;

      &:focus {
        border-color: unset;
        outline: none;
        box-shadow: none;
      }
    }
  }
}

</style>