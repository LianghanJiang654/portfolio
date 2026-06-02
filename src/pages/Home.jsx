import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">

      <h1 className="display-4">
        Welcome to My Portfolio
      </h1>

      <p className="lead">
        Software Engineering Student
      </p >

      <p>
        Passionate about web development,
        Java programming and software design.
      </p >

      <Link to="/about">
        <button className="btn btn-primary">
          Learn More
        </button>
      </Link>

    </div>
  );
}

export default Home;