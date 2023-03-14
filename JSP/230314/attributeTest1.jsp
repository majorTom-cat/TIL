<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Attribute Test</title>
</head>
<body>

<h2>영역과 속성 테스트</h2>
<%
request.setCharacterEncoding("utf-8"); // 읽어올때 한글을 인코딩하기 위해. 항상 쓰는 습관을 들여놓자
String name = request.getParameter("name");
String id = request.getParameter("id");
if(name !=null && id !=null){
	application.setAttribute("name", name); // 웹서버가 구동이 되는순간 application 객체 생성. 웹서버 끄면 소멸
	application.setAttribute("id", id);
}
%>
<h3><%=name %>님 반갑습니다.<br><%=name %>님의 아이디는 <%=id %>입니다.</h3>
<form action="attributeTest2.jsp" method="post">
	<table border="1">
		<tr><td colspan="2">Session 영역에 저장할 내용들</td></tr>
		<tr>
			<td>e-mail 주소</td>
			<td><input type="text" name="email"></td>
		</tr>
		<tr>
			<td>집 주소</td>
			<td><input type="text" name="address"></td>
		</tr>
		<tr>
			<td>전화번호</td>
			<td><input type="text" name="tel"></td>
		</tr>
		<tr>
			<td colspan="2"><input type="submit" value="전송"></td>
		</tr>
	
	</table>

</form>

</body>
</html>