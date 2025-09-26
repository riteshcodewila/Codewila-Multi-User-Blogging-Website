import React from "react";
import Layout from "../../components/Layout"; // ✅ adjust the path if needed
import Private from "../../components/auth/private";

const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <h2 className="text-center pt-4 pb-4">User Dashboard</h2>
      </Private>
    </Layout>
  );
};

export default UserIndex;
