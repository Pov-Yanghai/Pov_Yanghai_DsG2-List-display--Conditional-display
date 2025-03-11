import React from 'react';

function Statistic({ scores }) {
  if (!scores || scores.length === 0) {
    return <div>No scores available.</div>;
  }

  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="statistic">
      <div className="stat-item">
        <span className="stat-label">AVERAGE</span>
        <span className="stat-value">{average.toFixed(2)}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">MIN</span>
        <span className="stat-value">{min}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">MAX</span>
        <span className="stat-value">{max}</span>
      </div>
    </div>
  );
}

export default Statistic;