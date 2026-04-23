import { useState } from "react";
import { Pie, PieChart } from "recharts";
import { cn } from "@/lib/utils";

// ? Icons
import { MapPinHouse, Users, KeyRound } from "lucide-react";

// ? Components
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { title } from "process";

const chartData = [
  { type: "active", clients: 275, fill: "var(--color-active)" },
  { type: "cancelled", clients: 200, fill: "var(--color-cancelled)" },
];

const chartConfig = {
  clients: {
    label: "Clients",
  },
  active: {
    label: "Active",
    color: "var(--chart-1)",
  },
  cancelled: {
    label: "Cancelled",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface TotalSums {
  reservations: number;
  users: number;
  locations: number;
}

export function Dashboard() {
  const [totalSums, setTotalSums] = useState<TotalSums>({
    reservations: 1,
    users: 61,
    locations: 561,
  });

  return (
    <>
      <div className="flex flex-row gap-6">
        {[
          {
            color: "bg-primary",
            title: "Reservations",
            icon: <KeyRound />,
            value: totalSums?.reservations,
          },
          {
            color: "bg-primary/75",
            title: "Users",
            icon: <Users />,
            value: totalSums?.users,
          },
          {
            color: "bg-primary/50",
            title: "Locations",
            icon: <MapPinHouse />,
            value: totalSums?.locations,
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
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie data={chartData} dataKey="clients" nameKey="type" />
        </PieChart>
      </ChartContainer>
    </>
  );
}
