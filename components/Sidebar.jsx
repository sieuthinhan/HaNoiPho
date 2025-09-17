import Ngoisao from "./Ngoisao";
import { useState } from "react";
import hanoiphoimg from '../assets/hanoipho.png';
import searchimg from '../assets/search.png';
import angi1img from '../assets/angi1.png';
import angi2img from '../assets/angi2.png';
import angi3img from '../assets/angi3.png';
import choigi1img from '../assets/choigi1.png';
import choigi2img from '../assets/choigi2.png';
import filterimg from '../assets/filter.png';
import phothinimg from '../assets/phothin.png';
import checkedimg from '../assets/checked.png';
import locationimg from '../assets/location.png';
import inforimg from '../assets/infor.png';
import positiveimg from '../assets/positive.png';
import negativeimg from '../assets/negative.png';
import trongdongimg from '../assets/trongdong.png';
import flowerimg from '../assets/flower.png';
import starimg from '../assets/star.png';
import nguyenhaimg from '../assets/nguyenha.png';
import vinhphanimg from '../assets/vinhphan.png';
import likedimg from '../assets/liked.png';
import likeimg from '../assets/like.png';
import aimg from '../assets/a.png';
import greystarimg from '../assets/greystar.png';
import whitestarimg from '../assets/whitestar.png';
import lessimg from '../assets/less.png';

