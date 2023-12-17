import useJsonFetch from "./hooks/UseJsonFetch";

export const DataComponent: React.FC = () => {
  const url = "http://localhost:7070/data";

  const { data, loading, error } = useJsonFetch(url);


  return (
    <>
      {data && <div className="general__data">Data: {JSON.stringify(data)}</div>}
      {error && <div className="general__data-error">Error: {error}</div>}
      {loading && <div className="general__data-loading">Loading...</div>}
    </>
  );
};
