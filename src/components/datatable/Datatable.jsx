import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import TablePagination from "@mui/material/TablePagination";

import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ({ rows, columns, title }) => {
  const [data, setData] = useState(rows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="editButton">Edit</div>
            </Link>
          </div>
        );
      },
    },
  ];
  console.log(rows);
  return (
    <div className="datatable">
      <DataGrid
        key={title}
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
