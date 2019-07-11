// 引入头部
(function(){
  var str=`
  <div id="header" class="header">
		<ul class="nav">
			<li><a href="">首页</a></li>
			<li>
				<a href="">机构设置</a>
				<div class="triangle"></div>
				<ul class="nav_child">
					<li><a href="">基金会简介</a></li>
					<li><a href="">组织架构</a></li>
					<li><a href="">理事会</a></li>
					<li><a href="">发展历程</a></li>
					<li><a href="">会长寄语</a></li>
					<li><a href="">章程</a></li>
					<li><a href="">管理规定</a></li>
				</ul>
			</li>
			<li>
				<a href="">党建工作</a>
				<div class="triangle"></div>
				<ul class="nav_child">
					<li><a href="">党内法规</a></li>
					<li><a href="">党建动态</a></li>
					<li><a href="">理论学习</a></li>
					<li><a href="">三会一课</a></li>
				</ul>
			</li>
			<li>
				<a href="">时讯要闻</a>
				<div class="triangle"></div>
				<ul class="nav_child">
					<li><a href="">时讯信息</a></li>
					<li><a href="">基金会要闻</a></li>
				</ul>
			</li>
			<li>
				<a href="">1+1项目</a>
				<div class="triangle"></div>
				<ul class="nav_child">
					<li><a href="">1+1项目介绍</a></li>
					<li><a href="">1+1项目动态</a></li>
					<li><a href="">1+1政策文件</a></li>
					<li><a href="">1+1典型案例</a></li>
					<li><a href="">1+1志愿者风采</a></li>
					<li><a href="">1+1荣誉榜</a></li>
				</ul>
			</li>
			<li>
				<a href="">彩票公益金项目</a>
				<div class="triangle"></div>
				<ul class="nav_child">
					<li><a href="">项目介绍</a></li>
					<li><a href="">项目动态</a></li>
					<li><a href="">资料下载</a></li>
					<li><a href="">法援故事</a></li>
					<li><a href="">业务入口</a></li>
				</ul>
			</li>
			<li>
				<a href="">信息公开</a>
				<div class="triangle"></div>
				<ul class="nav_child">
					<li><a href="">年度工作</a></li>
					<li><a href="">财务审计</a></li>
					<li><a href="">收支公开</a></li>
					<li><a href="">专项基金</a></li>
				</ul>
			</li>
			<li><a href="">本会公告</a></li>
		</ul>
	</div>
  `;
  document.getElementById("header").innerHTML=str;
})();

// 设置每个页面选中的不同导航
function setActive(li_index){
	var nav=document.getElementsByClassName("nav")[0];
	var nav_li_first=nav.children[li_index];
	nav_li_first.setAttribute("class","active");
	nav_li_first.getElementsByTagName("a")[0].setAttribute("class","active_a");
}