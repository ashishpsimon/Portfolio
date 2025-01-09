import html from "../../public/html.png";
import css from "../../public/css.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
// import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
function Expertise() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id:4,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id:5,
      logo: express,
      name: "ExpressJS",
    },
    {
      id:6,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id:7,
      logo: node,
      name: "NodeJS",
    },
    {
      id: 8,
      logo: java,
      name: "Java",
    },
    {
      id: 9,
      logo: spring,
      name: "Spring",
    },
    {
      id: 10,
      logo: springBoot,
      name: "Spring Boot",
    },
    // {
    //   id: 5,
    //   logo: oracle,
    //   name: "Oracle",
    // },
  ];
  return (
    <div
      name="Expertise"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="  ">
          I've gained the skills & expertise in below technologies via projects.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;