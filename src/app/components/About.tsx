import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { infoLabel } from "./Lib/string";
import skillsData from "./Lib/skill";
import interest from "./Lib/interests";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-me container  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title relative">
          <p className="cool-subtitle uppercase">
            About
            <span className="bg-green-500 absolute rounded-full left-16 top-3 bottom-0 w-20 h-[4%]"></span>
          </p>
          <h1 className="text-3xl font-extrabold text-primary-500 with-green-line">
            LEARN MORE ABOUT ME
          </h1>
        </div>
        <div className="flex flex-col md:flex-row " data-aos="fade-right">
          {/* Image */}
          <div className="w-full sm:w-4/5">
            <div className="profile-image">
              <Image
                src={infoLabel.Imahe}
                alt="Profile Image"
                width={284}
                height={396}
                className="rounded-lg mt-2 shadow-cool"
              />
            </div>
          </div>
          {/* Description */}
          <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
            <h1 className="text-3xl font-semibold text-green-300">
              {infoLabel.role}
            </h1>
            <p className="italic">
              Hello, my name is Echo, and I&apos;m a college graduate from
              Information Technology with a concentration on Deep Learning in a
              variety of fields. Being systematic, thorough, and meticulous
              results in solid code and trustworthy creation scripts. Building
              requires understanding criterion requirements and communicating
              project progress.
            </p>
            <div className="flex flex-col sm:flex-row">
              {/* First Container */}
              <div className="w-full sm:w-1/2 my-2 mx-2 ">
                <ul>
                  <li className="flex my-2 items-center">
                    <AiOutlineRight className="text-green-300" />
                    <strong>Birthday:</strong> <span>{infoLabel.bday}</span>
                  </li>
                  <li className="flex my-2 items-center">
                    <AiOutlineRight className="text-green-300" />
                    <strong>Institution:</strong>{" "}
                    <span>{infoLabel.institution}</span>
                  </li>
                  <li className="flex my-2 items-center">
                    <AiOutlineRight className="text-green-300" />
                    <strong>Phone:</strong> <span>{infoLabel.phone}</span>
                  </li>
                  <li className="flex my-2 items-center">
                    <AiOutlineRight className="text-green-300" />
                    <strong>City:</strong> <span>{infoLabel.city}</span>
                  </li>
                </ul>
              </div>
              {/* Second Container */}
              <div className="w-full sm:w-1/2 my-2 mx-2 ">
                <ul>
                  <li className="flex my-2 items-center">
                    <AiOutlineRight className="text-green-300" />
                    <strong>Age:</strong> <span>{infoLabel.age}</span>
                  </li>
                  <li className="flex my-2 items-center">
                    <AiOutlineRight className="text-green-300" />
                    <strong>Program:</strong> <span>{infoLabel.program}</span>
                  </li>
                  <li className="flex my-2 items-center">
                    <AiOutlineRight className="text-green-300" />
                    <strong>Email:</strong> <span>{infoLabel.email}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I am an enthusiastic person who is fascinated by new technologies.
              I&apos;ve always been good at solving problems and coming up with
              new ideas. I prefer to come up with innovative techniques and
              systems to find new solutions. I&apos;m self-motivated and driven,
              and I&apos;m always trying out new technologies and strategies.
              The experience, architecture, and code quality of the solutions I
              create are all very important to me.
            </p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="skills-section mt-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="section-title relative">
            <p className="cool-subtitle uppercase">
              Skills
              <span className="bg-green-500 absolute rounded-full left-16 top-3 bottom-0 w-20 h-[8%]"></span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <h3 className="text-xm font-semibold mb-2 uppercase">
                  {skill.skill}
                </h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between text-xs">
                    <span className="text-left text-gray-600">
                      Proficiency: {skill.percentage}%
                    </span>
                    <span className="text-right text-gray-600">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {skill.yearsOfExperience} years
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interest */}

      <div className="about-me container  mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="section-title relative">
          <p className="cool-subtitle uppercase">
            Interests
            <span className="bg-green-500 absolute rounded-full ml-4 left-20 top-3 bottom-0 w-20 h-[10%]"></span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {interest.map((interest) => (
            <div
              key={interest.id}
              className="p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex items-center"
            >
              <div className="text-4xl">{<interest.icon />}</div>
              <div className="ml-2">
                <h3 className="text-xl font-semibold mb-2 my-2">
                  {interest.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
