import { Outlet } from "react-router-dom";

// ? Components
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export function RootLayout(): React.ReactNode {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
