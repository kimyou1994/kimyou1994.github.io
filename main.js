$(window).load(function() {
    // Animate loader off screen
    $('.loading').delay(2900).fadeOut();
    $('body').removeClass("preload");
  });

var last = 0;
var about = false;
$(window).scroll(function(event){
  var Pos = $(this).scrollTop();
  if (Pos > last && Pos > 55){
    $(".headers").hide();
  } else {
    $(".headers").show();
  }
  last = Pos;
  //One time run
  if (Pos > 1200 && !about) {
    about = true;
    runScripts(data, 0);
  }
});

//$(function() {
  var data = [
  { 
    action: 'type',
    strings: ["Hello my name is Young Jin Kim and here is my info!", ''],
    postDelay: 1000
  },
  { 
    action: 'type',
    strings: ["Current Education"],
    output: '<span class="blue">University of Southern California</span><br>&nbsp;',
    postDelay: 1000
  },
  { 
    action: 'type',
    strings: ["Major"],
    output: '<span class="blue">Computer Science</span><br>&nbsp;',
    postDelay: 1000
  },
  {
    action: 'type',
    strings: ["Expected Graduation"],
    output: '<span class="blue">May 2019</span><br>&nbsp;',
    postDelay: 1000
  },
  {
    action: 'type',
    strings: ["Email"],
    output: '<span class="blue"><a href="mailto:kim687@usc.edu">kim687@usc.edu</a></span><br>&nbsp;',
    postDelay: 1000
  },
  {
    action: 'type',
    strings: ["Skills^400"],
    output: '<span class="blue">Java, C++, Objective-C, HTML, CSS, Javascript(ember.js), Unity(C#), </span><br>&nbsp;',
    postDelay: 1000
  },
  {
    action: 'type',
    strings: ['Computer Science Courses'],
    output: $('.run-courses').html()
  },
  {
    action: 'type',
    strings: ['Interests'],
    output: '<span class="blue">Full-Stack, Mobile Application, Game Development, Software Engineer</span><br>&nbsp;',
    postDelay: 1000
  },
  { 
    action: 'type',
    strings: [":)"],
    postDelay: 2000
  }
  
];
  //runScripts(data, 0);
//});

function runScripts(data, pos) {
    var prompt = $('.prompt'),
        script = data[pos];
    if(script.clear === true) {
      $('.history').html(''); 
    }
    switch(script.action) {
        case 'type':
          // cleanup for next execution
          prompt.removeData();
          $('.typed-cursor').text('');
          prompt.typed({
            strings: script.strings,
            typeSpeed: 35,
            callback: function() {
              var history = $('.history').html();
              history = history ? [history] : [];
              history.push('$ ' + prompt.text());
              if(script.output) {
                history.push(script.output);
                prompt.html('');
                $('.history').html(history.join('<br>'));
              }
              // scroll to bottom of screen
              $('section.terminal').scrollTop($('section.terminal').height());
              // Run next script
              pos++;
              if(pos < data.length) {
                setTimeout(function() {
                  runScripts(data, pos);
                }, script.postDelay || 1000);
              }
            }
          });
          break;
        case 'view':
          break;
    }
}

var $orbs = $('.orbs span');
var orb = 0;
var numOrbs = $orbs.length;

welcom = function() {
  $('.end-right').css('left' , '-10%');
  $('.end-left').css('left', '110%');
  $orbs.velocity({'top': '-300px', scaleX: '.2', scaleY: '.2', color: '#990000'},0);
  $('.end-right').velocity({left : '50%'}, 'easeOutExpo', 1200);
  $('.end-left').velocity({left : '50%'}, 'easeOutExpo',  1200);

}
dropOrbs = function(){
  changeSize();
  $orbs.eq(orb).velocity({top: '70px'}, 400).velocity({scaleX: 1, scaleY: 1, color: '#fff'}, 1000).css('position', 'relative');
  orb = orb + 1;
  if(orb < numOrbs){
    setTimeout(dropOrbs, 100);
  }
  else{
    setTimeout(function(){$('.glow').velocity({opacity: 1}, 1200);}, 1200);
  } 
}
setTimeout(welcom, 2950);
setTimeout(dropOrbs, 3300);

var tl = new TimelineMax();
var bgd = $('#background rect');
var table = $('#table_legs, #table');
var lampLeg = $('#lamp > .lamp-leg');
var lampbt = $('#lamp-bottom');
var lampLight = $('#lamp > .light');
var lampLine = $('#lamp-line');
var lampLineB = $('#lamp-line-b');
var lampLineT = $('#lamp-line-t');
var lampCircle = $('#lamp-circle');
var lampHead = $('#lamp-head');
var lampHeader = $('#lamp-header');
var lampBody = $('#lamp-body');
var computer = $('#computer > *');
var keyboard = $('#keyboard > *');
var asset = $('#computer_mouse > * , #coffee_mug > *');

