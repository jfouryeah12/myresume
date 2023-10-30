import uniqueId from "../../utils/uniqueId";

export interface Props {
  id: string;
  skill: string;
  percentage: number;
  yearsOfExperience: string;
}

const links: Array<Props> = [
  {
    id: uniqueId(),
    skill: "Game Dev",
    percentage: 64,
    yearsOfExperience: "2",
  },
  {
    id: uniqueId(),
    skill: "WEB DEV",
    percentage: 78,
    yearsOfExperience: "2",
  },
  {
    id: uniqueId(),
    skill: "DATABASE MANAGEMENT",
    percentage: 72,
    yearsOfExperience: "3",
  },
  {
    id: uniqueId(),
    skill: "ANDROID DEV",
    percentage: 70,
    yearsOfExperience: "2",
  },
  {
    id: uniqueId(),
    skill: "GRAPHICS DESIGN",
    percentage: 49,
    yearsOfExperience: "4",
  },
  {
    id: uniqueId(),
    skill: "SOFTWARE DEV",
    percentage: 74,
    yearsOfExperience: "2",
  },
];

export default links;
