"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Replace with actual API call
const dummyFixtures = [
  { id: "1", teamA: "Team Alpha", teamB: "Team Beta", date: "2025-06-01" },
];

export default function FixturesPage() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    setFixtures(dummyFixtures); // Replace with real fetch
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Manage Fixtures</h1>
      {fixtures.map((fix, idx) => (
        <div
          key={idx}
          className="p-4 border rounded flex justify-between items-center"
        >
          <span>
            {fix.teamA} vs {fix.teamB} - {fix.date}
          </span>
          <Button variant="destructive">Delete</Button>
        </div>
      ))}
    </div>
  );
}
