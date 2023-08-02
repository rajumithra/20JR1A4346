import React, { useState, useEffect } from "react";
import { getTrains } from "./api";
import TrainCard from "./TrainCard";

function TrainSchedule() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    getTrains().then((data) => setTrains(data));
  }, []);

  return (
    <div className="train-schedule">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default TrainSchedule;
