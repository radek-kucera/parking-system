import cls from './SpotInfoReserved.module.scss';
import ReservationPopup from '../ReservationPopup/ReservationPopup';

const SpotInfoReserved = ({ className = '', isBusy, ...props }) => {
  return (
    <div className={cls['card']}>
      <h2 className={cls['heading']}>Next reservation</h2>
      <div className={cls['wrapper']}>
        <div className={cls['img-wrapper']}>
          <img src="/car_green.svg"></img>
          <span className={cls['slot']}>A15</span>
        </div>

        <span className={cls['date']}>mo 19. 4. 2021</span>
        <br></br>
        <span className={cls['date']}>7:30 am - 8:30 am</span>
        <div className={cls['button']}>
          <ReservationPopup></ReservationPopup>
        </div>
      </div>
    </div>
  );
};

export default SpotInfoReserved;
