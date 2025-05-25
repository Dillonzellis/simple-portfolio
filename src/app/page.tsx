export default function Home() {
  const exp = [
    {
      company: "Cox Enterprises(Atlanta Journal Constitution)",
      time: "2024 - Present",
      role: "Software Developer",
      desc: "Major media company serving Georgia and the Southeast. Built enterprise web solutions for high-traffic news sites, architected multi-site consolidation, and implemented AWS integrations serving millions of monthly users.",
    },
    {
      company: "League of SouthEastern Credit Unions",
      time: "2022 - 2024",
      role: "Software Developer",
      desc: "Regional financial services organization. Developed member-facing web applications using React ecosystem, collaborated with design teams to deliver scalable solutions for credit union operations.",
    },
    {
      company: "RLM Affairs",
      time: "2017 - 2021",
      role: "Operations and Web Developer",
      desc: "Award-winning wedding venue and floral business. Built custom e-commerce platform for online floral shop, developed marketing websites, and supported daily business operations while handling select freelance projects.",
    },
  ];

  return (
    <div className="space-y-4 pt-12">
      <h1 className="">
        <span className="font-medium">Dillon Ellis</span> |{" "}
        <a
          className="text-blue-500 transition-colors duration-200 hover:text-blue-700 dark:text-gray-400 dark:underline dark:decoration-gray-400 dark:underline-offset-2 hover:dark:text-gray-200"
          href="https://github.com/Dillonzellis"
          target="_blank"
        >
          @dillonzellis
        </a>
      </h1>

      <p className="py-4 md:py-8">
        Software developer with 7+ years of experience building scalable web
        applications and driving architectural decisions for high-traffic sites.
        Frontend-focused with full-stack capabilities, specializing in React
        ecosystem, Next.js, and cloud integrations. Proven track record
        delivering enterprise solutions serving millions of monthly users.
      </p>

      <div>
        <h2 className="font-medium">Experience</h2>
        <hr />
      </div>

      <div className="flex flex-col gap-4">
        {exp.map((exp, idx) => (
          <div key={idx} className="pb-4">
            <div className="flex flex-col justify-between md:flex-row">
              <div>{exp.company}</div>
              <div className="pb-2 text-sm text-gray-400 md:pb-0">
                {exp.time}
              </div>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              {exp.role}
            </div>
            <p className="pt-2 text-sm leading-snug text-gray-700 dark:text-gray-400">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
