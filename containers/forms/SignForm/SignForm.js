import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import cls from './SignForm.module.scss';
import { URL_SIGN } from '../../../dotenv';
import setAuth from '../../../actions/authActions';

const SignForm = () => {
  const { register, handleSubmit } = useForm();
  const [isBusy, setBusy] = useState(false);
  const [isError, setError] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (form) => {
    try {
      setBusy(true);
      setError(false);

      const { data } = await axios.post(URL_SIGN, form);

      if (!data.success) {
        return setError(data.errors.reason);
      }

      const { success, ...tokens } = data;

      dispatch(setAuth(tokens));
    } catch (err) {
      console.error(err);
      setError('Unexpected error!');
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className={cls['sign-form']}>
      <img src="/logo.svg" width="60%"></img>
      <h1>Sign in</h1>

      <form className={cls['sign-form-container']} onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Username" name="username" register={register} />
        <Input placeholder="Password" name="password" type="password" register={register} />
        <p className={cls['error']}>{isError || ''}</p>
        <Button type="submit" isBusy={isBusy}>
          Sign in
        </Button>
      </form>
    </section>
  );
};

export default SignForm;
