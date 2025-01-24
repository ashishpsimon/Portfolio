import Chatio from "../../public/Chatio.jpg";
import Jober from "../../public/Jober.jpg";
function Development() {
  const cardItem = [
    {
      id: 1,
      logo: Chatio,
      name: "Chatio",
      description: "Real-Time Chat Application",
      technologies: "React, Node.js, Express, MongoDB, TailwindCSS, JWT, Socket.io",
      sourceCodeLink: "https://github.com/ashishpsimon/Chatio",
      demoLink: "https://chatio-app.netlify.app",
      imgLink: "https://drive.google.com/drive/folders/1gf0Yg1j9x5O1cWcEQlPnS6q-2oXybd-F?usp=drive_link",
    },
    {
      id: 2,
      logo: Jober,
      name: "Jober",
      description: "Job Application Platform",
      technologies: "React, Redux, Node.js, Express, MongoDB, Material UI, JWT",
      sourceCodeLink: "https://github.com/ashishpsimon/Jober_App",
      demoLink: "https://jober-app.netlify.app",
      imgLink: "https://drive.google.com/drive/folders/1skbupR1vGtSfpBsgf5Q75nTcsm0-5dQi?usp=drive_link",
    },
  ];
  return (
    <div
      name="Development"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Development</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, technologies, sourceCodeLink, demoLink, imgLink }) => (
            <div
              className="bg-purple-200 border-cyan-900 md:w-[300px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-800 font-bold">
                  {description}
                </p>
                <p className="px-2 text-gray-700">
                  {technologies}
                </p>
              </div>
              
              <div className=" px-6 py-4 space-x-3 justify-around">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Live
                </button>
                </a>
                <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
                </a>
                <a href={imgLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 py-2 my-2 rounded">
                  Images
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Development;