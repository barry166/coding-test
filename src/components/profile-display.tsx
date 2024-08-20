import { IProfile } from '../types/profile';

interface IProps {
  user: IProfile;
  onEdit: () => void;
}

const userKeyMap: { key: keyof IProfile; label: string }[] = [
  {
    key: 'username',
    label: '用户名',
  },
  {
    key: 'email',
    label: '邮箱',
  },
  {
    key: 'phone',
    label: '手机号',
  },
  {
    key: 'desc',
    label: '描述',
  },
];

function ProfileDisplay(props: IProps) {
  const { user = {}, onEdit } = props;
  return (
    <div className="container">
      {userKeyMap.map((item) => (
        <div className="display-field" key={item.key}>
          <span className="label">{item.label}:</span>
          <span>{user[item.key]}</span>
        </div>
      ))}
      <button onClick={onEdit} className="button" type="button">
        编辑
      </button>
    </div>
  );
}

export default ProfileDisplay;
