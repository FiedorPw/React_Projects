import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router";

function RootLayout() {
  return (
      <>
      <MainHeader/>
      <outlet/>
    </>
    
  );
}

export default RootLayout;
