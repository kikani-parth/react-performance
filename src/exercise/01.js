// Code splitting
// http://localhost:3000/isolated/exercise/01.js

/* OVERWRITE THE RESPECTIVE EXERCISE SOLUTIONS IN THIS FILE TO VIEW THE PAGE ON THE ABOVE ADDRESS*/
/* eg: COPY "01-exercise.js" FILE AND PASTE HERE TO LOAD ON THE ABOVE LOCALHOST ADDR */

import * as React from "react";

const loadGlobe = () => import(/* webpackPrefetch: true */ "../globe");
const Globe = React.lazy(loadGlobe);

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        padding: "2rem",
      }}
    >
      <label style={{ marginBottom: "1rem" }}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={(e) => setShowGlobe(e.target.checked)}
        />
        {" show globe"}
      </label>
      <div style={{ width: 400, height: 400 }}>
        <React.Suspense fallback={<div>loading...</div>}>
          {showGlobe ? <Globe /> : null}
        </React.Suspense>
      </div>
    </div>
  );
}
export default App;
