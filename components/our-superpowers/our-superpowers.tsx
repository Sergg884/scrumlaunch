import Image from 'next/image';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import styles from './styles.module.scss';

const tabs = [
  {
    img: '/images/home/superpowers/tab-1.svg',
    text: 'Rapid new product innovation',
  },
  {
    img: '/images/home/superpowers/tab-2.svg',
    text: 'Venture acceleration & product led growth',
  },
  {
    img: '/images/home/superpowers/tab-3.svg',
    text: 'Launching & scaling global teams',
  },
  {
    img: '/images/home/superpowers/tab-4.svg',
    text: 'Accelerated software development velocity',
  },
  {
    img: '/images/home/superpowers/tab-5.svg',
    text: 'Ability to drive business outcomes',
  },
];

const OurSuperpowers = () => {
  return (
    <section className={styles.superpowers}>
      <Container>
        <Title variant="h2" className={styles.superpowers__title}>
          Our superpowers
        </Title>

        <div className={styles.superpowers__row}>
          {tabs.map((tab, index) => (
            <div key={index} className={styles.superpowers__tab}>
              <Image
                src={tab.img}
                alt={`tab-${index + 1}`}
                width={80}
                height={80}
                className={styles.superpowers__image}
              />

              <p className={styles.superpowers__text}>{tab.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurSuperpowers;
