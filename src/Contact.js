import React from 'react'

function Contact() {
  return (
    <>
    <section data-bs-spy="scroll" class="rts-map-area" id="contact">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            {/* <!-- map area left --> */}
                            <div class="mapdetails-inner-one">
                                <div class="left-area single-wized">
                                    <h5 class="title">ติดต่อสอบถาม</h5>
                                    <div class="details">
                                        <p>โทรติดต่อ</p>
                                        <a class="number" href="#">086-4609902</a><br/>
                                        <a class="number" href="#">063-3943519</a>

                                        <p class="time-header">
                                            Assistance hours:
                                        </p>
                                        <p class="time">
                                            Monday – Saturday <br />Working: 8.00am - 5.00pm
                                        </p>
                                        <p class="time-header">
                                            Line Official <br/>
                                                <img src="assets/images/line/Add_line.png"/>
                                        </p>
                                    </div>
                                </div>
                                <div class="right-area single-wized ">
                                    <h5 class="title bi bi-geo-alt-fill">เยี่ยมชม</h5>
                                    <div class="details">
                                        <p>Walk In</p>
                                        <a href="#">69, 3 ถ. อรุณอมรินทร์ <br/>แขวงวัดอรุณ  <br />
                                            เขตบางกอกใหญ่ กรุงเทพมหานคร 10600</a>

                                        <p class="headoffice">
                                            Head Office
                                        </p>
                                        <p class="office">30/22 ถ.พุทธมณฑลสาย 3<br/> แขวงทวีวัฒนา <br />
                                            เขตทวีวัฒนา กรุงเทพมหานคร</p><br />
                                    </div>

                                </div>
                            </div>
                            {/* <!-- map area right --> */}
                        </div>
                        <div class="col-lg-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5867758200357!2d100.4880765864186!3d13.743449744714432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29976917b5c7b%3A0x896cec458e6cea3e!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4p-C4seC4h-C4reC4seC4geC4qeC4oyDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1675137221681!5m2!1sth!2sth"
                                height={570} allowFullScreen="yes" loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Contact