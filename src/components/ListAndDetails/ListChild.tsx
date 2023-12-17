import React from "react";
import { User } from "./interface/InterfaceListAndDetails";

export const ListChild: React.FC<{ users: User[]; onItemClick: (user: User) => void; selectedUser: User | null }> = ({ users, onItemClick, selectedUser }) => {
  return (
    <>
      <ul className='list-and-details__list list-reset'>
        {users.map((user) => (
          <li className={`list-and-details__item ${selectedUser !== null && selectedUser.id === user.id ? 'active' : ''}`} key={user.id} onClick={() => onItemClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};
