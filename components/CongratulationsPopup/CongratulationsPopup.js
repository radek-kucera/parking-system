import cls from './CongratulationsPopup.module.scss';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from '../Button/Button';

const ReservationPopup = () => {
  return (
    <Popup trigger={<Button>Book</Button>} modal>
      {(close) => (
        <div className={cls['modal']}>
          <button className={cls['close']} onClick={close}>
            &times;
          </button>
          <div className={cls['header']}> Congratulations 🎉</div>
          <div className={cls['content']}>
            <p>You just booked your parking slot!</p>
            <div className={cls['wrapper']}>
              <img src="/car_green.svg"></img>
              <span className={cls['slot']}>A15</span>
            </div>

            <span>mo 19. 4. 2021</span>
            <span>7:30 am - 8:30 am</span>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ReservationPopup;
