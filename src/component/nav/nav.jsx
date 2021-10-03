import React from 'react'
import './nav.css'
export default function Nav() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a id='navnav' class="navbar-brand" href="#">Karya</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search for destination...." aria-label="Search"/>
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li id='navnav-item'  class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#About">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Service">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Destination">Destinations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

