import { useRouter } from 'next/router';
import Button from '../../components/Button/Button';
import cls from './Companies.module.scss';

const Companies = () => {
  const router = useRouter();

  return (
    <section className={cls['companies']}>
      <h1>
        Join <b>150+ companies</b> in <b>20 countries</b> using park.it to easily manage their parking spots.
      </h1>
      <div className={cls['companies-tab-container']}>
        <div className={cls['img-container']}>
          <img src="/abra.svg"></img>
          <img src="/palladium.svg"></img>
          <img src="/ikea.svg"></img>
          <img src="/westfield.svg"></img>
          <img src="/praguegolf.svg"></img>
        </div>
      </div>
      <Button onClick={() => router.push('/sign')}>Contact</Button>
    </section>
  );
};

export default Companies;
