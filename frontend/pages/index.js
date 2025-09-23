import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <h1>Children Section</h1>
      <div style={{ marginTop: "20px" }}>
        <Link href="/signup">Signup</Link>
        <br />
         <Link href="/signin">Signin</Link>
      </div>
    </Layout>
  );
};

export default Home;
