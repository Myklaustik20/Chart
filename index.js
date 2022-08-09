let charts = document.querySelectorAll(".chart")
let bodyHead = document.querySelectorAll(".body-head")

let converted_chart = Array.from(charts)
let body_head = Array.from(bodyHead)

converted_chart.forEach(function(chart){
  chart.addEventListener('mouseover', function(e){
     let arr = converted_chart.indexOf(chart)
     body_head[arr].classList.add('show')
     
  })

  chart.addEventListener('mouseout',function(e){
     let arr = converted_chart.indexOf(chart)
     body_head[arr].classList.remove('show')
  })
})
