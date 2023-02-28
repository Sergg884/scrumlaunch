<template>
  <section class="container contact-form">
    <h3 class="white">
      Contact us at <span>hello@scrumlaunch.com</span> or fill out the form
    </h3>
    <div class="row tab-container">
      <div class="col img-tab">
        <img src="/images/shared/contact-form-hero.svg" alt="contact-form-hero">
      </div>
      <div class="col form-tab">
        <form action="">
          <h3>
            Company Details
          </h3>
          <div class="row">
            <div class="col input-col">
              <div class='input-container'>
                <label htmlFor="name">
                  Name*
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div class='input-container'>
                <label htmlFor="email">
                  Email*
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="email@example.com"
                />
              </div>
              <div class='input-container'>
                <label htmlFor="companyName">
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  name="companyName"
                  placeholder="Enter company name, if applicable"
                />
              </div>
            </div>
            <div class="col">
              <div class='input-container'>
                <label htmlFor="details">
                  Any details you’d like to share?
                </label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Enter your name"
                  value={name}
                  onChange={onChangeInput}
                />
              </div>
            </div>
          </div>
          <div class="separator" />
          <h3>
            Additional Information
          </h3>
          <div class="row">
            <div class="col input-container">
              <label for="companySize">
                Company Size
              </label>
              <select
                name="totalProjectBudget"
              >
                <option value="">Select your project budget</option>
                {budgetSize.map((budget) => (
                  <option key={Math.random()} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>
            <div class="col input-container">
              <label for="totalProjectBudget">
                Total Project Budget
              </label>
              <select
                name="totalProjectBudget"
              >
                <option value="">Select your project budget</option>
                {budgetSize.map((budget) => (
                  <option key={Math.random()} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
    <BaseButton>
      Send message
    </BaseButton>

  </section>
</template>

<script>
import BaseButton from '~/components/BaseButton.vue'

export default {
  components: {
    BaseButton,
  }
}

</script>

<style lang="scss" scoped>
.contact-form {
  margin-bottom: 240px;
  background-color: $main-black;

  .row {
    display: flex;
    flex-wrap: nowrap;
    flex: 1 1 auto;

    .col {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%
    }
  }

  .white {
    color: #fff;
  }

  h3 {
    font-weight: 700;
    font-size: 30px;
    span {
      color: $main-green;
    }
  }

  .tab-container {
    margin-top: 60px;
    display: flex;
    margin-bottom: 80px;
    text-align: left;

    .form-tab {
      padding: 32px;
      background-color: $main-green;

      h3 {
        margin-bottom: 16px;
      }

      .row {
        gap: 16px;
      }

      .input-col {
        gap: 27px;
        display: flex;
        flex-direction: column;
      }

      .separator {
        border-bottom: 1px solid $main-black;
        width: 100%;
        margin: 32px 0;
      }

      .input-container {
        display: flex;
        flex-direction: column;
        height: 100%;

        @media screen and (max-width: 768px) {
          width: 100%;
        }

        label {
          font-size: 16px;
          color: $main-black;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 8px;
          white-space: nowrap;
        }

        input[type='text'] {
          height: 42px;
          border: 1px solid var($main-black);
          padding-left: 10px;
          margin-top: 8px;
          @media screen and (max-width: 768px) {
            width: auto;
          }
        }

        textarea {
          height: 100%;
          border: 1px solid var($main-black);
          margin-top: 8px;
          padding: 10px;
          font-family: 'Sofia Pro', sans-serif;
          @media screen and (max-width: 768px) {
            width: auto;
          }
        }

        select {
          height: 42px;
          border: 1px solid var($main-black);
          padding: 0 5px;
          margin-top: 8px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: url('/icons/selectArrow.svg') 95%/8% no-repeat white;
          @media screen and (max-width: 768px) {
            width: auto;
          }
        }
      }
    }
  }

  button {
    margin: auto;
  }
}


</style>
