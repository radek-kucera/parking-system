import Link from 'next/link';
import cls from './Copyright.module.scss';

const Copyright = () => {
  return (
    <span className={cls['copyright']}>
      Copyright © <Link href="/">park.it</Link> {new Date().getFullYear()}.
    </span>
  );
};

export default Copyright;
