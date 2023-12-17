export interface User {
  id: string;
  name: string;
}

export interface UserDetails extends User {
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}
