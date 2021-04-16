import cls from './ReservationPopup.module.scss';
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
          <div className={cls['header']}> New reservation </div>
          <div className={cls['content']}>
            <p>
              Date:<input type="date" min="2018-01-01" max="2018-12-31"></input>
            </p>
            <p>
              From:<input type="time"></input>
            </p>
            <p>
              To:<input type="time"></input>
            </p>
          </div>
          <div className={cls['actions']}>
            <Button
              onClick={() => {
                close();
              }}
            >
              Book
            </Button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ReservationPopup;
