'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/container';
import styles from './styles.module.scss';

const locations = [
  'Portland, OR',
  'Los Angeles, CA',
  'Ukraine',
  'Brazil',
  'Poland',
];

const socials = [
  {
    path: 'https://www.youtube.com/@scrumlaunch/videos',
    icon: 'youtube',
    alt: 'footer-youtube',
  },
  {
    path: 'https://www.linkedin.com/company/scrumlaunch/mycompany/',
    icon: 'linkedin',
    alt: 'footer-linkedin',
  },
  {
    path: 'https://dribbble.com/scrumlaunch',
    icon: 'dribble',
    alt: 'footer-dribble',
  },
  {
    path: 'https://www.tiktok.com/@scrumlaunch',
    icon: 'tiktok',
    alt: 'footer-tiktok',
  },
  {
    path: 'https://www.behance.net/scrumlaunch',
    icon: 'behance',
    alt: 'footer-behance',
  },
  {
    path: 'https://instagram.com/scrumlaunch.us?igshid=MzRlODBiNWFlZA==',
    icon: 'instagram',
    alt: 'footer-instagram',
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles['footer__email-mobile']}>
          <p className={styles.footer__title}>Email</p>

          <Link
            href="mailto:hello@scrumlaunch.com"
            className={styles['footer__email-link']}
          >
            hello@scrumlaunch.com
          </Link>
        </div>

        <div className={styles.footer__wrapper}>
          <div className={styles.footer__column}>
            <Link href="/privacy-policy" className={styles.footer__link}>
              Privacy Policy
            </Link>

            <Link href="/services" className={styles.footer__link}>
              Services
            </Link>

            <Link href="/work" className={styles.footer__link}>
              Case Studies
            </Link>

            <Link href="/blog" className={styles.footer__link}>
              Blog
            </Link>

            <Link href="/hire-developers" className={styles.footer__link}>
              IT Recruiting
            </Link>

            <Link href="/process" className={styles.footer__link}>
              About
            </Link>
          </div>

          <div className={styles.footer__column}>
            <Link href="/remote-developer-jobs" className={styles.footer__link}>
              Careers
            </Link>

            <button onClick={() => {}} className={styles.footer__link}>
              Contact
            </button>

            <Link href="/referral" className={styles.footer__link}>
              Referral Program
            </Link>

            <Link href="/leadership" className={styles.footer__link}>
              Leadership
            </Link>

            <Link href="/sitemap" className={styles.footer__link}>
              Sitemap
            </Link>
          </div>

          <div className={styles.footer__info}>
            <div className={styles['footer__email-desktop']}>
              <p className={styles.footer__title}>Email</p>

              <Link
                href="mailto:hello@scrumlaunch.com"
                className={styles['footer__email-link']}
              >
                hello@scrumlaunch.com
              </Link>
            </div>

            <div className={styles.footer__social}>
              {socials.map((social) => (
                <Link
                  key={social.icon}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer__socialLink}
                >
                  <Image
                    src={`/icons/social/${social.icon}.svg`}
                    alt={social.alt}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          <ul className={styles.footer__locations}>
            {locations.map((location) => (
              <li key={location} className={styles.footer__location}>
                {location}
              </li>
            ))}
          </ul>

          <div className={styles.footer__copyright}>
            <p>© ScrumLaunch {new Date().getFullYear()}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
