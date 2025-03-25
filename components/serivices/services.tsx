import styles from './styles.module.scss';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';

const Services = () => {
  const arrayData = [
    {
      text: 'Product development',
      img: '/images/home/services/tab-1.jpg'
    },
    {
      text: 'Building mid-market software teams',
      img: '/images/home/services/tab-2.jpg'
    },
  ];

  return (
    <section className={styles['services']}>
      <Container>
        <Title variant="h2" className={styles['services__title']}>Services</Title>
        {arrayData.map((item, index) => (
          <div className={styles['services__data-row']} key={index}>
            <div className={styles['services__text']}>
              {item.text}
            </div>

            <div className={styles['services__img']}>
              <Image
                src={item.img}
                alt={item.text}
                width={500}
                height={300}
              />
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Services;
