import { Link } from "react-router-dom";
import List from "../list/List";
import { itemRows, itemColumns } from "../../fabrication_json";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const FabricationList = () => {
  const [fabricationList, setFabricationList] = useState([]);
  const [fabricationListLoading, setFabricationListLoding] = useState(true);
  const [fabricationListError, setFabricationListError] = useState({
    error: false,
    message: true,
  });

  useEffect(() => {
    // setFabricationListLoding(false);
    // setFabricationList([
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
    fetch("/api/v1/fabrication/getFabrication", {
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
        setfabricationList(data);
        setFabricationListLoding(false);
      })
      .catch((err) => {
        console.error(err);
        setfabricationListError({ error: true, message: err.message });
        setFabricationListLoding(false);
      });
  }, []);

  return (
    <List
      title="Items"
      rows={fabricationList}
      columns={itemColumns}
      loading={fabricationListLoading}
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

export default FabricationList;
