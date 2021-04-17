import { useRouter } from 'next/router';
import Button from '../../components/Button/Button';
import EmojiTab from '../../components/EmojiTab/EmojiTab';
import cls from './Header.module.scss';

const Header = () => {
  const router = useRouter();

  return (
    <header className={cls['header']}>
      <h1>
        Don't worry about parking,{'\n'}just <span>park</span>
        <span>.it</span>
      </h1>
      <div className={cls['emoji-tab-container']}>
        <EmojiTab emoji={'😉'} title="Friendly and easy" />
        <EmojiTab emoji={'🚀'} title="Efficient and automatic" />
        <EmojiTab emoji={'⚙️'} title="Fast and relible" />
      </div>
      <Button onClick={() => router.push('/sign')}>Get started</Button>
    </header>
  );
};

export default Header;
