import axios from "axios";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const App = () => {
  const [items, setItems] = useState(null);

  const NAVER_CLIENT_ID = "tvtmXccfEfwQZo8GPTZR";
  const NAVER_CLIENT_SECRET = "dsjjHsN93b";

  const onClick = () => {
    axios
      .get("/api", {
        params: {
          query: "react", //이미지 검색 텍스트
          start: 1, //검색 시작 위치
          display: 5, //가져올 이미지 갯수
          sort: "sim", //정렬 유형 (sim:유사도)
        },
        headers: {
          // 이게 없으면 naver에서 요청 거부
          "X-Naver-Client-Id": NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        },
      })
      .then((response) => {
        setItems(response.data.items);
      })
      .catch((e) => {
        console.log("ERROR:" + e);
      });
  };

  // if (items === null) {
  //   return (
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <div>
  //         <button onClick={onClick}>불러오기</button>
  //       </div>
  //       {items.map((item, index) => (
  //           <BlogItem key={index} item={item} />
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div>
      {items === null ? (
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
      ) : (
        <div>
          <div>
            <button onClick={onClick}>불러오기</button>
          </div>
          {items.map((item, index) => (
            <BlogItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
