import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-800">
      <TopHeader />
      <Navbar />
      <main className="flex-grow ">
        <Outlet /> {/* Nested route renders here */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
