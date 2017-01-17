function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const nested = document.getElementsByClassName("target")[0]
  return nested
}

function increaseRankBy(n) {
  var lis = document.getElementById("app").querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length ; i< l; i++) {
    var parsed = parseInt(lis[i].innerHTML, 10)
     lis[i].innerHTML = parsed += n
    }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
