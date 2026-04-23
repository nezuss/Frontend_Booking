import { useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/utils";

// ? Icons
import { MapPinHouse, Users, KeyRound, Ban, Briefcase } from "lucide-react";

// ? Components
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const rbmData = [
  { name: "chrome", count: 275, fill: "var(--color-chrome)" },
  { name: "safari", count: 200, fill: "var(--color-safari)" },
  { name: "firefox", count: 187, fill: "var(--color-firefox)" },
  { name: "edge", count: 173, fill: "var(--color-edge)" },
  { name: "other", count: 90, fill: "var(--color-other)" },
];
const rblData = rbmData;
const rbsData = rbmData;

const rbmConfig = {
  count: {
    label: "Count",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;
const rblConfig = rbmConfig;
const rbsConfig = rbmConfig;

interface TotalSums {
  reservations: number;
  users: number;
  locations: number;
  activeReservations: number;
  cancelledReservations: number;
}

export function Dashboard() {
  const [totalSums, setTotalSums] = useState<TotalSums>({
    reservations: 1,
    users: 61,
    locations: 561,
    activeReservations: 61,
    cancelledReservations: 11,
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            color: "bg-primary",
            title: "Reservations",
            icon: <KeyRound />,
            value: totalSums?.reservations,
          },
          {
            color: "bg-primary/85",
            title: "Users",
            icon: <Users />,
            value: totalSums?.users,
          },
          {
            color: "bg-primary/75",
            title: "Locations",
            icon: <MapPinHouse />,
            value: totalSums?.locations,
          },
          {
            color: "bg-primary/50",
            title: "Active Reservations",
            icon: <Briefcase />,
            value: totalSums?.activeReservations,
          },
          {
            color: "bg-primary/35",
            title: "Cancelled Reservations",
            icon: <Ban />,
            value: totalSums?.cancelledReservations,
          },
        ].map((item) => (
          <div
            className={cn(
              "min-w-76 w-full text-background flex flex-row rounded-2xl gap-x-4 p-4 [&_>svg]:size-18",
              item.color,
            )}
          >
            {item.icon}
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-3xl">{item.title}</h2>
              <p className="text-xl">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Reservations by month",
            data: rbmData,
            config: rbmConfig,
          },
          {
            title: "Reservations by Location",
            data: rblData,
            config: rblConfig,
          },
          {
            title: "Reservations by Status",
            data: rbsData,
            config: rbsConfig,
          },
        ].map((item) => (
          <div className="min-w-64 w-full border rounded-2xl p-4">
            <h2 className="text-2xl mb-4">{item.title}</h2>
            <ChartContainer config={item.config}>
              <BarChart
                accessibilityLayer
                data={item.data}
                layout="horizontal"
                margin={{
                  left: 0,
                }}
              >
                <XAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) =>
                    item.config[value as keyof typeof item.config]?.label
                  }
                />
                <YAxis dataKey="count" type="number" hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="count" radius={5} />
              </BarChart>
            </ChartContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
