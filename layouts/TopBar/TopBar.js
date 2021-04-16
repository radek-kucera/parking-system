import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../components/Button/Button';

import cls from './TopBar.module.scss';

const TopBar = () => {
  const router = useRouter();

  return (
    <nav className={cls['top-bar']}>
      <img src="/logo.svg" />

      <div className={cls['nav-links']}>
        <Link href="#about">About</Link>
        <Link href="#partners">Partners</Link>
        <Link href="#about">Contact</Link>
      </div>

      <Button onClick={() => router.push('/app')}>Get started</Button>
    </nav>
  );
};

export default TopBar;
