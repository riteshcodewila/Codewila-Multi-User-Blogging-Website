import React from "react";
import Layout from "../../components/Layout";
import Admin from "../../components/auth/admin"
const adminIndex = () => {
  return (
    <Layout>
      <Admin>
        <h2 className="text-center pt-4 pb-4">Admin Dashboard</h2>
      </Admin>
    </Layout>
  );
};
export default adminIndex;
