# usage
<h4>HTML</h4>
<pre>
div>ul>li*5^ol>li*5^span.prev+span.next
</pre>
<h4>CSS</h4>
<pre>
自定义.
需要为当前状态的指示灯定义一个class为<a href="##"><strong>.active</strong></a>的类
上一张按钮的class必须为<a href="##"><strong>.prev</strong></a>
下一张按钮的class必须为<a href="##"><strong>.next</strong></a>
</pre>
<h4>JavaScript</h4>
<pre>
$(".carousel").carousel({
    type : "x",                             // 可选，"x":X轴运动，"y":Y轴运动，"o":渐变过渡，默认 "x"
    interval : 5000,                        // 可选，设置间隔时间，默认为 3500ms
    speed : 500,                            // 可选，设置过渡时间，默认 500ms
    autoPlay : true,                        // 可选，是否自动播放，默认 true
    easing : "swing",                       // 可选，缓动函数，默认 "swing"
    mouseoverStop : false,                  // 可选，鼠标悬浮时是否暂停，默认 false
    animate : true,                         // 可选，是否有动画效果，默认 true
    indicatorEvent : "click",				// 可选，指示灯切换事件，默认 "click"
    indicatorActive : "active",				// 可选，指示灯当前状态的class类，默认 "active"
	timer : setIntervalID	                // 自动，清除可以停止播放
    
},function(currentIndex,oldIndex){
    //do something...        //第一个参数为当前索引值，第二个参数为是上一个索引值
});
</pre>

