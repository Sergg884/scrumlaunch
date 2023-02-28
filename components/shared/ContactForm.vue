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
                  placeholder="Enter your email"
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
                  placeholder="Enter company name"
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
                  placeholder="Enter your message"
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
              <!-- <select
                name="companySize"
              >
                <option value="">Select company size</option>
                {companySize.map((company) => (
                  <option key={Math.random()} value={company}>
                    {company}
                  </option>
                ))}
              </select> -->
              <CustomSelect
                id="companySize"
                :modelValue="companySize"
                name="companySize"
                label="Select company size"
                emptyValueText="Select company size"
                :items="companySelect"
                :errorMessage="companySizeError"
                @update:modelValue="handleFieldChange('companySize', $event)"
              />
            </div>
            <div class="col input-container">
              <label for="projectBudget">
                Total Project Budget
              </label>
              <CustomSelect
                  id="projectBudget"
                  :modelValue="projectBudget"
                  name="projectBudget"
                  label="Select project budget"
                  emptyValueText="Select project budget"
                  :items="budgetSelect"
                  :errorMessage="projectBudgetError"
                  @update:modelValue="handleFieldChange('projectBudget', $event)"
                />
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
import CustomSelect from './SelectInput.vue'
import BaseButton from '~/components/BaseButton.vue'

export default {
  components: {
    CustomSelect,
    BaseButton,
  },
  data() {
    return {
      budgetSelect: ['$ < 50k', '$ 50k - 100k', '$ 100k - 300k', '$ 300k - 500k', '$ 500k - 1m', '$ > 1m'],
      companySelect: ['Idea', 'Startup', 'SMB', 'Enterprise'],
      name: '',
      nameError: null,
      email: '',
      emailError: null,
      projectBudget: '',
      projectBudgetError: null,
      companySize: '',
      companySizeError: null,

      is_blocked: false,
      is_sent: false,
      is_done: false,
    }
  },
  methods: {
    handleFieldChange(name, value) {
      this[name] = value
    },
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
          font-weight: 500;
          font-size: 18px;
          color: $main-black;
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
          font-weight: 500;
          font-size: 18px;
          color: $main-black;
          @media screen and (max-width: 768px) {
            width: auto;
          }
        }

        select {
          height: 42px;
          border: 1px solid var($main-black);
          font-weight: 500;
          font-size: 18px;
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
