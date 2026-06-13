const resourcesContainer =
  document.querySelector(
    "#resourcesContainer"
  );

const profile =
  JSON.parse(
    localStorage.getItem(
      "webcafeAssessment"
    )
  );

const resources = {

  "Frontend Developer": {

    description:
      "Frontend developers create beautiful and interactive user experiences.",

    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git & GitHub"
    ],

    courses: [
      "Responsive Web Design",
      "JavaScript Fundamentals",
      "React Development",
      "UI / UX Basics"
    ]
  },

  "Backend Developer": {

    description:
      "Backend developers build servers, databases, APIs, and application logic.",

    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "REST APIs"
    ],

    courses: [
      "JavaScript Advanced",
      "Node.js Development",
      "Database Design",
      "API Development"
    ]
  },

  "Data Science / AI": {

    description:
      "Data scientists analyze data and create intelligent systems.",

    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "TensorFlow"
    ],

    courses: [
      "Python Programming",
      "Statistics",
      "Machine Learning",
      "Data Visualization"
    ]
  },

  "Cybersecurity": {

    description:
      "Cybersecurity professionals protect systems and networks from threats.",

    tools: [
      "Linux",
      "Wireshark",
      "Burp Suite",
      "Nmap",
      "Kali Linux"
    ],

    courses: [
      "Networking Fundamentals",
      "Cybersecurity Basics",
      "Ethical Hacking",
      "Security Operations"
    ]
  }

};

const renderResources = () => {

  if(!profile){

    resourcesContainer.innerHTML = `
      <div class="dashboard-card">

        <h2>
          No Assessment Found
        </h2>

        <p>
          Complete the assessment first.
        </p>

        <a
          href="assessment.html"
          class="btn primary-btn">
          Take Assessment
        </a>

      </div>
    `;

    return;
  }

  const recommendation =
    profile.recommendation;

  const path =
    resources[
      recommendation
    ];

  const toolsHtml =
    path.tools
      .map(
        (tool) =>
          `<li>${tool}</li>`
      )
      .join("");

  const coursesHtml =
    path.courses
      .map(
        (course) =>
          `<li>${course}</li>`
      )
      .join("");

  resourcesContainer.innerHTML = `
    <div class="dashboard-card">

      <h1>
        ${recommendation}
      </h1>

      <p>
        ${path.description}
      </p>

      <h2>
        Recommended Tools
      </h2>

      <ul>
        ${toolsHtml}
      </ul>

      <h2>
        Suggested Courses
      </h2>

      <ul>
        ${coursesHtml}
      </ul>

      <a
        href="dashboard.html"
        class="btn primary-btn">
        Back To Dashboard
      </a>

    </div>
  `;
};

renderResources();