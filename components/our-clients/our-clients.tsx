'use client';

import { useEffect, useState } from 'react';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';
import styles from './styles.module.scss';
import ArrowButton from '@/components/ui/arrow-button';

const clients = [
  {
    alt: 'aloft',
    img: '/images/home/our-clients/aloft.svg'
  },
  {
    alt: 'benson-hill',
    img: '/images/home/our-clients/benson-hill.svg'
  },
  {
    alt: 'bid-my-listing',
    img: '/images/home/our-clients/bid-my-listing.svg'
  },
  {
    alt: 'bound',
    img: '/images/home/our-clients/bound.svg'
  },
  {
    alt: 'campus-reel',
    img: '/images/home/our-clients/campus-reel.svg'
  },
  {
    alt: 'community-funded',
    img: '/images/home/our-clients/community-funded.svg'
  },
  {
    alt: 'datavations',
    img: '/images/home/our-clients/datavations.svg'
  },
  {
    alt: 'full-court',
    img: '/images/home/our-clients/full-court.svg'
  },
  {
    alt: 'gipper',
    img: '/images/home/our-clients/gipper.svg'
  },
  {
    alt: 'harvest',
    img: '/images/home/our-clients/harvest.svg'
  },
  {
    alt: 'heli',
    img: '/images/home/our-clients/heli.svg'
  },
  {
    alt: 'niural',
    img: '/images/home/our-clients/niural.svg'
  },
  {
    alt: 'omella',
    img: '/images/home/our-clients/omella.svg'
  },
  {
    alt: 'shotquality',
    img: '/images/home/our-clients/shotquality.svg'
  },
  {
    alt: 'soil-connect',
    img: '/images/home/our-clients/soil-connect.svg'
  },
  {
    alt: 'vesta',
    img: '/images/home/our-clients/vesta.svg'
  },
];

const OurClients = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setStartIndex(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const itemsPerPage = 8;
  const endIndex = startIndex + itemsPerPage;

  const isVisible = (index: number) => {
    return index >= startIndex && index < endIndex;
  };

  const prevItems = () => {
    setStartIndex((startIndex - itemsPerPage + clients.length) % clients.length);
  };

  const nextItems = () => {
    setStartIndex((startIndex + itemsPerPage) % clients.length);
  };

  return (
    <section className={styles['our-clients']}>
      <Container>
        <div className={styles['our-clients__inner']}>
          <div className={styles['our-clients__title']}>
            <Title variant="h2" className={styles['our-clients__title-text']}>Our clients</Title>
          </div>

          <div className={styles['our-clients__list']}>
            {clients.map((client, index) => (
              isVisible(index) && (
                <div key={client.alt} className={styles['our-clients__item']}>
                  <Image
                    src={client.img}
                    alt={client.alt}
                    width={142}
                    height={92}
                  />
                </div>
              )
            ))}
          </div>

          <div className={styles['our-clients__navigation']}>
            <ArrowButton
              direction="prev"
              onClick={prevItems}
              aria-label="Previous clients"
              className={styles['our-clients__navigation-btn--prev']}
            />

            <ArrowButton
              direction="next"
              onClick={nextItems}
              aria-label="Next clients"
              className={styles['our-clients__navigation-btn--next']}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurClients;
