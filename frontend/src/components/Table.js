import { useEffect, useState } from "react";
import Row from "./Row";
import { useUserStore } from "../stores/useUserStore";
import { SORT_ORDER } from "../constants/sortOrders";

const Table = () => {
  const {
    users,
    page,
    getUsers,
    prevPage,
    nextPage,
    fullNameSort,
    usernameSort,
  } = useUserStore();

  // Fetch 100 users on load
  useEffect(() => {
    getUsers(100);
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <button onClick={prevPage}>Previous</button> <span>{page}</span>{" "}
          <button onClick={nextPage}>Next</button>
        </div>
        <div>
          <div>
            Sort by Full Name{" "}
            <button
              className="border"
              onClick={() => fullNameSort(SORT_ORDER.ASCENDING)}
            >
              Ascending
            </button>
            <button
              className="border"
              onClick={() => fullNameSort(SORT_ORDER.DESCENDING)}
            >
              Descending
            </button>
          </div>
          <div>
            Sort by Username{" "}
            <button
              className="border"
              onClick={() => usernameSort(SORT_ORDER.ASCENDING)}
            >
              Ascending
            </button>
            <button
              className="border"
              onClick={() => usernameSort(SORT_ORDER.DESCENDING)}
            >
              Descending
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {users.slice((page - 1) * 10, page * 10).map((user) => (
          <div className="border shadow-md">
            <Row user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Table;
