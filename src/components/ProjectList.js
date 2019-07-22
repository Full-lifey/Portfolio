import React, { useState, useEffect } from 'react';

function ProjectList(props) {
  const [projects, setprojects] = useState(initialState);

  if (!projects) {
    return <h2>Loading Projects...</h2>;
  } else {
    return <h2 />;
  }
}

export default ProjectList;
