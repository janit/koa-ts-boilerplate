import * as React from "react";
import Layout from "../components/Layout";

export default props => {

  return <Layout>
    <h1>{props.content.name}</h1>
    <p><a href="/">Landing page</a></p>
  </Layout>
}
