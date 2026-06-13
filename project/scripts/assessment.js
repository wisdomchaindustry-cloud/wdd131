const assessmentForm =
  document.querySelector("#assessmentForm");

const resultContainer =
  document.querySelector("#resultContainer");

const careerPaths = [
  {
    name: "Frontend Developer",
    description:
      "You enjoy creativity, user interfaces, and building interactive web experiences.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ]
  },

  {
    name: "Backend Developer",
    description:
      "You enjoy logic, problem-solving, and building systems that power applications.",
    skills: [
      "Node.js",
      "Databases",
      "APIs",
      "System Design"
    ]
  },

  {
    name: "Data Science / AI",
    description:
      "You enjoy mathematics, analytics, and working with intelligent systems.",
    skills: [
      "Python",
      "Machine Learning",
      "Statistics",
      "Data Analysis"
    ]
  },

  {
    name: "Cybersecurity",
    description:
      "You pay attention to detail and enjoy protecting systems and data.",
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Risk Analysis",
      "Digital Forensics"
    ]
  }
];

const getRecommendation = (profile) => {

  const scores = [

    {
      path: "Frontend Developer",
      score:
        profile.creativity +
        profile.uiInterest
    },

    {
      path: "Backend Developer",
      score:
        profile.logic +
        profile.problemSolving
    },

    {
      path: "Data Science / AI",
      score:
        profile.mathematics +
        profile.logic
    },

    {
      path: "Cybersecurity",
      score:
        profile.logic +
        profile.attentionToDetail
    }

  ];

  return scores.reduce(
    (best,current) =>
      current.score > best.score
        ? current
        : best
  ).path;
};

const saveProfile = (profile) => {

  const recommendation =
    getRecommendation(profile);

  const profileData = {
    ...profile,
    recommendation
  };

  localStorage.setItem(
    "webcafeAssessment",
    JSON.stringify(profileData)
  );
};

const displayResult = (profile) => {

  const recommendation =
    getRecommendation(profile);

  const career =
    careerPaths.find(
      (path) =>
        path.name === recommendation
    );

  const skillsHtml =
    career.skills
      .map(
        (skill) =>
          `<li>${skill}</li>`
      )
      .join("");

  resultContainer.innerHTML = `
    <div class="result-card">

      <h2>
        Hello ${profile.name} 👋
      </h2>

      <h3>
        Recommended Career Path
      </h3>

      <p class="career-title">
        ${career.name}
      </p>

      <p>
        ${career.description}
      </p>

      <h4>
        Suggested Skills
      </h4>

      <ul>
        ${skillsHtml}
      </ul>

      <p>
        Redirecting to your dashboard...
      </p>

    </div>
  `;

  setTimeout(() => {

    window.location.href =
      "dashboard.html";

  },2000);
};

if(assessmentForm){

  assessmentForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      const profile = {

        name:
          document.querySelector("#name")
            .value
            .trim(),

        logic:
          Number(
            document.querySelector("#logic")
              .value
          ),

        creativity:
          Number(
            document.querySelector("#creativity")
              .value
          ),

        mathematics:
          Number(
            document.querySelector("#mathematics")
              .value
          ),

        problemSolving:
          Number(
            document.querySelector("#problemSolving")
              .value
          ),

        attentionToDetail:
          Number(
            document.querySelector("#attentionToDetail")
              .value
          ),

        uiInterest:
          Number(
            document.querySelector("#uiInterest")
              .value
          )
      };

      saveProfile(profile);

      displayResult(profile);
    }
  );
}