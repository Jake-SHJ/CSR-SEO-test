import React from "react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>리액트 헬멧을 이용한 타이틀 변경</title>
      </Helmet>
      Test 헬멧
    </div>
  );
}

export default App;
