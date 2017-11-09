import { Context } from "koa";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import Landing from "../views/landing";

export async function landingAction(context: Context) {
  context.set('content-type','text/html');
  context.body = ReactDOMServer.renderToStaticNodeStream(<Landing />);
}
