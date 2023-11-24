import { useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const dialog = useRef();

  return (
    <div className="bg-blue-50">
      <Header />
      <main className="h-screen bg-blue-50">
        <div className="md:mx-auto">
          
          <p className="font-heading text-center text-3xl md:text-3xl md:my-11">
            Uh Oh... Looks like something strange happened!
          </p>
          <p className="font-heading text-center text-3xl md:text-3xl md:my-11">
            No worries, just use the menu!
          </p>
          <img
            className="md:mx-auto md:my-40"
            src="./src/assets/error.png"
          ></img>
        </div>
      </main>
      <Footer onClick={() => dialog.current.open()} />
    </div>
  );
}
