import React from 'react'
import { Link } from 'react-router-dom'

function Navebar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Edupoly</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/todos">TodoList</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/products">Products</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/countries">Counrties</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navebar