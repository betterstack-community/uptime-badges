import "server-only";
import type { MonitorStatus, UptimeMonitorResponse } from "@/types/betterstack";

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

    const statusCounts = data.reduce((acc, monitor) => {
      const status = monitor.attributes.status;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {} as Record<MonitorStatus, number>);

    // Determine overall status based on priority
    if (statusCounts.down) {
      statusColor = "bg-red-500";
      statusLabel =
        statusCounts.down === data.length
          ? "Systems down"
          : "Partial outage (some systems down)";
    } else if (statusCounts.validating) {
      statusColor = "bg-yellow-500";
      statusLabel =
        statusCounts.validating === data.length
          ? "Systems recovering"
          : "Partial recovery";
    } else if (statusCounts.maintenance) {
      statusColor = "bg-blue-500";
      statusLabel =
        statusCounts.maintenance === data.length
          ? "Maintenance mode"
          : "Partial maintenance";
    } else if (statusCounts.pending) {
      statusColor = "bg-purple-500";
      statusLabel =
        statusCounts.pending === data.length
          ? "Status pending"
          : "Partial pending status";
    } else if (statusCounts.paused) {
      statusColor = "bg-gray-500";
      statusLabel =
        statusCounts.paused === data.length
          ? "Monitoring paused"
          : "Partially paused";
    } else if (statusCounts.up === data.length) {
      statusColor = "bg-green-500";
      statusLabel = "All systems normal";
    } else {
      // This case should now only happen if there's a mix of "up" and unknown statuses
      statusColor = "bg-orange-500";
      statusLabel = "Unknown status";
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
