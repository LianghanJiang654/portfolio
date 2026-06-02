import photo from "../assets/myphoto.jpg";
import resume from "../assets/resume.pdf";

function About() {
  return (
    <div className="container text-center mt-5">

      <h1>About Me</h1>

      <img
        src={photo}
        alt="Profile"
        width="220"
        className="rounded-circle my-4"
      />

      <h3>Lianghan Jiang</h3>

      <p>
        Software Engineering Technology student
        currently studying in Canada.
      </p >

      <p>
        I enjoy software development, web development,
        Java programming and database systems.
      </p >

      <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-success"
>
  Download Resume
    </a>

    </div>
  );
}

export default About;