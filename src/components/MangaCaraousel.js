import React, { useState, useEffect } from "react";
import "./MangaCaraousel.css";
import axios from "axios";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function MangaCarousel(props) {
  const [currImg, setCurrImg] = useState(0);
  const [chapter, setChapter] = useState([]);
  const [background, setBackground] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu_6FhPERvwUoYZS-LSV9yhy7bz9CZ5H6Ucym0LjCenTCSx2RUChelE4UF_UQ2gJ609c&usqp=CAU"
  );

  // let len;
  useEffect(() => {
    // useEffect(() => {
    setCurrImg(0);
    setChapter([]);
    setBackground(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu_6FhPERvwUoYZS-LSV9yhy7bz9CZ5H6Ucym0LjCenTCSx2RUChelE4UF_UQ2gJ609c&usqp=CAU"
    );
    const url = "http://18.177.140.79:8080/chapters/";
    //   // const url2 = "http://18.177.140.79:8080/books/1";

    const fetchChapter = async () => {
      try {
        // axios
        // .get(url + `${props.mchapter}/`)
        // .then((response) => {
        // console.log("=====",response.data.pages);
        // .then((data) => console.log(data.data));
        const response = await fetch(url + `${props.mchapter}/`);
        const json = await response.json();
        console.log("response", json);
        setChapter(json.pages);
        console.log("-----", chapter);
      } catch (error) {
        // .catch((err) => console.log(err));

        // len = chapter.length;
        // console.log("manga", chapter);
        // {
        //   console.log("------", chapter[0].image.file);
        // }
        console.log("error", error);
      }
    };

    fetchChapter();
    // fetchChapter();

    return () => {};
  }, [props.mchapter, props.route]);
  //   return () => {};
  // }, []);
  // document.getElementsByClassName("buttons").style

  const css = {
    backgroundImage: `url(${background})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      {/* <h1>{props.mchapter}</h1> */}
      {/* {chapter.map((page) => ( */}
      <div>
        <div class="buttons" style={css}>
          {/* <img src={page.image.file}> */}
          <div
            className="left"
            onClick={() => {
              // setBackground(`${chapter[currImg].image.file}`)
              currImg < chapter.length && setCurrImg(currImg + 1);
              setBackground(`${chapter[currImg].image.file}`);
            }}
          ></div>
          <div
            className="right"
            onClick={() => {
              // setBackground(`${chapter[currImg].image.file}`)
              currImg > 0 && setCurrImg(currImg - 1);
              setBackground(`${chapter[currImg].image.file}`);
            }}
          ></div>
          {/* </img> */}
        </div>
      </div>
      {/* ))} */}
      <h2>
        {currImg}/{chapter.length}
      </h2>
    </div>
  );
}

export default MangaCarousel;
