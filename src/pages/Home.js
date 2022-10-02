import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MangaCaraousel from "../components/MangaCaraousel";

export default function Home() {
  const [manga, setManga] = useState([]);
  const [book, setBook] = useState([]);
  const [mchapter, setMChapter] = useState(1);
  //   const [sendRequest, setSendRequest] = useState(false);
  const route = "balloon_dream";
  //   const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const url = "http://18.177.140.79:8080/books/";
    // const url2 = "http://18.177.140.79:8080/books/1";

    const fetchManga = async () => {
      //   if (sendRequest) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("response", json);
        setManga(json);
        console.log("manga", manga);
        {
          manga.map((item) => {
            // console.log("item", item);
            // item.chapter_ids.map((chapter) => console.log("chapter", chapter));
          });
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchBook = async () => {
      try {
        const response = await fetch(url + "1/");
        const json = await response.json();
        console.log("responsebook", json);
        console.log("book", book);
        setBook(json);
        console.log("book", book);
        {
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchManga();
    fetchBook();
    // setSendRequest(false);
    return () => {};
  }, []);

  const handleClick = (event) => {
    setMChapter(event);
    // setSendRequest(true);
    console.log("chapter", event);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {manga.map((item) => (
          <div>
            <ul style={{ listStyleType: "none", display: "flex" }}>
              <li>
                <Link to={`/${item.title}/`}>
                  <button
                    style={{
                      backgroundColor:
                        `${route}` == `${item.title}` ? "darkgreen" : "",
                      color: `${route}` == `${item.title}` ? "white" : "black",
                    }}
                    // onClick={handleClick}
                  >
                    {item.title}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div>
        {manga.map((item) =>
          item.chapter_ids.map((chapter) =>
            route == item.title ? (
              <button
                onClick={() => handleClick(chapter)}
                style={{
                  backgroundColor:
                    `${mchapter}` == `${chapter}` ? "darkgreen" : "",
                  color: `${mchapter}` == `${chapter}` ? "white" : "black",
                }}
              >
                {chapter}
              </button>
            ) : (
              <div></div>
            )
          )
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MangaCaraousel route={route} mchapter={mchapter} />
      </div>
    </div>
  );
}
