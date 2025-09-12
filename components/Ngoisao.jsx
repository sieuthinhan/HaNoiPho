import { useState } from "react";
import greystarimg from '../assets/greystar.png';
import whitestarimg from '../assets/whitestar.png';

function Ngoisao() {
    const [sao, setsao] = useState(true);
    const [sao1, setsao1] = useState(false);
    const [sao2, setsao2] = useState(false);
    const [sao3, setsao3] = useState(false);
    const [sao4, setsao4] = useState(false);
    const [sao5, setsao5] = useState(false);

    const click1sao = () => {
        setsao1(!sao1);
        setsao2(false);
        setsao3(false);
        setsao4(false);
        setsao5(false);
    };
    const click2sao = () => {
        setsao1(false);
        setsao2(!sao2);
        setsao3(false);
        setsao4(false);
        setsao5(false);
    };
    const click3sao = () => {
        setsao1(false);
        setsao2(false);
        setsao3(!sao3);
        setsao4(false);
        setsao5(false);
    };
    const click4sao = () => {
        setsao1(false);
        setsao2(false);
        setsao3(false);
        setsao4(!sao4);
        setsao5(false);
    };
    const click5sao = () => {
        setsao1(false);
        setsao2(false);
        setsao3(false);
        setsao4(false);
        setsao5(!sao5);
    };

    return (
        <>

            {!sao1 && (
                !sao2 && (
                    !sao3 && (
                        !sao4 && (
                            !sao5 && (

                                <div className="chatluong11" >
                                    <button className="chatluong112" onClick={click1sao}>
                                        <img src={greystarimg} alt="greystar" />
                                    </button>

                                    <button className="chatluong112" onClick={click2sao}>
                                        <img src={greystarimg} alt="greystar" />
                                    </button>

                                    <button className="chatluong112" onClick={click3sao}>
                                        <img src={greystarimg} alt="greystar" />
                                    </button>

                                    <button className="chatluong112" onClick={click4sao}>
                                        <img src={greystarimg} alt="greystar" />
                                    </button>

                                    <button className="chatluong112" onClick={click5sao}>
                                        <img src={greystarimg} alt="greystar" />
                                    </button>
                                </div>

                            )
                        )
                    )
                )
            )}

            {sao1 && (
                <div className="chatluong11">
                    <button className="chatluong111" onClick={click1sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong112" onClick={click2sao}>
                        <img src={greystarimg} alt="greystar" />
                    </button>

                    <button className="chatluong112" onClick={click3sao}>
                        <img src={greystarimg} alt="greystar" />
                    </button>

                    <button className="chatluong112" onClick={click4sao}>
                        <img src={greystarimg} alt="greystar" />
                    </button>

                    <button className="chatluong112" onClick={click5sao}>
                        <img src={greystarimg} alt="greystar" />
                    </button>
                </div>
            )}

            {sao2 && (
                <div className="chatluong11">
                    <button className="chatluong111" onClick={click1sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong111" onClick={click2sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong112" onClick={click3sao}>
                        <img src={greystarimg} alt="greystar" />
                    </button>

                    <button className="chatluong112" onClick={click4sao}>
                        <img src={greystarimg} alt="greystar" />
                    </button>

                    <button className="chatluong112" onClick={click5sao}>
                        <img src={greystarimg} alt="greystar" />
                    </button>
                </div>
            )}

            {sao3 && (
                <div className="chatluong11">
                    <button className="chatluong111" onClick={click1sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong111" onClick={click2sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong111" onClick={click3sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong112" onClick={click4sao}>
                        <img src={greystarimg} alt="greystar" />
                    </button>

                    <button className="chatluong112" onClick={click5sao}>
                        <img src={greystarimg} alt="greystar" />
                    </button>
                </div>
            )}

            {sao4 && (
                <div className="chatluong11">
                    <button className="chatluong111" onClick={click1sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong111" onClick={click2sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong111" onClick={click3sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong111" onClick={click4sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong112" onClick={click5sao}>
                        <img src={greystarimg} alt="greystar" />
                    </button>
                </div>
            )}

            {sao5 && (
                <div className="chatluong11">
                    <button className="chatluong111" onClick={click1sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong111" onClick={click2sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong111" onClick={click3sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong111" onClick={click4sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>

                    <button className="chatluong111" onClick={click5sao}>
                        <img src={whitestarimg} alt="whitestar" />
                    </button>
                </div>
            )}

        </>
    )
}

export default Ngoisao;