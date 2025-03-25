import { FC } from 'react';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import styles from './styles.module.scss';

interface ThriveData {
  title: string;
  data: string;
}

const WeThrive: FC = () => {
  const arrayData: ThriveData[] = [
    {
      title: 'Acquisitions by Unicorns',
      data: '2'
    },
    {
      title: 'Сlients raised Seed - Series D funding',
      data: '10+'
    },
    {
      title: 'Active monthly users across clients’ products ',
      data: '100M'
    },
  ];

  return (
    <section className={styles['we-thrive']}>
      <Container>
        <Title variant="h2" className={styles['we-thrive__title']}>We thrive by making our <br /> clients thrive</Title>
        {arrayData.map((item, index) => (
          <div className={styles['we-thrive__data-row']} key={index}>
            <div className={styles['we-thrive__item-title']}>
              {item.title}
            </div>

            <div className={styles['we-thrive__data']}>
              {item.data}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default WeThrive;
