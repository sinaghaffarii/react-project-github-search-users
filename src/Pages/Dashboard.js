import React from "react";
import { Navbar, Search, Info, User, Repos } from "../Components";
import { GithubContext } from "../Context/context";
import ScaleLoader from "react-spinners/ScaleLoader";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <div className="spinnerStyle">
          <ScaleLoader color={"#364F6B "} />
        </div>
      </main>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </div>
  );
};

export default Dashboard;
