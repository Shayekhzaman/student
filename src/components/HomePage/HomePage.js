import React from "react";
import "./HomePage.css";
import teachers from "../../images/teachers.jfif";
import home from "../../images/home-bg.jpg";
import sir from "../../images/sir.png";
import sirs from "../../images/sirs.jpg";
import course1 from "../../images/course1.jpg";
import course2 from "../../images/course2jpg.jpg";
import course3 from "../../images/course3.jpg";
import course4 from "../../images/course4.jpg";
import course5 from "../../images/course5.jpg";
import course6 from "../../images/course6.jpg";
import mehrab from "../../images/mehrab.png";

import { useHistory } from "react-router-dom";

const HomePage = () => {

    const history = useHistory();

    const getStarted = () =>{
        console.log("click me")
        history.push('/task');
    }
  return (
    <div id="container">
      <header>
        <div id="menu" class="fas fa-bars"></div>

        <a href="/login" class="logo">
          <i class="fas fa-user-graduate"></i>Logout
        </a>

        <nav class="navbar">
          <ul>
            <li>
              <a class="active" href="#home">
                home
              </a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#course">course</a>
            </li>
            <li>
              <a href="#teacher">teacher</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>

        <div id="login" class="fas fa-user-circle"></div>
      </header>

      {/* <!-- header section ends --> */}

      {/* <!-- login form  --> */}

      {/* <div class="login-form">
        <form action="">
          <h3>login</h3>
          <input type="email" placeholder="username" class="box" />
          <input type="password" placeholder="password" class="box" />
          <p>
            forget password? <a href="#">click here</a>
          </p>
          <p>
            don't have an account? <a href="#">register now</a>
          </p>
          <input type="submit" class="btn" value="login" />
          <i class="fas fa-times"></i>
        </form>
      </div> */}

      {/* <!-- home section starts  --> */}

      <section class="home" id="home">
        <h1>education from home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum neque
          aliquid <br /> similique error velit placeat vitae accusantium est nam
          magnam?
        </p>
        <a href="#">
          <button class="btn" onClick={getStarted}>get started</button>
        </a>

        <div class="shape"></div>
      </section>

      {/* <!-- home section ends --> */}

      {/* <!-- about section starts  --> */}

      <section class="about" id="about">
        <div class="image">
          <img src={home} alt="loading" />
        </div>

        <div class="content">
          <h3>why choose us?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            aperiam quaerat dolor voluptas nobis voluptates illum? Inventore
            voluptas dolore voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus
            ducimus dignissimos pariatur. Amet sed distinctio earum dolorum
            nulla, in obcaecati aliquid modi quos magni ducimus culpa nobis
            laudantium incidunt.
          </p>
          <a href="#">
            <button class="btn">learn more</button>
          </a>
          
        </div>
      </section>

    

      {/* <!-- about section ends --> */}

      {/* <!-- course section starts  --> */}

      <section class="course" id="course">
        <h1 class="heading">our popular courses</h1>

        <div class="box-container">
          <div class="box">
            <img src={course1} alt="loading" />
            <h3 class="price">$50</h3>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
              </div>
              <a href="#" class="title">
                learn front end development
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                quis nihil non debitis!
              </p>
              <div class="info">
                <h3>
                  <i class="far fa-clock"></i> 2 hours
                </h3>
                <h3>
                  <i class="far fa-calendar-alt"></i> 6 months
                </h3>
                <h3>
                  <i class="fas fa-book"></i> 12 modules
                </h3>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={course2} alt="" />
            <h3 class="price">$50</h3>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
              </div>
              <a href="#" class="title">
                learn front end development
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                quis nihil non debitis!
              </p>
              <div class="info">
                <h3>
                  <i class="far fa-clock"></i> 2 hours
                </h3>
                <h3>
                  <i class="far fa-calendar-alt"></i> 6 months
                </h3>
                <h3>
                  <i class="fas fa-book"></i> 12 modules
                </h3>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={course3} alt="" />
            <h3 class="price">$50</h3>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
              </div>
              <a href="#" class="title">
                learn front end development
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                quis nihil non debitis!
              </p>
              <div class="info">
                <h3>
                  <i class="far fa-clock"></i> 2 hours
                </h3>
                <h3>
                  <i class="far fa-calendar-alt"></i> 6 months
                </h3>
                <h3>
                  <i class="fas fa-book"></i> 12 modules
                </h3>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={course4} alt="" />
            <h3 class="price">$50</h3>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
              </div>
              <a href="#" class="title">
                learn front end development
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                quis nihil non debitis!
              </p>
              <div class="info">
                <h3>
                  <i class="far fa-clock"></i> 2 hours
                </h3>
                <h3>
                  <i class="far fa-calendar-alt"></i> 6 months
                </h3>
                <h3>
                  <i class="fas fa-book"></i> 12 modules
                </h3>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={course5} alt="" />
            <h3 class="price">$50</h3>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
              </div>
              <a href="#" class="title">
                learn front end development
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                quis nihil non debitis!
              </p>
              <div class="info">
                <h3>
                  <i class="far fa-clock"></i> 2 hours
                </h3>
                <h3>
                  <i class="far fa-calendar-alt"></i> 6 months
                </h3>
                <h3>
                  <i class="fas fa-book"></i> 12 modules
                </h3>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={course6} alt="" />
            <h3 class="price">$50</h3>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
              </div>
              <a href="#" class="title">
                learn front end development
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                quis nihil non debitis!
              </p>
              <div class="info">
                <h3>
                  <i class="far fa-clock"></i> 2 hours
                </h3>
                <h3>
                  <i class="far fa-calendar-alt"></i> 6 months
                </h3>
                <h3>
                  <i class="fas fa-book"></i> 12 modules
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- course section ends --> */}

      {/* <!-- teacher section starts  --> */}

      <section class="teacher" id="teacher">
        <h1 class="heading">our expert teachers</h1>

        <p className = "font-size:20px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At non
          explicabo tempora modi, reprehenderit ratione sunt ea porro tenetur
          officiis alias sapiente praesentium voluptas cumque quo maiores
          dolores totam ex.
        </p>

        <a href="#">
          <button class="btn">learn more</button>
        </a>
        <img id="sir" src={sir} alt="" />
      </section>
      

      {/* <!-- teacher section ends --> */}

      {/* <!-- contact section starts  --> */}

      <section class="contact" id="contact">
        <h1 class="heading">contact us</h1>

        <div class="row">
          <form action="" class="col-md-8">
            <input type="text" placeholder="full name" class="box" />
            <input type="email" placeholder="your email" class="box" />
            <input type="password" placeholder="your password" class="box" />
            <input type="number" placeholder="your number" class="box" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="box address"
              placeholder="your address"
            ></textarea>
            <input type="submit" class="btn" value="send now" />
          </form>

          <div class="image col-md-3">
            <img src={mehrab} alt="" />
          </div>
        </div>
      </section>

      {/* <!-- contact section ends --> */}

      {/* <!-- footer section starts  --> */}

      <div class="footer">
        <div class="box-container">
          <div class="box">
            <h3>branch locations</h3>
            <a href="#">Dhaka</a>
            <a href="#">Chittagong</a>
            <a href="#">Khulna</a>
            <a href="#">Rajshahi</a>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">course</a>
            <a href="#">teachers</a>
            <a href="#">contact</a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <p>
              <i class="fas fa-map-marker-alt"></i> Chittagong, Bangladesh
            </p>
            <p>
              <i class="fas fa-envelope"></i> hasanmdmaherab@gmail.com
            </p>
            <p>
              <i class="fas fa-phone"></i> 01765100505
            </p>
          </div>
        </div>

        <h1 class="credit">
          created by <a href="#">Mahrab</a> all rights reserved.
        </h1>
      </div>

      {/* <!-- footer section ends --> */}

      {/* <!-- jquery cdn link  --> */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}

      {/* <!-- custom js file link  --> */}
      <script src="script.js"></script>
    </div>
  );
};

export default HomePage;
