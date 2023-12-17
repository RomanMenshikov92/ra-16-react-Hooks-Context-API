import React, { useState, useEffect } from "react";
import { ListChild } from "./ListChild";
import { DetailsChild } from "./DetailsChild";
import { User, UserDetails } from "./interface/InterfaceListAndDetails";
import "./list-and-details.css";

export const ListAndDetails: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json ")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (selectedUser) {
      setLoading(true);
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selectedUser.id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setUserDetails(data);
        });
    }
  }, [selectedUser]);

  const handleItemClick = (user: User) => {
    if (user === selectedUser) {
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
    }
  };

  return (
    <div className="list-and-details">
      <ListChild users={users} onItemClick={handleItemClick} selectedUser={selectedUser} />
      {loading ? <p className="list-and-details__loading">Loading...</p> : <DetailsChild user={userDetails} selectedUser={selectedUser} />}
    </div>
  );
};

export default ListAndDetails;
