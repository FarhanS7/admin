"use client";

import { Button } from "@/components/ui/button";
import { deleteTeam, getTeams } from "@/lib/api";
import { useEffect, useState } from "react";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    const data = await getTeams();
    setTeams(data);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this team?")) return;
    await deleteTeam(id);
    await loadTeams();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Registered Teams</h1>
      <div className="grid gap-4">
        {teams.map((team) => (
          <div key={team._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <p>
              <strong>Captain:</strong> {team.captainName}
            </p>
            <p>
              <strong>Vice Captain:</strong> {team.viceCaptainName}
            </p>
            <p>
              <strong>Year:</strong> {team.year}
            </p>
            <h3 className="mt-2 font-semibold">Players:</h3>
            <ul className="list-disc pl-5">
              {team.players.map((p, idx) => (
                <li key={idx}>
                  {p.name} - {p.position} #{p.jerseyNumber}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <Button
                variant="destructive"
                onClick={() => handleDelete(team._id)}
              >
                Delete
              </Button>
              {/* You can add Approve/Edit buttons here later */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
