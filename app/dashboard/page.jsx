// app/dashboard/page.jsx
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Total Players</h2>
          <p>123</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Total Teams</h2>
          <p>45</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Upcoming Matches</h2>
          <p>8</p>
        </CardContent>
      </Card>
    </div>
  );
}
