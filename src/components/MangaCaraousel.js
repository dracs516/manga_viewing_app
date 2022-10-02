import React, { useState, useEffect } from "react";
import "./MangaCaraousel.css";

function MangaCarousel(props) {
  const [currImg, setCurrImg] = useState(-1);
  const [chapter, setChapter] = useState([]);
  const [background, setBackground] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu_6FhPERvwUoYZS-LSV9yhy7bz9CZ5H6Ucym0LjCenTCSx2RUChelE4UF_UQ2gJ609c&usqp=CAU"
  );
  useEffect(() => {
    setCurrImg(0);
    setChapter([]);
    setBackground(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu_6FhPERvwUoYZS-LSV9yhy7bz9CZ5H6Ucym0LjCenTCSx2RUChelE4UF_UQ2gJ609c&usqp=CAU"
    );
    const url = "http://18.177.140.79:8080/chapters/";
    const fetchChapter = async () => {
      try {
        const response = await fetch(url + `${props.mchapter}/`);
        const json = await response.json();
        setChapter(json.pages);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchChapter();
    return () => {};
  }, [props.mchapter, props.route]);
  const css = {
    backgroundImage: `url(${background})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div>
        <div className="buttons" style={css}>
          <div
            className="left"
            onClick={() => {
              if (currImg + 1 > chapter.length) {
                setCurrImg(0);
                setBackground(
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu_6FhPERvwUoYZS-LSV9yhy7bz9CZ5H6Ucym0LjCenTCSx2RUChelE4UF_UQ2gJ609c&usqp=CAU"
                );
              } else {
                currImg < chapter.length && setCurrImg(currImg + 1);
                setBackground(`${chapter[currImg].image.file}`);
              }
            }}
          ></div>
          <div
            className="right"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
              setBackground(`${chapter[currImg].image.file}`);
            }}
          ></div>
        </div>
      </div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        {currImg}/{chapter.length}
      </h2>
    </div>
  );
}

export default MangaCarousel;
