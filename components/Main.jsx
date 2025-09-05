import travelimg from '../assets/travel.png';
import serviceimg from '../assets/service.png';
import appimg from '../assets/app.png';
import mapimg from '../assets/map.png';
import gpsimg from '../assets/gps.png';
import subgpsimg from '../assets/subgps.png';
import phothinimg from '../assets/phothin.png';
import checkedimg from '../assets/checked.png';
import positiveimg from '../assets/positive.png';
import negativeimg from '../assets/negative.png';
import locationimg from '../assets/location.png';
import { useState } from 'react';

function Main({ selected, selected1, setSelected1 }) {
    const [subgps1tab, setSubgps1tab] = useState(false);

    const clicksubgps1 = () => {
        setSubgps1tab(!subgps1tab);
    }

    const clicksubgps1des = () => {
        setSelected1(!selected1);
    }

    return (
        <div className="Main">
            <div className="Main-head">
                <div className="Navigation">
                    <div className="Navigate">
                        <img src={travelimg} alt="travelimg" className='Navigateimg' />
                        <p className='Navigatetxt'>Khám phá</p>
                    </div>

                    <div className="Navigate">
                        <img src={serviceimg} alt="serviceimg" className='Navigateimg' />
                        <p className='Navigatetxt'>Dịch vụ công</p>
                    </div>

                    <button className="App">
                        <img src={appimg} alt="appimg" className='Navigateimg' />
                        <p className='Navigatetxt'>Tải ứng dụng</p>
                    </button>
                </div>

                <div className='Sign'>
                    <button className='Signup'>
                        <p className='Signtxt'>Đăng ký</p>
                    </button>

                    <button className='Signin'>
                        <p className='Signtxt'>Đăng nhập</p>
                    </button>
                </div>
            </div>

            <div className='Map'>
                <img src={mapimg} alt="mapimg" className='Mapimg' />
                <div className='Zoom'>
                    <div className='Rect1'></div>
                    <div className='Rect2'></div>
                    <div className='Rect3'></div>
                    <div className='Rect4'></div>
                    <div className='Rect5'></div>
                </div>

                <div className='Location'>
                    <div className='Locationtxt'>
                        Bạn đang ở đây!
                        <div className='Triangle'></div>
                    </div>

                    <img src={gpsimg} alt="gpsimg" className='Gpsimg' />
                </div>

                {selected && (
                    <div
                        className='subgps1'
                        
                        style={{ cursor: "pointer" }}
                    >
                        <img src={subgpsimg} alt="subgpsimg" className='subgps11' onClick={clicksubgps1}/>

                        {selected && (
                            subgps1tab && (
                                <div
                                    className='subgps1des'
                                    onClick={clicksubgps1des}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={phothinimg} alt="phothinimg" className='phothinimg1' />
                                    <div className='subgps1des1'>
                                        <div className='subgps1des11'>
                                            <p className='subgps1des11txt'>Phở Thìn</p>
                                            <div className='subgps1des11img'>
                                                <img src={checkedimg} alt="checkedimg" className='subgps1des11img1' />
                                            </div>
                                        </div>

                                        <div className='subgps1des12'>
                                            <div className='stars'>
                                                <img src={positiveimg} alt="positiveimg" className='star' />
                                                <img src={positiveimg} alt="positiveimg" className='star' />
                                                <img src={positiveimg} alt="positiveimg" className='star' />
                                                <img src={negativeimg} alt="negativeimg" className='star' />
                                                <img src={negativeimg} alt="negativeimg" className='star' />
                                            </div>

                                            <p className='score'>3.0 <span>(226 bình luận)</span></p>
                                        </div>

                                        <div className='subgps1des13'>
                                            <p className='subgps1des13txt1'>Đã đóng cửa</p>
                                            <p className='subgps1des13txt2'>lúc 05:00</p>
                                        </div>

                                        <div className='subgps1des14'>
                                            <img src={locationimg} alt="locationimg" className='subgps1des14img' />
                                            <p className='subgps1des14txt'>02 Lò Đúc, ngõ 355, Hai Bà Trưng, Hà Nội</p>
                                        </div>
                                    </div>

                                    <div className='Triangle2'></div>
                                </div>
                            )
                        )}
                    </div>
                )}



                {selected && (
                    <div className='subgps'>
                        <img src={subgpsimg} alt="subgpsimg" className='subgps2' />
                    </div>
                )}

                {selected && (
                    <div className='subgps'>
                        <img src={subgpsimg} alt="subgpsimg" className='subgps3' />
                    </div>
                )}

                {selected && (
                    <div className='subgps'>
                        <img src={subgpsimg} alt="subgpsimg" className='subgps4' />
                    </div>
                )}

                {selected && (
                    <div className='subgps'>
                        <img src={subgpsimg} alt="subgpsimg" className='subgps5' />
                    </div>
                )}

                {selected && (
                    <div className='subgps'>
                        <img src={subgpsimg} alt="subgpsimg" className='subgps6' />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Main;