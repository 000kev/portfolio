export default function PageContent()  {
    return (
        <div className="flex flex-col md:flex-row">
            <span className="md:basis-1/2">
            <h1 className="text-3xl font-heading font-extrabold m-auto md:mt-10 text-center">Meet Kevin</h1>
                <img className="md:w-3/5 md:mx-36 md:my-36 rounded" src="./src/assets/cover.jpg"></img>
            </span>
            <span className="w-screen md:my-32 basis-1/2">
                <p className="text-center text-lg m-5">"Lorem ipsum dolor" - Someone</p>

                <p className="text-center text-lg m-5 w-5/6 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>
                <p className="text-center text-lg m-5 w-5/6 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>
            </span>
        </div>
    );
}