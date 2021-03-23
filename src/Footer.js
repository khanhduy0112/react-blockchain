import React from 'react'
import './footer.css'
function Footer() {
    return (
        <footer class="bg-dark text-center text-white">
            <div class="container p-4 pb-0">
                <div class="container p-4">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Footer text</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                aliquam voluptatem veniam, est atque cumque eum delectus sint!
        </p>
                        </div>

                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Footer text</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                aliquam voluptatem veniam, est atque cumque eum delectus sint!
        </p>
                        </div>
                    </div>
                </div>
                <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-facebook-f"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-twitter"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-google"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-instagram"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-github"></i
                    ></a>
                </section>
            </div>

            <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    )
}

export default Footer
