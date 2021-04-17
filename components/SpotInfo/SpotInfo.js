import cls from './SpotInfo.module.scss';
import SpotInfoReserved from '../SpotInfoReserved/SpotInfoReserved';
import ReservationPopup from '../../containers/modals/ReservationPopup/ReservationPopup';

const SpotInfo = ({ hasReservation, isCurrent, reservationInfo, className = '', onCancel, ...props }) => {
  if (hasReservation) {
    return <SpotInfoReserved reservationInfo={reservationInfo} isCurrent={isCurrent} onCancel={onCancel} />;
  }

  return (
    <div className={cls['card']} {...props}>
      <h2 className={cls['heading']}>New reservation</h2>
      <div className={cls['wrapper']}>
        <img src="/car.svg"></img>
        <div className={cls['button']}>
          <ReservationPopup />
        </div>
      </div>
    </div>
  );
};

export default SpotInfo;
