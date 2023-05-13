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
import { subAssemblyRows, subAssemblyColumns } from "./subassembly_json";
import { assemblyRows, assemblyColumns } from "./assembly_json";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, createContext, useReducer } from "react";
import { initialState, reducer } from "./context/userReducer";
import { Fabrication } from "./pages/fabrication-add/Fabrication";
import { SubAssembly } from "./pages/sub-assembly-add/SubAssembly";
import { Assembly } from "./pages/assembly-add/Assembly";
import FabricationList from "./pages/fabrication/fabricationList";
import SubAssemblyList from "./pages/subassembly/subAssemblyList";

import { User } from "./pages/user-add/User";
import { itemRows } from "./fabrication_json";
import { itemColumns } from "./fabrication_json";

export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch2 } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch2({ type: "USER", payload: user });
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Single></Single>}></Route>
        <Route element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/fabrication/add" element={<Fabrication />} />
        <Route path="/sub-assembly/add" element={<SubAssembly />} />
        <Route path="/assembly/add" exact element={<Assembly />} />
        <Route path="/user/add" exact element={<User />} />
        {/* <Route path="/fabrication/raw-materials" exact element={<RawMaterialsView />} /> */}
        <Route path="users">
          <Route
            index
            element={
              <List title="Add Users" rows={userRows} columns={userColumns}>
                <div className="listTopButtons">
                  {state?.role_name === "data officer" && (
                    <Link
                      to="/user/add"
                      className="link"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="add" variant="contained">
                        Add New
                      </button>
                    </Link>
                  )}
                </div>
              </List>
            }
          />
          <Route path=":userId" element={<Single title="User Profile" />} />
        </Route>
        <Route path="items">
          <Route index element={<FabricationList />} />
          <Route path=":itemId" element={<Single title="Edit Item" />} />
          <Route path="new" element={<New title="Add New Item" />} />
        </Route>
        <Route path="sub-assembly">
          <Route index element={<SubAssemblyList />} />
          <Route
            path=":sub-assemblyId"
            element={<Single />}
            title="Edit Sub-Assembly"
          />
          <Route path="new" element={<New title="Add New Sub-Assembly" />} />
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
                  {state?.role_name === "assembly" && (
                    <Link
                      to="/assembly/add"
                      className="link"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="add" variant="contained">
                        Add New
                      </button>
                    </Link>
                  )}
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
  );
};

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [state, dispatch2] = useReducer(reducer, initialState);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <UserContext.Provider value={{ state: state, dispatch2: dispatch2 }}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
