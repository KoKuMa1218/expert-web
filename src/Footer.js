import React from 'react'

function Footer() {
  return (
    <>
    <section class="rts-footer-area footer-three footer-four bg-footer-one" style={{ backgroundColor: '#295690' }}>
                <div class="container pb--100 pb_sm--40 p-5 bg-shape-f1">
                    <div class="row g-5 d-flex justify-content-evenly">
                        <div class="col-xl-3 col-lg-6">
                            <div class="footer-three-single-wized left">
                                <a href="index" class="logo_footer">
                                    <img src="assets/images/logo/logo-Expert.svg" class="bg-white" style={{ borderRadius: '10px' }} alt="Logo-image" />
                                </a>
                                <p class="disc text-white">กดไลค์เพจเฟสบุ๊ค Expert Smart Easy OPD IPD ของเราไว้เพื่อไม่ให้พลาดข่าวสารต่างๆ</p>
                                <ul class="social-three-wrapper justify-content-center">
                                    <li><a href="https://www.facebook.com/SmartEasyOPD" target={"_blank"}><i class="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- footer three mid area --> */}
                        <div class="col-xl-6 col-lg-6">
                            <div class="row">
                                {/* <!-- footer mid area left --> */}
                                <div class="col-lg-6">
                                    <div class="footer-three-single-wized mid-left">
                                        <h5 class="title">Office Information</h5>
                                        <div class="body">
                                            <div class="info-wrapper">
                                                <div class="single">
                                                    <ul class="icon">
                                                        <li><i class="bi bi-phone border border-primary"></i></li>
                                                    </ul>
                                                    <div class="info">
                                                        <span class='text-white'>ติดต่อสอบถาม</span>
                                                        <a>02-4723293-5</a>
                                                    </div>
                                                </div>
                                                <div class="single">
                                                    <ul class="icon">
                                                        <li><i class="fa-regular fa-envelope"></i></li>
                                                    </ul>
                                                    <div class="info">
                                                        <span class='text-white'>ติดต่อทางเมล์</span>
                                                        <a href="mailto:SmartEasyOPD@gmail.com" class="text-white">SmartEasyOPD@gmail.com</a>
                                                    </div>
                                                </div>
                                                <div class="single">
                                                    {/* <ul class="icon">
                                                        <li><i class="fas fa-map-marker-alt"></i></li>
                                                    </ul> */}
                                                    <div class="info">
                                                        <span class='text-white '>Walk In Location</span>
                                                        <a href="https://goo.gl/maps/awumY1mrT6dWamCR6">69/3 ถ. อรุณอมรินทร์ แขวงวัดอรุณ<br />
                                                            เขตบางกอกใหญ่ กรุงเทพมหานคร 10600</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- footer three mid area ENd --> */}
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <p class="disc text-center ptb--25 text-white">
                                    Copyright 2022. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <div class="loader-wrapper">
                <div class="loader">
                </div>
                <div class="loader-section section-left"></div>
                <div class="loader-section section-right"></div>
            </div>

            <div class="progress-wrap">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
    </>
  )
}

export default Footer