import cls from './WideButton.module.scss';

const Button = ({ children, className = '', isBusy, ...props }) => {
  return (
    <button className={`${cls['button']} ${className}`} disabled={isBusy} {...props}>
      {isBusy ? 'Loading...' : children}
    </button>
  );
};

export default Button;
