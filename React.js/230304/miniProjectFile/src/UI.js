import styles from "./UI.module.css";

const UI = () => {
  return (
    <div className={styles.ui}>
      <div className={styles.accordianToggleTopParent}>
        <div className={styles.accordianToggleTop}>
          <div className={styles.toggleText}> 게시자 정보</div>
          <div className={styles.borderMask} />
        </div>
        <div className={styles.accordianToggleExpanded}>
          <div className={styles.toggleText1}>
            <p className={styles.p}>글 제목</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.p}>{`상품 설명 `}</p>
          </div>
        </div>
      </div>
      <div className={styles.uiChild} />
      <div className={styles.div}>
        <p className={styles.p}>
          <span>판매 가격</span>
        </p>
        <p className={styles.p}>
          <span>&nbsp;</span>
        </p>
        <p className={styles.blankLine2}>
          <span>&nbsp;</span>
        </p>
        <p className={styles.p}>
          <span>&nbsp;</span>
        </p>
        <p className={styles.p3}>
          <span>거래 지역</span>
        </p>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carouselContent}>
          <div className={styles.content}>
            <div className={styles.componentscarouselItem}>
              <div className={styles.slideNo}>
                <div className={styles.text}>First slide</div>
              </div>
              <div className={styles.carouselCaption}>
                <div className={styles.slideLabel}>
                  <div className={styles.text1}>First slide label</div>
                </div>
                <div className={styles.slideText}>
                  <div className={styles.text2}>
                    Some representative placeholder content for the slide.
                  </div>
                  <div className={styles.minWidthChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.componentscarouselItem1}>
              <div className={styles.slideNo1}>
                <div className={styles.text}>Second slide</div>
              </div>
              <div className={styles.carouselCaption}>
                <div className={styles.slideLabel}>
                  <div className={styles.text1} />
                </div>
                <div className={styles.slideText}>
                  <div className={styles.text2} />
                  <div className={styles.minWidthChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.componentscarouselItem}>
              <div className={styles.slideNo2}>
                <div className={styles.text}>Third slide</div>
              </div>
              <div className={styles.carouselCaption}>
                <div className={styles.slideLabel}>
                  <div className={styles.text1}>Third slide label</div>
                </div>
                <div className={styles.slideText}>
                  <div className={styles.text2}>
                    Some representative placeholder content for the slide.
                  </div>
                  <div className={styles.minWidthChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.componentscarouselItem1}>
              <div className={styles.slideNo3}>
                <div className={styles.text}>Fourth slide</div>
              </div>
              <div className={styles.carouselCaption}>
                <div className={styles.slideLabel}>
                  <div className={styles.text1}>Fourth slide label</div>
                </div>
                <div className={styles.slideText}>
                  <div className={styles.text2}>
                    Some representative placeholder content for the slide.
                  </div>
                  <div className={styles.minWidthChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.componentscarouselItem}>
              <div className={styles.slideNo4}>
                <div className={styles.text}>Fiveth slide</div>
              </div>
              <div className={styles.carouselCaption}>
                <div className={styles.slideLabel}>
                  <div className={styles.text1}>Fiveth slide label</div>
                </div>
                <div className={styles.slideText}>
                  <div className={styles.text2}>
                    Some representative placeholder content for the slide.
                  </div>
                  <div className={styles.minWidthChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.carouselIndicators}>
          <div className={styles.carouselIndicator}>
            <div className={styles.wrapper}>
              <div className={styles.ignore} />
            </div>
          </div>
          <div className={styles.carouselIndicator}>
            <div className={styles.wrapper1}>
              <div className={styles.ignore} />
            </div>
          </div>
          <div className={styles.carouselIndicator}>
            <div className={styles.wrapper}>
              <div className={styles.ignore} />
            </div>
          </div>
          <div className={styles.carouselIndicator}>
            <div className={styles.wrapper}>
              <div className={styles.ignore} />
            </div>
          </div>
        </div>
        <div className={styles.carouselNav}>
          <div className={styles.texttext}>
            <div className={styles.title}>Next</div>
          </div>
          <div className={styles.icon}>
            <div className={styles.widthChangeSizeHere}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <div className={styles.iconWrapperH}>
              <div className={styles.heightChangeSizeHere}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <img className={styles.iconWrapper} alt="" src="./logo.svg" />
            </div>
          </div>
        </div>
        <div className={styles.carouselNav1}>
          <div className={styles.icon}>
            <div className={styles.widthChangeSizeHere}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <div className={styles.iconWrapperH}>
              <div className={styles.heightChangeSizeHere}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <img className={styles.iconWrapper} alt="" src="./logo.svg" />
            </div>
          </div>
          <div className={styles.texttext}>
            <div className={styles.title}>Prev</div>
          </div>
        </div>
      </div>
      <div className={styles.tagGroup}>
        <div className={styles.componentstag}>
          <div className={styles.icon}>
            <div className={styles.widthChangeSizeHere2}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <div className={styles.iconWrapperH}>
              <div className={styles.heightChangeSizeHere2}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <img className={styles.iconWrapper} alt="" src="./logo.svg" />
            </div>
          </div>
          <div className={styles.wrapper4}>
            <div className={styles.title}>Tag 1</div>
            <div className={styles.icon}>
              <div className={styles.widthChangeSizeHere3}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <div className={styles.iconWrapperH}>
                <div className={styles.heightChangeSizeHere3}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <img className={styles.iconWrapper} alt="" src="./logo.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.componentstag}>
          <div className={styles.icon}>
            <div className={styles.widthChangeSizeHere2}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <div className={styles.iconWrapperH}>
              <div className={styles.heightChangeSizeHere2}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <img className={styles.iconWrapper} alt="" src="./logo.svg" />
            </div>
          </div>
          <div className={styles.wrapper4}>
            <div className={styles.title}>Tag 2</div>
            <div className={styles.icon}>
              <div className={styles.widthChangeSizeHere3}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <div className={styles.iconWrapperH}>
                <div className={styles.heightChangeSizeHere3}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <img className={styles.iconWrapper} alt="" src="./logo.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.componentstag}>
          <div className={styles.icon}>
            <div className={styles.widthChangeSizeHere2}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <div className={styles.iconWrapperH}>
              <div className={styles.heightChangeSizeHere2}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <img className={styles.iconWrapper} alt="" src="./logo.svg" />
            </div>
          </div>
          <div className={styles.wrapper4}>
            <div className={styles.title}>Tag 3</div>
            <div className={styles.icon}>
              <div className={styles.widthChangeSizeHere3}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <div className={styles.iconWrapperH}>
                <div className={styles.heightChangeSizeHere3}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <img className={styles.iconWrapper} alt="" src="./logo.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.componentstag}>
          <div className={styles.icon}>
            <div className={styles.widthChangeSizeHere2}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <div className={styles.iconWrapperH}>
              <div className={styles.heightChangeSizeHere2}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <img className={styles.iconWrapper} alt="" src="./logo.svg" />
            </div>
          </div>
          <div className={styles.wrapper4}>
            <div className={styles.title}>Tag 4</div>
            <div className={styles.icon}>
              <div className={styles.widthChangeSizeHere3}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <div className={styles.iconWrapperH}>
                <div className={styles.heightChangeSizeHere3}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <img className={styles.iconWrapper} alt="" src="./logo.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tagNew}>
          <div className={styles.icon}>
            <div className={styles.widthChangeSizeHere3}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <div className={styles.iconWrapperH}>
              <div className={styles.heightChangeSizeHere3}>
                <div className={styles.ignore} />
                <div className={styles.ignore} />
              </div>
              <img className={styles.iconWrapper} alt="" src="./logo.svg" />
            </div>
          </div>
          <div className={styles.title}>New Tag</div>
        </div>
      </div>
      <div className={styles.sizemediumTypedangerOutl}>
        <div className={styles.icon6}>
          <div className={styles.widthChangeSizeHere11}>
            <div className={styles.ignore} />
            <div className={styles.ignore} />
          </div>
          <div className={styles.iconWrapperH}>
            <div className={styles.heightChangeSizeHere11}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <img className={styles.iconWrapper} alt="" src="./logo.svg" />
          </div>
        </div>
        <div className={styles.icon6}>
          <div className={styles.widthChangeSizeHere11}>
            <div className={styles.ignore} />
            <div className={styles.ignore} />
          </div>
          <div className={styles.iconWrapperH}>
            <div className={styles.heightChangeSizeHere11}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <img className={styles.iconWrapper} alt="" src="./logo.svg" />
          </div>
        </div>
      </div>
      <div className={styles.div1}>찜</div>
      <div className={styles.button}>
        <div className={styles.icon6}>
          <div className={styles.widthChangeSizeHere11}>
            <div className={styles.ignore} />
            <div className={styles.ignore} />
          </div>
          <div className={styles.iconWrapperH}>
            <div className={styles.heightChangeSizeHere11}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <img className={styles.iconWrapper} alt="" src="./logo.svg" />
          </div>
        </div>
        <div className={styles.texttext}>
          <div className={styles.text18}>Button Title</div>
        </div>
        <div className={styles.icon6}>
          <div className={styles.widthChangeSizeHere11}>
            <div className={styles.ignore} />
            <div className={styles.ignore} />
          </div>
          <div className={styles.iconWrapperH}>
            <div className={styles.heightChangeSizeHere11}>
              <div className={styles.ignore} />
              <div className={styles.ignore} />
            </div>
            <img className={styles.iconWrapper} alt="" src="./logo.svg" />
          </div>
        </div>
      </div>
      <div className={styles.div2}>구매요청</div>
      <img className={styles.heartIcon} alt="" src="./logo.svg" />
      <div className={styles.div3}>0</div>
      <div className={styles.div4}>0</div>
      <img className={styles.eyeIcon} alt="" src="./logo.svg" />
      <img className={styles.avatarMale32} alt="" src="./logo.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.kakaotalk202303020258232480Icon}
          alt=""
          src="./logo.svg"
        />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.div5}>검색어를 입력하세요.</div>
          <img className={styles.iconSearch} alt="" src="./logo.svg" />
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            <div className={styles.avatar}>
              <div className={styles.wrapper8}>
                <div className={styles.icon}>
                  <div className={styles.widthChangeSizeHere15}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <div className={styles.iconWrapperH}>
                    <div className={styles.heightChangeSizeHere15}>
                      <div className={styles.ignore} />
                      <div className={styles.ignore} />
                    </div>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="./logo.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.user1}>user1</div>
            <div className={styles.logout}>Logout</div>
          </div>
        </div>
        <div className={styles.lineDiv} />
      </div>
    </div>
  );
};

export default UI;
