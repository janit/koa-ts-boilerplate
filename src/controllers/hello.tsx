import { Context } from "koa";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import Hello from "../views/hello";

export async function helloAction(context: Context) {
  context.body = ReactDOMServer.renderToString(<Hello name={context.params.name} />);
}
