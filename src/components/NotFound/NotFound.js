import React from "react";
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена.</p>
      <Link className="not-found__link" to="/">На главную</Link>
    </section>
  );
}

export default NotFound;
