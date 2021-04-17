import cls from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={cls['footer']} id="#contact">
      <div className={cls['container']}>
        <div className={cls['nav-links']}>
          <Link href="#about">About</Link>
          <Link href="#partners">Partners</Link>
          <Link href="#about">Contact</Link>
        </div>
        <div className={cls['copybar']}>
          <p>Copyright © park.it {new Date().getFullYear()}</p>
          <span>
            Designed by<img src="/dreamind.svg"></img>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
