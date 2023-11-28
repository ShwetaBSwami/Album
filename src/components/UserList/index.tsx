import React, { useState, useEffect } from 'react';
import styles from './userlist.module.css';
import { BASE_URL } from '../../constant';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC<{ onSelectUser: (userId: number) => void }> = ({ onSelectUser }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem} onClick={() => onSelectUser(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(UserList);
