"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const dummyScores = [{ id: "1", match: "Alpha vs Beta", score: "2-1" }];

export default function ScoresPage() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    setScores(dummyScores); // Replace with API
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Manage Scores</h1>
      {scores.map((s, idx) => (
        <div key={idx} className="border p-4 rounded flex justify-between">
          <span>
            {s.match}: {s.score}
          </span>
          <Button>Edit</Button>
        </div>
      ))}
    </div>
  );
}
