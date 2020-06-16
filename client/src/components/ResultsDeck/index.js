import React from "react";
import ResultsCard from "../ResultsCard";

function ResultsDeck() {
  return (
    <div className="row row-cols-2 row-cols-md-4">
      <ResultsCard></ResultsCard>
      <ResultsCard></ResultsCard>
      <ResultsCard></ResultsCard>
      <ResultsCard></ResultsCard>
      <ResultsCard></ResultsCard>
      <ResultsCard></ResultsCard>
      <ResultsCard></ResultsCard>
    </div>
  );
}

export default ResultsDeck;
