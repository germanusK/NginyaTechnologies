$(document).ready(() => {

    const headerSection = document.querySelector('#navigationSection');
    const footerSection = document.querySelector('#footerSection');

    const header = ` <div class="container-fluid">
        <div class="row no-gutters container-fluid" id="brand-bar">
            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                <marquee direction="right" scrolldelay="85" class="container-fluid">
                    <img src="./images/logo2.gif" width="85" height="85" class="img-fluid rounded-circle" alt="logo">
                </marquee>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                <div class="container text-center text-dark py-2 welcomeheader">
                    <a href="./index.html" class="headerLink text-center">
                        <h1 class="text-uppercase head-max">
                            Nginya Technologies
                        </h1>
                        <h3 class="head-min text-warning text-capitalize">Creativity & impact</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>



    <!-- NAVBAR HERE -->
    <div class="mx-1 my-2 d-block">
    <button id = "collapse-toggler" data-toggle="collapse" data-target="#navbarSection" class="btn btn-dark my-2"><i class="fa fa-bars"></i></button>
    </div>
        <header id="navbarSection" class="container-fluid collapse show">
        <nav id="menu-list" class="navbar navbar-expand-lg justify-content-center text-capitalize text-white">
            <ul class="navbar-nav mt-3 pagination pagination-lg">
                <li class="nav-item mx-2">
                    <a href="index.html" class="nav-link btn navbar-btn text-white btn-lg px-4">
                        <i class="fas fa-home"></i>
                        Home </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="./aboutAP.html" target="blank" class="nav-link btn text-white btn-lg px-4">About</a>
                </li>
                <li class="nav-item mx-2">
                    <a href="#portfolio" class="nav-link btn text-white btn-lg px-4">Portfolio</a>
                </li>
            </ul>
        </nav>
    </header>
`;



const footer = ` <!-- footer Section -->
<footer id="footer" class="bg-dark py-5">
    <div class="container-fluid">
        <!-- Footer Title row -->
        <div class="row">
            <div class="col text-center">
                <h1 class="display-4 text-uppercase text-white mb-0">
                    <strong>nginya</strong>
                </h1>
                <div class="title-underline bg-primary"></div>
                <p class="mt-2 text-capitalize text-muted">
                    Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <!-- End of footer Title row -->
        <div class="row">
            <div class="col text-center">
                <a href="#" class="btn">
                    <i class="fab fa-facebook fa-3x text-primary m-2"></i>
                </a>
                <a href="#" class="btn">
                    <i class="fab fa-twitter fa-3x text-primary m-2"></i>
                </a>
                <a href="#" class="btn">
                    <i class="fab fa-instagram fa-3x text-primary m-2"></i>
                </a>
                <a href="#" class="btn">
                    <i class="fab fa-google-plus fa-3x text-primary m-2"></i>
                </a>
                <button type="button" class="btn btn-danger
                 d-block mx-auto my-3" data-toggle="modal" data-target="#modal">Suggestion</button>
            </div>
        </div>
    </div>
</footer>
<!-- End of footer Section -->




<!-- footer -->
<footer class="bg-dark">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 ml-auto">
                <div class="row text-light py-4">
                    <div class="col-md-4 col-sm-4 text-center">
                        <h5 class="pb-3 long-head">
                            About Nginyatechnologies
                        </h5>
                        <p class="small">
                            We create sustainable mobile, desktop and web applications that
                            cut accross every sphere of life (Education, Politics, Arts and
                            Entertainment, science and engineering, family, business, etc.)
                            which are easy to use as well as useful.
                            <p>Offers training for software development in the above mentioned areas</p>
                        </p>
                    </div>
                    <div class="col-md-4 col-sm-4 text-center">
                        <h5 class="font-weight-light text-capitalize long-word">
                            Nginyatechnologies, Malingo-street, Molyko, Buea, South West, Cameroon
                        </h5>
                        <p class="text-light font-weight-light font-italic mb-2">
                            <strong>Creativity and Impact</strong>
                        </p>

                    </div>
                    <div class="col-md-4 col-sm-4 text-center">
                        <h5 class="pb-3">
                            Contact Us
                        </h5>
                        <a href="#" id="footer-site-email" class="text-info mb-3 mr-3 long-word">nginyatechnologies@gmail.com</a>

                        <ul class="list-inline pt-3 pr-3">
                            <li class="list-inline-item">
                                <a href="" class="footer-link"> <i
                                        class="fab fa-facebook-square fa-2x text-primary"></i> </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="" class="footer-link"> <i class="fab fa-google-plus fa-2x text-danger"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="" class="footer-link"> <i class="fab fa-instagram fa-2x text-danger"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="" class="footer-link"> <i class="fab fa-twitter fa-2x text-info"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="row">
                    <div class="col text-center text-light border-top pt-3 long-word">
                        <p> &copy; Copyright 2019, All Rights Reserved, Nginyatechnologies. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- end of footer -->







    <!-- Modal -->
    <div class="modal fade" id="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal header -->
                <div class="modal-header">
                    <h3 class="modal-title text-primary text-capitalize text-center">Please drop a feedback</h3>
                    <button type="button" class="close" data-dismiss="modal">
                        &times;
                    </button>
                </div>
                <!-- End of Modal header -->

                <!-- Modal Body -->
                <div class="modal-body container p-5">
                    <form action="#" class="form-group">
                        <div class="row">
                            <div class="col-25">
                                <label for="fname">First Name</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="fname" name="firstname" class="form-control"
                                    placeholder="Your name..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="lname">Last Name</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="lname" name="lastname" class="form-control"
                                    placeholder="Your last name..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="country">Country</label>
                            </div>
                            <div class="col-75">
                                <select id="country" name="country">
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="China">China</option>
                                    <option value="China">China</option>
                                    <option value="India">India</option>
                                    <option value="India">India</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="subject">Subject</label>
                            </div>
                            <div class="col-75">
                                <textarea id="subject" name="subject" class="form-control"
                                    placeholder="Write something.." style="height:200px"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- End of Modal Body -->

                <!-- Modal Footer -->
                <div class="modal-footer">
                    <!-- <div class="row">
                        <input type="submit" value="Submit">
                    </div> -->
                    <button type="button" data-dismiss="modal" class="btn btn-success px-5">Send</button>
                    <button type="button" data-dismiss="modal" class="btn btn-danger">Close</button>
                </div>
                <!-- End of Modal footer -->
            </div>
        </div>
    </div>
    <!-- End of Modal -->

`;

    headerSection.innerHTML = header;
    footerSection.innerHTML = footer;


    let doc_header = document.querySelectorAll("#navigationSection")[0];
    let doc_header_bgColor = doc_header.style.backgroundColor;

    document.body.onscroll = function () {
        if (document.body.scrollHeight > 5) {
            doc_header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
        else {
            doc_header.style = doc_header_bgColor;
        }
    }


    //toggle view profile button

    $('#sinclaire').click((event) => {
        event.preventDefault();
        const showInfo = document.querySelector(".sinclaire").classList.toggle("d-none");
    });



    $('#germanus').click((event) => {
        event.preventDefault();
        const showInfo = document.querySelector(".germanus").classList.toggle("d-none");
    });


    $('#nasah').click((event) => {
        event.preventDefault();
        const showInfo = document.querySelector(".nasah").classList.toggle("d-none");
    });


    $('#pastor').click((event) => {
        event.preventDefault();
        const showInfo = document.querySelector(".pastor").classList.toggle("d-none");
    });

    $('#lewis').click((event) => {
        event.preventDefault();
        const showInfo = document.querySelector(".lewis").classList.toggle("d-none");
    });

    $('#edwin').click((event) => {
        event.preventDefault();
        const showInfo = document.querySelector(".edwin").classList.toggle("d-none");
    });




});