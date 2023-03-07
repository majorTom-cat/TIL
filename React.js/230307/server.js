const express = require("express"); // JS에서의 require는 react에서의 import 개념. Express.js를 사용하기 위해 include한다.
const app = express(); // 앱(애플리케이션) 생성
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.port || 8008; // 사용할 포트번호 설정. 이것때문에 package.json에 proxy 써준것
const cors = require("cors");

// 미들웨어 사용하게 설정
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// 데이터 주고받을때 데이터 형식이 json임. 그 형식을 지정해준것

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions)); // 교차출처 정책 설정

const db = mysql.createPool({
  // mysql 데이터 접속 설정
  host: "localhost",
  user: "root",
  password: "123456",
  database: "jpa",
});
console.log("db : " + db);

// 글목록
// req:request(요청객체), res:response(응답객체)
app.get("/list", (req, res) => {
  console.log("list!!!");
  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL;";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else res.send(result); //json 형식
  });
});

// 글쓰기
app.post("/insert", (req, res) => {
  console.log("/insert", req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT) values (?,?,?);";
  db.query(sqlQuery, [writer, title, content], (err, result) => {
    // java에서 했던것처럼 물음표에 들어갈 데이터 writer, title, content.
    res.send(result);
  });
});

// 상세보기(글내용 보기)
app.post("/detail", (req, res) => {
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL where BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result); // axios의 then에 있는 res가 전달받음
  });
});

// 글수정:제목과 글내용, 날짜를 수정
app.post("/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.board_title;
  var content = req.body.article.board_content;
  var num = req.body.article.board_num;

  const sqlQuery =
    "update BOARD_TBL set BOARD_TITLE=?, BOARD_CONTENT=?, BOARD_DATE=now() where board_num=?;";
  db.query(sqlQuery, [title, content, num], (err, result) => {
    res.send(result);
    console.log("result=", result);
  });
});

// 글삭제
app.post("/delete", (req, res) => {
  const num = req.body.num; // BoardArticle.js의 num: e.target.id 를 읽어옴
  console.log("/delete(id) => ", num);

  const sqlQuery = "DELETE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.listen(PORT, () => {
  // 클라이언트의 요청이 들어오기를 스탠바이
  console.log(`running on port ${PORT}`);
});
