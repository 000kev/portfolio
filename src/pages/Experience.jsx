import Divider from "../components/Divider";
import Carousel from "../components/Carousel";
import { WORK_EXPERIENCE } from "../assets/Experience_data";
import {useState} from 'react';


export function carousel_slider(slide) {
    let name = `./src/assets/${slide}.png`
    return <img className="md:w-3/5 md:mx-36 md:my-36 rounded" src={name}/>
}

export default function ExperiencePage() {
  const [title, update] = useState(
    {name: 'Digsconnect', description: WORK_EXPERIENCE[0].description}
    );
    const contentUpdateHandler = (slide) => {
      switch (slide) {
        case 0:
          update({name: 'Digsconnect', description: WORK_EXPERIENCE[0].description});
          break;
        case 1:
          update({name: 'Gigturbo', description: WORK_EXPERIENCE[1].description});
          break;
        case 2:
          update({name: 'Teach Me 2', description: WORK_EXPERIENCE[2].description});
          break;
        case 3:
          update({name: 'UDEC Group', description: WORK_EXPERIENCE[3].description});
          break;
        case 4:
          update({name: 'ProteaCHI', description: WORK_EXPERIENCE[4].description});
          break;
      }
    }
  return (
    <>
      <div className="relative inline-block">
        <img src="./src/assets/code.jpg" className="block w-screen h-auto md:w-3/4 md:mx-auto" />
      </div>
      <Divider />
      {/* PAGE CONTENT */}
      <div className="flex flex-col md:flex-row">
            <span className="md:w-1/2">
              <h1 className="text-3xl font-heading font-extrabold m-auto md:mt-10 text-center">{title.name}</h1>
              <Carousel onUpdate={contentUpdateHandler}>
                  {WORK_EXPERIENCE.map( (slide) => carousel_slider(slide.title)) }
              </Carousel>
            </span>
            <span className="w-screen md:my-32 basis-1/2">

                <p className="text-center mx-auto text-lg m-5 w-5/6 my-2">
                    {title.description}
                </p>
            </span>
        </div>
      {/* PAGE CONTENT */}
      <Divider />
    </>
  );
}
