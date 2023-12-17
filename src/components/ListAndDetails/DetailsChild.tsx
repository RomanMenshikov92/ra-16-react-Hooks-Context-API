import React from "react";
import { User, UserDetails } from "./interface/InterfaceListAndDetails";

export const DetailsChild: React.FC<{ user: UserDetails | null; selectedUser: User | null }> = ({ user, selectedUser }) => {
  if (!user || !selectedUser || user.id !== selectedUser.id) {
    return null;
  }
  return (
    <div className="list-and-details__details">
      <img className="list-and-details__details-img" src={user.avatar} alt={user.name} />
      <h3 className="list-and-details__details-name">{user.name}</h3>
      <p className="list-and-details__details-city">City: {user.details.city}</p>
      <p className="list-and-details__details-company">Company: {user.details.company}</p>
      <p className="list-and-details__details-position">Position: {user.details.position}</p>
    </div>
  );
};
