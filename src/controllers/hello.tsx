import { Context } from "koa";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import Hello from "../views/hello";

export async function helloAction(context: Context) {
  context.set('content-type','text/html');
  context.body = ReactDOMServer.renderToStaticNodeStream(<Hello name={context.params.name} />);
}
