import { Link } from "react-router-dom";
import List from "../list/List";
import { useEffect, useState } from "react";
import { assemblyRows, assemblyColumns } from "../../assembly_json";

const AssemblyList = () => {
  const [assemblyList, setAssemblyList] = useState([]);
  const [assemblyListLoading, setAssemblyListLoding] = useState(true);
  const [assemblyListError, setAssemblyListError] = useState({
    error: false,
    message: true,
  });

  useEffect(() => {
    // setAssemblyListLoding(false);
    // setAssemblyList(assemblyRows);

    // TODO: test;
    fetch("/api/v1/subAssembly/Assembly", {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAssemblyListLoding(false);
        setAssemblyList(data);
      })
      .catch((err) => {
        console.error(err);
        setAssemblyListError({ error: true, message: err.message });
        setAssemblyListLoding(false);
      });
  }, []);

  return (
    <List
      title="Assembly"
      rows={assemblyList}
      columns={assemblyColumns}
      loading={assemblyListLoading}
    >
      <div className="listTopButtons">
        {
          <Link
            to="/fabrication/add"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <button className="add" variant="contained">
              Add New
            </button>
          </Link>
        }
      </div>
    </List>
  );
};

export default AssemblyList;
