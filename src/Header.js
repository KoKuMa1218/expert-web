import React from 'react'

function Header() {
    return (
        <>
            <header class="header--sticky header-one header-four header-five ">
                <div class="header-top header-top-one header-top-four header-top-five"style={{background:'#295690'}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 ">
                                <div class="top-left text-white">
                                    <i class="far fal fa-clock"></i>
                                    <p class="p-2 g-col-6 text-white">Working: 8.00am - 5.00pm</p>
                                </div>
                            </div>

                            <div class="col-lg-6 right-h-three">
                                <div class="header-top-right">
                                    <div class="single-right email">
                                        <i class="fas fa-envelope text-white"></i>
                                        <a href="mailto:SmartEasyOPD@gmail.com"class="text-white">SmartEasyOPD@gmail.com</a>
                                    </div>
                                    <div class="single-right call">
                                        <i class="far fa-phone-volume text-white"></i>
                                        <span class="text-white">โทรติดต่อ: </span>
                                        <a href="#"class="text-white">02-4723293-5</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="navbar header-main-five bg-white"id='nav'>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6">
                                <div class="thumbnail">
                                    <a href="index.html">
                                        <img src="assets/images/logo/logo-Expert.svg" alt="Expert-logo"/> {/* รอเปลี่ยน */}
                                    </a>
                                </div>
                            </div>
                            <div class=" col-xl-9 col-lg-8 col-md-8 col-sm-8 col-6">
                                <div class="main-header main-header-four main-header-five">
                                    <nav class="nav-main mainmenu-nav d-none d-xl-block">
                                        <ul class="mainmenu">
                                            <li><a href="#banner" class="fs-2">หน้าหลัก</a></li>
                                            <li><a href="#profile" class="fs-2">เกี่ยวกับเรา</a></li>
                                            <li><a href="#news" class="fs-2">ข้อมูลข่าวสาร</a></li>
                                            <li><a href="#contact" class="fs-2">ช่องทางติดต่อ</a></li>
                                        </ul>
                                    </nav>
                                    <div class="button-area">
                                        <div class="search-input-area">
                                            <div class="container">
                                                <div class="search-input-inner">
                                                    <div class="input-div">
                                                        <input id="searchInput1" class="search-input" type="text" placeholder="Search by keyword or #" />
                                                        <button><i class="far fa-search"></i></button>
                                                    </div>
                                                    <div id="close" class="search-close-icon"><i class="far fa-times"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <button id="menu-btn" class="menu rts-btn ml--20 ml_sm--5">
                                            <img class="menu-dark" src="assets/images/icon/menu.png" alt="Menu-icon" />
                                            <img class="menu-light" src="assets/images/icon/menu-light.png" alt="Menu-icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div id="side-bar" class="side-bar">
                <button class="close-icon-menu"><i class="far fa-times"></i></button>
                {/* <!-- inner menu area desktop start --> */}
                <div class="rts-sidebar-menu-desktop">
                    <a class="logo-1" href="index.html"><img class="logo" src="assets/images/logo/logo-Expert.svg" alt="finbiz_logo" /></a>
                    <a class="logo-2" href="index.html"><img class="logo" src="assets/images/logo/logo-Expert.svg" alt="finbiz_logo" /></a>
                    <a class="logo-3" href="index.html"><img class="logo" src="assets/images/logo/logo-Expert.svg" alt="finbiz_logo" /></a>
                    <a class="logo-4" href="index.html"><img class="logo" src="assets/images/logo/logo-Expert.svg" alt="finbiz_logo" /></a>
                    <div class="body d-none d-xl-block">
                        <p class="disc">
                            อุปกรณ์เครื่องมือทางการแพทย์และระบบคัดกรองผู้ป่วย และเชื่อมต่อฐานข้อมูลโรงพยาบาลอัตโนมัติ
                        </p>
                        <div class="get-in-touch">
                            {/* <!-- title --> */}
                            <div class="h6 title">ติดต่อสอบถาม</div>
                            {/* <!-- title End --> */}
                            <div class="wrapper">
                                {/* <!-- single --> */}
                                <div class="single">
                                    <i class="fas fa-phone-alt"></i>
                                    <a>02-4723293-5</a>
                                </div>
                                {/* <!-- single ENd -->
                        <!-- single --> */}
                                <div class="single">
                                    <i class="fas fa-envelope"></i>
                                    <a href="mailto:SmartEasyOPD@gmail.com">SmartEasyOPD@gmail.com</a>
                                </div>
                                {/* <!-- single ENd -->
                        <!-- single --> */}
                                <div class="single">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <a href="https://goo.gl/maps/YWrecLGCCvuQcu1C7"target={'_blank'}>69/3 อรุณอมรินทร์ แขวงวัดอรุณ เขตบางกอกใหญ่ กรุงเทพมหานคร 10600 ประเทศไทย</a>
                                </div>
                                {/* <!-- single ENd --> */}
                            </div>
                            <div class="social-wrapper-two menu d-flex justify-content-center">
                                <a href="https://www.facebook.com/SmartEasyOPD"target={"_blank"}><i class="fab fa-facebook-f"></i></a>
                                {/* <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-whatsapp"></i></a> */}
                                {/*  <!-- <a href="#"><i class="fab fa-linkedin"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                    <div class="body-mobile d-block d-xl-none home-blue">
                        <nav class="nav-main mainmenu-nav">
                            <ul class="mainmenu fs-2">
                                <li><a href="#banner">หน้าหลัก</a></li>
                                <li><a href="#profile">เกี่ยวกับเรา</a></li>
                                <li><a href="#contact">ช่องทางติดต่อ</a></li>
                                <li><a href="assets/download/Catalog.pdf"target={'_blank'}>เข้าชมCatalog</a></li>
                            </ul>
                        </nav>
                        <div class="social-wrapper-two menu mobile-menu d-flex justify-content-center">
                            <a href="https://www.facebook.com/SmartEasyOPD"target={"_blank"}><i class="fab fa-facebook-f"></i></a>
                           {/*  <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-whatsapp"></i></a> */}
                            {/* <!-- <a href="#"><i class="fab fa-linkedin"></i></a> --> */}
                        </div>
                        {/* <a href="#" class="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu">Get Quote</a> */}
                    </div>
                </div>
                {/* <!-- inner menu area desktop End --> */}
            </div>
            <div id="anywhere-home"></div>
            {/* <!-- banner area start three --> */}
            <div data-bs-spy="scroll" class="rts-banner-area banner-three banner-four"id="banner">
                <div class="swiper-wrapper"></div>
                <div class="shape1">
                    <img src="assets/images/banner/shape/05.png" alt="" />
                </div>
                <div class="shape2">
                    <img src="assets/images/banner/shape/06.png" alt="" />
                </div>
                <div class="shape3">
                    <img src="assets/images/banner/shape/07.png" alt="" />
                </div>
                <div class="shape4">
                    <img src="assets/images/banner/shape/08.png" alt="" />
                </div>
                <div class=" bg_banner-three bg_banner-four bg_image rts-section-gap ">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="banner-three-inner banner-four-inner">
                                    {/* <!-- type headline start--> */}
                                    <h1 class="title cd-headline clip is-full-width">
                                        <span class="u-text-custom-color-11 text-primary">E<span class="text-dark">xpert</span></span><br/>
                                        <span class="u-text-custom-color-11 text-primary">T<span class="text-dark">echnology</span></span><br/>
                                        <span class="u-text-custom-color-11 text-primary">D<span class="text-dark">evelopment</span></span>
                                    </h1>
                                    <div class="button-group">
                                        <a download href="assets/download/Catalog.pdf" class="rts-btn btn-primary-3 btn-primary-4 fs-2">Download Catalog</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header