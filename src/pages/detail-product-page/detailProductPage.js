import React, {useEffect, useState} from "react";
import "./detailProductPage.css"
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader/loader";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/itemSlice"

function DetailProductPage() {
    const dispatch = useDispatch();
    const handle = (id, image, name, price) => dispatch(addToCart({id, image, name, price, amount : 1}))
    const {id} = useParams();
    const [item, setItem] = useState({id: 1, image: "", name: "Not found", price: 0});
    useEffect(() => {
        axios.get(`http://localhost:8080/items/${id}`).then(res => {
            setItem(res.data);
        });
    }, [id]);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000)
    return (
        <>
            {
                loading ?
                    <Loader/>
                    :
                    <main className="productPage">
                        <section className="backLink">
                            <Link to={`/catalog`}><p>BACK</p></Link>
                        </section>
                        <img src={item.image} alt="product"/>
                        <div className="infoSide">
                            <h2>{item.name}</h2>
                            <div className="price">
                                <p>{item.price}$</p>
                            </div>
                            <button className="buyBtn" onClick={() => handle(item.id, item.image, item.name, item.price)}>Buy</button>
                        </div>
                    </main>
            }
        </>
    );
}

export default DetailProductPage;
