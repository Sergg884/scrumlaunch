<template>
  <section>
    <h2 class="title-global">
      Our Awards
    </h2>
    <div class="tabs">
      <div class="tab">
        <nuxt-img class="icon inc" alt="inc5000" src="/pages/home/awards/inc5000.png" />
      </div>
      <div class="tab">
        <nuxt-img class="icon clutch" alt="clutch" src="/pages/home/awards/clutch.png" />
      </div>
      <div class="tab">
        <nuxt-img class="icon goodFirms" alt="goodFirms" src="/pages/home/awards/goodFirms.png" />
      </div>
      <div class="tab">
        <nuxt-img class="icon austin" alt="austin" src="/pages/home/awards/austin.png" />
      </div>
      <div class="tab">
        <nuxt-img class="icon topWorkPlaces" alt="topWorkPlaces" src="/pages/home/awards/topWorkPlaces.png" />
      </div>
      <div class="tab">
        <nuxt-img class="icon designrush" alt="designrush" src="/pages/home/awards/designrush.png" />
      </div>
    </div>
    <nuxt-img class="icon behemoths" alt="behemoths" src="/pages/home/awards/behemoths.png" />
  </section>
</template>

<script>

export default {
  data() {
    return {
      tabs: [
        {
          title: 'interviewing per candidate',
          titleIndicator: '5h',
          descriptionTitle: 'Personalized recruiting',
          description: 'Our five step hiring process includes an English proficiency assessment, culture fit interview, technical interviews and technical assessment. We believe that cultural fit is as important as technical proficiency for long term success.',
        },
        {
          title: 'candidates pass out screening process',
          titleIndicator: '3%',
          descriptionTitle: 'Highly selective',
          description: 'Due to our rigorous vetting procedure we ensure that you get the best talent to boost your success.',
        },
        {
          title: 'saved during onboarding for each new hire',
          titleIndicator: '10h',
          descriptionTitle: 'Time saving onboarding process',
          description: 'We handle HR and all the administration required to get someone up and running.',
        },
        {
          title: 'higher retention than industry average',
          titleIndicator: '2X',
          descriptionTitle: 'Talent retention',
          description: 'We take care of your engineering team, making sure everyone has a professional development and growth plan, keeps on learning new skills and gets benefits and perks.',
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

section {

  h2 {
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
      text-align: center;
    }
  }
  .tabs {
    display: grid;

    @include tablet-and-up {
      grid-template-columns: repeat(3, 1fr);
    }

    .tab {
      display: flex;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .icon {
      margin: auto;
    }
  }

  .behemoths {
    margin-top: 40px;
  }
}

</style>