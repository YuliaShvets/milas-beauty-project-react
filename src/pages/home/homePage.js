import React, {useEffect, useState} from "react";
import "./homePage.css";
import background from "../../assets/images/homePage/elements_desktop_1441-2.png"
import Content from "../../components/item/Content"
import Loader from "../../components/loader/loader";
import axios from "axios";

function HomePage() {
    const [headers, setHeaders] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/items").then(res => setHeaders(res.data));
    }, []);
    const [viewMore, setViewMore] = useState(false);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1500)
    return (
        <>
            {
                loading ?
                    <Loader/>
                    :
                    <main>
                        <div className="imageSec">
                            <img src={background} alt=""/>
                        </div>
                        <div className="aboutSec">
                            <h2>
                                The Elements
                            </h2>
                            <p>
                                Інноваційні формули, ретельні розробки та лише високоефективні природні мінерали та
                                компоненти для
                                вирішення проблем акне та постакне
                            </p>
                            <button className="selectBtl">Обрати баночку</button>
                        </div>
                        <div className="contentSec">
                            <h3 className="topTen">
                                #top 10 for face
                            </h3>
                            <div className="itemSec">
                                {viewMore ?
                                    headers.map(item => (
                                        <Content image={item.image} name={item.name} price={item.price} id={item.id}/>))
                                    :
                                    headers.slice(0, 3).map(item => (
                                        <Content image={item.image} name={item.name} price={item.price}
                                                 id={item.id}/>))}
                            </div>
                            <div className='viewBtn'>
                                <button
                                    onClick={() => setViewMore(!viewMore)}>{viewMore ? "View less" : "View more"}</button>
                            </div>
                        </div>
                        <section className="openingSec">
                            <h2>
                                WE'RE OPENING
                            </h2>
                            <p>Велика Васильківська, 49</p>
                        </section>
                    </main>
            }
        </>
    );
}

export default HomePage;