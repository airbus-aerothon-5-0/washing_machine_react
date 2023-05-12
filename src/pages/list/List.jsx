import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

const List = ({ title, rows, columns, children }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar title={title} />
        {children}
        <Datatable key={title} rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default List;
