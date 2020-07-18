import React, { useState, useCallback } from "react";
import Paginate from "./components/Pagination/Pagination";
import "./App.css";
import Cards from "./components/Cards/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search/Search";

export default function App() {
  const [users, setUsers] = useState([]);
  const [usersPerPage] = useState(6);
  const [currentPage, setPageNum] = useState(1);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const searchHandler = useCallback((ele) => {
    setUsers(ele);
  }, []);

  const activePageNum = (currentPage) => {
    setPageNum(currentPage);
  };

  return (
    <div className="App" style={{ padding: "16px" }}>
      <img
        style={{ width: "250px" }}
        src="https://www.macobserver.com/wp-content/uploads/2019/05/workfeatured-GitHub-2.png"
        alt="Logo"
      />
      <h1>GitHub - Bangalore</h1>
      <Search onFetch={searchHandler} />
      <Cards users={currentUsers} />
      <Paginate
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        currentPage={activePageNum}
      />
    </div>
  );
}