function Sidebar({ selected, setSelected, selected1 }) {
    const [search, setSearch] = useState("");
    const [danhsach, setDanhsach] = useState(false);
    const [thongtinchung, setThongtinchung] = useState(true);
    const [danhgia, setDanhgia] = useState(false);
    const [chitiet, setChitiet] = useState(false);
    const [vietdanhgia, setVietdanhgia] = useState(false);
    const [danhgiacao, setDanhgiacao] = useState(true);
    const [xemthem, setXemthem] = useState(false);

    const clickangi = () => {
        setDanhsach(!danhsach);
        setSelected(!selected);
    };

    const timkiem = (id) => {
        if (!search) return true;
        return id.toLowerCase().includes(search.toLowerCase());
    };

    const clickthongtinchung = () => {
        setThongtinchung(!thongtinchung);
        setDanhgia(false);
        setChitiet(false);
    };

    const clickdanhgia = () => {
        setDanhgia(!danhgia);
        setThongtinchung(false);
        setChitiet(false);
    }

    const clickchitiet = () => {
        setChitiet(!chitiet);
        setThongtinchung(false);
        setDanhgia(false);
    }

    const clickvietdanhgia = () => {
        setVietdanhgia(!vietdanhgia);
    }

    const locdanhgia = (e) => {
        if (e.target.value === "danhgiacao") {
            setDanhgiacao(true);
        }
    }

    const clickxemthem = () => {
        setXemthem(!xemthem);
    }

    return (
        <div className="Sidebar">
            <div className="Sidebar-head">
                <img src={hanoiphoimg} alt="hanoiphoimg" className='hanoipho-img' />
            </div>

            {xemthem && (
                !selected1 && (
                    <div className="bolochead">
                        <div className="bolochead1">
                            <img src={lessimg} alt="back" onClick={clickxemthem} />
                            <p>Bộ lọc</p>
                            <div></div>
                        </div>
                    </div>
                )
            )}

            {!xemthem && (
                <div className='Sidebar-search'>
                    <div
                        className='Sidebar-searchinput'
                        style={{ border: search ? "#B9975B 1.5px solid" : "#0000000C" }}
                    >
                        <div className='Sidebar-searchicon'>
                            <img src={searchimg} alt="searchimg" className='search-img' />
                        </div>
                        <input
                            type='text'
                            placeholder='Search...'
                            className='Sidebar-searchinp'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            )}

            {selected1 && (
                <div className="infor">
                    <div className="infor1">
                        <img src={phothinimg} alt="phothinimg" className="phothinimg1" />
                        <div className="infor11">
                            <div className="infor111">
                                <p>Phở thìn</p>
                                <img src={checkedimg} alt="checkedimg" className="checkedimg" />
                            </div>

                            <div className="infor112">
                                <div className='stars'>
                                    <img src={positiveimg} alt="positiveimg" className='star' />
                                    <img src={positiveimg} alt="positiveimg" className='star' />
                                    <img src={positiveimg} alt="positiveimg" className='star' />
                                    <img src={negativeimg} alt="negativeimg" className='star' />
                                    <img src={negativeimg} alt="negativeimg" className='star' />
                                </div>
                            </div>

                            <p className="infor113">3.0  <span>(226 bình luận)</span></p>

                            <p className="infor114">Đã đóng cửa <span>lúc 05:00</span></p>

                            <p className="infor115">www.phothin.com</p>

                            <p className="infor116">Nhà hàng</p>
                        </div>
                    </div>

                    <div className="infor2">
                        <div
                            className="infor21"
                            onClick={clickthongtinchung}
                            style={{ cursor: "pointer", backgroundColor: thongtinchung ? "#FFFFFF" : "transparent" }}
                        >
                            <p>Thông tin chung</p>
                        </div>

                        <div
                            className="infor21"
                            onClick={clickdanhgia}
                            style={{ cursor: "pointer", backgroundColor: danhgia ? "#FFFFFF" : "transparent" }}
                        >
                            <p>Đánh giá</p>
                        </div>

                        <div
                            className="infor21"
                            onClick={clickchitiet}
                            style={{ cursor: "pointer", backgroundColor: chitiet ? "#FFFFFF" : "transparent" }}
                        >
                            <p>Chi tiết</p>
                        </div>
                    </div>

                    {thongtinchung && (
                        <div className="infor3">
                            <img src={trongdongimg} alt="trongdongimg" />
                            <div className="infor31">
                                <div className="infor311">
                                    <div className="infor3111">
                                        <p>PHỞ THÌN</p>
                                        <img src={flowerimg} alt="flowerimg" />
                                    </div>

                                    <div className="gachvang"></div>
                                </div>

                                <p className="infor312">Thông tin doanh nghiệp đã được đăng ký với Sở Kế Hoạch và Đầu tư Thành Phố Hà Nội</p>

                                <div className="infor313">
                                    <div className="infor3131">
                                        <p className="infor31311">Tên doanh nghiệp</p>
                                        <p className="infor31312">Phở Thìn</p>
                                    </div>

                                    <div className="infor3131">
                                        <p className="infor31311">Mã số doanh nghiệp</p>
                                        <p className="infor31312">00326261521</p>
                                    </div>

                                    <div className="infor3131">
                                        <p className="infor31311">Ngày cấp giấy chứng nhận</p>
                                        <p className="infor31312">24/12/1990</p>
                                    </div>

                                    <div className="infor3132">
                                        <p className="infor31311">Loại hình DN</p>
                                        <p className="infor31312">Công ty TNHH một thành viên</p>
                                    </div>
                                    <div className="infor3132">
                                        <p className="infor31311">Địa chỉ trụ sở</p>
                                        <p className="infor31312">Số 268, ấp 4, Xã Vị Bình, Huyện Vị Thủy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {thongtinchung && (
                        <div className="infor4">
                            <div className="infor41">
                                <p>Địa chỉ liên hệ</p>
                            </div>

                            <div className="infor42">
                                <div className="infor421">
                                    <p>Số 268, ấp 4, Xã Vị Bình, Huyện Vị Thủy, Tỉnh Hậu Giang, Việt Nam</p>
                                </div>

                                <div className="infor422">
                                    <div className="infor4221"></div>
                                    <div className="infor4222"></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {thongtinchung && (
                        <div className="infor4">
                            <div className="infor41">
                                <p>Số điện thoại</p>
                            </div>

                            <div className="infor42">
                                <div className="infor421">
                                    <p>+84 162 321 8123</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {thongtinchung && (
                        <div className="infor4">
                            <div className="infor41">
                                <p>Email</p>
                            </div>

                            <div className="infor42">
                                <div className="infor421">
                                    <p>phothin@phothin.com</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {danhgia && (
                        <div className="react">
                            <p className="react1">123 Đánh giá nhà hàng</p>

                            <div className="react2">
                                <div className="react21">
                                    <div className="react211">
                                        <img src={positiveimg} alt="positiveimg" />
                                        <img src={positiveimg} alt="positiveimg" />
                                        <img src={positiveimg} alt="positiveimg" />
                                        <img src={negativeimg} alt="negativeimg" />
                                        <img src={negativeimg} alt="negativeimg" />
                                    </div>

                                    <p><span>3.0/5 </span>đánh giá trung bình</p>
                                </div>

                                <p className="react22">80 trên 100 (80%) khách hàng của chúng tôi đánh giá cao sản phẩm này</p>
                            </div>

                            <div className="react3">
                                <div className="react31">
                                    5
                                    <img src={starimg} alt="starimg" />
                                </div>

                                <div className="react32">
                                    <div className="react321"></div>
                                    <div className="react322"></div>
                                </div>

                                <p className="react33">50</p>
                            </div>

                            <div className="react3">
                                <div className="react31">
                                    4
                                    <img src={starimg} alt="starimg" />
                                </div>

                                <div className="react32">
                                    <div className="react323"></div>
                                    <div className="react322"></div>
                                </div>

                                <p className="react33">20</p>
                            </div>

                            <div className="react3">
                                <div className="react31">
                                    3
                                    <img src={starimg} alt="starimg" />
                                </div>

                                <div className="react32">
                                    <div className="react324"></div>
                                    <div className="react322"></div>
                                </div>

                                <p className="react33">30</p>
                            </div>

                            <div className="react3">
                                <div className="react31">
                                    2
                                    <img src={starimg} alt="starimg" />
                                </div>

                                <div className="react32">
                                    <div className="react325"></div>
                                    <div className="react322"></div>
                                </div>

                                <p className="react33">20</p>
                            </div>

                            <div className="react3">
                                <div className="react31">
                                    1
                                    <img src={starimg} alt="starimg" />
                                </div>

                                <div className="react32">
                                    <div className="react326"></div>
                                    <div className="react322"></div>
                                </div>

                                <p className="react33">3</p>
                            </div>

                            <button
                                className="react4"
                                onClick={clickvietdanhgia}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="react41">
                                    <p>Viết đánh giá</p>
                                </div>
                            </button>

                            <div className="divider">
                                <div className="divider1"></div>
                            </div>
                        </div>
                    )}

                    {vietdanhgia && (
                        <div className="baidanhgia">
                            <div className="tatcabaidanhgia">
                                <p>Tất cả bài đánh giá</p>
                                <div className="loctheo">
                                    <p>Lọc theo:</p>
                                    <select className="locdanhgia" onChange={locdanhgia} defaultValue="danhgiacao">
                                        <option value="danhgiacao">Đánh giá cao</option>
                                        <option value="danhgiathap">Đánh giá thấp</option>
                                    </select>
                                </div>
                            </div>

                            {danhgiacao && (
                                <div className="cacdanhgia">
                                    <div className="cacdanhgia1">
                                        <div className="cdg1">
                                            <img src={nguyenhaimg} alt="avt" />
                                            <div className="cdg11">
                                                <div className="cdg111">
                                                    <p className="cdg1111">Nguyễn Hà</p>
                                                    <p className="cdg1112">1 đánh giá</p>
                                                </div>

                                                <div className="cdg112">
                                                    <div className="cdg1121">
                                                        <img src={positiveimg} alt="positive" />
                                                        <img src={positiveimg} alt="positive" />
                                                        <img src={positiveimg} alt="positive" />
                                                        <img src={negativeimg} alt="negative" />
                                                        <img src={negativeimg} alt="negative" />
                                                    </div>

                                                    <p>1 ngày trước</p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="cdg2">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>

                                        <div className="cdg3">
                                            <img src={phothinimg} alt="pho!" />
                                            <img src={phothinimg} alt="pho!" />
                                            <img src={phothinimg} alt="pho!" />
                                            <div className="pho3">
                                                <div className="pho31">+3</div>
                                                <img src={phothinimg} alt="pho!" />
                                            </div>
                                        </div>

                                        <div className="cdg4">
                                            <div className="thich">
                                                <img src={likeimg} alt="" />
                                                <p>0 Thích</p>
                                            </div>

                                            <button className="rp">Báo cáo</button>
                                        </div>

                                        <div className="line"></div>
                                    </div>

                                    <div className="cacdanhgia1">
                                        <div className="cdg1">
                                            <img src={vinhphanimg} alt="avt" />
                                            <div className="cdg11">
                                                <div className="cdg111">
                                                    <p className="cdg1111">Nguyễn Hà</p>
                                                    <p className="cdg1112">1 đánh giá</p>
                                                </div>

                                                <div className="cdg112">
                                                    <div className="cdg1121">
                                                        <img src={positiveimg} alt="positive" />
                                                        <img src={positiveimg} alt="positive" />
                                                        <img src={positiveimg} alt="positive" />
                                                        <img src={negativeimg} alt="negative" />
                                                        <img src={negativeimg} alt="negative" />
                                                    </div>

                                                    <p>1 ngày trước</p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="cdg2">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>

                                        <div className="cdg3">
                                            <img src={phothinimg} alt="pho!" />
                                            <img src={phothinimg} alt="pho!" />
                                        </div>

                                        <div className="cdg4">
                                            <div className="thich">
                                                <img src={likedimg} alt="" />
                                                <p>20</p>
                                            </div>

                                            <button className="rp">Báo cáo</button>
                                        </div>

                                        <div className="line"></div>
                                    </div>

                                    <div className="cacdanhgia1">
                                        <div className="cdg1">
                                            <img src={aimg} alt="avt" />
                                            <div className="cdg11">
                                                <div className="cdg111">
                                                    <p className="cdg1111">Nguyễn Hà</p>
                                                    <p className="cdg1112">1 đánh giá</p>
                                                </div>

                                                <div className="cdg112">
                                                    <div className="cdg1121">
                                                        <img src={positiveimg} alt="positive" />
                                                        <img src={positiveimg} alt="positive" />
                                                        <img src={positiveimg} alt="positive" />
                                                        <img src={negativeimg} alt="negative" />
                                                        <img src={negativeimg} alt="negative" />
                                                    </div>

                                                    <p>1 ngày trước</p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="cdg2">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>

                                        <div className="cdg4">
                                            <div className="thich">
                                                <img src={likedimg} alt="" />
                                                <p>20</p>
                                            </div>

                                            <button className="rp">Báo cáo</button>
                                        </div>

                                        <div className="line"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {chitiet && (
                        <div >

                        </div>
                    )}

                </div>
            )}

            {!selected1 && (
                !xemthem && (
                    <div className='Sidebar-subhead'>
                        <p className='tieuchi'>Tiêu chí</p>
                    </div>
                )
            )}

            {!selected1 && (
                <div className='what'>
                    {timkiem("Ăn gì?") && (
                        <div
                            className='what11'
                            onClick={clickangi}
                            style={{ cursor: "pointer" }}
                        >
                            <div
                                className='what111'
                                style={{ backgroundColor: danhsach ? "#B9975B" : "#FFFFFF" }}
                            >
                                {/* <img src={angi1img} alt="angi1" className='whatimg' /> */}
                                <svg width= "60px" height= "57.551021575927734px">
                                    <rect width= "45.250831604003906" height= "3.0121519565582275" x= "14.28px" y= "0.03px" fill="#AAC3D7"/>
                                    <rect width= "45.1505012512207" height= "1.9760997295379639" x= "14.41px" y= "0.03px" fill="#D7E6F0"/>

                                    <rect width= "20.90300941467285" height= "8.054466247558594" x= "14.25px" y= "49.53px" rx="2" fill="#AAC3D7"/>
                                    <rect width= "18.193979263305664" height= "7.2523651123046875" x= "14.25px" y= "49.53px" rx="2" fill="#D7E6F0"/>
                                    
                                    <path  d="M0 26 Q 4 45 12.5 52 L 37.5 52 Q 45.5 45 50 26 Q 25 28 0 26" fill="#131426"/>
                                    <path  d="M0 26 Q 4 45 12.5 52 L 35.5 52 Q 43.5 45 48 26 Q 25 28 0 26" fill="#023B56"/>

                                    <ellipse rx="25" ry="8.5" cx="25" cy="27.5" fill="#AAC3D7"/>

                                    <path  d="M30 0 Q 25 5 30 10 T 30 20 T 30 30" stroke-width= "15.65217399597168" stroke= "#F50C15" fill="none"/>
                                    <path  d="M25 0 Q 20 5 25 10 T 25 20 T 25 30" stroke-width= "5.65217399597168" stroke= "#FFE4B0" fill="none"/>
                                    <path  d="M35 0 Q 30 5 35 10 T 35 20 T 35 30" stroke-width= "5.65217399597168" stroke= "#FFE4B0" fill="none"/>

                                    <rect width= "45.21739196777344" height= "2.673682689666748" x= "14.78px" y= "6.48px" fill="#AAC3D7"/>
                                    <rect width= "45.050174713134766" height= "1.3702621459960938" x= "14.98px" y= "6.48px" fill="#D7E6F0"/>
                                </svg>
                                <p className='whattxt'>Ăn gì?</p>
                            </div>
                        </div>
                    )}

                    {timkiem("Xe gì?") && (
                        <div className='what11'>
                            <div className='what111'>
                                <img src={choigi1img} alt="choigi1" className='whatimg' />
                                <p className='whattxt'>Chơi gì?</p>
                            </div>
                        </div>
                    )}

                    {timkiem("Đàn gì?") && (
                        <div className='what11'>
                            <div className='what111'>
                                <img src={angi2img} alt="angi2" className='whatimg' />
                                <p className='whattxt'>Ăn gì?</p>
                            </div>
                        </div>
                    )}

                    {timkiem("Nón gì?") && (
                        <div className='what11'>
                            <div className='what111'>
                                <img src={choigi2img} alt="choigi2" className='whatimg' />
                                <p className='whattxt'>Chơi gì?</p>
                            </div>
                        </div>
                    )}

                    {timkiem("Nhà gì?") && (
                        <div className='what11'>
                            <div className='what111'>
                                <img src={angi3img} alt="angi3" className='whatimg' />
                                <p className='whattxt'>Ăn gì?</p>
                            </div>
                        </div>
                    )}

                    {search && (
                        <div className='what11'>
                            <div className='what112'>
                                <img src={filterimg} alt="filter" className='whatimg' />
                                <p className='whattxt'>Xem tiêu chí</p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {!selected1 && (
                danhsach && (
                    !xemthem && (
                        <div className="danhsachketqua">
                            <div className="dskq">
                                <div className="dskq1">
                                    <div className="dskqtxt">
                                        <p>Danh sách kết quả (20)</p>
                                    </div>
                                    <div
                                        className="dskqxemthem"
                                        style={{ cursor: "pointer" }}
                                        onClick={clickxemthem}
                                    >
                                        <p>Xem thêm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="dskqlocation">
                                <div className="location1">
                                    <img src={phothinimg} alt="phothinimg" className="phothinimg" />

                                    <div className="phothindes">
                                        <div className="des1">
                                            <p className="des11txt">Phở Thìn</p>
                                            <div className="des11img">
                                                <img src={checkedimg} alt="checkedimg" className="checkedimg" />
                                                <span class="daxacthuc">
                                                    Đã xác thực
                                                    <div className='Triangle1'></div>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="des2">
                                            <div className="des2img">
                                                <img src={locationimg} alt="locationimg" className="locationimg" />
                                            </div>
                                            <div className="des2txt">02 Lò Đúc, ngõ 355, Hai Bà Trưng, Hà Nội</div>
                                        </div>

                                        <div className="des3">
                                            <p className="des3txt">50,000,000/ <span>suất</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="location1">
                                    <img src={phothinimg} alt="phothinimg" className="phothinimg" />
                                    <div className="phothindes">
                                        <div className="des1">
                                            <p className="des1txt">Phở Thìn</p>
                                            <div className="des1img">
                                                <img src={inforimg} alt="inforimg" className="checkedimg" />

                                            </div>
                                        </div>

                                        <div className="des2">
                                            <div className="des2img">
                                                <img src={locationimg} alt="locationimg" className="locationimg" />
                                            </div>
                                            <div className="des2txt">02 Lò Đúc, ngõ 355, Hai Bà Trưng, Hà Nội</div>
                                        </div>

                                        <div className="des3">
                                            <p className="des3txt">50,000,000/ <span>suất</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="location1">
                                    <img src={phothinimg} alt="phothinimg" className="phothinimg" />
                                    <div className="phothindes">
                                        <div className="des1">
                                            <p className="des1txt">Phở Thìn</p>
                                            <div className="des1img">
                                                <img src={checkedimg} alt="checkedimg" className="checkedimg" />

                                            </div>
                                        </div>

                                        <div className="des2">
                                            <div className="des2img">
                                                <img src={locationimg} alt="locationimg" className="locationimg" />
                                            </div>
                                            <div className="des2txt">02 Lò Đúc, ngõ 355, Hai Bà Trưng, Hà Nội</div>
                                        </div>

                                        <div className="des3">
                                            <p className="des3txt">50,000,000/ <span>suất</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="location1">
                                    <img src={phothinimg} alt="phothinimg" className="phothinimg" />
                                    <div className="phothindes">
                                        <div className="des1">
                                            <p className="des1txt">Phở Thìn</p>
                                            <div className="des1img">
                                                <img src={checkedimg} alt="checkedimg" className="checkedimg" />

                                            </div>
                                        </div>

                                        <div className="des2">
                                            <div className="des2img">
                                                <img src={locationimg} alt="locationimg" className="locationimg" />
                                            </div>
                                            <div className="des2txt">02 Lò Đúc, ngõ 355, Hai Bà Trưng, Hà Nội</div>
                                        </div>

                                        <div className="des3">
                                            <p className="des3txt">50,000,000/ <span>suất</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="location1">
                                    <img src={phothinimg} alt="phothinimg" className="phothinimg" />
                                    <div className="phothindes">
                                        <div className="des1">
                                            <p className="des1txt">Phở Thìn</p>
                                            <div className="des1img">
                                                <img src={checkedimg} alt="checkedimg" className="checkedimg" />

                                            </div>
                                        </div>

                                        <div className="des2">
                                            <div className="des2img">
                                                <img src={locationimg} alt="locationimg" className="locationimg" />
                                            </div>
                                            <div className="des2txt">02 Lò Đúc, ngõ 355, Hai Bà Trưng, Hà Nội</div>
                                        </div>

                                        <div className="des3">
                                            <p className="des3txt">50,000,000/ <span>suất</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
            )}

            {xemthem && (
                !selected1 && (
                    <div className="boloc">
                        <div className="divider">
                            <div className="divider1"></div>
                        </div>

                        <div className="phamvi">
                            <div className="phamvi1">
                                <div className="phamvi11">
                                    <p className="phamvi111">Phạm vi</p>

                                    <p className="phamvi112">100m - 2km</p>
                                </div>
                            </div>

                            <div className="phamvi2">
                                <div className="phamvi21">
                                    <div className="phamvi211"></div>
                                    <div className="phamvi212"></div>
                                    <div className="phamvi213"></div>
                                </div>
                            </div>

                            <div className="phamvi3">
                                <div className="phamvi31"><p>100m</p></div>
                                <div className="phamvi31"></div>
                                <div className="phamvi31"><p>100m</p></div>
                                <div className="phamvi31"></div>
                                <div className="phamvi31"><p>1km</p></div>
                                <div className="phamvi31"></div>
                                <div className="phamvi31"><p>2km</p></div>
                                <div className="phamvi31"></div>
                                <div className="phamvi31"><p>5km</p></div>
                                <div className="phamvi31"></div>
                                <div className="phamvi31"><p>10km</p></div>
                            </div>

                            <div className="divider" style={{ top: "50px" }}>
                                <div className="divider1"></div>
                            </div>
                        </div>

                        <div className="chatluong">
                            <div className="chatluong1">
                                <div className="chatluonghead">
                                    <div className="chatluonghead1">
                                        <p className="chatluonghead11">Đánh giá</p>
                                        <p className="chatluonghead12">Chất lượng phục vụ</p>
                                    </div>
                                </div>

                                <Ngoisao/>

                            </div>

                            <div className="chatluong1">
                                <div className="chatluonghead">
                                    <p className="chatluonghead12">Chất lượng phục vụ</p>
                                </div>

                                <Ngoisao/>
                                
                            </div>
                        </div>

                        <div className="divider">
                            <div className="divider1"></div>
                        </div>

                        <div className="phamvi">
                            <div className="phamvi1">
                                <div className="phamvi11">
                                    <p className="phamvi111">Khả năng phục vụ</p>

                                    <p className="phamvi112">300 khách hàng</p>
                                </div>
                            </div>

                            <div className="phamvi2">
                                <div className="phamvi21">
                                    <div className="phamvi211"></div>
                                    <div className="phamvi212"></div>
                                    <div className="phamvi213"></div>
                                </div>
                            </div>

                            <div className="phamvi3">
                                <div className="phamvi31"><p>0</p></div>
                                <div className="phamvi31"></div>
                                <div className="phamvi31"><p>100</p></div>
                                <div className="phamvi31"></div>
                                <div className="phamvi31"><p>200</p></div>
                                <div className="phamvi31"></div>
                                <div className="phamvi31"><p>300</p></div>
                                <div className="phamvi31"></div>
                                <div className="phamvi31"><p>400</p></div>
                                <div className="phamvi31"></div>
                                <div className="phamvi31"><p>500</p></div>
                            </div>
                        </div>

                        <div className="apply">
                            <button className="datlai">
                                <div className="datlai1">
                                    <p className="datlai11">Đặt lại bộ lọc</p>
                                </div>
                            </button>

                            <button className="apdung">
                                <div className="datlai1">
                                    <p className="apdung11">Áp dụng bộ lọc</p>
                                </div>
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default Sidebar;