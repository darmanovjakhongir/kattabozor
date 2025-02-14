import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

import Home from "./pages/home/Home";

import Login from "./pages/auth/Login";

import PhoneDetail from "./pages/product/PhoneDetail";
import TabletDetail from "./pages/product/TabletDetail";
import TelevisionDetail from "./pages/product/TelevisionDetail";
import LaptopDetail from "./pages/product/LaptopDetail";
import SmartwatchDetail from "./pages/product/SmartwatchDetail";
import ConditionerDetail from "./pages/product/ConditionerDetail";
import RefrigeratorDetail from "./pages/product/RefrigeratorDetail";
import MonitorDetail from "./pages/product/MonitorDetail";

import Help from "./pages/help/Help";

import Contest from "./pages/contest/Contest";

import Privacy from "./pages/privacy/Privacy";
import TermsOfUse from "./pages/privacy/TermsOfUse";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />

        <Route path={routes.login} element={<Login />} />

        <Route path={routes.phoneDetail} element={<PhoneDetail />} />
        <Route path={routes.tabletDetail} element={<TabletDetail />} />
        <Route path={routes.televisionDetail} element={<TelevisionDetail />} />
        <Route path={routes.laptopDetail} element={<LaptopDetail />} />
        <Route path={routes.smartwatchDetail} element={<SmartwatchDetail />} />
        <Route path={routes.conditionerDetail} element={<ConditionerDetail />} />
        <Route path={routes.refrigeratorDetail} element={<RefrigeratorDetail />} />
        <Route path={routes.monitorDetail} element={<MonitorDetail />} />

        <Route path={routes.help} element={<Help />} />

        <Route path={routes.contest} element={<Contest />} />
  
        <Route path={routes.privacy} element={<Privacy />} />
        <Route path={routes.termsofuse} element={<TermsOfUse />} />

        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
