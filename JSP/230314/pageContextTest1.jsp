<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
request.setAttribute("id", "lee");
pageContext.forward("pageContextTest2.jsp"); // url 주소가 바뀌지 않으며 request 객체 재사용 가능
	// pageContext 말고도 dispatch도 있음
	
//response.sendRedirect("pageContextTest2.jsp"); // url 주소가 바뀌며 request 객체가 사라짐
%>

