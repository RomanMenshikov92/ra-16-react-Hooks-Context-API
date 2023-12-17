import { useEffect, useState } from "react";
import { useStorage } from "./useStorage";
import { User } from "../interfaces/InterfaceUser";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { setStorageValue, removeStorageValue } = useStorage();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (login: string, password: string) => {
    try {
      const response = await fetch("http://localhost:7070/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        const profileResponse = await fetch("http://localhost:7070/private/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (profileResponse.ok) {
          const user = await profileResponse.json();
          setToken(token);
          setUser(user);
          setStorageValue("token", token);
          setStorageValue("user", JSON.stringify(user));
        }
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    removeStorageValue("token");
    removeStorageValue("user");
  };

  return { user, token, login, logout };
};
