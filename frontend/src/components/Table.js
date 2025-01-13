import { useEffect, useRef, useState } from "react";
import randApi from "../api/randApi";
import Row from "./Row";
import { useUserStore } from "../stores/useUserStore";

const Table = () => {
  const { users, page, getUsers } = useUserStore();
  const textInput = useRef("");

  // Fetch 100 users on load
  useEffect(() => {
    getUsers(100);
  }, []);

  return (
    <div className="border-2 rounded-md shadow-md">
      {users.map((user) => (
        <div className="border">
          <Row user={user} />
        </div>
      ))}
    </div>
  );
};
export default Table;
