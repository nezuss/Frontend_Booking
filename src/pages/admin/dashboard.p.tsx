import { useState, useEffect } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/utils";

// ? Icons
import {
  MapPinHouse,
  Users,
  KeyRound,
  Ban,
  Briefcase,
  House,
} from "lucide-react";

// ? Api
import { getDashboardInfo } from "@/api/admin";

// ? Components
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface TotalSums {
  totalReservations: number;
  totalUsers: number;
  totalRooms: number;
  totalLocations: number;
  activeReservations: number;
  cancelledReservations: number;
}

export function Dashboard() {
  const [totalSums, setTotalSums] = useState<TotalSums>({
    totalReservations: 0,
    totalUsers: 0,
    totalRooms: 0,
    totalLocations: 0,
    activeReservations: 0,
    cancelledReservations: 0,
  });

  const [rbmData, setRbmData] = useState([]);
  const [rblData, setRblData] = useState([]);
  const [rbsData, setRbsData] = useState([]);

  const [rbmConfig, setRbmConfig] = useState({});
  const [rblConfig, setRblConfig] = useState({});
  const [rbsConfig, setRbsConfig] = useState({});

  useEffect(() => {
    const fetchDashboardInfo = async () => {
      try {
        const result = await getDashboardInfo();

        if (result.success) {
          setTotalSums(result.content?.summary);
          setRbmData(
            result.content?.reservationsByMonth.map((item) => ({
              name: item.month,
              count: item.count,
              fill: `var(--chart-1)`,
            })),
          );
          setRblData(
            result.content?.reservationsByLocation.map((item) => ({
              name: item.name,
              count: item.count,
              fill: `var(--chart-1)`,
            })),
          );
          setRbsData(
            result.content?.reservationsByStatus.map((item) => ({
              name: item.status,
              count: item.count,
              fill: `var(--chart-1)`,
            })),
          );
          setRbmConfig(
            result.content?.reservationsByMonth.reduce(
              (config, { month, count }) => {
                config[month] = {
                  label: month,
                  count,
                };
                return config;
              },
              {},
            ),
          );
          setRblConfig(
            result.content?.reservationsByLocation.reduce(
              (config, { name, count }) => {
                config[name] = {
                  label: name,
                  count,
                };
                return config;
              },
              {},
            ),
          );
          setRbsConfig(
            result.content?.reservationsByStatus.reduce(
              (config, { status, count }) => {
                config[status] = {
                  label: status,
                  count,
                };
                return config;
              },
              {},
            ),
          );
        } else {
          console.error(result.content?.message);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchDashboardInfo();
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            color: "bg-primary",
            title: "Reservations",
            icon: <KeyRound />,
            value: totalSums?.totalReservations,
          },
          {
            color: "bg-primary/85",
            title: "Users",
            icon: <Users />,
            value: totalSums?.totalUsers,
          },
          {
            color: "bg-primary/85",
            title: "Rooms",
            icon: <House />,
            value: totalSums?.totalRooms,
          },
          {
            color: "bg-primary/75",
            title: "Locations",
            icon: <MapPinHouse />,
            value: totalSums?.totalLocations,
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
