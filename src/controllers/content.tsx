import { Context } from "koa";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import Content from "../views/content";

let apiRoot = 'https://v1-11-hbgl5gq-oiiukjqgkij7e.eu.platform.sh';
let rootLocationId = 68;

var client = require("graphql-client")({
  url: apiRoot + "/graphql/"
});

export async function contentAction(context: Context) {


  let query = `
  {
      content(id: 71) {
        name
        fields(identifier: ["title", "body", "main_image"]) {
          fieldDefIdentifier,
          value {
            ... on TextLineFieldValue {
              text
            }
            ... on RichTextFieldValue {
              html5
            }
            ... on ImageFieldValue {
              uri
            }
          }
        }
      }
    }
    `;
  
  let variables = {};
  
  const response = await client.query(query, variables);

  context.set('content-type','text/html');
  context.body = ReactDOMServer.renderToStaticNodeStream(<Content content={response.data.content} />);
}
