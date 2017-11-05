import { Context } from "koa";
import render from "../views/landing";

var vdom = require("virtual-dom");

export async function landingAction(context: Context) {
  const template = render({});

  context.body = vdom.create(template).toString();
}
