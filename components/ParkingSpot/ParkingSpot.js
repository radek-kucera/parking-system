import cls from './ParkingSpot.module.scss';

const ParkingSpot = ({ children, className = '', isBusy, ...props }) => {
  return (
    <button className={`${cls['button']} ${className}`} disabled={isBusy} {...props}>
      {isBusy ? 'Loading...' : children}
    </button>
  );
};

export default ParkingSpot;
