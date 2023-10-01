import uniqueId from "../../utils/uniqueId";

export interface Props {
  id: string;
  label: string;
  href: string;
}

const links: Array<Props> = [
  {
    id: uniqueId(),
    href: "#about",
    label: "About",
  },
  {
    id: uniqueId(),
    href: "#resume",
    label: "Resume",
  },
  {
    id: uniqueId(),
    href: "#portfolio",
    label: "Portfolio",
  },
];

export default links;
