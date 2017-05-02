$(function(){
	// header数据加载
	$.ajax({
　　　　url:'https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=31.23037&longitude=121.473701',
　　　　success:function(data){
			console.log(data)
			for(var i=0;i<data.length;i++){
				var datas = data[i].word
				// var html = template('headList',datas);
				// console.log(html)
				$("#head_list").append("<a href='#'>"+data[i].word+"</a>")
			}
		}	　
　　});

	// 推荐商家数据加载
// 	$.ajax({
// 　　　　url:'https://mainsite-restapi.ele.me/shopping/restaurants?latitude=31.23037&longitude=121.473701&offset=0&limit=20&extras[]=activities&terminal=h5',
// 　　　　success:function(data){
// 			console.log(data)
// 			var html = template('sectionList',data)
// 			console.log(html)
// 		}	　
// 　　});
	$.get("data/sectionList.json",function(data){
		var html = template("sectionList",data);
		$("#section-content").html(html)
	})
	// nav 分页
	var swiper = new Swiper(".swiper-container",{
		pagination:'.swiper-pagination'
	})

	//滚动
	// 初始化高度
	$(".iscroll-wrap").height(window.innerHeight - $("footer").height());

	// var iScroll = new IScroll("#iscroll",{
	// 	probeType:2
	// })

	// 定位
	var map = new AMap.Map("map");
	map.plugin(["AMap.Geolocation","AMap.Weather"],function(){
		var geo = new AMap.Geolocation({
			timeout:3000
		})
		geo.getCurrentPosition(function(status, result) {
			console.log(result)
			if(status == "complete") {
				if(result.formattedAddress) {
					console.log(result)
					$(".addre").html(result.formattedAddress);
					var weather = new AMap.Weather();
					weather.getLive(result.addressComponent.adcode, function(ErrorStatus, WeatherLiveResult) {
						$("#temperature").html(WeatherLiveResult.temperature + "℃");
						$("#sky-situ").html(WeatherLiveResult.weather);
						if(WeatherLiveResult.weather == "阴") {
							$(".wea-img").find("img").attr("src","img/sun.png");
						} else {
							$(".wea-img").find("img").attr("src","img/sun.png");
						}
					})
				}
			}
		})
	});

	// 地址搜索
	$(".change").css("left",window.innerWidth)
	$(".address").on("tap",function(){
		$(".change").animate({
			left:0
		},200);
	})
	$("#back").on("tap",function(){
		$(".change").animate({
			left:window.innerWidth
		},200);
	})
	
	// 返回顶部按钮
	var top = $(".top");
	$(".iscroll-wrap").on("scroll",function(){
		var iTop = $(".iscroll-box").offset().top;
		if(iTop<=-310){
			top.css("opacity",1)
			$(".top").on("tap",function(){
				$(".iscroll-wrap").scrollTop(0)
			})
		}else{
			top.css("opacity",0)
		}

		// 加载更多
		var load = $(".load"),
			scrollTop = $(this).scrollTop(),
		 	scrollHeight = $(".iscroll-box").height(),
		 	clientHeight = $(this).height(); 
		// console.log(scrollTop+"..."+clientHeight+"..."+scrollHeight)
		if(scrollTop + 36 + clientHeight >= scrollHeight){
			load.show()
			$.get("data/sectionList.json",function(data){
				var html = template("sectionList",data);
				$("#section-content").append(html);
			})
		}else{
			load.hide()
		}
	})
})

