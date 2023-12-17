import useJsonFetch from "./hooks/UseJsonFetch";

export const ErrorComponent: React.FC = () => {
  const url = "http://localhost:7070/error";
  const { data, loading, error } = useJsonFetch(url);

  return (
    <>
      {data && <div className="general__error-data">Data: {JSON.stringify(data)}</div>}
      {error && <div className="general__error">Error: {error}</div>}
      {loading && <div className="general__error-loading">Loading...</div>}
    </>
  );
};
