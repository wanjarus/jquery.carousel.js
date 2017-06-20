# usage
<h4>HTML</h4>
<pre>
&lt;div class="carousel"&gt;
    &lt;ul class="<strong>carousel-box</strong>"&gt;
        &lt;li&gt;&lt;/li&gt;
        ...
    &lt;/ul&gt;
    &lt;ol class="<strong>carousel-indicators</strong>"&gt;
        &lt;li&gt;&lt;/li&gt;
        ...
    &lt;ol&gt;
    &lt;span class="<strong>prev</strong>"&gt;&lt;/span&gt;
    &lt;span class="<strong>next</strong>"&gt;&lt;/span&gt;
&lt;/<span>div</span>&gt;
</pre>
<h4>CSS</h4>
<pre>
自己定义或者复制 <a href="##">demo.html</a>的CSS
图片容器的class必须为<strong>.carousel-box</strong>
指示灯容器的class必须为<strong>.carousel-indicators</strong>
需要为当前状态的指示灯定义一个class为<strong>.active</strong>的类
上一张按钮的class必须为<strong>.prev</strong>
下一张按钮的class必须为<strong>.next</strong>
</pre>
<h4>JavaScript</h4>
<pre>
$(".carousel").carousel({
    interval : 5000,         //设置间隔时间，默认为3500ms
    speed : 500,             //设置过渡时间，默认500ms
    autoPlay : true,         //是否自动播放，默认true
    mouseoverStop : false,   //鼠标悬浮时是否暂停，默认false
    indicator : {
        event : "click",     //指示灯的事件，默认"click"
        active : "active",   //指定当前状态的class类，默认".active"
    }
},function(curIndex,oldIndex){
    //do something...        //第一个参数为当前索引值，第二个参数为是前一个索引值
});
</pre>

