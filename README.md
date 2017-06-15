# jquery.carousel.js
  $(select).carousel([options],[callback]);    //初始化.
<h2>#options</h2>
  <ul>
    <li><pre>options.type              //有三种类型，（x、y、o），默认x.</pre></li>
    <li><pre>options.interval          //间隔时间，默认3500ms.</pre></li>
    <li><pre>options.speed             //过度的速度，默认500ms.</pre></li>
    <li><pre>options.autoPlay          //是否自动播放，默认true.</pre></li>
    <li><pre>options.mouseoverStop     //鼠标悬停是否暂停播放，默认true.</pre></li>
    <li><pre>options.indicator         //控制指示灯的对象</pre></li>
    <li><pre>options.indicator.attr    //指示灯变换的属性</pre></li>
    <li><pre>options.indicator.focus   //当前状态的值</pre></li>
    <li><pre>options.indicator.blur    //非当前状态的值</pre></li>
  </ul>
<h2>#callback</h2>
  callback回调函数包含两个索引参数，第一个是当前的索引值，第二个是上一个当前的索引值
