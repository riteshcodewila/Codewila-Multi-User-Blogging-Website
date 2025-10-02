import React from "react";
import Layout from "../../components/Layout";
import Admin from "../../components/auth/admin";
import Link from "next/link";
const adminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 bg-primary">
              <h2 className="text-center pt-4 pb-4">Admin Dashboard</h2>
            </div>
            <div className="col-md-4 mt-3">
              <ul   className="list-group">
                <li className="list-group-item">
                  <Link href="/admin/crud/category-tag/">
                  Create Category
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8 mt-3">Right</div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};
export default adminIndex;
