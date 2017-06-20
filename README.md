usage
<div class="highlight highlight-text-html-basic">
<h4>HTML</h4>
<pre>
&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>="carousel"&gt;
    &lt;<span class="pl-ent">ul</span> <span class="pl-e">class</span>="<strong class="pl-k">carousel-box</strong>"&gt;
        &lt;<span>li</span>&gt;&lt;/<span>li</span>&gt;
        ...
    &lt;/<span>ul</span>&gt;
    &lt;<span class="pl-ent">ol</span> <span class="pl-e">class</span>="<strong class="pl-k">carousel-indicators</strong>"&gt;
        &lt;<span>li</span>&gt;&lt;/<span>li</span>&gt;
        ...
    &lt;/<span>ol</span>&gt;
    &lt;<span class="pl-ent">span</span> <span class="pl-e">class</span>="<strong class="pl-k">prev</strong>"&gt;&lt;/<span>span</span>&gt;
    &lt;<span class="pl-ent">span</span> <span class="pl-e">class</span>="<strong class="pl-k">next</strong>"&gt;&lt;/<span>span</span>&gt;
&lt;/<span>div</span>&gt;
</pre>
<h4>CSS</h4>
<pre>
自己定义或者复制 <a href="##">demo.html</a>的CSS
图片容器的<span class="pl-e">class</span>必须为<strong class="pl-k">.carousel-box</strong>
指示灯容器的<span class="pl-e">class</span>必须为<strong class="pl-k">.carousel-indicators</strong>
需要为当前状态的指示灯定义一个<span class="pl-e">class</span>为<strong class="pl-k">.active</strong>的类
上一张按钮的<span class="pl-e">class</span>必须为<strong class="pl-k">.prev</strong>
下一张按钮的<span class="pl-e">class</span>必须为<strong class="pl-k">.next</strong>
</pre>
<h4>JavaScript</h4>
<pre>
<span class="pl-e">$</span>(".carousel").<span class="pl-e">carousel</span>({
    interval : 5000,         //设置间隔时间，默认为3500ms
    speed : 500,             //设置过渡时间，默认500ms
    autoPlay : true,         //是否自动播放，默认true
    mouseoverStop : false,   //鼠标悬浮时是否暂停，默认false
    indicator : {
        event : "click",     //指示灯的事件，默认"click"
        active : "active",   //指定当前状态的class类，默认".active"
    }
},<span class="pl-e">function</span>(curIndex,oldIndex){
    //do something...        //第一个参数为当前索引值，第二个参数为是前一个索引值
});
</pre>
</div>
