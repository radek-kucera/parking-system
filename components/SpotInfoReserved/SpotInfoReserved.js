import Button from '../Button/Button';
import cls from './SpotInfoReserved.module.scss';
import { format } from 'date-fns';
import Countdown from 'react-countdown';
import CountdownClock from '../../renderers/CountdownClock/CountdownClock';
import useEvent from '../../hooks/useEvent';

const SpotInfoReserved = ({ reservationInfo, isCurrent, className = '', onCancel, ...props }) => {
  const { remove, isBusy } = useEvent();

  const countdownClockRenderer = ({ hours, minutes, seconds }) => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      //to delete ...
    }

    return <CountdownClock hours={hours} minutes={minutes} seconds={seconds} />;
  };

  return (
    <div className={cls['card']}>
      <h3 className={cls['heading']}>{isCurrent ? 'Current reservation' : ''}&nbsp;</h3>
      <div className={cls['wrapper']}>
        <div className={cls['img-wrapper']}>
          <img src={isCurrent ? '/car_red.svg' : '/car_green.svg'}></img>
          <span className={cls['slot']}>{isCurrent ? `` : reservationInfo.zakazka[0].kod}</span>
        </div>
        {isCurrent ? (
          <Countdown date={new Date(reservationInfo.dokonceni)} renderer={countdownClockRenderer} />
        ) : (
          <div>
            <b className={cls['date']}>{format(new Date(reservationInfo.zahajeni), 'dd. MM. yyyy')}</b>
            <br></br>
            <span className={cls['date']}>
              {format(new Date(reservationInfo.zahajeni), 'HH:mm')}
              <b> - </b> {format(new Date(reservationInfo.dokonceni), 'HH:mm')}
            </span>
          </div>
        )}

        <div className={cls['button']}>
          <Button onClick={onCancel} isBusy={isBusy}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpotInfoReserved;
