import studentImg from "../assets/student-system.png";
import portfolioImg from "../assets/portfolio-project.png";
import serverImg from "../assets/server.js.png";

function Projects() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        My Projects
      </h1>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card h-100">

            <img
              src={studentImg}
              className="card-img-top"
              alt="Student System"
            />

            <div className="card-body">
              <h5 className="card-title">
                Student Management System
              </h5>

              <p className="card-text">
                Developed using Java, Spring Boot and
                MySQL. Implemented CRUD operations
                for student management.
              </p >
            </div>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">

            <img
              src={portfolioImg}
              className="card-img-top"
              alt="Portfolio"
            />

            <div className="card-body">
              <h5 className="card-title">
                Portfolio Website
              </h5>

              <p className="card-text">
                Built using React, Bootstrap and
                React Router. Designed as a personal
                portfolio website.
              </p >
            </div>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">

            <img
              src={serverImg}
              className="card-img-top"
              alt="TaskFlow Backend"
            />

            <div className="card-body">
              <h5 className="card-title">
                TaskFlow Backend
              </h5>

              <p className="card-text">
                Developed REST APIs using Node.js,
                Express and MongoDB for backend
                application development.
              </p >
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Projects;