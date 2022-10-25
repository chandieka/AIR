import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import RecommendationPage from "./pages/recommendation.page";
import MapPage from "./pages/map.page";
import MetricsPage from "./pages/metrics.page";
import TopNavigation from "./components/navigation/top-navigation.component";
import SideNavigation from "./components/navigation/side-navigation.component";

function App() {
  return (
      <div className={"d-flex vh-100 vw-100 flex-column"}>
          <div className={"top-nav"}>
              <TopNavigation/>
          </div>
          <div className={"d-flex h-100"} style={{paddingTop: "40px"}}>
              <div className={"side-nav"}>
                  <SideNavigation/>
              </div>
              <div className={"overflow-scroll w-100"}>
                  <Routes>
                      <Route path="/" element={<MapPage/>}/>
                      <Route path="/map" element={<MapPage/>} />
                      <Route path="/metrics" element={<MetricsPage/>} />
                      <Route path="/recommend" element={<RecommendationPage/>} />
                  </Routes>
              </div>
          </div>
      </div>
  );
}

export default App;
