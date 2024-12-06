import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <p>Welcome to Page 2.</p>
      <Link to="/">Go to Page 1</Link>
    </div>
  );
};

export default Page2;
