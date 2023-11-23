import Divider from "../components/Divider";
import Carousel from "../components/Carousel";

export default function CVPage() {
  return (
    <>
      <div className="relative inline-block">
        <img src="./src/assets/vangogh.jpg" className="block w-screen h-auto md:w-1/2 md:mx-96" />
      </div>
      <Divider />
      {/* PAGE CONTENT */}
            <div className="w-screen md:my-32">
            <h1 className="text-3xl font-heading font-extrabold m-auto md:mt-10 text-center">RESUME</h1>
                <p className="text-center text-lg m-5">"Lorem ipsum dolor" - Someone</p>
            </div>

            <div className="w-screen md:my-32">
            <h1 className="text-3xl font-heading font-extrabold m-auto md:mt-10 text-center">KEY SKILL SET</h1>
                <p className="text-center text-lg m-5">"Lorem ipsum dolor" - Someone</p>
            </div>
      {/* PAGE CONTENT */}
      <Divider />
    </>
  );
}
