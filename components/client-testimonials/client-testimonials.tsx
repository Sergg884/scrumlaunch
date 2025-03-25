'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import cn from 'classnames';
import styles from './styles.module.scss';
import CustomLink from '../custom-link';
import ArrowButton from '@/components/ui/arrow-button';
import { ClutchBlackIcon, ClutchIcon } from '@/components/ui/icons';

const slides = [
  {
    image: '/images/shared/testimonials/rob_carrol.png',
    withIcon: true,
    feedback:
      '"ScrumLaunch software developers have enabled CampusReel to go from an idea to a product with millions of monthly unique users over the past 5 years. We could not have gotten to where we are today without them."',
    name: 'Rob Carroll',
    short: "Rob's",
    position: 'CEO',
    company: 'CampusReel',
    clutch: 'https://clutch.co/profile/scrumlaunch#review-792050',
  },
  {
    image: '/images/shared/testimonials/matt_glick.jpeg',
    withIcon: true,
    feedback:
      '"ScrumLaunch has been with us since day 1. We\'ve been working with them for 5 years. From an idea to a market leader in our space backed by leading venture funds"',
    name: 'Matt Glick',
    short: "Matt's",
    position: 'CEO',
    company: 'Gipper',
    clutch: 'https://clutch.co/profile/scrumlaunch#review-754618',
  },
  {
    image: '/images/shared/testimonials/henry_priest.png',
    withIcon: true,
    feedback:
      '"ScrumLaunch listens to what we need in candidates for our roles."',
    name: 'Henry Priest',
    short: "Henry's",
    position: 'CEO',
    company: 'Benson Hill',
    clutch: 'https://clutch.co/profile/scrumlaunch#review-2038753',
  },
  {
    image: '/images/shared/testimonials/ryan_miller.webp',
    withIcon: false,
    feedback:
      '"The partnership with ScrumLaunch has sped up the product launch of the company\'s product."',
    name: 'Ryan Miller',
    short: "Ryan's",
    position: 'CEO',
    company: 'MODULAR11',
    clutch: 'https://clutch.co/profile/scrumlaunch#review-1925392',
  },
];

const ClientTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionName, setTransitionName] = useState('');

  useEffect(() => {
    setShow(true);
  }, []);

  const slide = (dir: number) => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (dir === 1) {
      setTransitionName('slide-next');
    } else {
      setTransitionName('slide-prev');
    }

    setTimeout(() => {
      const len = slides.length;
      setCurrent((prevCurrent) => {
        return (prevCurrent + (dir % len) + len) % len;
      });
      setTransitionName('');
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className={styles['client-testimonials']}>
      <Container>
        <Title variant="h2" className={styles['client-testimonials__title']}>
          Client Testimonials
        </Title>

        <div className={styles['client-testimonials__carousel']}>
          <ArrowButton
            direction="prev"
            onClick={() => slide(-1)}
            disabled={isAnimating}
            className={cn(
              styles['client-testimonials__navigation-btn--prev']
            )}
          />

          <ArrowButton
            direction="next"
            onClick={() => slide(1)}
            disabled={isAnimating}
            className={cn(
              styles['client-testimonials__navigation-btn--next']
            )}
          />

          <div
            className={cn(
              styles['client-testimonials__slider-group'],
              transitionName
                ? styles[`client-testimonials__slider-group--${transitionName}`]
                : ''
            )}
          >
            {show && (
              <div className={styles['client-testimonials__slide']}>
                <Image
                  className={styles['client-testimonials__avatar']}
                  src={slides[current].image}
                  alt={slides[current].name}
                  width={200}
                  height={200}
                />

                <div className={styles['client-testimonials__description']}>
                  <p className={styles['client-testimonials__name']}>
                    <strong>{slides[current].name}</strong>
                  </p>

                  <div className={styles['client-testimonials__information']}>
                    <p>{slides[current].position}</p>

                    <p className={styles['client-testimonials__dot']}>
                      {slides[current].company}
                    </p>
                  </div>
                </div>

                <ClutchIcon />

                <p className={styles['client-testimonials__feedback']}>
                  {slides[current].feedback}
                </p>
              </div>
            )}
          </div>
        </div>

        <CustomLink
          href={slides[current].clutch}
          className={styles['client-testimonials__button']}
        >
          <ClutchBlackIcon />

          See {slides[current].short} full review
        </CustomLink>
      </Container>
    </section>
  );
};

export default ClientTestimonials;
