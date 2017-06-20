# usage
<h4>HTML</h4>
<pre>
&lt;div class="carousel"&gt;
    &lt;ul class="<a href="##"><strong>carousel-box</strong></a>"&gt;
        &lt;li&gt;&lt;/li&gt;
        ...
    &lt;/ul&gt;
    &lt;ol class="<a href="##"><strong>carousel-indicators</strong></a>"&gt;
        &lt;li&gt;&lt;/li&gt;
        ...
    &lt;ol&gt;
    &lt;span class="<a href="##"><strong>prev</strong></a>"&gt;&lt;/span&gt;
    &lt;span class="<a href="##"><strong>next</strong></a>"&gt;&lt;/span&gt;
&lt;/<span>div</span>&gt;
</pre>
<h4>CSS</h4>
<pre>
自己定义或者复制 <a href="##">demo.html</a>的CSS
图片容器的class必须为<a href="##"><strong>.carousel-box</strong></a>
指示灯容器的class必须为<a href="##"><strong>.carousel-indicators</strong></a>
需要为当前状态的指示灯定义一个class为<a href="##"><strong>.active</strong></a>的类
上一张按钮的class必须为<a href="##"><strong>.prev</strong></a>
下一张按钮的class必须为<a href="##"><strong>.next</strong></a>
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

