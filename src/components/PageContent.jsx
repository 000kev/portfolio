export default function PageContent()  {
    return (
        <div className="flex flex-col md:flex-row">
            <span className="md:basis-1/2">
            <h1 className="text-3xl font-heading font-extrabold m-auto md:mt-10 text-center">Meet Kevin</h1>
                <img className="md:w-3/5 md:mx-36 md:my-36 rounded" src="./src/assets/cover.jpg"></img>
            </span>
            <span className="w-screen md:my-16 basis-1/2">
                <p className="text-center text-lg p-5 md:w-80 md:mx-auto">"We cannot solve our problems with the same thinking we used when we created them"  A. Einstein</p>

                <p className="text-center text-lg m-5 w-5/6 my-3 p-1 md:mx-auto">
                    Kevin Kumasamba is an engaging and multi-dimensional individual. Beginning his journey in the Gauteng region of South Africa
                    after his parents migrated from the Democratic Republic of South Africa, he has continously strived and succeeded in breaking his own personal 
                    barriers and reaching new heights. His rich cultural background and studies in Commerce and Science at the University of Cape Town, as well as his personal
                    drive, have culminated in a well-rounded businessman, polyglot and scientist who approaches problems head-on with grit and logic.
                </p>
                <p className="text-center text-lg m-5 w-5/6 my-3 p-1 md:mx-auto">
                    After deciding in the 10th grade that UCT was the university he would go to, Kevin worked tirelessly and excelled in his 
                    academics, in sports, and in his own personal growth through an exchange program to Germany, a language he has now to become 
                    confidently proficient in. His time at UCT immersed him in a new world, rife with new challenges but also new opportunities 
                    that ignited an unquenchable life-long thirst for knowledge beyond the bounds of academia that drives his every action.
                </p>
                <p className="text-center text-lg m-5 w-5/6 my-3 p-1 md:mx-auto">
                    As an example, this entire website. 
                </p>
            </span>
        </div>
    );
}