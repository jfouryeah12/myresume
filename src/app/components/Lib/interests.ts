import uniqueId from "../../utils/uniqueId";
import { AiOutlineRight, AiOutlineAndroid } from "react-icons/ai"; // Import the icon
import { BiCustomize, BiCoffeeTogo } from "react-icons/bi";
import { FaReact, FaLightbulb } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { TbBrandDatabricks } from "react-icons/tb";
import { DiStackoverflow, DiUnitySmall, DiVisualstudio } from "react-icons/di";
import { SiHackster } from "react-icons/si";
import { TfiMicrosoftAlt } from "react-icons/tfi";

export interface Props {
  id: string;
  icon: typeof AiOutlineRight; // Use 'typeof' to specify the type
  text: string;
}

const interest: Array<Props> = [
  {
    id: uniqueId(),
    icon: FaReact,
    text: "Web Development",
  },
  {
    id: uniqueId(),
    icon: BiCustomize,
    text: "UI/UX Design",
  },
  {
    id: uniqueId(),
    icon: RiRobot2Fill,
    text: "Machine Learning",
  },
  {
    id: uniqueId(),
    icon: TbBrandDatabricks,
    text: "Data Science",
  },
  {
    id: uniqueId(),
    icon: AiOutlineAndroid,
    text: "Mobile App Development",
  },
  {
    id: uniqueId(),
    icon: DiStackoverflow,
    text: "Programming",
  },
  {
    id: uniqueId(),
    icon: SiHackster,
    text: "Cyber Security",
  },
  {
    id: uniqueId(),
    icon: DiVisualstudio,
    text: "Software Development",
  },
  {
    id: uniqueId(),
    icon: DiUnitySmall,
    text: "Game Development",
  },
  {
    id: uniqueId(),
    icon: FaLightbulb,
    text: "Problem Solving",
  },
  {
    id: uniqueId(),
    icon: TfiMicrosoftAlt,
    text: "Technology",
  },
  {
    id: uniqueId(),
    icon: BiCoffeeTogo,
    text: "Coffee",
  },
];

export default interest;
