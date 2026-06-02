function Services() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-5">
        Services
      </h1>

      <div className="row">

        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h4>Web Development</h4>
            <p>
              Responsive websites using React and Bootstrap.
            </p >
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h4>Java Development</h4>
            <p>
              Java applications and object-oriented programming.
            </p >
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h4>Database Design</h4>
            <p>
              MySQL database design and management.
            </p >
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h4>REST API Development</h4>
            <p>
              Backend APIs using Node.js and Express.
            </p >
          </div>
        </div>

      </div>

    </div>
  );
}

export default Services;