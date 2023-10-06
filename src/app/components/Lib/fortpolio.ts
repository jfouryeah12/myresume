import uniqueId from "../../utils/uniqueId";

export interface Props {
  id: string;
  type: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const fortpolio: Array<Props> = [
  {
    id: uniqueId(),
    title: "IdentifEYE Web",
    type: "website",
    description: "OFFICIAL WEBSITE OF IDENTIFEYE-APP",
    imageUrl: "/image/identifEye.webp",
    link: "https://identifeyeph.web.app/",
  },
  {
    id: uniqueId(),
    title: "IdentifEYE App",
    type: "application",
    description: "OFFICIAL WEBSITE OF IDENTIFEYE-APP",
    imageUrl: "/image/identifeye-webp.webp",
    link: "https://identifeyeph.web.app/",
  },
  {
    id: uniqueId(),
    title: "Source Goose Web",
    type: "website",
    description:
      "SOURCEGOOSE IS AN INNOVATIVE STARTUP GAME COMPANY THAT TAKES PLAYERS ON CAPTIVATING JOURNEYS THROUGH HISTORY AND BEYOND.",
    imageUrl: "/image/SourceGoose.png",
    link: "https://source-goose-official.vercel.app/",
  },
  {
    id: uniqueId(),
    title: "Tophet Anti-Virus",
    type: "software",
    description: "Tophet is Created for Educational only.",
    imageUrl: "/image/404-no-image.jpg",
    link: "https://github.com/jfouryeah12/Tophet",
  },
];

export default fortpolio;
