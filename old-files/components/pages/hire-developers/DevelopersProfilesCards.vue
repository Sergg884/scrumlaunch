<template>
  <div class="developers">
    <div class="developers__item">
      <div class="developers__item__img">
        <div class="hover-btn">
          <NuxtLink to="/contact-us" class="btn">HIRE</NuxtLink>
        </div>
        <img src="/images/hire-developers/ekaterina_a.png" alt="ekaterina_a" />
      </div>
      <div class="developers__item__info">
        <div class="developers__item__name">Ekaterina A.</div>
        <ul class="developers__item__skills">
          <li>Senior Software Engineer</li>
          <li>5 y. of Experience</li>
        </ul>
        <div class="developers__item__desc">
          Lead developer for high growth, venture funded saas social graphics
          platform supporting over 1M monthly uniques.
        </div>
      </div>
    </div>
    <div class="developers__item">
      <div class="developers__item__img">
        <div class="hover-btn">
          <NuxtLink to="/contact-us" class="btn">HIRE</NuxtLink>
        </div>
        <img src="/images/hire-developers/oleg_v.png" alt="oleg_v" />
      </div>
      <div class="developers__item__info">
        <div class="developers__item__name">Oleg V.</div>
        <ul class="developers__item__skills">
          <li>Senior Software Engineer</li>
          <li>6 y. of Experience</li>
        </ul>
        <div class="developers__item__desc">
          Expertise with scalable e-commerce applications & complex inventory
          management systems.
        </div>
      </div>
    </div>
    <div class="developers__item">
      <div class="developers__item__img">
        <div class="hover-btn">
          <NuxtLink to="/contact-us" class="btn">HIRE</NuxtLink>
        </div>
        <img src="/images/hire-developers/oleksandr_b.png" alt="oleksandr_b" />
      </div>
      <div class="developers__item__info">
        <div class="developers__item__name">Oleksandr B.</div>
        <ul class="developers__item__skills">
          <li>Mid-Lvl Software Engineer</li>
          <li>4 y. of Experience</li>
        </ul>
        <div class="developers__item__desc">
          Scalable consumer application expert. Lead developer on multiple
          venture funded consumer applications that currently support 3M monthly
          users.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.developers {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  &__item {
    width: 387px;
    height: 520px;
    background: #ffffff;
    border: 1px solid #1e1f21;
    position: relative;
    box-sizing: border-box;

    &:hover &__img {
      .hover-btn {
        display: flex;
        align-items: center;
        justify-content: center;

        .btn {
          text-align: center;
          display: block;
        }
      }
    }

    &__img {
      .hover-btn {
        display: none;

        width: 100%;
        background: #12e2b0;
        height: 293px;
        align-items: center;
        position: absolute;

        transition: all 0.3s linear;

        .btn {
          display: none;
          transition: all 0.3s linear;

          font-weight: 400;
          font-size: 20px;
          line-height: 150%;
          color: #ffffff;
          text-transform: uppercase;
          padding: 28px 0px;
          background: #1e1f21;
          margin: 0px 25px;
          min-width: auto;
          width: 335px;
          height: 82px;
        }
      }
    }

    &__info {
      padding-top: 26px;
      padding-right: 20px;
      padding-left: 20px;
      padding-bottom: 40px;
    }

    &__name {
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 30px;
      line-height: 140%;
    }

    &__skills {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;

      & > li:last-child::before {
        content: '';
        position: relative;
        top: -1px;
        display: inline-block;
        margin-right: 12px;
        margin-left: 12px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        z-index: 1;
        background: #1e1f21;
      }
    }

    &__desc {
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      margin-top: 20px;
    }
  }
}

@media screen and (max-width: 1439px) {
  .developers {
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: initial;
  }
}

@media screen and (max-width: 768px) {
  .developers {
    overflow-x: hidden;
    flex-direction: column;

    &__item {
      max-width: 387px;
      width: 100%;
      height: auto;
    }

    &__item__img > img {
      width: 100%;
    }
  }
}
</style>
