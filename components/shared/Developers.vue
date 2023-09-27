<template>
  <div class="developers" :class="{'white': isWhite}" >
    <section>
      <h3>{{devLang}} developers</h3>
      <b-row no-gutters class="mt-5">
        <b-col
          v-for="(dev, index) in developers"
          :key="index"
          class="developer col-12"
        >
          <button
            v-if="developers.length - 1 === index && totalCount > developers.length"
            class="developer--get-more"
            :class="{'visible': developers.length - 1 === index && totalCount > developers.length}"
            @click="getCandidate()"
          >
            SEE MORE
          </button>
          <div :class="{'blur': developers.length - 1 === index && totalCount > developers.length}">
            <b-row class="mb-3">
              <nuxt-img class="developer-avatar" :src="'https://scrumlaunch-teams.s3.amazonaws.com/' + dev.avatar_url" alt="candidate avatar" />
              <div class="flex">
                <p class="developer-name">{{dev.name}}</p>
                <span class="developer-exp">{{dev.exp}} years of exp.</span>
                <span class="developer-eng">Eng: {{dev.english_level}}</span>
              </div>
            </b-row>
            <b-row class="developer--hard-skills">
              <span class="developer--skill-bar">Hard skill(s):</span>
              <div ref="hardSkillBar" class="developer--skills-container">
                <div v-for="skill in dev.candidate_hard_skills" :key="skill.id" class="developer-skill">
                  <nuxt-img :src="'https://scrumlaunch-teams.s3.amazonaws.com/' + skill.stack.icon_s3_key" class="developer--skill-icon"/>
                  <span class="developer--stack-name">{{skill.stack.name}}</span>
                  <div class="star">
                    <nuxt-img src="pages/hire-developers/empty-star.svg" alt="star" class="empty-star"/>
                    <div class="curtain" :style="{width: skill.assessment_result + '%'}">
                      <nuxt-img src="pages/hire-developers/gold-star.svg" alt="star" class="gold-star"/>
                    </div>
                  </div>
                  <span class="skill-percent">{{ skill.assessment_result }}%</span>
                </div>
                <button class="hidden-skills hidden">+0</button>
              </div>
            </b-row>
            <b-row class="developer--soft-skills">
              <span class="developer--skill-bar">Soft skill(s):</span>
              <div ref="softSkillBar" class="developer--skills-container">
                <div v-for="skill in dev.candidate_soft_skills" :key="skill.id" class="developer-skill">
                  <span class="developer--skill-name">{{skill.skill.name}}</span>
                  <div class="star">
                    <nuxt-img src="pages/hire-developers/empty-star.svg" alt="star" class="empty-star"/>
                    <div class="curtain" :style="{width: skill.assessment_result + '%'}">
                      <nuxt-img src="pages/hire-developers/gold-star.svg" alt="star" class="gold-star"/>
                    </div>
                  </div>
                  <span class="skill-percent">{{ skill.assessment_result }}%</span>
                </div>
                <button class="hidden-skills hidden">+0</button>
              </div>
            </b-row>
            <b-row class="developer--additional-skills">
              <span class="developer--skill-bar">Additional:</span>
              <div ref="additionalSkillBar" class="developer--skills-container">
                <div v-for="skill in dev.candidate_additional_skills" :key="skill.id" class="developer--additional-skill">
                  <span>{{skill.skill.name}}</span>
                </div>
                <button class="hidden-skills hidden">+0</button>
              </div>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <p class="build-team">Want to join our team? Click <span>here</span> to contact us.</p>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    devLang: {
      type: String || null,
      default: null
    },
    isWhite: {
      type: Boolean,
      default: false
    },
  },

  setup() {
    const hardSkillBar = ref(null);
    const softSkillBar = ref(null);
    const additionalSkillBar = ref(null);
  
    return {
      hardSkillBar,
      softSkillBar,
      additionalSkillBar
    }
  },

  data() {
    return {
      developers: [],
      page: 1,
      totalCount: 0,
    }
  },

  async fetch() {
    const {data} = await this.$axios({
      method: 'get',
      url: this.$config.scrumTeamsAPI,
      headers: { 'HTTP-API-KEY': this.$config.scrumTeamsAPI_KEY },
      params: {
        stack_name: this.devLang
      }
    }).catch((err) => console.error(err));

    this.page++;
    this.totalCount = data.total_count
    this.developers = data.candidates || [];
  },
  fetchOnServer: true,

  mounted() {
    window.addEventListener("resize", this.resizeHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  updated() {
    this.calculateTagBar(this.hardSkillBar)
    this.calculateTagBar(this.softSkillBar)
    this.calculateTagBar(this.additionalSkillBar)
  },

  methods: {
    calculateTagBar(elements) {
      const buttonRoom = 74; /** for 3 numbers */

      elements?.forEach(skills => {
        const containerWidth = skills.clientWidth;
        let sumWidthChildren = 0;
        let sumHiddenSkills = 0 

        for (const skill of skills.children) {
          sumWidthChildren += skill.clientWidth;

          if (!skill.isSameNode(skills.lastChild)) {
            if (sumWidthChildren + buttonRoom > containerWidth) {
              skill.classList.add('hidden');
              sumHiddenSkills++;
            }

            if (sumWidthChildren + buttonRoom < containerWidth) {
              skill.classList.remove('hidden');
              if (sumHiddenSkills > 0) {
                sumHiddenSkills--;
              }
            }
          }

        }

        if (sumHiddenSkills > 0) {
          skills.lastChild.innerText = `+${sumHiddenSkills}`;
          skills.lastChild.classList.remove('hidden');
        } else {
          skills.lastChild.classList.add('hidden');
        }

      });

    },

    resizeHandler() {
      for (const refName in this.$refs) {
        this.calculateTagBar(this.$refs[refName])
      }
    },

    getCandidate() {
      this.$axios({
        method: 'get',
        url: this.$config.scrumTeamsAPI,
        headers: { 'HTTP-API-KEY': this.$config.scrumTeamsAPI_KEY },
        params: {
          stack_name: this.devLang,
          page: this.page
        }
      }).then(({data}) => {
        this.developers = [...this.developers, ...data.candidates]
        this.page++;
      }).catch((err) => console.error(err))
    }
  },


}
</script>

<style lang="scss" scoped>

.developers {
  display: flex;

  h3 {
    color: #1E1F21;
    text-align: center;
    font-family: Proxima Nova;
    font-size: 56px;
    font-style: normal;
    font-weight: 900;
    line-height: 140%; /* 78.4px */
    letter-spacing: 1.12px;
    text-transform: uppercase;

    @include tablet-and-up {
      margin: 0 15px;
    }
    @include desktop-and-up {
      margin: 0 40px;
    }
  }

  .developer {
    position: relative;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 28px 37px;
    margin-bottom: 20px;

    @include tablet-and-up {
      height: 346px;
    }

    @include desktop-and-up {
      height: 346px;
      min-width: 1200px
    }

    &-avatar {
      width: 115px;
      height: 115px;
      border-radius: 8px;
      background: lightgray 50% / cover no-repeat;
      margin-right: 24px;
    }

    &-name {
      margin-top: 10px;
      text-align: left;
      color: var(--primary-colors-black, #121212);
      font-family: Inter;
      font-size: 26px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 36.4px */
    }

    &-exp, &-eng {
      color: var(--basic-colors-dark-gray, #726C7A);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
    }

    &-exp {
      margin-right: 16px;
    }

    &--skill-name {
      color: var(--primary-colors-black, #121212);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
    }

    &--skill-icon {
      height: 20px;
      width: 20px;
    }

    &--skill-bar {
      width: 115px;
      min-width: 115px;
      text-align: left;
      color: var(--basic-colors-dark-gray, #726C7A);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 45px;
    }

    &--stack-name, &--skill-name {
      color: var(--primary-colors-black, #121212);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
    }

    &--additional-skills, &--hard-skills, &--soft-skills {
      display: flex;
      align-items: flex-start;
      flex-wrap: nowrap;
      gap: 10px;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 10px;
    }

    &--skills-container {
      flex-wrap: wrap;
      display: flex;
      gap: 10px;
      height: 45px;
      flex: 1;
    }

    &-skill {
      display: flex;
      padding: 5px 17px;
      border-radius: 8px;
      border: 1px solid var(--secondary-colors-f-1-f-0-ee, #F1F0EE);
      background: var(--basic-colors-white, #FFF);
      align-items: center;
      gap: 5px;
    }

    &--additional-skill {
      padding: 5px 17px;
      border-radius: 8px;
      border: 1px solid var(--secondary-colors-f-1-f-0-ee, #F1F0EE);
      background: var(--basic-colors-white, #FFF);
      color: var(--basic-colors-dark-gray, #726C7A);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
      white-space: nowrap;
    }

    .skill-percent {
      color: var(--primary-colors-black, #121212);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 30px */
    }

    .hidden-skills {
      height: 45px;
      padding: 5px 17px;
      border-radius: 8px;
      border: 1px solid #F1F0EE;
      border: 1px solid var(--secondary-colors-f-1-f-0-ee, #F1F0EE);
      background: #FFF;
      background: var(--basic-colors-white, #FFF);
    }

    .star {
      position: relative;
      width: 20px;
      height: 20px;

      .curtain {
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
      }

      .gold-star, .empty-star {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    &--get-more {
      width: 330px;
      height: 80px;
      flex-shrink: 0;
      position: absolute;
      border: none;
      border-radius: 54px;
      background: #12E2B0;
      top: calc(50% - 40px);
      left: calc(50% - 165px);
      z-index: 1;
    }

    .blur {
      filter: blur(5px);
      backdrop-filter: blur(10px);
    }
  }
}

.hidden {
  visibility: hidden;
  position: absolute;
}

.build-team {
  color: #1E1F21;
  font-family: 'Proxima Nova';
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 42px */
  margin-top: 60px;

  span {
    color: #12E2B0;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    cursor: pointer;
  }
}

</style>
