import { useForm, SubmitHandler } from 'react-hook-form';
import api from '../libs/api';
import { IProfile } from '../types/profile';
import message from './message';

interface IProps {
  user: IProfile;
  onSave: (data: IProfile) => void;
}

function ProfileForm(props: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfile>({
    defaultValues: props.user,
  });

  const onSubmit: SubmitHandler<IProfile> = (data) => {
    api
      .post('/api/profile', data)
      .then(() => {
        message.success('保存成功');
        props.onSave(data);
      })
      .catch((err) => {
        console.error(err);
        message.success('保存失败');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <div className="form-group">
        <label htmlFor="username">用户名</label>
        <input
          id="username"
          {...register('username')}
          className={`input-field ${errors.username ? 'is-invalid' : ''}`}
          placeholder="Username"
        />
        {errors.username && <span className="error">{errors.username.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">邮箱</label>
        <input
          id="email"
          {...register('email', {
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: '请输入正确的邮箱格式',
            },
          })}
          className={`input-field ${errors.email ? 'is-invalid' : ''}`}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">手机号</label>
        <input
          id="phone"
          {...register('phone', {
            pattern: {
              value: /^1[3-9]\d{9}$/,
              message: '请输入正确的手机号',
            },
          })}
          className={`input-field ${errors.phone ? 'is-invalid' : ''}`}
          placeholder="Phone"
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">描述</label>
        <textarea
          id="description"
          rows={3}
          {...register('desc')}
          className={`input-field ${errors.desc ? 'is-invalid' : ''}`}
        />
        {errors.desc && <span className="error">{errors.desc.message}</span>}
      </div>

      <button type="submit" className="button">
        保存更改
      </button>
    </form>
  );
}

export default ProfileForm;
