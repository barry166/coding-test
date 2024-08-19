import { useState } from 'react';
import ProfileDisplay from '../components/profile-display';
import ProfileForm from '../components/edit-form';
import useGetProfile from '../hooks/use-get-profile';
import { IProfile } from '../types/profile';
import './home.scss';

function Home() {
  const [editMode, setEditMode] = useState(false);
  const { user, setUser } = useGetProfile();

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = (data: IProfile) => {
    setUser(data);
    setEditMode(false);
  };

  return !editMode ? (
    <ProfileDisplay user={user} onEdit={handleEdit} />
  ) : (
    <ProfileForm user={user || {}} onSave={handleSave} />
  );
}

export default Home;
