const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Python',
    level: 'beginner',
    color: '#FF3B00',
  },
];

export default function App() {
  return (
    <div className="container">
      <Image src={'profile.png'} />
      <Desc />
      <Skills skills={skills} />
    </div>
  );
}

function Image({ src }) {
  return (
    <div>
      <img src={src} alt="profile user" />
    </div>
  );
}

function Desc() {
  return (
    <div className="desc">
      <h1>Anand</h1>
      <p>
        Hi,I am highly enthusiast web developer who loves to work in Work
        Development
      </p>
    </div>
  );
}

function Skills({ skills }) {
  return (
    <div className="skills">
      {skills.map((skill, i) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          key={i}
        />
      ))}
    </div>
  );
}
function Skill({ skill, level, color }) {
  return (
    <div className="skill">
      <button style={{ backgroundColor: color }}>
        {skill}
        <span>
          {level === 'advanced' && '💪'}
          {level === 'intermediate' && '👍'}
          {level === 'beginner' && '👶'}
        </span>
      </button>
    </div>
  );
}
