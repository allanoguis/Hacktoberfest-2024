import React from "react";
import Collaborators from "../../sections/contributors";
import Footer from "../../sections/footer";

const contributorsPage = () => {
  return (
    <>
      <main className="grid h-screen overscroll-y-auto min-w-full">
        <Collaborators />
        <Footer />
      </main>
    </>
  );
};

export default contributorsPage;
