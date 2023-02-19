# TIL

230218

Lenovo hinkBook 15 G4 ABA-21DL0000KR [R5-5625U/8GB/256GB/FD]

윈도우10 설치 및 8 GB 램 추가 완료.

데스크탑의 이클립스와 톰캣 연동이 안되는 이슈로 전부터 생각해두던 비상용 + 휴대용 랩탑을 패닉바이 했다.

운좋게도 할인가로 49장에 구매를 하였고 이벤트로 램을 추가로 받았다.

이클립스 설치 후 환경설정 및 기존 소스파일들을 옮기는데 workspace 에 파일을 넣어도 이클립스는 인식하지 않는다.
import를 통해 프로젝트 하나 하나 인식을 시켜줘야 한다.
환경설정은 jdk 17 버전으로 하였다.
  파일명 : jdk-17_windows-x64_bin.exe

이후 톰캣을 연동하고자 했고 데스크탑에서 어떤 방법을 써도 되지 않던 톰캣 인스톨이 너무나 편안하게 설치가 알아서 되는 과정을 목격했다.
난 왜 2월 15일에 고통을 받았던 것일까. 하지만 이런 경험이 톰캣과 좀 더 가까워질 수 있는 발판이 되었고 나중에도 톰캣 환경설정은 가이드 없이 가능할 것 같다.

Web 관련 소스 파일들도 Project 폴더에 복사 붙여넣기를 했고 이 소스 파일들은 이클립스가 인식을 했다.

MySQL 을 설치하였고 workbench 설정 및 데스크탑의 DB를 옮기는 작업을 하였다. 
  Darkmode ref : https://ropering.tistory.com/207

DB 파일들을 복사 붙여넣기 해서는 workbench에 뜨지 않고
workbench의 export를 이용하여 sql 확장자의 파일로 만든 다음 그 파일을 랩탑의 workbenck에 import해서 옮겼다.
  ref : https://three-pleasure.tistory.com/197
  
Java와의 연동을 위해 MySQL Connector jar 파일을 jre에 인식시켜줘야 한다.
  ref : https://dev-ku.tistory.com/212
  파일명 : mysql-connector-j-8.0.32.jar
  
이후 Slack 및 Github Desktop 설치를 하였고 랩탑에는 Atom이 설치되있지 않아 개발환경에서 clone한 repository를 열어 작업을 해야하기에
vs code를 받아 사용해볼 예정이다.
