import "server-only";
import type { UptimeMonitorResponse } from "@/types/betterstack";

export const Status = async () => {
  if (!process.env.BETTERSTACK_API_KEY || !process.env.BETTERSTACK_URL) {
    return null;
  }

  let statusColor = "bg-muted-foreground";
  let statusLabel = "Unable to fetch status";

  try {
    const response = await fetch(
      "https://uptime.betterstack.com/api/v2/monitors",
      {
        headers: {
          Authorization: `Bearer ${process.env.BETTERSTACK_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch status");
    }

    const { data } = (await response.json()) as UptimeMonitorResponse;

    const status =
      data.filter((monitor) => monitor.attributes.status === "up").length /
      data.length;

    if (status === 0) {
      statusColor = "bg-destructive";
      statusLabel = "Degraded performance";
    } else if (status < 1) {
      statusColor = "bg-orange-500";
      statusLabel = "Partial outage";
    } else {
      statusColor = "bg-green-500";
      statusLabel = "All systems normal";
    }
  } catch {
    statusColor = "bg-muted-foreground";
    statusLabel = "Unable to fetch status";
  }

  return (
    <a
      className="flex items-center gap-3 text-xs font-medium"
      target="_blank"
      rel="noreferrer"
      href={process.env.BETTERSTACK_URL}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${statusColor}`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${statusColor}`}
        />
      </span>
      <span className="text-muted-foreground">{statusLabel}</span>
    </a>
  );
};
