import Image from 'next/image';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import ScheduleCallButton from '@/components/schedule-call-button';
import styles from './styles.module.scss';

const HeroHome = () => {
  return (
    <Container>
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <div className={styles.hero__content}>
            <Title className={styles.hero__title}>
              PRODUCT DEVELOPMENT
              <br />
              <span className={styles['hero__title--marked']}>
                & VENTURE ACCELERATION
              </span>
            </Title>

            <p className={styles.hero__text}>
              We design, build and scale software products for high growth
              startups and mid market brands with a focus on product development
              velocity and data driven feedback loops.
            </p>
          </div>

          <div className={styles.hero__background}>
            <div className={styles.hero__background}>
              <Image
                src={'/images/home/home-desk.webp'}
                alt="Hero background"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1439px) 50vw, 560px"
                className={styles.hero__image}
              />
            </div>
          </div>
        </div>

        <ScheduleCallButton className={styles.hero__button}>
          Schedule a call
        </ScheduleCallButton>
      </section>
    </Container>
  );
};

export default HeroHome;
