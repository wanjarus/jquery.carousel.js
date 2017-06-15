# Usage method 

<p>$(select).carousel([options],[callback]);		//初始化</p>
<h4>[options]</h4>
<p>
options.type              //有三种类型，（x、y、o），默认x <br>
options.interval          //间隔时间，默认3500ms <br>
options.speed             //过度的速度，默认500ms <br>
options.autoPlay          //是否自动播放，默认true <br>
options.mouseoverStop     //鼠标悬停是否暂停播放，默认true <br>
options.indicator         //控制指示灯的对象 <br>
options.indicator.attr    //指示灯变换的属性 <br>
options.indicator.focus   //当前状态的值 <br>
options.indicator.blur    //非当前状态的值 <br>
</p>
<h4>[callback]</h4>
<p style="background:transparent;">
callback 回调函数包含两个索引参数，第一个是当前的索引值，第二个是上一个当前的索引值
callback 函数是同步执行的
</p>
<br>
<h4>HTML</h4>
<p>HTML结构如 <a href="https://github.com/shixianqin/jquery.carousel.js/blob/master/demo.html">demo.html</a>所示</p>
<h4>CSS</h4>
<p>自定义CSS</p>
