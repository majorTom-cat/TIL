import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";
import { useState } from "react";
import axios from "axios";

function App() {
  // 접근시 boardlist.boardList
  const [boardlist, setBoardlist] = useState({
    // 글목록 리스트
    boardList: [],
  });

  // 항목이 하나일땐
  // 접근시 boardlist
  // const [boardlist, setBoardlist] = useState([]); 이렇게 해도 됨. 사용법만 달라짐

  const [article, setArticle] = useState({
    // db에서의 정보들을 보관. 항목이 여러개일땐 객체로 만드는것이 일반적. 객체로 상태관리하는것이 유리
    board_num: 0,
    board_writer: "",
    board_title: "",
    board_content: "",
    board_date: "",
  });

  // 0:글쓰기, 1:상세보기, 2:글수정
  const [actionMode, setActionMode] = useState({ mode: 0 }); // 객체로 만든것. 접근시 actionMode.mode
  // const [actionMode, setActionMode] = useState(0); 이런식으로 해도 됨. 항목이 하나일때 굳이 객체일필요없음. 접근시 actionMode

  // 글목록
  // 함수의 위치는 어디에 사용하느냐에 따라서 적절히 배치. 이 함수를 속성을 통해 props 형태로 호출
  const getList = () => {
    //alert("getList(actionMode) =>" + actionMode.mode);
    axios
      .get("http://localhost:8008/list", {}) //server.js의 /list가 전달받음. 전달되는 파라미터가 없기때문에 req가 따로 쓰이지 않았음
      .then((res) => {
        // res : 서버의 응답 결과 저장
        console.log("res ==>", res);
        const { data } = res;
        console.log("data ==>", data);
        setBoardlist({
          boardList: data,
        });

        setActionMode({
          // ...actionMode, 모드가 하나이니 스프레드 연산 할 필요가 굳이 없음
          mode: 0, // 상세보기
        });

        // const [actionMode, setActionMode] = useState(0); 이라면
        // setActionMode(0);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // 상세보기
  const handleDetail = (e) => {
    //alert("handleDetail(actionMode) =>" + actionMode.mode);
    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("detail =>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article, // 일부 수정시 반드시 필요하지만 5개 항목 다 바꿀 경우엔 없어도 됨
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });

          setActionMode({
            ...actionMode, // 생략 가능 : article 전체 객체 내용을 다 수정하기 때문
            mode: 1, // 상세보기
          });
          // setActionMode(1); 이렇게 해도 됨
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // 수정폼 보기
  const handleUpdateForm = (e) => {
    // alert(
    //   "handleUpdateForm(actionMode) =>" + actionMode.mode + ", " + e.target.id
    // );
    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("handleUpdateForm =>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article, // 생략 가능 : article 전체 객체 내용을 다 수정하기 때문
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });

          setActionMode({
            ...actionMode, // 생략 가능 : article 전체 객체 내용을 다 수정하기 때문
            mode: 2, // 글수정하기
          });
          // setActionMode(2);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdate = () => {
    console.log("handleUpdate =>", article);
    axios
      .post("http://localhost:8008/update", {
        article: article,
      })
      .then((res) => {
        console.log("handleUpdate( changedRows) =>", res.data.changedRows);
        getList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (actionMode.mode === 0) {
    // alert("글쓰기");
    // 글쓰기
    return (
      <div>
        <BoardWrite handlelist={getList}></BoardWrite>
        <br />
        <BoardList
          boardlist={boardlist}
          actionmode={actionMode}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 1) {
    // alert("상세정보");
    // 상세보기
    return (
      <div>
        <BoardDetail article={article} handlelist={getList}></BoardDetail>
        <br />
        <BoardList
          boardlist={boardlist} // 글목록
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 2) {
    // alert("글수정");
    // 글수정
    return (
      <div>
        <BoardUpdateForm
          article={article}
          setarticle={setArticle}
          handleupdate={handleUpdate}
        ></BoardUpdateForm>
        <br />
        <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
        ></BoardList>
      </div>
    );
  }
}

export default App;
