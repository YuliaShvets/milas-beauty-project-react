import React, {useEffect, useState} from "react";
import Content from "../../components/item/Content";
import "./catalog.css"
import axios from "axios";
import Loader from "../../components/loader/loader";

function Catalog() {
    const [items, setItems] = useState([]);
    const [request, setRequest] = useState('');
    const [isCheckedPrice, setIsCheckedPrice] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8080/items").then(res => setItems(res.data));
    }, []);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1500)

    const sortByPrice = (arr) => {
        setIsCheckedPrice(!isCheckedPrice)
        if (!isCheckedPrice) {
            return arr.sort((a, b) => {
                return b.price - a.price;
            });
        } else {
            axios.get("http://localhost:8080/items").then(res => setItems(res.data));
        }
    };
    return (
        <>
            {
                loading ?
                    <Loader/>
                    :
                    <div className="filterSec">
                        <div className="sortSec">
                            <h3>SORT BY:</h3>
                            <div className="sortInpt">
                                <input type="checkbox" checked={isCheckedPrice} onClick={() => sortByPrice(items)}
                                       id="byPrice"/>
                                <label htmlFor="byPrice">BY PRICE</label>
                            </div>
                        </div>
                        <div className="searchSec">
                            <input type="text" id="search" placeholder="Search here..."
                                   onChange={(event) => setRequest(event.target.value)}/>
                        </div>
                    </div>
            }
            <div className="itemSection">
                {items.filter((value) => {
                    if (request === "") {
                        return value;
                    } else if (value.name.toLowerCase().includes(request.toLowerCase())) {
                        return value;
                    }
                }).map((item, id) => (
                    <Content image={item.image} name={item.name} price={item.price} id={item.id} key={id}/>))}
            </div>
        </>
    );
}

export default Catalog;
