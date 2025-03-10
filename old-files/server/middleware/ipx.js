import {createIPX, createIPXMiddleware} from "ipx";

export default createIPXMiddleware(
  createIPX({
    dir: "static/"
  })
);