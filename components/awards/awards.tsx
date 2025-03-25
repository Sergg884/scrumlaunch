import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';
import cn from 'classnames';
import styles from './styles.module.scss';

const awardsList = [
  {
    id: 'inc5000',
    alt: 'inc5000',
    src: '/images/home/awards/inc5000.png',
    className: styles['awards__icon-inc']
  },
  {
    id: 'clutch',
    alt: 'clutch',
    src: '/images/home/awards/clutch.png',
    className: styles['awards__icon-clutch']
  },
  {
    id: 'goodFirms',
    alt: 'goodFirms',
    src: '/images/home/awards/goodFirms.png',
    className: styles['awards__icon-good-firms']
  },
  {
    id: 'austin',
    alt: 'austin',
    src: '/images/home/awards/austin.png',
    className: styles['awards__icon-austin']
  },
  {
    id: 'topWorkPlaces',
    alt: 'topWorkPlaces',
    src: '/images/home/awards/topWorkPlaces.png',
    className: styles['awards__icon-top-work-places']
  },
  {
    id: 'designrush',
    alt: 'designrush',
    src: '/images/home/awards/designrush.png',
    className: styles['awards__icon-designrush']
  },
];

const Awards = () => {

  return (
    <section className={styles['awards']}>
      <Container>
        <Title variant="h2" className={styles['awards__title']}>
          Our Awards
        </Title>

        <div className={styles['awards__tabs']}>
          {awardsList.map((award) => (
            <div className={styles['awards__tab']} key={award.id}>
              <Image
                className={cn(styles['awards__icon'], award.className)}
                src={award.src}
                alt={award.alt}
                width={150}
                height={80}
              />
            </div>
          ))}
        </div>

        <div className={styles['awards__behemoths-wrapper']}>
          <Image
            src="/images/home/awards/behemoths.png"
            alt="behemoths"
            width={300}
            height={100}
          />
        </div>
      </Container>
    </section>
  );
};

export default Awards;
