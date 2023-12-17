import { useContext, useState, useEffect } from "react";
import { News } from "../interfaces/InterfaceNews";
import { AuthContext } from "../contexts/AuthContent";

export const NewsFeed: React.FC = () => {
  const { token, logout } = useContext(AuthContext)!;
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:7070/private/news", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else if (response.status === 401) {
          logout();
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [logout, token]);

  return (
    <ul className="main__neto-newsfeed-list list-reset">
      {news.map((item) => (
        <li className="main__neto-newsfeed-item" key={item.id}>
          <img className="main__neto-newsfeed-item-img" src={item.image} alt={item.title} />
          <div className="main__neto-newsfeed-item-text">
            <h3 className="main__neto-newsfeed-item-title">{item.title}</h3>
            <p className="main__neto-newsfeed-item-paragraph">{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
