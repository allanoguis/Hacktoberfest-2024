import React, { Suspense } from "react";
import Collaborators from "../../sections/contributors";
import Footer from "../../sections/footer";

const contributorsPage = () => {
  return (
    <main className="grid h-screen overscroll-y-auto min-w-full">
      <Suspense>
        <Collaborators />
        <Footer />
      </Suspense>
    </main>
  );
};

export default contributorsPage;
