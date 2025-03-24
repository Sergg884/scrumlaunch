import { FC } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props = {
  isWhite?: boolean;
}

const locations = ['North America', 'Europe', 'Latin America', 'Asia'];

const TalentMap: FC<Props> = ({ isWhite = false }) => {
  return (
    <div
      className={cn(styles['talent-map'], {
        [styles['talent-map--white']]: isWhite,
      })}
    >
      <Container>
        <div className={styles['talent-map__content']}>
          <div className={styles['talent-map__text-container']}>
            <div className={styles['talent-map__text-block']}>
              <Title variant="h3" className={styles['talent-map__title']}>
                Our team is global
              </Title>

              <p className={styles['talent-map__description']}>
                We build high performance teams to launch and scale products at
                venture velocity
              </p>
            </div>

            <div className={styles['talent-map__separator']} />

            <div className={styles['talent-map__locations']}>
              {locations.map((location, index) => (
                <div key={index} className={styles['talent-map__location']}>
                  <Image
                    src="/icons/marker.svg"
                    alt="location marker"
                    width={16}
                    height={16}
                    className={styles['talent-map__marker']}
                  />

                  <span className={styles['talent-map__location-name']}>
                    {location}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles['talent-map__image-container']}>
            <Image
              src={`/images/shared/talent-map/map${isWhite ? '--white' : ''}.svg`}
              alt="Talent Map"
              width={1200}
              height={500}
              className={styles['talent-map__image']}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TalentMap;
