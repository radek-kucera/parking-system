import { useRouter } from 'next/router';
import Button from '../../components/Button/Button';
import cls from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className={cls['footer']}>
      <div className={cls['container']}>
        <div className={cls['nav-links']}>
          <Link href="#about">About</Link>
          <Link href="#partners">Partners</Link>
          <Link href="#about">Contact</Link>
        </div>
        <div className={cls['copybar']}>
          <p>Copyright © park.it 2021</p>
          <span>
            Designed by<img src="/dreamind.svg"></img>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
