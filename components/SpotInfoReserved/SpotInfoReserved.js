import Button from '../Button/Button';
import cls from './SpotInfoReserved.module.scss';
import { format } from 'date-fns';
import Countdown from 'react-countdown';
import CountdownClock from '../../renderers/CountdownClock/CountdownClock';
import useEvent from '../../hooks/useEvent';

const SpotInfoReserved = ({ reservationInfo, isCurrent, className = '', isBusy, ...props }) => {
  const { remove } = useEvent();

  const countdownClockRenderer = ({ hours, minutes, seconds }) => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      remove(reservationInfo.id);
    }

    return <CountdownClock hours={hours} minutes={minutes} seconds={seconds} />;
  };

  return (
    <div className={cls['card']}>
      <h2 className={cls['heading']}>{isCurrent ? 'Current reservation' : reservationInfo.zakazka[0].kod}</h2>
      <div className={cls['wrapper']}>
        <div className={cls['img-wrapper']}>
          <img src={isCurrent ? '/car_red.svg' : '/car_green.svg'}></img>
          <span className={cls['slot']}></span>
        </div>
        {isCurrent ? (
          <Countdown date={new Date(reservationInfo.dokonceni)} renderer={countdownClockRenderer} />
        ) : (
          <div>
            <span className={cls['date']}>{format(new Date(reservationInfo.zahajeni), 'dd. MM. yyyy')}</span>
            <br></br>
            <span className={cls['date']}>
              {format(new Date(reservationInfo.zahajeni), 'HH:mm')} -{' '}
              {format(new Date(reservationInfo.dokonceni), 'HH:mm')}
            </span>
          </div>
        )}

        <div className={cls['button']}>
          <Button>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default SpotInfoReserved;
