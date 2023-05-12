import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { userColumns, userRows } from "./user_json";
import { itemRows, itemColumns } from "./fabrication_json";
import { subAssemblyRows, subAssemblyColumns } from "./subassembly_json";
import { assemblyRows, assemblyColumns } from "./assembly_json";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={
                  <List
                    title="Edit Permissions"
                    rows={userRows}
                    columns={userColumns}
                  >
                    <div className="listTopButtons"></div>
                  </List>
                }
              />
              <Route path=":userId" element={<Single title="User Profile" />} />
            </Route>
            <Route path="items">
              <Route
                index
                element={
                  <List title="Items" rows={itemRows} columns={itemColumns}>
                    <div className="listTopButtons">
                      <Link
                        to="/items/new"
                        className="link"
                        style={{ textDecoration: "none" }}
                      >
                        <button className="add" variant="contained">
                          Add New
                        </button>
                      </Link>
                      <button className="delete" variant="contained">
                        Delete
                      </button>
                    </div>
                  </List>
                }
              />
              <Route path=":itemId" element={<Single title="Edit Item" />} />
              <Route path="new" element={<New title="Add New Item" />} />
            </Route>
            <Route path="sub-assembly">
              <Route
                index
                element={
                  <List
                    title="Sub-Assembly"
                    rows={subAssemblyRows}
                    columns={subAssemblyColumns}
                  >
                    <div className="listTopButtons">
                      <Link
                        to="/sub-assembly/new"
                        className="link"
                        style={{ textDecoration: "none" }}
                      >
                        <button className="add" variant="contained">
                          Add New
                        </button>
                      </Link>
                      <button className="delete" variant="contained">
                        Delete
                      </button>
                    </div>
                  </List>
                }
              />
              <Route
                path=":sub-assemblyId"
                element={<Single />}
                title="Edit Sub-Assembly"
              />
              <Route
                path="new"
                element={<New title="Add New Sub-Assembly" />}
              />
            </Route>

            <Route path="assembly">
              <Route
                index
                element={
                  <List
                    title="Assembly"
                    rows={assemblyRows}
                    columns={assemblyColumns}
                  >
                    <div className="listTopButtons">
                      <Link
                        to="/assembly/new"
                        className="link"
                        style={{ textDecoration: "none" }}
                      >
                        <button className="add" variant="contained">
                          Add New
                        </button>
                      </Link>
                      <button className="delete" variant="contained">
                        Delete
                      </button>
                    </div>
                  </List>
                }
              />
              <Route
                path=":assemblyId"
                element={<Single />}
                title="Edit Assembly"
              />
              <Route path="new" element={<New title="Add New Assembly" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
