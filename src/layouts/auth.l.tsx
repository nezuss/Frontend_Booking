import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

export function AuthLayout({
  className,
  ...props
}: React.ComponentProps<"div">): React.ReactNode {
  return (
    <div
      {...props}
      className={cn(
        "h-lvh grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center col-start-1 col-end-1">
        <Outlet />
      </div>
      <div className="bg-primary flex items-end justify-center col-start-2 col-end-4">
        <img
          className="hidden lg:block w-full"
          src="/assets/auth/auth-icon.png"
          alt=""
        />
      </div>
    </div>
  );
}
