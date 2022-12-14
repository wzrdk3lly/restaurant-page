export function renderAboutUs() {
  let mainSection = document.querySelector(".main-section");

  let about = document.createElement("div");
  about.classList.add("about-us");

  about.innerHTML = `
  <section class="about-us">
  <nav
    class="navbar navbar-expand-lg bg-gray-200 shadow-md py-2 h-16relative flex items-center w-full justify-between">
    <div class="px-6 w-full flex flex-wrap items-center justify-between">
      <div class="flex items-center">
        <button
          class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-5" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
          </svg>
        </button>
        <a class="navbar-brand text-blue-600" href="#!">
          <svg class="w-5 h-5 ml-2 lg:ml-0 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor"
              d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z">
            </path>
          </svg>
        </a>
      </div>
      <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
        <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
          <li class="nav-item">
            <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              href="#!" data-mdb-ripple-color="light">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              href="#!">About us</a>
          </li>
          <li class="nav-item mb-2 lg:mb-0"></li>
        </ul>
      </div>
      <div class="flex items-center lg:ml-auto"></div>
    </div>
  </nav>

  <div class="text-center bg-blue-100 text-gray-800 py-20 px-2">
    <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
      About Us
    </h1>
    <a id="nav-button"
      class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      href="#!" role="button">Menu</a>
  </div>
  <!-- Container for demo purpose -->
  <div class="container my-24 px-6 mx-auto">

    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800">

      <!-- Jumbotron -->
      <div class="container mx-auto xl:px-32 text-center lg:text-left">
        <div class="grid lg:grid-cols-2 flex items-center">
          <div class="mb-12 lg:mb-0">
            <div class="block rounded-lg shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14"
              style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)">
              <h3 class="text-2xl font-bold mb-3">Rated the #1 restaurant for H4ck3rs</h3>
              <h5 class="text-lg text-blue-600 font-bold mb-12 lg:mb-10 xl:mb-12">"Can't hack the planet on an empty
                stomach"</h5>

              <p class="font-bold mb-4">The Hacker's Manifesto by The Mentor</p>
              <p class="text-gra-500 mb-6">
                Another one got caught today, it's all over the papers. "Teenager
                arrested in computer crime scandal", "Hacker arrested after bank
                tampering"...

                Damn Kids. They're all alike.

                But did you, in your three-piece psychology and 1950's technobrain ever
                take a look behind the eyes of a hacker? Did you ever wonder what made
                him tick, what forces shaped him, what may have molded him?

                I am a hacker, enter my world...

                Mine is a world that begins with school. I've listened to the teacher
                explain for the fifteenth time how to reduce a fraction. I understand
                it. "No, Mrs. Smith, I didn't show my work. I did it in my head..."

                Damn kid. Probably copied it. They're all alike.

                I made a discovery today. I found a computer. Wait a second, this is
                cool. It does what I want it to do. If it makes a mistake, it's because
                I screwed up. Not because it doesn't like me...

                or feels threatened by me...

                or thinks I'm a smart ass...

                or doesn't like teaching and shouldn't be here...

                Damn kid. All he does is play games. They're all alike.

                And then it happened... A door opened to a world... Rushing through the
                phone line like heroin through an addict's veins, an electronic pulse is
                sent out, a refuge from the day to day incompetencies is sought... A
                board is found.

                "This is it... This is where I belong..."
              </p><a href="https://archive.org/stream/The_Conscience_of_a_Hacker/hackersmanifesto.txt">....Read More :) </a>



            </div>
          </div>

          <div>
            <img src="./pexels-tima-miroshnichenko-5380837.jpg" class="w-full rounded-lg shadow-lg"
              alt="" />
          </div>
        </div>
      </div>
      <!-- Jumbotron -->

    </section>
    <!-- Section: Design Block -->

  </div>
  <!-- Container for demo purpose -->
</section>
    `;

  let footer = document.createElement("div");

  footer.innerHTML = `

<footer class="text-center text-white inset-x-0 fixed bottom-0" style="background-color: #f1f1f1">

<div class="flex justify-center mb-9 mt-5">
  <a href="#!" class="mr-9 text-gray-800">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
      class="svg-inline--fa fa-facebook-f w-2.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
      </path>
    </svg>
  </a>
  <a href="#!" class="mr-9 text-gray-800">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
      class="svg-inline--fa fa-twitter w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor"
        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
      </path>
    </svg>
  </a>
  <a href="#!" class="mr-9 text-gray-800">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
      class="svg-inline--fa fa-google w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
      <path fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
      </path>
    </svg>
  </a>
  <a href="#!" class="mr-9 text-gray-800">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
      class="svg-inline--fa fa-instagram w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor"
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
      </path>
    </svg>
  </a>
  <a href="#!" class="mr-9 text-gray-800">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
      class="svg-inline--fa fa-linkedin-in w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor"
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
      </path>
    </svg>
  </a>
  <a href="#!" class="text-gray-800">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
      class="svg-inline--fa fa-github w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
      <path fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
      </path>
    </svg>
  </a>
</div>


<div class="text-center text-gray-700 p-4" style="background-color: rgba(0, 0, 0, 0.2)">
  ?? 2021 Copyright:
  <a class="text-gray-800" href="https://twitter.com/home">WZRDK3lly</a>
</div>
</footer>
    
    `;

  mainSection.appendChild(about);
  mainSection.appendChild(footer);
}
