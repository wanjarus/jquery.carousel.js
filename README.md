# Usage method 

<pre>$(select).carousel([options],[callback]);		//初始化.</pre>
<h2>[options]</h2>
<pre>
<code>options.type</code>              //有三种类型，（x、y、o），默认x.<br>
options.interval          //间隔时间，默认3500ms.<br>
options.speed             //过度的速度，默认500ms.<br>
options.autoPlay          //是否自动播放，默认true.<br>
options.mouseoverStop     //鼠标悬停是否暂停播放，默认true.<br>
options.indicator         //控制指示灯的对象<br>
options.indicator.attr    //指示灯变换的属性<br>
options.indicator.focus   //当前状态的值<br>
options.indicator.blur    //非当前状态的值<br>
</pre>
<h2>[callback]</h2>
<pre>
callback 回调函数包含两个索引参数，第一个是当前的索引值，第二个是上一个当前的索引值<br>
callback 函数是同步执行的<br>
</pre>
<br>
<h2>HTML</h2>
<p>html的结构如 <a href="##">demo.html</a> 所示</p>
<h2>CSS</h2>
<p>自定义css.</p>
