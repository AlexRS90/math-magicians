import React from 'react';
import { Link } from 'react-router-dom';

export default function Quotes() {
  return (
    <div className="container">
      <h1>Página de Quotes</h1>
      <p>
        <Link to="/edulazaro">Proyectos de Edu</Link>
      </p>
    </div>
  );
}