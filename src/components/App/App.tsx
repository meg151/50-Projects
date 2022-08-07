import FeatureDetails from "components/FeatureDetails/FeatureDetails";
import Home from "pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

interface AppProps {
  someProp?: any;
}

const App = ({ someProp }: AppProps) => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="">
        <FeatureDetails />
      </Route>
    </Router>
  );
};

export default App;
