import React from 'react'

function Product() {
    return (
        <>
            <section class="rts-team-area rts-section-gap bg-team-color">
                <div class="text-center">
                    <h2 class="title">Products</h2>
                </div>
                <div class="container">
                    <div class="row g-5">
                        {/* <!-- team single start --> */}
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="team-single-one-start">
                                <div class="team-image-area">
                                    <a>
                                        <img src="assets/images/products/BP_Kiosk.png" alt="Business_Team_single" style={{ aspectRatio: '1/1', objectFit: 'contain' }} />
                                    </a>
                                </div>
                                <div class="single-details">
                                    <a>
                                        <h5 class="text-center">Expert Smart<br />BP Kiosk</h5>
                                    </a>
                                    <button class="button-dec" data-bs-toggle="modal" data-bs-target="#BpKioskModal"> READ DETAILS
                                    </button>
                                </div>
                            </div>
                            <div class="modal fade" id="BpKioskModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content border border-primary border border-5" style={{ borderRadius: '20px' }}>
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-1 " id="exampleModalLabel">Expert SmartBP Kiosk</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body fs-2 m-3">
                                            ชุดตู้ติดตั้งเครื่องวัดความดันโลหิตแบบอัตโนมัติ (BP) สามารถรองรับการเชื่อมต่อระบบสารสรเทศของโรงพยาบาลได้ทุกระบบผ่านLAN และ WIFI โดยอัตโนมัติ
                                            จอภาพแสดงผลแบบสัมผัส (Touch Screen) และสามรถตรวจวัดด้วยตัวเองได้
                                            ระบบยืนยันตัวตนผ่านบัตรประชาชน/บัตรโรงพยาบาล หรือ  Barcode/QR code ของระบบคิวได้
                                            สามารถตรวจสอบข้อมูลได้ทันที
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Modal Kiosk */}

                        {/* <!-- team single end -->
                <!-- team single start --> */}
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="team-single-one-start">
                                <div class="team-image-area">
                                    <a >
                                        <img src="assets/images/products/SmartBP.png" alt="Business_Team_single" style={{ aspectRatio: '1/1', objectFit: 'contain' }} />
                                    </a>
                                </div>
                                <div class="single-details">
                                    <a >
                                        <h5 class="text-center">Expert Smart <br />BP Box</h5>
                                    </a>
                                    <button class="button-dec" data-bs-toggle="modal" data-bs-target="#BpBoxModal">
                                    READ DETAILS
                                    </button>
                                </div>
                            </div>
                            <div class="modal fade" id="BpBoxModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content border border-primary border border-5" style={{ borderRadius: '20px' }}>
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-1" id="exampleModalLabel">Expert Smart BP Box</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body fs-2 m-3">
                                            รุ่น Smart BP Box กะทัดรัด วางบนโต๊ะ สามารถรองรับการเชื่อมต่อระบบสารสรเทศของโรงพยาบาลได้ทุกระบบผ่านLAN และ WIFI โดยอัตโนมัติ
                                            จอภาพแสดงผลแบบสัมผัส (Touch Screen)และสามรถตรวจวัดด้วยตัวเองได้
                                            ระบบยืนยันตัวตนผ่านบัตรประชาชน/บัตรโรงพยาบาล หรือ Barcode/QR code ของระบบคิวได้
                                            ระบบสามารถแจ้งเตือน เมื่อความดันโลหิตสูงหรือต่ำกว่าปกติ สามารถดึงตรวจสอบข้อมูลได้ทันที
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- team single end -->
                <!-- team single start --> */}
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="team-single-one-start">
                                <div class="team-image-area">
                                    <a >
                                        <img src="assets/images/products/vitalsing.png" alt="Business_Team_single" style={{ aspectRatio: '1/1', objectFit: 'contain' }} />

                                    </a>
                                </div>
                                <div class="single-details">
                                    <a >
                                        <h5 class="text-center">Expert Smart VitalSing</h5>
                                    </a>
                                    <button class="button-dec" data-bs-toggle="modal" data-bs-target="#VitalsingModal">
                                    READ DETAILS
                                    </button>
                                </div>
                            </div>
                            <div class="modal fade" id="VitalsingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content border border-primary border border-5" style={{ borderRadius: '20px' }}>
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-1" id="exampleModalLabel">Expert Smart vitalsing</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body fs-2 m-3">
                                            ระบบโมบายยูนิต (Mobile Unite)IPD/OPD เครื่องวัดเผ้าติดตามสัญญาณชีพ พร้อมระบบคัดกรองผู้ป่วยอัตโนมัติ
                                            Expert Smart VitalSigns Monitor + AI ประเมินความเสี่ยง โดยสามารถบันทึกค่า และ ส่งต่อข้อมูลไปยัง HIS/คลาวด์
                                            อย่างอัตโนมัติ ทั้งค่าความดินโลหิต NIBP (SBP) (DBP) ชีพจร (Pulse) ค่าอุณหภูมิร่างกาย (Temp) และค่าออกซิเจนในเลือด(SPO2)
                                            ใช้ได้ทั้ง OPD/IPD พร้อมเชื่อมต่อได้ทุกระบบสารสนเทศ (HIS)และเชื่อมต่อคลาวด์
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- team single end -->
                <!-- team single start --> */}
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="team-single-one-start">
                                <div class="team-image-area">
                                    <a>
                                        <img src="assets/images/products/Mobile_Connect.png" alt="Business_Team_single" style={{ /* height: '265px' */aspectRatio: '1/1', objectFit: 'contain' }} />
                                    </a>
                                </div>
                                <div class="single-details">
                                    <a >
                                        <h5 class="text-center fs-1">Expert Smart Mobile Connect</h5>
                                    </a>
                                    <button class="button-dec" data-bs-toggle="modal" data-bs-target="#SinggleModal"> READ DETAILS
                                    </button>
                                </div>
                            </div>
                            <div class="modal fade" id="SinggleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content border border-primary border border-5" style={{ borderRadius: '20px' }}>
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-1" id="exampleModalLabel">Expert Smart Mobile Connect</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body fs-2 m-3">
                                            รองรับการส่งข้อมูลขี้นระบบคลาวส์ และ HIS ของโรงพยาบาล
                                            สามารถเชือมต่อ Bluetooth และ ดูผลผ่านทางแอพพลิเคชั่น
                                            รองรับการเชือมต่ออุปกรณ์กับระบบปฏิบัติการ Android <br />
                                            รองรับการวัดค่า Systolic blood pressure (SBP),Diastolic blood pressure(DBP) ชีพจร(Pulse)ด้วยเครื่องวัดความดันโลหิตชนิดพันแขน
                                            รองรับการวัดค่าอุณหภูมิทางผิวหนัง<br />ด้วยเซนเนอร์แบบ IR
                                            รองรับการวัดค่าออกซิเจนในเลือด (SPO2)
                                            รองรับการวัดค่าด้วยเครื่องชั่งน้ำหนักดิจิทัล
                                            รองรับการวัดค่าตรวจวัดน้ำตาล
                                            มาตราฐาน ISO 13484 , ISO 15197 2013
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- team single end -->
                <!-- team single start --> */}
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="team-single-one-start">
                                <div class="team-image-area">
                                    <a >
                                        <img src="assets/images/products/Premium.png" alt="Business_Team_single" style={{ height: '268px', objectFit: 'contain' }} />
                                    </a>
                                </div>
                                <div class="single-details">
                                    <a >
                                        <h5 class="text-center">Expert Smart Premium</h5>
                                    </a>
                                    <button class="button-dec" data-bs-toggle="modal" data-bs-target="#PremiumModal">
                                    READ DETAILS
                                    </button>

                                </div>
                            </div>
                            <div class="modal fade" id="PremiumModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content border border-primary border border-5" style={{ borderRadius: '20px' }}>
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-1" id="exampleModalLabel">Expert Smart Premium</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body fs-2 m-3">
                                            เครื่องชั่งนํ้าหนัก วัดส่วนสูง SC21 พร้อมวัดอุณหภูมิ
                                            Smart SC ระบบเชื่อมต่อเครื่องวัดความดันโลหิต
                                            BP เครื่องวัดความดันโลหิต(รองรับเครื่องวัดความดัน
                                            ทุกรุ่นตามตกลง)
                                            รองรับการเชื่อมต่อระบบสารสนเทศของโรงพยาบาลได้
                                            ทุกระบบ ผ่าน LAN และ WIFI โดยอัตโนมัติ
                                            จอภาพแสดงผลแบบสัมผัส (Touch Screen) และสามารถ
                                            ตรวจวัดด้วยตัวเองได้
                                            ระบบยืนยันตัวตนผ่านบัตรประชาชน/บัตรโรงพยาบาล หรือ
                                            Barcode/QR Code ของระบบคิวได้
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- team single end -->
                <!-- team single start --> */}
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="team-single-one-start">
                                <div class="team-image-area">
                                    <a >
                                        <img src="assets/images/products/QueQ.png" alt="Business_Team_single" style={{ aspectRatio: '1/1', objectFit: 'contain' }} />
                                    </a>
                                </div>
                                <div class="single-details">
                                    <a >
                                        <h5 class="text-center">Expert Smart Que Q</h5>
                                    </a>
                                    <button class="button-dec" data-bs-toggle="modal" data-bs-target="#QueModal" >
                                    READ DETAILS
                                    </button>
                                </div>
                            </div>
                            <div class="modal fade" id="QueModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content border border-primary border border-5" style={{ borderRadius: '20px' }}>
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-1" id="exampleModalLabel">Expert Smart Que Q</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body fs-2 m-3">
                                            รองรับการเชื่อมต่อระบบบริหารจัดการคิว (Expert Smart Que Q)
                                            โรงพยาบาลส่งเสริมสุขภาพตำบล
                                            รองรับทั้งระบบ LAN และ WIFI
                                            จอภาพแสดงผลแบบสัมผัส (Touch Screen)
                                            เครื่องพิมพ์ความร้อน (Thermal printer)
                                            ระบบยืนยันตัวตนผ่านบัตรประชาชน/บัตรโรงพยาบาล
                                            หรือ Barcode/QR Code (HN)
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- team single end -->
                <!-- team single start --> */}
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="team-single-one-start">
                                <div class="team-image-area">
                                    <a >
                                        <img src="assets/images/products/sc21.png" alt="Business_Team_single" style={{ aspectRatio: '1/1', objectFit: 'contain' }} />

                                    </a>
                                </div>
                                <div class="single-details">
                                    <a >
                                        <h5 class="text-center">BMI Expert SC21</h5>
                                    </a>
                                    <button class="button-dec" data-bs-toggle="modal" data-bs-target="#SC21Modal" >
                                    READ DETAILS
                                    </button>
                                </div>
                            </div>
                            <div class="modal fade" id="SC21Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content border border-primary border border-5" style={{ borderRadius: '20px' }}>
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-1" id="exampleModalLabel">BMI Expert SC21</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body fs-2 m-3">
                                            เครื่องวัดส่วนสูง และชั่งน้ำหนักอัตโนมัติ พร้อมเครื่องวัดอุณหภูมิ
                                            สามารถรองรับการเชื่อมต่อระบบสารสนเทศของโรงพยาบาลได้
                                            ทุกระบบ ผ่าน LAN และ WIFI โดยอัตโนมัติ
                                            จอภาพแสดงผลแบบสัมผัส (Touch Screen) พร้อมคำนวณ
                                            ค่าดัชนีมวลกาย (BMI) และแสดงผลเป็นภาษาไทย เข้าใจง่าย
                                            การวัดค่าส่วนสูงแบบอัตโนมัติ มีความแม่นยำสูงสุดด้วยระบบ Ultra-Sonic
                                            ระบบอัตโนมัติ รองรับน้ำหนักได้ 1-300 กก. ส่วนสูง 70-200 ซม.
                                            ค่าความละเอียด 50 G (0.05 kg) สามารถเปลี่ยนหน่วยเป็น กิโลกรัม
                                            ปอนด์ ออนซ์ เซนติเมตร นิ้ว
                                            ระบบยืนยันตัวตนผ่านบัตรประชาชน บัตรโรงพยาบาล หรือ Barcode/
                                            QR Code ของระบบคิวได้
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- team single end -->
                <!-- team single start --> */}
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="team-single-one-start">
                                <div class="team-image-area">
                                    <a >
                                        <img src="assets/images/products/sc_sickbed.png" alt="Business_Team_single" style={{ height: '268px', objectFit: 'contain' }} />
                                    </a>
                                </div>
                                <div class="single-details">
                                    <a >
                                        <h5 class="text-center">
                                            NAGATA BW+Expert Smart SC BOX
                                        </h5>
                                    </a>
                                    <button class="button-dec" data-bs-toggle="modal" data-bs-target="#NAGATAModal">
                                    READ DETAILS
                                    </button>
                                </div>
                            </div>
                            <div class="modal fade" id="NAGATAModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content border border-primary border border-5" style={{ borderRadius: '20px' }}>
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-1" id="exampleModalLabel">NAGATA BW+Smart SC BOX</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body fs-2 m-3">
                                            รองรับการเชื่อมต่อระบบสารสนเทศของโรงพยาบาล
                                            ได้ทุกระบบ ผ่าน LAN และ Wi-Fi โดยอัตโนมัติ
                                            จอภาพแสดงผลแบบสัมผัส (Touch Screen) และ
                                            สามารถตรวจวัดด้วยตัวเองได้
                                            ระบบยืนยันตัวตนผ่านบัตรประชาชน/บัตรโรงพยาบาล
                                            หรือ Barcode/QR Code ของระบบคิวได้
                                            เครื่องชั่ง ชั่งน้ำหนักได้สูงสุด 300 กก.
                                            เครื่องชั่ง Standby อัตโนมัติ เมื่อไม่ใช้งาน
                                            เครื่องชั่งมีโปรแกรม BMI คํานวณค่า Body Mass Inbox
                                            และดัชนีมวลกาย
                                            เครื่องชั่งมีราวจับ ทำด้วยสแตนเลส และแท่นเหล็กลาย
                                            กันลื่น 100x170 ซม.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- team single end --> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product