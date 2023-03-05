import React from "react";
import "./style/PurchaseModalStyle.css";

const PurchaseModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, purchase } = props;
  const { userId, userName, purchasePrice, userLocation } = purchase;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {/* {props.children} */}
            <h2>가격 : {purchasePrice} 원</h2>
            <h3>거래지역 : {userLocation}</h3>
            <h4>판매자 : {userName}</h4>
          </main>
          <footer>
            <button className="request" onClick={close}>
              요청
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default PurchaseModal;
