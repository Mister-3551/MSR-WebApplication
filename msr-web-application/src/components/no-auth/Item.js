import {Link, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as NewsHandler from "./js/NewsHandler";

export default function Item() {

    const location = useLocation();
    const { id } = useParams();

    const [item, setItem] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        NewsHandler.item(id, setItem);
        NewsHandler.suggestions(id, setSuggestions);
    }, [location, id]);

    return(
        <section className={"container align-items-center mt-5 p-3 p-md-4"}>
            <div className={"row"}>
                {
                    item.map((itemData, id) =>
                        <div key={id} className={"col-md-8 section-bg mb-5"}>
                            <div className={"item"}>
                                <img
                                    src={itemData.image}
                                    className={"img-fluid mb-3 col-12 image"}
                                    alt={itemData.title}
                                />
                                <h1 className={"display-4"}>{itemData.title}</h1>
                                <p className={"text-muted"}>Published on {itemData.createdAt}</p>
                                <hr className={"my-4"}/>
                                {NewsHandler.combineTextWithImages(itemData)}
                            </div>
                        </div>
                    )
                }

                <div className={"col-md-4 item"}>
                    <h3 className={"text-center"}>More News</h3>
                    {
                        suggestions.map((suggestion, id) =>
                            <div key={id} className={"col-12 mb-4"}>
                                <div className={"card item-card"}>
                                    <img
                                        src={suggestion.image}
                                        alt={suggestion.title} className={"item-news"}/>
                                    <div className={"card-body"}>
                                        <h5 className={"card-title"}>{suggestion.title}</h5>
                                        <span>{suggestion.createdAt}</span>
                                        <div className={"text-end mt-4"}>
                                            <Link to={"/item/" + suggestion.id} className={"button"}>Read News</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}