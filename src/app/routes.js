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
import RR from "../pages/portfolio/Projects/rrepair";
import CzechBeads from "../pages/portfolio/Projects/CzechBeads";
import OrxidBotViber from "../pages/portfolio/Projects/OrxidBotVib";
import Museum from "../pages/portfolio/Projects/museum";
import OrxidStatistics from "../pages/portfolio/Projects/OrxidStatistics";
import BotPortfolio from "../pages/portfolio/Projects/BotPortfolio";
import StaticSite from "../pages/portfolio/Projects/StaticSite";
import Guard from "../pages/portfolio/Projects/Guard";
import BeadsParser from "../pages/portfolio/Projects/BeadsParser";
import  FamilyExpenses from "../pages/portfolio/Projects/FamilyExpenses";
import  WaterBot from "../pages/portfolio/Projects/WaterBot";
import  ByBit from "../pages/portfolio/Projects/ByBit";
import  BotBiznesStatistics from "../pages/portfolio/Projects/BotBiznesStatistics";
import  Gingr from "../pages/portfolio/Projects/Gingr";
import  Prokat from "../pages/portfolio/Projects/Prokat";
import  Atele from "../pages/portfolio/Projects/Atele";
import  Dedit from "../pages/portfolio/Projects/Dedit";
import  Make from "../pages/portfolio/Projects/Make";
import  Poland from "../pages/portfolio/Projects/Poland";
import  OtherPr from "../pages/portfolio/Projects/OtherPr";
import  MobDev from "../pages/portfolio/Projects/MobDev";

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
        <Route path="/RR" element={<RR/>} />
        <Route path="/CzechBeads" element={<CzechBeads />} />
        <Route path="/OrxidBot" element={<OrxidBotViber  />} />
        <Route path="/Museum" element={<Museum  />} />
        <Route path="/OrxidStatistics" element={<OrxidStatistics  />} />
        <Route path="/BotPortfolio" element={<BotPortfolio  />} />
        <Route path="/StaticSite" element={<StaticSite  />} />
        <Route path="/Guard" element={<Guard  />} />
        <Route path="/BeadsParser" element={<BeadsParser  />} />
        <Route path="/FamilyExpenses" element={< FamilyExpenses  />} />
        <Route path="/WaterBot" element={<WaterBot  />} />
        <Route path="/ByBit" element={<ByBit  />} />
        <Route path="/BotBiznesStatistics" element={<BotBiznesStatistics  />} />
        <Route path="/Gingr" element={<Gingr  />} />
        <Route path="/Prokat" element={<Prokat  />} />
        <Route path="/Atele" element={<Atele  />} />
        <Route path="/Dedit" element={<Dedit  />} />
        <Route path="/Make" element={<Make  />} />
        <Route path="/Poland" element={<Poland  />} />
        <Route path="/Other" element={<OtherPr />} /> 
        <Route path="/MobDev" element={<MobDev />} /> 
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
