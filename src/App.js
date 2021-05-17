import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
// Import Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* Define url of the componenet with Route */}
      {/* Switch makes it stop as soon as it encounters a matching url */}
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        {/* Can also write as:   <Route exact path="/" component={AboutUs} />   */}
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
