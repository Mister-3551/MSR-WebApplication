import axios from "axios";
import {Fragment} from "react";

export const news = (setNews) => {

    axios({
        method: "get",
        url: process.env.REACT_APP_NEWS
    }).then(response => response.data)
        .then((data) => {
            setNews(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const item = (id, setItem) => {

    axios({
        method: "post",
        url: process.env.REACT_APP_ITEM,
        data: {
            id: id
        },
    }).then(response => response.data)
        .then((data) => {
            setItem(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const suggestions = (id, setSuggestions) => {

    axios({
        method: "post",
        url: process.env.REACT_APP_SUGGESTIONS,
        data: {
            id: id
        },
    }).then(response => response.data)
        .then((data) => {
            setSuggestions(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const combineTextWithImages = (item) => {

    const textParts = item.text.split(/(\{\{image-\d+\}\})/);

    if (textParts.length !== 1) {
        const replacedText = textParts.map((part, index) => {
            if (part.startsWith("{{image-")) {
                const imageId = part.match(/\d+/)[0];
                const imageUrl = item.images[imageId];
                return (
                    <div className={"text-center item mt-4 mb-4"} key={index}>
                        <img
                            src={`${imageUrl}`}
                            alt={`${imageId}`}
                            className={"img-fluid mb-3 col-12 news-image"}
                        />
                    </div>
                );
            } else {
                return part;
            }
        });
        return (
            replacedText
        );
    } else {
        return (
            <p>{item.text.split("\n").map((item, i) => <Fragment key={i}>{item}<br/></Fragment>)}</p>
        );
    }
};