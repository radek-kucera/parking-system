import cls from './Input.module.scss';

const Input = ({ register, className = '', name, placeholder, ...props }) => {
  return (
    <div className={`${cls['input']} ${className}`}>
      <input name={name} className={`${cls['type']} ${className}`} {...props} spellCheck="false" {...register(name)} />
      <label className={`${cls['label']} ${className}`}>{placeholder}</label>
    </div>
  );
};

export default Input;
