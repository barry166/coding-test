import { IProfile } from '../types/profile';

interface IProps {
  user: IProfile;
  onEdit: () => void;
}

function ProfileDisplay(props: IProps) {
  const { user = {}, onEdit } = props;
  return (
    <div className="container">
      <div className="display-field">
        <span className="label">用户名:</span>
        <span>{user.username}</span>
      </div>
      <div className="display-field">
        <span className="label">邮箱:</span>
        <span>{user.email}</span>
      </div>
      <div className="display-field">
        <span className="label">手机号:</span>
        <span>{user.phone}</span>
      </div>
      <div className="display-field">
        <span className="label">描述:</span>
        <span>{user.desc}</span>
      </div>
      <button onClick={onEdit} className="button" type="button">
        编辑
      </button>
    </div>
  );
}

export default ProfileDisplay;
