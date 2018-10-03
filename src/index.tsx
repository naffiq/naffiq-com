import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "medium-draft/lib/index.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
