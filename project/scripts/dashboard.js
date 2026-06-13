const dashboardContainer =
  document.querySelector(
    "#dashboardContent"
  );

const profile =
  JSON.parse(
    localStorage.getItem(
      "webcafeAssessment"
    )
  );

const careerPaths = [
  {
    name: "Frontend Developer",
    description:
      "Build beautiful and interactive user interfaces for websites and web applications.",
    roadmap: [
      "Learn HTML",
      "Learn CSS",
      "Learn JavaScript",
      "Learn React",
      "Build Portfolio Projects"
    ]
  },

  {
    name: "Backend Developer",
    description:
      "Develop server-side systems, APIs, databases, and application logic.",
    roadmap: [
      "Learn JavaScript",
      "Learn Node.js",
      "Learn Databases",
      "Build REST APIs",
      "Study System Design"
    ]
  },

  {
    name: "Data Science / AI",
    description:
      "Analyze data and build intelligent systems using machine learning.",
    roadmap: [
      "Learn Python",
      "Learn Statistics",
      "Learn Data Analysis",
      "Learn Machine Learning",
      "Build AI Projects"
    ]
  },

  {
    name: "Cybersecurity",
    description:
      "Protect systems, networks, and data from cyber threats.",
    roadmap: [
      "Learn Networking",
      "Learn Linux",
      "Study Security Fundamentals",
      "Practice Ethical Hacking",
      "Earn Security Certifications"
    ]
  }
];

const getStrengths = (student) => {

  const strengths = [];

  if(student.logic >= 4){
    strengths.push("Logical Thinking");
  }

  if(student.creativity >= 4){
    strengths.push("Creativity");
  }

  if(student.problemSolving >= 4){
    strengths.push("Problem Solving");
  }

  if(student.mathematics >= 4){
    strengths.push("Mathematics");
  }

  if(student.attentionToDetail >= 4){
    strengths.push("Attention To Detail");
  }

  if(student.uiInterest >= 4){
    strengths.push("UI Design Interest");
  }

  return strengths;
};

const getBadge = (student) => {

  if(
    student.creativity >= 4 &&
    student.uiInterest >= 4
  ){
    return "🎨 Creative Builder";
  }

  if(
    student.logic >= 4 &&
    student.problemSolving >= 4
  ){
    return "🧠 Problem Solver";
  }

  if(
    student.mathematics >= 4 &&
    student.logic >= 4
  ){
    return "🤖 AI Explorer";
  }

  return "🛡️ Cyber Defender";
};

const calculateProgress = (student) => {

  const scores = [
    student.logic,
    student.creativity,
    student.mathematics,
    student.problemSolving,
    student.attentionToDetail,
    student.uiInterest
  ];

  const total =
    scores.reduce(
      (sum, score) =>
        sum + score,
      0
    );

  return Math.round(
    (total / 30) * 100
  );
};

const getLevel = (progress) => {

  if(progress <= 40){
    return "🌱 Beginner";
  }

  if(progress <= 70){
    return "📘 Intermediate";
  }

  return "🚀 Advanced";
};

const calculateCareerMatches = (student) => {

  return [

    {
      name: "Frontend Developer",
      score:
        (
          student.creativity +
          student.uiInterest +
          student.logic
        ) / 15 * 100
    },

    {
      name: "Backend Developer",
      score:
        (
          student.logic +
          student.problemSolving +
          student.attentionToDetail
        ) / 15 * 100
    },

    {
      name: "Data Science / AI",
      score:
        (
          student.logic +
          student.mathematics +
          student.problemSolving
        ) / 15 * 100
    },

    {
      name: "Cybersecurity",
      score:
        (
          student.logic +
          student.problemSolving +
          student.attentionToDetail
        ) / 15 * 100
    }

  ];
};

const getStreakData = () => {

  return JSON.parse(
    localStorage.getItem(
      "webcafeStreak"
    )
  ) || {
    streak: 1,
    lastVisit: new Date()
      .toDateString()
  };
};

const updateStreak = () => {

  const today =
    new Date()
      .toDateString();

  const streakData =
    getStreakData();

  if(
    streakData.lastVisit !==
    today
  ){

    streakData.streak += 1;

    streakData.lastVisit =
      today;

    localStorage.setItem(
      "webcafeStreak",
      JSON.stringify(
        streakData
      )
    );
  }

  return streakData.streak;
};

