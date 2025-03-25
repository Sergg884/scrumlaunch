'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import styles from './styles.module.scss';
import CustomLink from '../custom-link';

const companies = [
  {
    name: 'Harvest',
    class: 'harvest',
    description:
      'From an idea to a market leader with millions of users powered by ScrumLaunch.',
    indicators: [
      {
        title: '10M',
        description: 'Active users',
      },
      {
        title: '$3M',
        description: 'Saved on Development Costs',
      },
      {
        title: '15',
        description: 'Dedicated team members',
      },
    ],
    desktopImg: '/images/home/case-studies/harvest-desktop.png',
    mobileImg: '/images/home/case-studies/harvest-mobile.png',
    url: '/work/harvest',
  },
  {
    name: 'Campus Reel',
    class: 'campus',
    description:
      'Leader in virtual college tours for Universities and graduate programs across the US.',
    indicators: [
      {
        title: '50M',
        description: 'Active users',
      },
      {
        title: '$7M',
        description: 'Saved on Development Costs',
      },
      {
        title: '$6M',
        description: 'Keyword value per year',
      },
    ],
    desktopImg: '/images/home/case-studies/campus-desktop.png',
    mobileImg: '/images/home/case-studies/campus-mobile.png',
    url: '/work/campus-reel',
  },
  {
    name: 'Vesta Home',
    class: 'vesta',
    description:
      'Vesta Home collaborated with ScrumLaunch to develop and launch their digital platform, crucial for their ongoing business.',
    indicators: [
      {
        title: '40%',
        description: 'Grow revenue YoY',
      },
      {
        title: '$10M',
        description: 'Saved on Development Costs',
      },
      {
        title: '170%',
        description: 'Organic Traffic growth',
      },
    ],
    desktopImg: '/images/home/case-studies/vesta-desktop.png',
    mobileImg: '/images/home/case-studies/vesta-mobile.png',
    url: '/work/vesta',
  },
  {
    name: 'Gipper',
    class: 'gipper',
    description:
      'Gipper is pioneering the fast growing brand sponsorship market for young athletes and associated institutions.',
    indicators: [
      {
        title: '500%',
        description: 'Уear over year growth rate',
      },
      {
        title: '$10M',
        description: 'Saved on Development Costs',
      },
      {
        title: '2000+',
        description: 'Saas customers supported',
      },
    ],
    desktopImg: '/images/home/case-studies/gipper-desktop.png',
    mobileImg: '/images/home/case-studies/gipper-mobile.png',
    url: '/work/gipper',
  },
];

const CaseStudies = () => {
  const [, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div className={styles['case-studies__dot']}>
        <span>{i}</span>
      </div>
    ),
  };

  return (
    <section className={styles['case-studies']}>
      <Container>
        <div className={styles['case-studies__inner']}>
          <Title variant="h2" className={styles['case-studies__title']}>
            Case studies
          </Title>

          <Slider
            ref={sliderRef}
            {...settings}
            className={styles['case-studies__slider']}
          >
            {companies.map((company) => (
              <div key={company.name} className={styles['case-studies__slide']}>
                <div className={styles['case-studies__content']}>
                  <div className={styles['case-studies__text-container']}>
                    <p className={styles['case-studies__name']}>
                      {company.name}
                    </p>
                    <p className={styles['case-studies__description']}>
                      {company.description}
                    </p>

                    <div className={styles['case-studies__indicators']}>
                      {company.indicators.map((indicator) => (
                        <div
                          key={indicator.title}
                          className={styles['case-studies__indicator']}
                        >
                          <p
                            className={styles['case-studies__indicator-title']}
                          >
                            {indicator.title}
                          </p>
                          <p
                            className={
                              styles['case-studies__indicator-description']
                            }
                          >
                            {indicator.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <CustomLink
                      href={company.url}
                      className={styles['case-studies__button']}
                    >
                      View Case Study
                    </CustomLink>
                  </div>

                  <div className={styles['case-studies__img-container']}>
                    <Image
                      className={`${styles['case-studies__desktop-img']} ${styles[`case-studies__desktop-img--${company.class}`]}`}
                      src={company.desktopImg}
                      alt={`${company.name}-desktop`}
                      width={560}
                      height={680}
                    />
                    <Image
                      className={`${styles['case-studies__mobile-img']} ${styles[`case-studies__mobile-img--${company.class}`]}`}
                      src={company.mobileImg}
                      alt={`${company.name}-mobile`}
                      width={335}
                      height={545}
                    />
                  </div>

                  <CustomLink
                    href={company.url}
                    className={styles['case-studies__button-mobile']}
                  >
                    View Case Study
                  </CustomLink>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
