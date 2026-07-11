import { FaReact, FaPython, FaDatabase } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { MdPsychology } from "react-icons/md";

export const skills = [
  {
    id: 1,
    title: "AI Engineer",
    description:
      "Building intelligent AI applications using Python and Machine Learning.",
    icon: <MdPsychology className="card-icon" />,
  },

  {
    id: 2,
    title: "FastAPI",
    description:
      "Developing scalable REST APIs for AI applications.",
    icon: <SiFastapi className="card-icon" />,
  },

  {
    id : 3,
    title: "React",
    description:
      "Creating modern and interactive user interfaces.",
    icon: <FaReact className="card-icon" />,
  },

  {
    id: 4,
    title: "Python",
    description:
      "Building Machine Learning, Automation and AI solutions.",
    icon: <FaPython className="card-icon" />,
  },

  {
    id: 5,
    title: "Machine Learning",
    description:
      "Building and deploying Machine Learning models for various applications.",
    icon: <MdPsychology className="card-icon" />,
  },

  {
    id: 6,
    title: "SQL",
    description:
      "Designing and managing databases for AI applications.",
    icon: <FaDatabase className="card-icon" />,
  },
];
