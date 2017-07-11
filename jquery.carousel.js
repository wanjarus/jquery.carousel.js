/* jquery.carousel.js   2017-7-6  */

;(function($){
	$.fn.extend({
		"carousel" : function(obj,fn){
			var _this = this,
				show = 0,
				cur = 0,
				old = 0,
				len = 0,
				items = {},
				inds = {},
				temp = {},
				attr = "left",
				limitFlag = true,
				dis = this.width(),
				obj = obj || {},
				type = obj.type || "x",
				speed = obj.speed || 500,
				interval = obj.interval || 3500,
				easing = obj.easing || "swing",
				mouseoverStop = obj.mouseoverStop === false ? false : true,
				autoPlay = obj.autoPlay === false ? false : true,
				noLoop = obj.loop === false ? true : false,
				animate = obj.animate === false ? "css" : "animate",
				indicatorEvent = obj.indicatorEvent || "click";
				indicatorActive = obj.indicatorActive || "active";
				obj.timer = null;

			if(type === "y"){
				attr = "top";
				dis = this.height();
			};

			function refresh(){
				items = _this.children("ul").children();
				inds = _this.children("ol").children();
				len = items.length;
			};
			refresh();

			if(type === "o"){
				items.hide().first().show();
			}else{
				items.css(attr,-dis).first().css(attr,show);
				items.last().css(attr,dis);	
			};

			inds.first().addClass(indicatorActive);
			if(fn)(fn(0,len-1));

			function run(d,dir,c,o){

				refresh();

				if(dir){
					if(noLoop && cur === len-1)return;
					cur = cur + 1 == len ? 0 : cur + 1;
					old = cur -1 < 0 ? len - 1 : cur - 1;
				}else{
					if(noLoop && cur === 0)return;
					cur = cur - 1 < 0 ? len - 1 : cur - 1;
					old = cur + 1 >= len ? 0 : cur + 1;
				};
				
				if(typeof c != "undefined"){
					cur = c;
					old = o;
				};

				if(type === "o"){
					items.stop().fadeOut(speed).eq(cur).stop().fadeIn(speed);
				}else{
					temp[attr] = show;
					items.eq(cur).css(attr,d)[animate](temp,speed,easing);
					temp[attr] = -d;
					items.eq(old).css(attr,show)[animate](temp,speed,easing);	
				};

				inds.eq(old).removeClass(indicatorActive);
				inds.eq(cur).addClass(indicatorActive);

				if(fn){fn(cur,old)};
			};

			function autoGo(){
				run(dis,true);
			};

			if(autoPlay){
				obj.timer = setInterval(autoGo,interval);
			};

			function limit(fn){
				if(limitFlag){
					fn();
					if(obj.animate === false)return;
					limitFlag = false;
					setTimeout(function(){limitFlag = true}, speed);
				};
			};

			this.children("ol").on(indicatorEvent,"li",function(){
				var i = $(this).index();
				limit(function(){
					if(i > cur){
						run(dis,true,i,cur);
						cur = i;
					}else if(i < cur){
						run(-dis,false,i,cur);
						cur = i;
					};
				});
			});

			this.children(".prev").click(function(){
				limit(function(){run(-dis)});
			});

			this.children(".next").click(function(){
				limit(function(){run(dis,true)});
			});

			if(mouseoverStop){
				this.mouseenter(function(){
					clearInterval(obj.timer);
				}).mouseleave(function(){
					if(autoPlay){
						obj.timer = setInterval(autoGo,interval);
					};
				});	
			};

			$(window).resize(function(){
				if(type === "x"){
					dis = _this.width();
				}else if(type === "y"){
					dis = _this.height();
				};
			});
			return this;
		}

	});
})(jQuery);

