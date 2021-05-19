import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
// Import Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence, animatePresence } from "framer-motion"; // to animate out when components are removed from the React tree

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* Define url of the componenet with Route */}
      {/* Switch makes it stop as soon as it encounters a matching url */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          {/* Can also write as:   <Route exact path="/" component={AboutUs} />   */}
          <Route path="/work" exact>
            <OurWork />
          </Route>
          {/* Link movie details page */}
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
