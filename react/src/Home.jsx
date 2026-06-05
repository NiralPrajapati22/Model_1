import Footer from "./Footer";
import Header from "./header";

function Home() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #0f172a;
        }

        .portfolio-home {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e293b 50%,
            #334155 100%
          );
          color: white;
          padding: 40px 20px;
        }

        .profile {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 4px solid #38bdf8;
          margin-bottom: 20px;
          background: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
          font-weight: bold;
          color: #38bdf8;
        }

        h1 {
          font-size: 3.5rem;
          margin-bottom: 10px;
          color: #38bdf8;
        }

        h2 {
          color: #cbd5e1;
          margin-bottom: 20px;
        }

        p {
          max-width: 700px;
          line-height: 1.8;
          color: #d1d5db;
        }

        .card {
          margin-top: 25px;
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 15px;
          width: 80%;
          max-width: 800px;
          backdrop-filter: blur(10px);
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 15px;
        }

        .skill {
          background: #38bdf8;
          color: #0f172a;
          padding: 8px 15px;
          border-radius: 20px;
          font-weight: bold;
        }
      `}</style>

      <Header />

      <div className="portfolio-home">
        <div className="profile">NP</div>

        <h1>Niral Prajapati</h1>
        <h2>Student at Silver Oak University</h2>

        <p>
          Passionate technology enthusiast with interests in Full Stack
          Development, Python Programming, Data Analytics, and Data Science.
          Dedicated to building modern web applications and extracting valuable
          insights from data.
        </p>

        <div className="card">
          <h2>Skills</h2>

          <div className="skills">
            <span className="skill">Full Stack Development</span>
            <span className="skill">Python</span>
            <span className="skill">Data Analytics</span>
            <span className="skill">Data Science</span>
            <span className="skill">React</span>
            <span className="skill">JavaScript</span>
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
          </div>
        </div>

        <div className="card">
          <h2>Tools</h2>

          <div className="skills">
            <span className="skill">Power BI</span>
            <span className="skill">Excel</span>
            <span className="skill">Git</span>
            <span className="skill">VS Code</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;