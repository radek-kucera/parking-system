import cls from './ReservationPopup.module.scss';
import React from 'react';
import Popup from 'reactjs-popup';
import Input from '../Input/Input';
import 'reactjs-popup/dist/index.css';

const ReservationPopup = () => {
  return (
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      {(close) => (
        <div className={cls['modal']}>
          <button className={cls['close']} onClick={close}>
            &times;
          </button>
          <div className={cls['header']}> Enter time of reservation </div>
          <div className={cls['content']}>
            <p>lorem ipsum vole</p>
          </div>
          <div className={cls['actions']}>
            <button
              className="button"
              onClick={() => {
                console.log('modal closed ');
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ReservationPopup;
