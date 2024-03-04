import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((results, id) => {
        console.log(results)
        return <SearchResult result={results} key={id} />;
      })}
    </div>
  );
};