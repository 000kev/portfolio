import Divider from "../components/Divider";
import Carousel from "../components/Carousel";

export default function CVPage() {
  return (
    <>
      <div className="relative inline-block">
        <img
          src="./src/assets/vangogh.jpg"
          className="block w-screen h-auto md:w-1/2 md:mx-96"
        />
      </div>
      <Divider />
      {/* PAGE CONTENT */}
      <div className="w-screen md:my-16">
        <h1 className="text-3xl font-heading font-extrabold m-auto md:mt-10 text-center">
          RESUME
        </h1>
        <a download href="./src/assets/kevin_kumasamba_resume.pdf">
        <button className="flex flex-col items-center p-3 mx-auto">
          <img src="./src/assets/resume.png"></img>
        </button>
        </a>
      </div>

      <div className="w-screen md:my-auto">
        <h1 className="text-3xl font-heading font-extrabold m-auto md:mt-10 text-center p-3">
          KEY SKILL SET
        </h1>
        <table className="table-auto w-full text-left items-center font-serif text-lg">
          <thead className="">
            <tr>
              <th scope="col" className="md:px-44 text-center">
                Sciences
              </th>
              <th scope="col" className="md:px-44 text-center">
                Business Skills
              </th>
              <th scope="col" className="md:px-44 text-center">
                Soft Skills
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="md:px-48 md:py-3 text-left">Mathematics</td>
              <td className="md:px-48 text-left md:py-3">Commerce</td>
              <td className="md:px-48 text-left md:py-3">Communication</td>
            </tr>
            <tr>
              <td className="md:px-48 md:py-3 text-center">Statistics</td>
              <td className="md:px-48 text-center md:py-3">
                Critical Thinking
              </td>
              <td className="md:px-48 text-center md:py-3">
                Project Management
              </td>
            </tr>
            <tr>
            <td className="md:px-48 text-center md:py-3">Computer Science</td>
              <td className="md:px-48 text-center md:py-3">Strategy & Analysis</td>
              <td className="md:px-48 text-center md:py-3">Creative Problem-solving</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* PAGE CONTENT */}
      <Divider />
    </>
  );
}
