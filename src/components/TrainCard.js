import React from 'react';

function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h2>Train {train.number}</h2>
      <div className="train-info">
        <div className="info-row">
          <span className="label">Departure Station:</span>
          <span className="value">{train.departureStation}</span>
        </div>
        <div className="info-row">
          <span className="label">Departure Time:</span>
          <span className="value">{train.departureTime}</span>
        </div>
        <div className="info-row">
          <span className="label">Arrival Station:</span>
          <span className="value">{train.arrivalStation}</span>
        </div>
        <div className="info-row">
          <span className="label">Arrival Time:</span>
          <span className="value">{train.arrivalTime}</span>
        </div>
      </div>
    </div>
  );
}

export default TrainCard;
