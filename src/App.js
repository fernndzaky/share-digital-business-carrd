import React from "react";
import { Analytics } from "@vercel/analytics/react";

import Routes from "./routes";

const App = () => (
  <>
    <Routes />
    <Analytics />
  </>
);
export default App;
