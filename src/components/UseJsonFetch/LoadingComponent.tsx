import useJsonFetch from "./hooks/UseJsonFetch";

export const LoadingComponent: React.FC = () => {
  const url = "http://localhost:7070/loading";
  const { data, loading, error } = useJsonFetch(url);

  return (
    <>
      {data && <div className="general__loading-data">Data: {JSON.stringify(data)}</div>}
      {error && <div className="general__loading-error">Error: {error}</div>}
      {loading && <div className="general__loading">Loading...</div>}
    </>
  );
};
