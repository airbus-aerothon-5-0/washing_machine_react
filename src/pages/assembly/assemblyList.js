import { Link } from "react-router-dom";
import List from "./../list/List";
import { itemRows, itemColumns } from "./../../fabrication_json";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const AssemblyList = () => {
  const [assemblyList, setAssemblyList] = useState([]);
  const [assemblyListLoading, setAssemblyListLoding] = useState(true);
  const [assemblyListError, setAssemblyListError] = useState({
    error: false,
    message: true,
  });

  useEffect(() => {
    // setAssemblyListLoding(false);
    // setAssemblyList([
    //   {
    //     id: 1,
    //     item_id: "T1",
    //     in_date: "2023-03-10T00:00:00.000+00:00",
    //     out_date: "2023-03-10T00:00:00.000+00:00",
    //     rawMaterials: {
    //       id: 1,
    //       raw_material_name: "steel sheet",
    //       item_name: "tub",
    //       quantity_value: 10.0,
    //       quantity_unit: "kg",
    //     },
    //   },
    //   {
    //     id: 2,
    //     item_id: "T2",
    //     in_date: "2023-03-10T00:00:00.000+00:00",
    //     out_date: "2023-03-10T00:00:00.000+00:00",
    //     rawMaterials: {
    //       id: 2,
    //       raw_material_name: "leather",
    //       item_name: "belt",
    //       quantity_value: 10.0,
    //       quantity_unit: "kg",
    //     },
    //   },
    // ]);

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
        setAssemblyList(data);
      })
      .catch((err) => {
        console.error(err);
        setAssemblyListError({ error: true, message: err.message });
      });
  }, []);

  return (
    <List
      title="Items"
      rows={itemRows}
      columns={itemColumns}
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
