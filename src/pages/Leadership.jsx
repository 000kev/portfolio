import Divider from "../components/Divider";
import Carousel from "../components/Carousel";
import { LEADERSHIP_EXPERIENCE } from "../assets/Experience_data";
import {useState} from 'react';


export function carousel_slider(slide) {
    let name = `./src/assets/${slide}.jpg`
    return <img className="md:w-3/5 md:mx-36 md:my-36 rounded" src={name}/>
}

export default function LeadershipPage() {
  const [title, update] = useState(
    {name: 'INF3014F Class Rep', description: LEADERSHIP_EXPERIENCE[0].description}
    );
    const contentUpdateHandler = (slide) => {
      switch (slide) {
        case 0:
          update({name: 'INF3014F Class Rep', description: LEADERSHIP_EXPERIENCE[0].description});
          break;
        case 1:
          update({name: 'Chairperson of RainbowUCT ', description: LEADERSHIP_EXPERIENCE[1].description});
          break;
        case 2:
          update({name: 'Golden Key Executive Public Relation Director', description: LEADERSHIP_EXPERIENCE[2].description});
          break;

      }
    }
  return (
    <>
      <div className="relative inline-block">
        <img src="./src/assets/leadership.jpg" className="block w-screen h-auto md:w-3/4 md:mx-48" />
      </div>
      <Divider />
      {/* PAGE CONTENT */}
      <div className="flex flex-col md:flex-row">
            <span className="md:w-1/2">
              <h1 className="text-3xl font-heading font-extrabold m-auto md:mt-5 text-center">{title.name}</h1>
              <Carousel onUpdate={contentUpdateHandler}>
                  {LEADERSHIP_EXPERIENCE.map( (slide) => carousel_slider(slide.title)) }
              </Carousel>
            </span>
            <span className="w-screen md:my-32 basis-1/2">

                <p className="text-center mx-auto text-lg m-5 w-5/6 my-44 font-serif">
                    {title.description}
                </p>
            </span>
        </div>
      {/* PAGE CONTENT */}
      <Divider />
    </>
  );
}
