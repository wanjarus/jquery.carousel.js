# Usage method 

<pre>$(select).carousel([options],[callback]);		//初始化</pre>
<h4>[options]</h4>
<pre>
options.type              //有三种类型，（x、y、o），默认x
options.interval          //间隔时间，默认3500ms
options.speed             //过度的速度，默认500ms
options.autoPlay          //是否自动播放，默认true
options.mouseoverStop     //鼠标悬停是否暂停播放，默认true
options.indicator         //控制指示灯的对象
options.indicator.attr    //指示灯变换的属性
options.indicator.focus   //当前状态的值
options.indicator.blur    //非当前状态的值
</pre>
<h4>[callback]</h4>
<pre>
callback 回调函数包含两个索引参数，第一个是当前的索引值，第二个是上一个当前的索引值
callback 函数是同步执行的
</pre>
<br>
<h4>HTML</h4>
<p>HTML结构如 <a href="https://github.com/shixianqin/jquery.carousel.js/blob/master/demo.html">demo.html</a>所示</p>
<h4>CSS</h4>
<p>自定义CSS</p>
