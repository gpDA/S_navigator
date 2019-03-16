const btns = document.querySelector('.btns');

btns.addEventListener('click', logick);

var opacity = false, motionPath = MorphSVGPlugin.pathDataToBezier("#motionPath")
console.log(motionPath);

function logick(){
    console.log('logick worked');
  const barr = document.querySelector('.bar_fill');
  console.log(barr);
  TweenMax.to(barr, 0.6, {stroke: 'blue'}
    )
    // {d: "M100 50 A50 50 0 1 0 50 100 A50 50 0 1 1 0 150", stroke: 'pink'})
      


    // TweenMax.set(barr, {xPercent: 100, yPercent: 50});
    // TweenMax.to(barr, 1, {bezier: {values: motionPath, type:"cubic"}, stroke: 'pink'});
}

//   TweenMax.to(barr, 0.6, 
//     // {d: "M100 50 A50 50 0 1 0 50 100 A50 50 0 1 1 0 150", stroke: 'pink'})
//     {d: "M100 50 A50 50 0 1 0 50 100 A50 50 0 1 1 0 150", stroke: 'pink'})

  // const xx = barr.getAttribute('stroke');
  // barr.setAttribute('stroke','pink')
  // alert(xx);