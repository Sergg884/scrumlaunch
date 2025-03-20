import Title from '@/components/ui/title';
import styles from './styles.module.scss';
import Container from '../ui/container';

const tabs = [
  {
    title: 'Accelerated Velocity:',
    text: '70% faster product delivery',
    description: 'Using AI enabled workflows & development tools',
  },
  {
    title: 'Client lifetime:',
    text: '3+ years',
    description: 'Average client partnership',
  },
  {
    title: 'Results:',
    text: '50+ new products launched',
    description: 'Trusted by tech and finance industry leaders',
  },
];

const TechPartner = () => {
  return (
    <section className={styles['tech-partner']}>
      <Container>
        <Title variant="h2" className={styles['tech-partner__title']}>
          Companies we work with achieve positive business outcomes
        </Title>

        <div className={styles['tech-partner__tabs']}>
          {tabs.map((tab, index) => (
            <div key={index} className={styles['tech-partner__tab']}>
              <p className={styles['tech-partner__tab-title']}>{tab.title}</p>

              <Title variant="h3" className={styles['tech-partner__tab-text']}>
                {tab.text}
              </Title>

              <p className={styles['tech-partner__tab-description']}>
                {tab.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechPartner;
