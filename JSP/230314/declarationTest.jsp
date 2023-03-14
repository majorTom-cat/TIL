<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!-- java 로 만들어짐. 클래스로 만들어지게됨 -->

<h1><%=getStr() %></h1>
<%!

private String getStr(){ // 메소드로 만들어짐
	str+="테스트입니다.";
	return str;
}

private String str="선언문 ";
%>
