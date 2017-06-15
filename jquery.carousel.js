/* jquery.carousel.js   2017-6-15  */

;(function($){
	$.fn.extend({
		"carousel" : function(obj,fn){
			var _this = this,
				obj = obj || {},
				type = obj.type || "x",
				limitoFlag = true,
				attr = "left",
				hide = this.width(),
				show = 0,
				cur = 0,
				old = 0,
				len = 0,
				items = {},
				inds = {},
				speed = obj.speed || 500,
				interval = obj.interval || 3500,
				mouseoverStop = obj.mouseoverStop === false ? false : true,
				autoPlay = obj.autoPlay === false ? false : true,
				indicator = obj.indicator || {};
				indicator.event = indicator.event || "click";
				indicator.attr = indicator.attr || "opacity";
				indicator.focus = indicator.focus || 1;
				indicator.blur = indicator.blur || 0.3;
				obj.timer = null;

			if(type == "y"){
				attr = "top";
				hide = this.height();
			}else if(type == "o"){
				attr = "opacity";
				hide = 0;
				show = 1;
			};

			function refresh(){
				items = _this.children(".carousel-box").children();
				inds = _this.children(".carousel-indicators").children();
				len = items.size();
			};
			refresh();

			items.css(attr,-hide).first().css(attr,show);
			items.last().css(attr,hide);
			inds.css(indicator.attr,indicator.blur).first().css(indicator.attr,indicator.focus);
			if(fn)(fn(0,len-1));
			function run(d,dir,c,o){
				refresh();

				if(dir){
					cur = cur + 1 == len ? 0 : cur + 1;
					old = cur -1 < 0 ? len - 1 : cur - 1;
				}else{
					cur = cur - 1 < 0 ? len - 1 : cur - 1;
					old = cur + 1 >= len ? 0 : cur + 1;
				};
				
				if(typeof c != "undefined"){
					cur = c;
					old = o;
				};
				
				var tempObj = {};
				tempObj[attr] = show;
				items.css(attr,d).eq(old).css(attr,show);
				items.eq(cur).animate(tempObj,speed);
				tempObj[attr] = -d;
				items.eq(old).animate(tempObj,speed);
				inds.css(indicator.attr,indicator.blur).eq(cur).css(indicator.attr,indicator.focus);
				if(fn){fn(cur,old)};
			};

			function autoGo(){
				run(hide,true);
			};

			if(autoPlay){
				obj.timer = setInterval(autoGo,interval);
			};

			var bindTag = inds.get(0).tagName.toLowerCase();
			this.children(".carousel-indicators").on(indicator.event,bindTag,function() {
				var i = $(this).index();
				if(i > cur){
					run(hide,true,i,cur);
					cur = i;
				}else if(i < cur){
					run(-hide,false,i,cur);
					cur = i;
				};
			});

			function active(dis,bool){
				if(limitoFlag){
					run(dis,bool);
					limitoFlag = false;
					setTimeout(function() {
						limitoFlag = true;
					},speed);
				};
			};

			this.children(".prev").click(function(){
				active(-hide);
			});

			this.children(".next").click(function(){
				active(hide,true);
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
			
		}

	});
	
})(jQuery);
