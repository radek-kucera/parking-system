import { useRouter } from 'next/router';
import Button from '../../components/Button/Button';
import cls from './About.module.scss';

const About = () => {
  const router = useRouter();

  return (
    <section className={cls['about']} id="#about">
      <h1>Reservation parking system for the future of mobility</h1>
      <p>
        Easily manage your parking space in your building. Permanent slots for managers, temporary for employees and
        possibly also for guests. It’s easy. You can assign your space with a snap. Just like this!
        <img src="/snap.svg"></img>
      </p>
      <img src="/parking_car.svg"></img>
      <Button onClick={() => router.push('/sign')}>Get started</Button>
    </section>
  );
};

export default About;
