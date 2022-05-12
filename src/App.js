import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages";
import Rekomendasi from './pages/Rekomendasi';
import DetailRekomendasi from './pages/Detail_Rekomendasi';
import Artikel from './pages/Artikel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rekomendasi" exact component={Rekomendasi} />
        {/* <Route path="/detail_rekomendasi" exact component={DetailRekomendasi} /> */}
        <Route path="/artikel" exact component={Artikel} />
        <Route path="/rekomendasi/:nama_barang" exact component={DetailRekomendasi} />
      </Switch>
    </Router>
  );
}

export default App;
