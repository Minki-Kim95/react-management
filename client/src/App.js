import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

import { withStyles } from "@material-ui/core/styles";
import Batting from "./components/Batting";
import Main from "./components/Main";
import Result from "./components/Result";

const styles = (theme) => ({
  root: {
    margin: theme.spacing(3),
    overflowX: "auto",
    padding: "0 30px",
  },
});

class App1 extends Component {
  render() {
    return (
    
        <Router>
			<Routes>
			<Route exact path="/" element={<Main />} />
			<Route path="/batting" element={<Batting />} />
			<Route path="/result" element={<Result />} />
			</Routes>
		</Router>
        
    );
  }
}
export default (App1);
