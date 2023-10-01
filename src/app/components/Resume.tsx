import Image from "next/image";
export default function Resume() {
  return (
    <section id="resume" className="hidden">
      <div className="resume mx-auto max-w-screen-xl flex items-center justify-between px-8 py-6 lg:py-8 lg:flex-row bg-violet-700">
        <p>
          Resume <span>{/*Green Line*/}</span>
        </p>
        <h3 className="uppercase">CHECK MY RESUME</h3>

        {/*Resume Content*/}

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
