import cls from './SpotInfoReserved.module.scss';
import { format } from 'date-fns';
import ReservationPopup from '../ReservationPopup/ReservationPopup';
import Countdown from 'react-countdown';
import CountdownClock from '../../renderers/CountdownClock/CountdownClock';

const SpotInfoReserved = ({ reservationInfo, isCurrent, className = '', isBusy, ...props }) => {
  const countdownClockRenderer = ({ hours, minutes, seconds }) => {
    return <CountdownClock hours={hours} minutes={minutes} seconds={seconds} />;
  };

  return (
    <div className={cls['card']}>
      <h2 className={cls['heading']}>{isCurrent ? 'Current reservation' : ''}</h2>
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
          <ReservationPopup text={isCurrent ? 'Cancel' : 'Edit'}></ReservationPopup>
        </div>
      </div>
    </div>
  );
};

export default SpotInfoReserved;
