import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="hidden">
      <div className="about mx-auto max-w-screen-xl flex items-center justify-between px-8 py-6 lg:py-8 lg:flex-row bg-violet-700">
        <p>
          About <span>{/*Green Line*/}</span>
        </p>
        <h3 className="uppercase">Learn More about me</h3>
        <Image src={"/static/Echo 1.svg"} alt={""} width={284} height={396} />
        {/*Information*/}
        <h3>Full-Stack Developer</h3>
        <p>
          Hello, my name is Echo, and I&apos;m a college student studying
          Information Technology with a concentration on Deep Learning in a
          variety of fields. Being systematic, thorough, and meticulous results
          in solid code and trustworthy creation scripts. Building requires
          understanding criterion requirements and communicating project
          progress.
        </p>
      </div>
    </section>
  );
}
