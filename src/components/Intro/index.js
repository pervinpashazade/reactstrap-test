import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

const Intro = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Link to="/news" className="btn btn-warning mr-2">Go To News</Link>
          <Link to="/asdfg" className="btn btn-danger mr-2">Go to Asdfg Page</Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Intro;