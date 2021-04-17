import cls from './ReservationPopup.module.scss';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from '../../../components/Button/Button';
import ReservationForm from '../../forms/ReservationForm/ReservationForm';

const ReservationPopup = () => {
  const [reserved, setReserved] = useState(false);

  const reservation = (
    <>
      <div className={cls['header']}>New reservation</div>
      <ReservationForm onReserve={(value) => setReserved(value)} />
    </>
  );

  const date = reserved ? new Date(reserved.date).toLocaleDateString() : null;
  const dateFrom = reserved ? new Date(reserved.timeFrom).toLocaleTimeString() : null;
  const dateTo = reserved ? new Date(reserved.timeTo).toLocaleTimeString() : null;

  const congratulation = (
    <>
      <div className={cls['header']}> Congratulations 🎉</div>
      <div className={cls['content']}>
        <p>You just booked your parking slot!</p>
        <div className={cls['wrapper']}>
          <img src="/car_green.svg"></img>
        </div>

        <b>{date}</b>
        <span>
          {date ? dateFrom.slice(0, dateFrom.length - 3) : ''}
          <b> - </b>
          {date ? dateTo.slice(0, dateTo.length - 3) : ''}
        </span>
      </div>
    </>
  );

  return (
    <Popup trigger={<Button>Book</Button>} modal>
      {(close) => {
        return (
          <div className={cls['modal']}>
            <button
              className={cls['close']}
              onClick={() => {
                setReserved(null);
                close();
              }}
            >
              &times;
            </button>

            {reserved && reserved.date ? congratulation : reservation}
          </div>
        );
      }}
    </Popup>
  );
};

export default ReservationPopup;
