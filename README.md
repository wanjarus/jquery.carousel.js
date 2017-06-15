# jquery.carousel.js
  $(select).carousel([options],[callback]);    //初始化.
<h2>#options</h2>
  <ul>
    <li>options.type              //有三种类型，（x、y、o），默认x.</li>
    <li>options.interval          //间隔时间，默认3500ms.</li>
    <li>options.speed             //过度的速度，默认500ms.</li>
    <li>options.autoPlay          //是否自动播放，默认true.</li>
    <li>options.mouseoverStop     //鼠标悬停是否暂停播放，默认true.</li>
    <li>options.indicator         //控制指示灯的对象</li>
    <li>options.indicator.attr    //指示灯变换的属性</li>
    <li>options.indicator.focus   //当前状态的值</li>
    <li>options.indicator.blur    //非当前状态的值</li>
  </ul>
<h2>#callback</h2>
  callback回调函数包含两个索引参数，第一个是当前的索引值，第二个是上一个当前的索引值
