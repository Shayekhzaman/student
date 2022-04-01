import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light nav">
        <a class="navbar-brand " href="#">
          Student Supporter
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text" href="/capital">
                Capital
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text" href="/calculator">
                Calculator
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
               <button id="logout">Log out</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>


      {/* carousel */}

      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  );
};

export default Home;
