import React from "react";
import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/admin";
import Link from "next/link";
const categoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 bg-primary">
              <h2 className="text-center pt-4 pb-4">Manage Categories and Tags</h2>
            </div>
            <div className="col-md-4 mt-3">
              <ul   className="list-group">
                <p>Categories</p>
              </ul>
            </div>
            <div className="col-md-8 mt-3"><p>Tags</p></div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};
export default categoryTag;