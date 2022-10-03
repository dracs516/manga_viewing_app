import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MangaCaraousel from "../components/MangaCaraousel";

export default function Home() {
  const [manga, setManga] = useState([]);
  const [book, setBook] = useState([]);
  const [mchapter, setMChapter] = useState(1);
  const route = "balloon_dream";
  useEffect(() => {
    const url = "http://18.177.140.79:8080/books/";
    const fetchManga = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setManga(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    const fetchBook = async () => {
      try {
        const response = await fetch(url + "1/");
        const json = await response.json();
        setBook(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchManga();
    fetchBook();
    return () => {};
  }, [route]);

  const handleClick = (event) => {
    setMChapter(event);
    console.log("chapter", event);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        {manga.map((item) => (
          <div style={{ backgroundColor: "white" }}>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                backgroundColor: "white",
              }}
            >
              <li>
                <Link to={`/${item.title}/`}>
                  <button
                    style={{
                      backgroundColor:
                        `${route}` == `${item.title}` ? "darkgreen" : "white",
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        {manga.map((item) =>
          item.chapter_ids.map((chapter) =>
            route == item.title ? (
              <button
                onClick={() => handleClick(chapter)}
                style={{
                  backgroundColor:
                    `${mchapter}` == `${chapter}` ? "darkgreen" : "white",
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
