import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import styles from './styles.module.scss';

const Hiring = () => {
  const tabs = [
    {
      title: 'reduction in time',
      titleIndicator: '4x',
      descriptionTitle: 'Idea to Launch Velocity',
      description: 'We\'ve designed AI- enabled workflows within our cross functional teams to focus on shortened cycles from idea to a live product.',
    },
    {
      title: 'candidates pass out screening process',
      titleIndicator: '3%',
      descriptionTitle: 'Highly selective',
      description: 'Due to our rigorous vetting procedure we ensure that you get the best talent to boost your success.',
    },
    {
      title: 'hours',
      titleIndicator: '300K',
      descriptionTitle: 'Proprietary Engineering Velocity Data Set',
      description: 'Over the past 8 years we\'ve collected over 300,000 hours of annotated time tracking data to more precisely identify inefficiency and opportunities for velocity acceleration.',
    },
    {
      title: 'higher retention than industry average',
      titleIndicator: '2X',
      descriptionTitle: 'Talent retention',
      description: 'We take care of your engineering team, making sure everyone has a professional development and growth plan, keeps on learning new skills and gets benefits and perks.',
    }
  ];

  return (
    <section className={styles['hiring']}>
      <Container>
        <Title variant="h2" className={styles['hiring__title']}>
          Team + Data + AI = Velocity
        </Title>

        <div className={styles['hiring__tabs']}>
          {tabs.map((tab, index) => (
            <div className={styles['hiring__tab']} key={index}>
              <div className={styles['hiring__left']}>
                <p className={styles['hiring__indicator']}>
                  {tab.titleIndicator}
                </p>

                <p className={styles['hiring__tab-text']}>
                  {tab.title}
                </p>
              </div>

              <div className={styles['hiring__right']}>
                <Title variant="h3" className={styles['hiring__description-title']}>
                  {tab.descriptionTitle}
                </Title>

                <p className={styles['hiring__description']}>
                  {tab.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hiring;

