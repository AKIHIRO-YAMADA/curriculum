<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="java.util.*,java.text.SimpleDateFormat"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="/Check3/css/style.css">
</head>
<body>
	<div class="date1">
	   <% Date date = new Date();
	      SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
	      String formatDate = sdf.format(date);%>
	</div>
	<div class="header-top">
	<jsp:include page="header.jsp" flush="true" />
	<label class="date">
	 <%= formatDate %>
	 </label>
	</div>
	<!-- name、idの入力エリアを作成しなさい -->
	<div class="area">
	 <h2 class="name">name
		<input id="name" type="text">
	 </h2>
	  <h2 class="id"> &nbsp;&nbsp;&nbsp;id &nbsp;&nbsp;
	 	<input id="number" type="password">
	  </h2>
	 </div>
	<jsp:include page="footer.jsp" flush="true" />
</body>
</html>