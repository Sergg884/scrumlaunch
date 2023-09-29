<template>
  <div class="developers" :class="{'white': isWhite}" >
    <section v-if="developers.length">
      <h3>{{devLang || "our"}} developers</h3>
      <div v-if="!devLang" class="stack-switcher">
        <input id="PHP" type="radio" name="lang" value="PHP" @click="switchHandler('PHP')" />
        <label for="PHP">PHP</label>
        <input id="React" type="radio" name="lang" value="React" @click="switchHandler('REACT')" />
        <label for="React">React</label>
        <input id="ReactNative" type="radio" name="lang" value="ReactNative" @click="switchHandler('React Native')" />
        <label for="ReactNative">ReactNative</label>
        <input id="Java" type="radio" name="lang" value="Java" @click="switchHandler('Java')" />
        <label for="Java">Java</label>
        <input id="AngularJS" type="radio" name="lang" value="AngularJS" @click="switchHandler('Angular')" />
        <label for="AngularJS">AngularJS</label>
        <input id="NodeJS" type="radio" name="lang" value="NodeJS" @click="switchHandler('Node')" />
        <label for="NodeJS">NodeJS</label>
        <input id="Python" type="radio" name="lang" value="Python" @click="switchHandler('Python')" />
        <label for="Python">Python</label>
        <input id="Swift" type="radio" name="lang" value="Swift" @click="switchHandler('Swift')" />
        <label for="Swift">Swift</label>
        <input id="Kotlin" type="radio" name="lang" value="Kotlin" @click="switchHandler('Kotlin')" />
        <label for="Kotlin">Kotlin</label>
        <input id="RubyOnRails" type="radio" name="lang" value="RubyOnRails" @click="switchHandler('Ruby on Rails')" />
        <label for="RubyOnRails">RubyOnRails</label>
        <input id="All" type="radio" name="lang" value="All" @click="switchHandler('')" />
        <label for="All">All</label>
      </div>
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
              <div class="developer-inf">
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
                    <nuxt-img src="icons/empty-star.svg" alt="star" class="empty-star"/>
                    <div class="curtain" :style="{width: skill.assessment_result + '%'}">
                      <nuxt-img src="icons/gold-star.svg" alt="star" class="gold-star"/>
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
                    <nuxt-img src="icons/empty-star.svg" alt="star" class="empty-star"/>
                    <div class="curtain" :style="{width: skill.assessment_result + '%'}">
                      <nuxt-img src="icons/gold-star.svg" alt="star" class="gold-star"/>
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
      <p class="build-team">Want to join our team? Click <span @click="showModal">here</span> to contact us.</p>
    </section>
    <JoinModal
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import JoinModal from '~/components/shared/JoinModal';

export default {
  components: {
    JoinModal,
  },
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
      isModalVisible: false,
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
          page: this.page,
        }
      }).then(({data}) => {
        this.developers = [...this.developers, ...data.candidates]
        this.page++;
      }).catch((err) => console.error(err))
    },
    switchHandler(stack) {
      this.page = 0
      this.$axios({
        method: 'get',
        url: this.$config.scrumTeamsAPI,
        headers: { 'HTTP-API-KEY': this.$config.scrumTeamsAPI_KEY },
        params: {
          stack_name: stack,
        }
      }).then(({data}) => {
        this.page++;
        this.totalCount = data.total_count;
        this.developers = data.candidates || [];
      }).catch((err) => console.error(err))
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


section {
  margin-bottom: 0;
}

.developers {
  display: flex;

  .stack-switcher {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 80px;

    input {
      display: none;
    }

    label {
      cursor: pointer;
      padding: 10px 26px;
      border: 1px solid #1E1F21;
      color: #1E1F21;
      font-family: 'Proxima Nova';
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 42px */
    }

    input:checked + label {
      background: #1E1F21;
      padding: 10px 26px;
      justify-content: center;
      align-items: center;
      color: #12E2B0;
      font-family: 'Proxima Nova';
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 42px */
    }

  }

  h3 {
    color: #1E1F21;
    text-align: center;
    font-family: Proxima Nova;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 140%; /* 78.4px */
    letter-spacing: 1.12px;
    text-transform: uppercase;

    @include tablet-and-up {
      margin: 0 15px;
      font-size: 46px;
    }
    @include desktop-and-up {
      margin: 0 40px;
      font-size: 56px;
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
    
    &-inf {
      text-align: left;
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
      color: #121212;
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
      color:#121212;
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
  left: -1000px;
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
