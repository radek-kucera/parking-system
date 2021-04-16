import cls from './Input.module.scss';

const Input = ({ register, className = '', name, ...props }) => {
  return <input name={name} className={`${cls['input']} ${className}`} {...props} {...register(name)} />;
};

export default Input;
