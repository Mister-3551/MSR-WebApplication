import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as NewsHandler from "./js/NewsHandler";

export default function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        NewsHandler.news(setNews);
    }, []);

    return(
        <section className={"container news align-items-center mt-5 p-3 p-md-4"}>
            <h1 className={"text-center"}>News</h1>
            <div className={"row"}>
                {
                    news.map((item, id) =>
                        <div key={id} className={"col-lg-4 col-md-6 col-sm-12 mb-4"}>
                            <div className={"card news-card"}>
                                <img src={item.image} alt={item.title} className={"image"}/>
                                <div className={"card-body"}>
                                    <h5 className={"card-title"}>{item.title}</h5>
                                    <span>{item.createdAt}</span>
                                    <div className={"text-end"}>
                                        <Link to={"/item/" + item.id} className={"button"}>Read News</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
}