import Footer from "@/components/footer";
// import "../global.css"
// import { useEffect } from "react";

/* import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";
import Popup from "@/components//ui/popup"; */

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*   useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }); */

  return (
    <>
      <main className="grow">{children}</main>
      {/* <Popup /> */}
      <Footer />
    </>
  );
}
