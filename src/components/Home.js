import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1>Página de inicio</h1>
      <p>
        <Link to="/Calculator">Let's sum</Link>
      </p>
    </div>
  );
}
