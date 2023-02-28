import React from 'react'

function Profile() {
    return (
        <>
            <section data-bs-spy="scroll" class="rts-service-details-area " id='profile'>
                <div class="text-center">
                    <h2 class="title">PROFILE</h2>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-md-12 col-sm-12 col-12">
                            {/* <!-- service details left area start --> */}
                            <div class="service-detials-step-1">
                                <div class="thumbnail">
                                    <img src="assets/images/profile/profile-02.jpg" alt="business-area" style={{ borderRadius: '20px' }} />
                                </div>
                                <h4 class="title">Company Overview</h4>
                                <p class="disc fs-2">
                                    Expert Technology Development ก่อตั้งขึ้นและจดทะเบียนพาณิชย์ (ประเทศไทย) เมื่อวันที่ 31 ส.ค. 2558 เราเป็นบริษัท Digital Startup และ Health Tech บริษัทพัฒนาและให้คำปรึกษาด้านซอฟต์แวร์ ด้วยการผสมผสานความสามารถเชิงสร้างสรรค์และทักษะด้านเทคนิคในการออกแบบ พัฒนา และส่งมอบ
                                    ตั้งแต่ต้นจนจบ โซลูชันทางธุรกิจด้านเทคโนโลยีและเทคโนโลยีด้านสุขภาพ ธุรกิจและบริการดังต่อไปนี้:
                                </p>
                                    <p class="fs-2"><span class="u-text-custom-color-11 fw-bold">Health Tech Solution –</span> ให้บริการ Software Package และ Health Solution ที่เหมาะสมกับโรงพยาบาล เพื่อการใช้งานที่รวดเร็วและมีประสิทธิภาพสูงสุด ทั้ง Software และ Hardware</p>
                                    <p class="fs-2"><span class="u-text-custom-color-11 fw-bold">Software Implement Solution –</span> เริ่มต้นจากการให้คำปรึกษาและวิเคราะห์ พัฒนา จนได้ซอฟต์แวร์ที่สมบูรณ์ที่ใช้ในบริษัทลูกค้า (ทั้ง Web & Window Application) นอกจากนี้ เรามีบริการบำรุงรักษาหลังการขาย เพื่อให้ทำงานได้อย่างราบรื่นและมีประสิทธิภาพ</p>
                                    <p class="fs-2"><span class="u-text-custom-color-11 fw-bold">Software Package Solution –</span> จัดหา Software Package และ Solution ที่เหมาะสมกับลูกค้าเพื่อการใช้งานที่รวดเร็วและมีประสิทธิภาพสูงสุดในองค์กร</p>
                                    <p class="fs-2"><span class="u-text-custom-color-11 fw-bold">Mobile Application Solution –</span> นำเสนอโซลูชันแอปพลิเคชันมือถือที่ปรับให้เหมาะกับระบบปฏิบัติการ iOS และ Android ทำงานบนแพลตฟอร์มเซิร์ฟเวอร์ที่เชื่อถือได้ และ ปลอดภัยหรือสภาพแวดล้อมไอทีบนคลาวด์</p>
                                    <p class="fs-2"> <span class="u-text-custom-color-11 fw-bold">Infrastructure Solution –</span>  เพื่อรองรับลูกค้าในด้านต่างๆ ที่เกี่ยวข้องกับโครงสร้างพื้นฐาน เช่น การติดตั้งระบบ วางระบบเครือข่าย และบริหารจัดการระบบ Network หรือ Cloud Server เป็นต้น</p>
                                <div class="row g-5 mt--30 mb--40">
                                    <div class="col-lg-6">
                                        {/* <!-- single service details card --> */}
                                        <div class="service-details-card" style={{ height: '100%', borderLeft: '5px solid blue' }}>
                                            <div class="thumbnail">
                                                <i class="bi bi-heart-pulse" style={{ fontSize: '4rem', color: 'blue' }}></i>
                                            </div>
                                            <div class="details">
                                                <h6 class="title">Health Tech Solution</h6>
                                                <p class="disc">จัดหา Software Package และ Health Solution ที่เหมาะสมกับโรงพยาบาลเพื่อการใช้งานที่รวดเร็วและมีประสิทธิภาพสูงสุด ทั้ง Software และ Hardware</p>
                                            </div>
                                        </div>
                                        {/* <!-- single service details card End --> */}
                                    </div>
                                    <div class="col-lg-6">
                                        {/* <!-- single service details card --> */}
                                        <div class="service-details-card" style={{ height: '100%', borderLeft: '5px solid blue' }}>,
                                            <div class="thumbnail">
                                                <i class="bi bi-code-slash" style={{ fontSize: '4rem', color: 'blue' }}></i>
                                            </div>
                                            <div class="details">
                                                <h6 class="title">Software Implement Solution </h6>
                                                <p class="disc">เริ่มตั้งแต่ให้คำปรึกษาและวิเคราะห์ พัฒนา จนได้ซอฟต์แวร์ที่สมบูรณ์ใช้ในบริษัทลูกค้า<br />(ทั้ง Web & Window Application) นอกจากนี้ เรามีบริการบำรุงรักษาหลังจาก Software ลันช์ทำงานได้อย่างราบรื่นและมีประสิทธิภาพ</p>
                                            </div>
                                        </div>
                                        {/* <!-- single service details card End --> */}
                                    </div>
                                    <div class="col-lg-6">
                                        {/* <!-- single service details card --> */}
                                        <div class="service-details-card" style={{ height: '100%', borderLeft: '5px solid blue' }}>
                                            <div class="thumbnail">
                                                <i class="bi bi-box" style={{ fontSize: '4rem', color: 'blue' }}></i>
                                            </div>
                                            <div class="details">
                                                <h6 class="title">Software Package Solution</h6>
                                                <p class="disc">จัดหา Software Package และ Solution ที่เหมาะสมกับลูกค้าเพื่อการใช้งานที่รวดเร็วและมีประสิทธิภาพสูงสุดในองค์กร</p>
                                            </div>
                                        </div>
                                        {/* <!-- single service details card End --> */}
                                    </div>
                                    <div class="col-lg-6">
                                        {/* <!-- single service details card --> */}
                                        <div class="service-details-card" style={{ height: '100%', borderLeft: '5px solid blue' }}>
                                            <div class="thumbnail">
                                                {/* <img src="assets/images/service/icon/12.svg" alt="" class="icon" /> */}
                                                <a class="bi bi-phone" style={{ fontSize: '4rem', color: 'blue' }}></a>
                                            </div>
                                            <div class="details">
                                                <h6 class="title">Mobile Application Solution</h6>
                                                <p class="disc">นำเสนอโซลูชั่นแอพพลิเคชั่นบนมือถือที่ปรับให้เหมาะกับระบบปฏิบัติการ iOS และ Android ทำงานบนแพลตฟอร์มเซิร์ฟเวอร์ที่เชื่อถือได้และปลอดภัยหรือสภาพแวดล้อมไอทีบนคลาวด์</p>
                                            </div>
                                        </div>
                                        {/* <!-- single service details card End --> */}
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        {/* <!-- single service details card --> */}
                                        <div class="service-details-card" style={{ borderLeft: '5px solid blue' }}>
                                            <div class="thumbnail">
                                                <i class="bi bi-database" style={{ fontSize: '4rem', color: 'blue' }}></i>

                                            </div>
                                            <div class="details">
                                                <h6 class="title">Infrastructure Solution </h6>
                                                <p class="disc">เพื่อรองรับลูกค้าในด้านต่าง ๆ ที่เกี่ยวข้องกับโครงสร้างพื้นฐาน เช่น การติดตั้งระบบ วางระบบเครือข่าย และบริหารจัดการระบบ Network หรือ Cloud Server เป็นต้น</p>
                                            </div>
                                        </div>
                                        {/* <!-- single service details card End --> */}
                                    </div>
                                </div>
                                <p class="disc fs-2">
                                    เราทำงานร่วมกับทีมงานมืออาชีพด้านเทคนิคที่มีคุณสมบัติสูง มีทักษะ อุทิศตน และมุ่งมั่นที่จะรับประกันความสำเร็จของโครงการใด ๆ ที่พวกเขาดำเนินการให้กับลูกค้า เราสนับสนุนให้เพิ่มพูนทักษะด้านเทคนิคอย่างต่อเนื่องเพื่อให้ผู้เชี่ยวชาญด้านเทคนิคทุกคนตามทันเทคโนโลยีใหม่ ๆ และลงทุนในการฝึกอบรมผู้เชี่ยวชาญของเรา สิ่งนี้ทำให้มั่นใจได้ว่ามืออาชีพทุกคนมีนวัตกรรมและความคิดสร้างสรรค์ในการแก้ปัญหาทางวิศวกรรมที่ล้ำสมัยสำหรับลูกค้า.
                                </p>
                            </div>
                            <div class="service-detials-step-2 mt--40">
                                <h4 class="title">3 ขั้นตอนในการปฏิบัติงาน</h4>
                                <p class="disc fs-2 mb--25">
                                    เนื่องจากเรานั้นต้องทำงานร่วมกับหลายโรงพยาบาล ทำให้แต่ละโรงพยาบาลนั้นมึความต้องการที่แตกต่างกันไปเราจึงต้องมีขั้นตอนในการดำเนินงาน
                                    เพื่อให้ง่ายต่อการทำงานร่วมกัน
                                </p>
                                {/* <p class="disc">
                                    Phosfluorescently maintain wireless scenarios after intermandated applications. Conveniently
                                    predominate misslat revolutionary quality vectors through future-proof manufactured
                                    products.
                                </p> */}
                                {/* <!-- stem-area start --> */}
                                <div class="row mb--40 g-5 mb_md--20 mb_sm--20 d-flex justify-content-between">
                                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div class="single-service-step text-center" style={{ borderRadius: '25px' }}>
                                            <p class="step">01</p>
                                            <h6 class="title">
                                                ขั้นที่ 1
                                            </h6>
                                            <p class="disc">
                                                เก็บ Requirement เพื่อทราบความต้องการของโรงพยาบาลทั้งทาง Hardware และ Software
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div class="single-service-step text-center" style={{ borderRadius: '25px' }}>
                                            <p class="step">02</p>
                                            <h6 class="title">
                                                ขั้นที่ 2
                                            </h6>
                                            <p class="disc">
                                                ทำการพัฒนาและปรับปรุงระบบ เพื่อให้เป็นไปตามที่ทาง <br />โรงพยาบาลต้องการต้องการ
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div class="single-service-step text-center" style={{ height: '100%', borderRadius: '25px' }}>
                                            <p class="step">03</p>
                                            <h6 class="title">
                                                ขั้นที่ 3
                                            </h6>
                                            <p class="disc">
                                                ส่งมอบและติดตั้ง รวมถึงบริการหลังการขาย
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- stem-area End --> */}
                            </div>
                            {/* <!-- service details left area end --> */}
                        </div>
                        {/* <!--rts blog wizered area --> */}
                        <div class="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 pl--50 pl_md--0 pl-lg-controler pl_sm--0 mt-2">
                            {/* <!-- single wizered start --> */}
                            <div class="rts-single-wized download" style={{ background: '#295690' }}>
                                <div class="wized-header">
                                    <h5 class="title">Download</h5>
                                </div>
                                <div class="wized-body">
                                    {/* <!-- single downlaod area start --> */}
                                    <div class="single-download-area">
                                        <img src="assets/images/service/icon/07.svg" alt="Business_downlaod" />
                                        <div class="mid">
                                            <h6 class="title">
                                                Catalog
                                            </h6>
                                            <span>Downlaod</span>
                                        </div>
                                        <a download class="rts-btn btn-primary-4" href="assets/download/Catalog.pdf"><i class="fal fa-arrow-right"></i></a>
                                    </div>
                                    {/* <!-- single downlaod area End -->

                            <!-- single downlaod area start --> */}
                                    {/* <!-- single downlaod area End --> */}
                                </div>

                            </div>
                            {/* <!-- single wizered End -->
                    <!-- single wizered start --> */}
                            <div class="rts-single-wized contact service" style={{ background: '#295690', borderRadius: '15px' }}>
                                <div class="wized-header">
                                    <a href="#"><img src="assets/images/logo/logo-Expert.svg" class="bg-white" style={{ borderRadius: '15px' }} alt="Business_logo" /></a>
                                </div>
                                <div class="wized-body">
                                    {/* <h5 class="title">Need Help? We Are Here
                                        To Help You</h5> */}
                                    <a class="fas fa-envelope rts-btn btn-primary-4" href="mailto:SmartEasyOPD@gmail.com">&nbsp;&nbsp;<a>Mail To</a></a>
                                </div>
                            </div>
                            <div>
                                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSmartEasyOPD&tabs=timeline&width=372&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                    width={372} height={600} allowfullscreen={true} allow={"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"} style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}>t</iframe>
                            </div>
                            {/* <!-- single wizered End --> */}
                        </div>

                        {/* <!-- rts- blog wizered end area --> */}
                    </div>
                </div>
                <div class="rts-team-area  bg-team-color" id='news'>
                <div class="container">
                    <div class="col-12">
                        <div class="text-center">
                            <h2 class="title">บรรยากาศการติดตั้ง</h2>
                        </div>
                    </div><br />
                    <div class="row g-5">
                        {/* <!-- single contact area --> */}
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-contact-one-inner" style={{ backgroundColor: 'transparent' }}>
                                <div class="thumbnail" style={{ borderRadius: '15px' }}> {/* <--กรอบ */}
                                    <img src="assets/images/blog/install/install_01.jpg" alt="" />
                                    <img src="assets/images/blog/install/install_07.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- single contact area end -->
                <!-- single contact area --> */}
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-contact-one-inner" style={{ backgroundColor: 'transparent' }}>
                                <div class="thumbnail" style={{ borderRadius: '15px' }}>
                                    <img src="assets/images/blog/install/install_02.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- single contact area end -->
                <!-- single contact area --> */}
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-contact-one-inner" style={{ backgroundColor: 'transparent' }}>
                                <div class="thumbnail" style={{ borderRadius: '15px' }}>
                                    <img src="assets/images/blog/install/install_03.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- single contact area end --> */}
                        {/* <div class="row g-5 justify-content-center"> */}
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-contact-one-inner" style={{ backgroundColor: 'transparent' }}>
                                <div class="thumbnail" style={{ borderRadius: '15px' }}>
                                    <img src="assets/images/blog/install/install_04.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-contact-one-inner" style={{ backgroundColor: 'transparent' }}>
                                <div class="thumbnail" style={{ borderRadius: '15px' }}>
                                    <img src="assets/images/blog/install/install_05.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-contact-one-inner" style={{ backgroundColor: 'transparent' }}>
                                <div class="thumbnail" style={{ borderRadius: '15px' }}>
                                    <img src="assets/images/blog/install/install_06.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            </section >
            

        </>
    )
}

export default Profile