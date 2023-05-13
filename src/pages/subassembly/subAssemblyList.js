import { Link } from "react-router-dom";
import List from "../list/List";
import { subAssemblyRows, subAssemblyColumns } from "../../subassembly_json";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const SubAssemblyList = () => {
  const [assemblyList, setAssemblyList] = useState([]);
  const [assemblyListLoading, setAssemblyListLoding] = useState(true);
  const [assemblyListError, setAssemblyListError] = useState({
    error: false,
    message: true,
  });

  useEffect(() => {
    // setAssemblyListLoding(false);
    // setAssemblyList(subAssemblyRows);

    // TODO: test
    fetch(process.env.REACT_APP_BASE_URL + "/fabrication/getFabrication", {
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
      title="Items"
      rows={subAssemblyRows}
      columns={subAssemblyColumns}
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

export default SubAssemblyList;
