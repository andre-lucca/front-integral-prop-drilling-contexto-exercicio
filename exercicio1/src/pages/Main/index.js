import { useState } from 'react';
import UserContext from '../../contexts/UserContext';
import UsersList from '../../components/UsersList';
import UsersRegister from '../../components/UsersRegister';
import './styles.css';

export default function Main() {
  const [usersData, setUsersData] = useState([]);
  const [userInEditing, setUserInEditing] = useState(false);

  function handleDeleteUser(userId) {
    const localUsersData = [...usersData];

    const index = localUsersData.findIndex(item => item.id === userId);

    localUsersData.splice(index, 1);

    setUsersData(localUsersData);
  }

  return (
    <UserContext.Provider value={{ usersData, setUsersData, setUserInEditing, userInEditing, handleDeleteUser }}>
      <div className="container-main">
        <UsersRegister />
        <UsersList />
      </div>
    </UserContext.Provider>
  );
}
