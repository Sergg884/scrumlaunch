'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import BaseButton from '@/components/ui/base-button';
import CustomSelect from '@/components/ui/custom-select';
import styles from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
interface FormData {
  name: string;
  email: string;
  company: string;
  details: string;
  size: string;
  budget: string;
}

export default function GetStarted() {
  const [isSent, setIsSent] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormData>();

  const companySizeOptions = ['1-50', '50-200', '200-1000', '1000-5000+', '10,000+'];
  const projectBudgetOptions = [
    'Less than $10,000',
    '$10,000 to $49,999',
    '$50,000 to $199,999',
    '$200,000 to $999,999',
    '$1,000,000 to $9,999,999',
    '$10,000,000 +'
  ];

  const validateEmail = (email: string) => {
    const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegEx.test(email) || 'Please enter a valid email';
  };

  const onSubmit = async (data: FormData) => {
    // try {
    //   setIsSent(true);
    //   setIsBlocked(true);

    //   await fetch('/api/company-contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   setIsDone(true);
    //   setIsBlocked(false);

    //   if (typeof window !== 'undefined' && (window as any).gtag) {
    //     (window as any).gtag('event', 'conversion', {
    //       send_to: 'AW-10868833249/37WpCK7nhbQDEOH31L4o',
    //     });
    //   }

    //   setTimeout(() => {
    //     setIsSent(false);
    //     setIsDone(false);
    //   }, 5000);
    // } catch (error) {
    //   console.error('Error sending form:', error);
    //   setIsBlocked(false);
    // }
  };

  return (
    <>
      <div className={styles['get-started-title']}>
        <Container>
          <Title variant="h2" className={styles['get-started-title__title']}>
            Ready to <span className={styles['get-started-title__mark']}>get started?</span>
          </Title>
        </Container>
      </div>

      <section className={styles['get-started']}>
        <Container>
          <div className={styles['get-started__contact']}>
            <p className={styles['get-started__subtitle']}>
              Contact us at <a href="mailto:hello@scrumlaunch.com">hello@scrumlaunch.com</a> or fill out the form
            </p>

            <div className={styles['get-started__content']}>
              <div className={styles['get-started__hero']}>
                <Image
                  src="/images/home/get-started/hero.svg"
                  className={styles['get-started__hero-image']}
                  alt="get-started-hero"
                  width={100}
                  height={100}
                />
              </div>

              <form className={styles['get-started__form']} onSubmit={handleSubmit(onSubmit)}>
                <Title variant="h3" className={styles['get-started__form-title']}>Company Details</Title>

                <div className={styles['get-started__main-inputs']}>
                  <div className={styles['get-started__single-inputs']}>
                    <div className={styles['get-started__input-wrapper']}>
                      <label htmlFor="name">Name*</label>

                      <div className={cn(styles['get-started__input'], {
                        [styles['get-started__input--error']]: errors.name
                      })}>
                        <input
                          id="name"
                          placeholder="Enter your name"
                          {...register('name', { required: 'Please enter your name' })}
                        />
                        {errors.name && (
                          <div className={styles['get-started__error']}>
                            <div className={styles['get-started__error-popup']}>
                              {errors.name.message}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={styles['get-started__input-wrapper']}>
                      <label htmlFor="email">Email*</label>

                      <div className={cn(styles['get-started__input'], {
                        [styles['get-started__input--error']]: errors.email
                      })}>
                        <input
                          id="email"
                          placeholder="Enter your email"
                          {...register('email', {
                            required: 'Please enter your email',
                            validate: validateEmail
                          })}
                        />
                        {errors.email && (
                          <div className={styles['get-started__error']}>
                            <div className={styles['get-started__error-popup']}>
                              {errors.email.message}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={styles['get-started__input-wrapper']}>
                      <label htmlFor="company">Company</label>

                      <div className={styles['get-started__input']}>
                        <input
                          id="company"
                          placeholder="Enter company name"
                          {...register('company')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles['get-started__text-areas']}>
                    <div className={styles['get-started__input-wrapper']}>
                      <label htmlFor="details">Any details you'd like to share?</label>

                      <textarea
                        id="details"
                        placeholder="Enter your message"
                        {...register('details')}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles['get-started__additional']}>
                  <Title variant="h3" className={styles['get-started__form-title']}>
                    Additional Information
                  </Title>

                  <div className={styles['get-started__selects']}>
                    <CustomSelect
                      label="Company Size"
                      options={companySizeOptions}
                      placeholder="Select company size"
                      value={watch('size')}
                      onChange={(value) => setValue('size', value)}
                    />

                    <CustomSelect
                      label="Total Project Budget"
                      options={projectBudgetOptions}
                      placeholder="Select project budget"
                      value={watch('budget')}
                      onChange={(value) => setValue('budget', value)}
                    />
                  </div>
                </div>
              </form>

              {isSent && (
                <div className={cn(styles['get-started__message'], {
                  [styles['get-started__message--blocked']]: isBlocked
                })}>
                  {isDone && (
                    <>
                      <div className={styles['get-started__message-animation']}>
                      </div>

                      <p className={styles['get-started__message-title']}>
                        Your message<br />has been sent
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>

            <BaseButton
              onClick={handleSubmit(onSubmit)}
              className={styles['get-started__submit']}
            >
              Send message
            </BaseButton>
          </div>
        </Container>
      </section>
    </>
  );
}
