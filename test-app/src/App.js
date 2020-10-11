import React from "react";
import { Helmet } from "react-helmet";
import Router from "./container/Router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>리액트 헬멧을 이용한 타이틀 변경</title>
      </Helmet>
      Test 헬멧
      <div>
        <Link to="/test-A">페이지 A</Link>
        <br />
        <Link to="/test-B">페이지 B</Link>
      </div>
      <hr />
      <Router />
    </div>
  );
}

export default App;
