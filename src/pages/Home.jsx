import { Link } from 'react-router-dom';
import '../styles.css';
import AnimatedTitle from '../components/AnimatedTitle';

const essays =[
  {title: "implementing common spatial pattern", id: 'implementing-csp'},
  {title: "an intro to brain computer interfaces", id: 'an-intro-to-brain-computer-interfaces'},
  {title: "bump, set, spike: volleyball strategy", id: 'bump-set-spike-volleyball-strategy'}
]
const projects = [
  { name: 'wednesday waffle', url: 'https://github.com/vishalsund/Wednesday-Waffle', desc: 'a web app to keep up with friend groups via weekly posts, sharing media, and collective goal tracking' },
  { name: 'this website', url: 'https://github.com/vishalsund/vishalsund.github.io', desc: "a personal dev-website built using Vite + React, hosted on github pages. serves as a project compilation and blog" },
  { name: 'rhythm quest', url: 'https://github.com/vishalsund/rhythm-quest', desc: "a 1-4 player web-based rhythm game made in unity. 100% custom made music & assets. explore the world through music with friends!" },
  { name: 'sgai simulation', url: 'https://web.mit.edu/webcast/beaverworks/sum24/2/game_design.html', desc: 'studying human-ai teaming and decision making in a serious game simulation. MIT beaver works summer institute project w/Dr. Robert Seater' },
];

export default function Home() {
  return (
    <div>
      <header className="header">
          <AnimatedTitle />
      </header>
    <div className = "container">
      <section>
        <h2 className='subheading'>&gt;&gt;about_me</h2>
        <div class = "about-container">
          <img src="./img/profile.png" alt="Profile" className="profile-pic" />
          <p className="about bodyText">Turing Scholar [CS Honors] @ UT Austin interested in ml🤖, math📈, neurotech🧠, and volleyball🏐<br></br><br></br>Contact me at vishals [at] utexas [dot] edu</p>
        </div>
      </section>
      <section>
        <h2 className='subheading'>&gt;&gt;writing</h2>
        <div className="grid">
          {essays.map((e, i) => (
            <Link to={`/essay/${e.id}`} key={i} className="card">{e.title}</Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className='subheading'>&gt;&gt;projects</h2>
        <div className="grid">
          {projects.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="card">
              <strong className='bodyText'>{p.name}</strong>
              <p>{p.desc}</p>
            </a>
          ))}
        </div>
      </section>
      <footer className="footer"><a target="_blank" href='mailto:vishals@utexas.edu'>vishals@utexas.edu</a> | <a target="_blank" href='https://www.linkedin.com/in/vishal-sund/'>linkedin</a> | <a target="_blank" href='https://github.com/vishalsund'>github</a></footer>
    </div>
    </div>
  );
}