<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
pageContext.setAttribute("pageScope", "pageValue"); // 사용범위는 이 문서 범위내부로 제한. 범위 벗어나면 객체소멸
request.setAttribute("requestScope", "requestValue");
%>

<jsp:forward page="attributeTest5Result.jsp"></jsp:forward>


</body>
</html>