import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Project1 from "../pages/portfolio/Projects/1";
import Project2 from "../pages/portfolio/Projects/2";
import CzechBeads from "../pages/portfolio/Projects/CzechBeads";
import OrxidBotViber from "../pages/portfolio/Projects/OrxidBotVib";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location} basename="/PortfolioReact">
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/CzechBeads" element={<CzechBeads />} />
        <Route path="/OrxidBot" element={<OrxidBotViber  />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
