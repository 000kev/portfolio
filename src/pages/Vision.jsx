import Divider from "../components/Divider";
import Carousel from "../components/Carousel";
import { VISION_EXPERIENCE } from "../assets/Experience_data";



export default function ReflectionPage() {
  return (
    <>
      <div className="relative inline-block">
        <img src="./src/assets/asimov.jpg" className="block w-screen h-auto md:w-1/2 md:mx-96 md:h-auto" />
      </div>
      <Divider />
      {/* PAGE CONTENT */}
            <span className="w-screen md:my-32">
            <h1 className="text-3xl font-heading font-extrabold m-auto md:mt-10 text-center">My Vision</h1>
                <p className="text-center text-lg m-5">"Lorem ipsum dolor" - Someone</p>

                <p className="text-center text-lg m-5 w-5/6 md:w-fit my-2">
                    {VISION_EXPERIENCE}
                </p>
            </span>
      {/* PAGE CONTENT */}
      <Divider />
    </>
  );
}
