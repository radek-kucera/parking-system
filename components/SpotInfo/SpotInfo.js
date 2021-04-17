import cls from './SpotInfo.module.scss';
import ReservationPopup from '../ReservationPopup/ReservationPopup';
import SpotInfoReserved from '../SpotInfoReserved/SpotInfoReserved';

const SpotInfo = ({ hasReservation, className = '', isBusy, ...props }) => {
  if (hasReservation) {
    return <SpotInfoReserved />;
  }
  return (
    <div className={cls['card']}>
      <h2 className={cls['heading']}>New reservation</h2>
      <div className={cls['wrapper']}>
        <img src="/car.svg"></img>
        <div className={cls['button']}>
          <ReservationPopup></ReservationPopup>
        </div>
      </div>
    </div>
  );
};

export default SpotInfo;
