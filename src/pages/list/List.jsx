import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import CircularProgress from "@mui/material/CircularProgress";

const List = ({ title, rows, columns, children, loading }) => {
  if (loading) {
    return (
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar title={title} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <CircularProgress />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar title={title} />
        {children}
        <div>
          <Datatable key={title} rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default List;
