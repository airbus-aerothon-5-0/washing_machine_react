import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const New = ({ title }) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar title={title} />
      </div>
    </div>
  );
};

export default New;
