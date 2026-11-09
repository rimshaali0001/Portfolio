import './App.css'

export default function App() {
  const projects = [
    { name: 'Pie', desc: 'Student budgeting app with receipt scanning' },
    { name: 'MiniTask', desc: 'Linux process manager in C++ and Qt' },
    { name: 'CV Skill Gap', desc: 'Career guide app for the Pakistani job market' },
  ]

  return (
    <>
      <header>
        <h1>Rimsha Ali</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about">
          <img src="/avatar.svg" alt="Portrait placeholder for Rimsha Ali" />
          <h2>Hi I am Rimsha</h2>
          <p>CS AI student at Sukkur IBA University who loves building things</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map(p => (
              <article key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>rimshaali3417@gmail.com</p>
          <a href="https://github.com/rimshaali0001">GitHub</a>
        </section>
      </main>

      <footer>
        <p>© 2026 Rimsha Ali</p>
      </footer>
    </>
  )
}