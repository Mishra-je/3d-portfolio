// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// import { github } from "../../assets";
// import { SectionWrapper } from "../../hoc";
// import { projects } from "../../constants";
// import { fadeIn } from "../../utils/motion";
// import { config } from "../../constants/config";
// import { Header } from "../atoms/Header";
// import { TProject } from "../../types";

// const ProjectCard: React.FC<{ index: number } & TProject> = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   sourceCodeLink,

// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         glareEnable
//         tiltEnable
//         tiltMaxAngleX={30}
//         tiltMaxAngleY={30}
//         glareColor="#aaa6c3"
//       >
//         <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
//           <div className="relative h-[230px] w-full">
//             <img
//               src={image}
//               alt={name}
//               className="h-full w-full rounded-2xl object-cover"
//             />
//             <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
//               <div
//                 onClick={() => window.open(sourceCodeLink, "_blank")}
//                 className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
//               >
//                 <img
//                   src={github}
//                   alt="github"
//                   className="h-1/2 w-1/2 object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="mt-5">
//             <h3 className="text-[24px] font-bold text-white">{name}</h3>
//             {/* <p className="text-secondary mt-2 text-[14px]">{description}</p> */}
//             <p className="text-secondary mt-2 text-[14px]">
//   {description.split(" ").length > 20
//     ? description.split(" ").slice(0, 20).join(" ") + "..."
//     : description}
// </p>
//           </div>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {tags.map((tag) => (
//               <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//                 #{tag.name}
//               </p>
//             ))}
//           </div>
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <Header useMotion={true} {...config.sections.works} />

//       <div className="flex w-full">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
//         >
//           {config.sections.works.content}
//         </motion.p>
//       </div>

//       <div className="mt-20 flex flex-wrap gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} glareEnable glareColor="#aaa6c3">
        
        {/* ✅ Removed fixed width */}
        <div className="bg-tertiary w-full rounded-2xl p-5">

          {/* Image */}
          <div className="relative h-[200px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />

            {/* Top Buttons */}
            <div className="absolute inset-0 m-3 flex justify-end gap-2">
              
              {/* GitHub */}
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:scale-110 transition"
              >
                <img src={github} alt="github" className="h-1/2 w-1/2" />
              </div>

              {/* Live */}
              <div
                onClick={() => window.open(liveLink, "_blank")}
                className="bg-green-600 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-green-700 hover:scale-110 transition"
              >
                🔗
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-5">
            <h3 className="text-[20px] font-bold text-white">{name}</h3>

            <p className="text-secondary mt-2 text-[14px]">
              {description.split(" ").length > 20
                ? description.split(" ").slice(0, 20).join(" ") + "..."
                : description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[12px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="mt-4 flex gap-2 sm:hidden">
            <button
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className="flex-1 rounded-lg bg-black px-3 py-2 text-sm text-white"
            >
              Code
            </button>
            <button
              onClick={() => window.open(liveLink, "_blank")}
              className="flex-1 rounded-lg bg-green-600 px-3 py-2 text-sm text-white"
            >
              Live
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* ✅ GRID FOR 4 IN A ROW */}
      <div className="mt-20 grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");