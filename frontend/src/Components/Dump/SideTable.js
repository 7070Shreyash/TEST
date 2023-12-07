// List Group Bootstrap
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

const SideTable = () => {
  return (
    <div className="flex-container">
      <ListGroup className="listgrp" >
        <ListGroup.Item className="Buton" action href="#link1">
          <h2>REGUALAR MODE</h2>
        </ListGroup.Item>
        <ListGroup.Item className="Buton" action href="#link2">
          <h2>DASA MODE</h2>
        </ListGroup.Item>
        <ListGroup.Item className="Buton" action href="#link3">
          <h2>DIRECT MODE</h2>
        </ListGroup.Item>
        <ListGroup.Item className="Buton" action href="#link4">
          <h2>LATERAL ENTRY MODE</h2>
        </ListGroup.Item>
      </ListGroup>
    </div>

  );
};

export default SideTable;