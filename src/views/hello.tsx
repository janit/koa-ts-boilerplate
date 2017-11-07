import * as React from "react";
import Layout from "../components/Layout";

export default props => (
  <Layout>
    <h1>Hello {props.name}</h1>
    <p><a href="/">Landing page</a></p>
  </Layout>
);