sgv = function() {
    tl.from(bgd, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
      .staggerFrom(table, 0.2, {y:"-=200", opacity: 0, ease: Elastic.easeOut}, 0.1)
      .from(lampLeg, 0.2, {opacity:0, x: "-200", ease: Elastic.easeOut})
      .from(lampbt, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
      .from(lampLineB, 0.3,{opacity:0, transformOrigin: '100% 100%', rotation: '-180deg'})
      .from(lampCircle,0.1,{opacity:0, x: '-=100', y: '-=100'})
      .from(lampLineT, 0.3,{opacity:0, transformOrigin: '0% 100%', rotation: '-180deg'})
      .from(lampHead, 0.2, {opacity:0, scale:0, ease: Elastic.easeOut})
      .from(lampHeader, 0.5, {transformOrigin: '60% 60%', rotation: '60deg'})
      .from(lampBody, 0.5, {transformOrigin: '70% 70%', rotation: '-25deg'})
      .staggerFrom(computer, 1, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Back .easeOut}, 0.2)
      .staggerFrom(keyboard, 0.5, {opacity: 0, y: '-=100', ease: Linear.easeInOut }, 0.05)
      .staggerFrom(asset, 0.5, {opacity: 0}, 0.05)
      .to(lampLight, 0.2, {opacity:0.8, ease: Elastic.easeOut, delay:0.5}, "a")
      .to(lampLight, 0.1, {opacity:0}, "b")
      .to(lampLight, 0.1, {opacity:0.2}, "c")
      //.to(bgd, 0.2, {opacity: 0.1, delay:0.5}, "a-=0.05")
      //.to(bgd, 0.1, {opacity: 1}, "b-=0.05")
      //.to(bgd, 0.1, {opacity: 0.5}, "c-=0.05")
      //.to(bgd, 0.2, {opacity: 1, fill: '#FDD10D'})
      .fromTo(lampLine, 0.2, {opacity: 0},{opacity: 0.2, delay:0.5}, "a-=0.05")
      .to(lampLine, 0.1, {opacity: 1}, "b-=0.05")
      .to(lampLine, 0.1, {opacity: 0.5}, "c-=0.05");
}
setTimeout(sgv, 3000);

var   canvas = document.querySelector('canvas'),
         ctx = canvas.getContext('2d'),
   particles = [],
patriclesNum = 150,
           w = 1450,
           h = 1009,
      colors = ['#f35d4f','#f36849','#c0d988','#6ddaf1','#f1e85b'];

canvas.width=  $('#main-image').width();
canvas.height = $('#main-image').height() + $('#canvas').height();
  
function changeSize() {
  canvas.width=  $('#main-image').width();
  canvas.height = $('#main-image').height();
}
function Factory(){  
  this.x =  Math.round( Math.random() * w);
  this.y =  Math.round( Math.random() * h);
  this.rad = Math.round( Math.random() * 1) + 1;
  this.rgba = colors[ Math.round( Math.random() * 3) ];
  this.vx = Math.round( Math.random() * 3) - 1.5;
  this.vy = Math.round( Math.random() * 3) - 1.5;
}
   
function draw(){
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  for(var i = 0;i < patriclesNum; i++){
    var temp = particles[i];
    var factor = 1;
     
    for(var j = 0; j<patriclesNum; j++){
      
       var temp2 = particles[j];
       ctx.linewidth = 0.5;
      
       if(temp.rgba == temp2.rgba && findDistance(temp, temp2)<50){
          ctx.strokeStyle = temp.rgba;
          ctx.beginPath();
          ctx.moveTo(temp.x, temp.y);
          //ctx.lineTo(temp2.x, temp2.y);
          ctx.stroke();
          factor++;
       }
    }
    
    
    ctx.fillStyle = temp.rgba;
    ctx.strokeStyle = temp.rgba;
    
    ctx.beginPath();
    ctx.arc(temp.x, temp.y, temp.rad*factor, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    //ctx.arc(temp.x, temp.y, (temp.rad+5)*factor, 0, Math.PI*2, true);
    ctx.stroke();
    ctx.closePath();
    

    temp.x += temp.vx;
    temp.y += temp.vy;
    
    if(temp.x > w)temp.x = 0;
    if(temp.x < 0)temp.x = w;
    if(temp.y > h)temp.y = 0;
    if(temp.y < 0)temp.y = h;
  }
}

function findDistance(p1,p2){  
  return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };

})();

(function init(){
  for(var i = 0; i < patriclesNum; i++){
    particles.push(new Factory);
  }

})();

(function loop(){
  draw();
  requestAnimFrame(loop);
})();


$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

$(function(){
    $('.column').flip({
        trigger: 'hover'
    });
});
