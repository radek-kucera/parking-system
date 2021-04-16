import cls from './ReservationPopup.module.scss';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ReservationPopup = () => {
  return (
    <Popup trigger={<button> Open Modal </button>} modal>
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
              onClick={() => {
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
