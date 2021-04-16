import cls from './SpotInfo.module.scss';
import ReservationPopup from '../ReservationPopup/ReservationPopup';

const SpotInfo = ({ children, className = '', isBusy, ...props }) => {
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
