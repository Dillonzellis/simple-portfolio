export default function Home() {
  const exp = [
    {
      company: "Cox Enterprises(Atlanta Journal Constitution)",
      time: "2024 - Present",
      role: "Software Developer",
      desc: "5+ million page views",
    },
    {
      company: "League of SouthEastern Credit Unions",
      time: "2022 - 2024",
      role: "Software Developer",
      desc: "marketing",
    },
    {
      company: "RLM Affairs",
      time: "2017 - 2021",
      role: "Operations and Web Developer",
      desc: "Event Space",
    },
  ];

  return (
    <div className="space-y-4 pt-12">
      <h1 className="">
        <span className="font-medium">Dillon Ellis</span> |{" "}
        <a
          className="text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800"
          href="https://github.com/Dillonzellis"
          target="_blank"
        >
          @dillonzellis
        </a>
      </h1>

      <p className="leading-snug">
        Full-stack software developer with 7+ years of experience building
        scalable web applications and leading technical initiatives. Expertise
        in React ecosystem, modern JavaScript frameworks, and cloud architecture
        with a focus on performance optimization and user experience.
      </p>

      <p className="leading-snug">
        Currently developing high-performance systems at Cox Enterprises with
        expertise in React, CMS platforms, and modern web technologies.
      </p>

      <div>
        <h2 className="font-medium">Experience</h2>
        <hr />
      </div>

      <div className="flex flex-col gap-2">
        {exp.map((exp, idx) => (
          <div key={idx} className="pb-4">
            <div className="flex justify-between">
              <div>{exp.company}</div>
              <div className="text-sm text-gray-500">{exp.time}</div>
            </div>
            <div className="text-sm text-gray-700">{exp.role}</div>
            <p className="pt-2 text-sm leading-snug text-gray-700">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
