import React from "react";
import "./style/PurchaseModalStyle.css";
import main_logo from "../../../Final/images/main_logo.png";

const PurchaseModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, purchase } = props;
  const { userId, userName, purchasePrice, userLocation } = purchase;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section style={{ borderRadius: "20px" }}>
          <header
            style={{
              fontWeight: "800",
              fontSize: "1.2rem",
            }}
          >
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {/* {props.children} */}
            <table className="modalTable">
              <tr className="modalTableRow">
                <th clasName="modalTableHead" style={{ color: "#FF8A2D" }}>
                  가격
                </th>
                <td clasName="modalTableData">{purchasePrice} 원</td>
              </tr>

              <tr className="modalTableRow">
                <th clasName="modalTableHead" style={{ color: "#FF8A2D" }}>
                  거래지역
                </th>
                <td clasName="modalTableData">{userLocation}</td>
              </tr>

              <tr className="modalTableRow">
                <th clasName="modalTableHead" style={{ color: "#FF8A2D" }}>
                  판매자
                </th>
                <td clasName="modalTableData">{userName}</td>
              </tr>
            </table>

            {/* <h2>가격 : {purchasePrice} 원</h2>
            <h3>거래지역 : {userLocation}</h3>
            <h4>판매자 : {userName}</h4> */}
          </main>
          <footer>
            <a href="index.html" style={{ float: "left", display: "inline" }}>
              <img src={main_logo} alt="logo" width="90px;" height="20px;" />
            </a>
            <button className="requests" onClick={close}>
              요청
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default PurchaseModal;