const getAchievement = (
  streak
) => {

  if(streak >= 30){
    return "👑 Master Learner";
  }

  if(streak >= 14){
    return "🚀 Consistency Champion";
  }

  if(streak >= 7){
    return "🏆 Dedicated Learner";
  }

  return "🌱 Getting Started";
};

const renderDashboard = () => {

  if(!profile){

    dashboardContainer.innerHTML = `
      <div class="dashboard-card">
        <h2>No Assessment Found</h2>
        <p>Please complete the assessment first.</p>
        <a href="assessment.html" class="btn primary-btn">
          Take Assessment
        </a>
      </div>
    `;

    return;
  }

  const career =
    careerPaths.find(
      (path) =>
        path.name ===
        profile.recommendation
    );

  const strengths =
    getStrengths(profile);

  const badge =
    getBadge(profile);

  const progress =
    calculateProgress(profile);

  const level =
    getLevel(progress);

  const matches =
    calculateCareerMatches(profile);

  const streak =
    updateStreak();

  const achievement =
    getAchievement(streak);

  const strengthsHtml =
    strengths
      .map(
        (strength) =>
          `<li>${strength}</li>`
      )
      .join("");

  const roadmapHtml =
    career.roadmap
      .map(
        (step) =>
          `<li>${step}</li>`
      )
      .join("");

  const matchesHtml =
    matches
      .map(
        (match) => `
          <div class="match-item">
            <div class="match-header">
              <span>${match.name}</span>
              <span>${Math.round(match.score)}%</span>
            </div>

            <div class="match-bar">
              <div
                class="match-fill"
                style="width:${match.score}%">
              </div>
            </div>
          </div>
        `
      )
      .join("");

  dashboardContainer.innerHTML = `
    <div class="dashboard-card">

      <h1>Welcome ${profile.name}</h1>

      <h2>Recommended Career Path</h2>

      <p class="career-title">
        ${career.name}
      </p>

      <div class="badge-card">
        <h3>Badge Earned</h3>
        <p class="badge">
          ${badge}
        </p>
      </div>

      <p>
        ${career.description}
      </p>

      <h2>Your Strengths</h2>

      <ul>
        ${strengthsHtml}
      </ul>

      <h2>Learning Roadmap</h2>

      <ol>
        ${roadmapHtml}
      </ol>

      <h2>Career Match Comparison</h2>

      <div class="career-comparison">
        ${matchesHtml}
      </div>

      <h2>Progress Score</h2>

      <div class="progress-bar">
        <div
          class="progress-fill"
          style="width:${progress}%">
        </div>
      </div>

      <p class="progress-score">
        ${progress}% Match Score
      </p>

      <div class="level-card">
        <h3>Progress Level</h3>
        <p class="level-text">
          ${level}
        </p>
      </div>

      <div class="streak-card">
        <h3>🔥 Learning Streak</h3>
        <p class="streak-count">
          ${streak} Day${streak > 1 ? "s" : ""}
        </p>
        <p class="achievement">
          ${achievement}
        </p>
      </div>

      <div class="dashboard-actions">

        <a
          href="resources.html"
          class="btn primary-btn">
          Start Learning
        </a>

        <button
          id="downloadReport"
          class="btn secondary-btn">
          Download Report
        </button>

        <button
          id="retakeAssessment"
          class="btn secondary-btn">
          Retake Assessment
        </button>

      </div>

    </div>
  `;

  document
    .querySelector(
      "#downloadReport"
    )
    .addEventListener(
      "click",
      () => {

        const report = `
Name: ${profile.name}

Recommended Career:
${career.name}

Badge:
${badge}

Progress Score:
${progress}%

Level:
${level}

Learning Streak:
${streak} Day(s)

Achievement:
${achievement}

Strengths:
${strengths.join(", ")}

Roadmap:
${career.roadmap.join(" → ")}
`;

        const blob =
          new Blob(
            [report],
            {
              type:
                "text/plain"
            }
          );

        const url =
          URL.createObjectURL(
            blob
          );

        const link =
          document.createElement(
            "a"
          );

        link.href = url;

        link.download =
          "webcafe-career-report.txt";

        link.click();

        URL.revokeObjectURL(
          url
        );
      }
    );

  document
    .querySelector(
      "#retakeAssessment"
    )
    .addEventListener(
      "click",
      () => {

        localStorage.removeItem(
          "webcafeAssessment"
        );

        window.location.href =
          "assessment.html";
      }
    );
};

renderDashboard();