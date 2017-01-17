function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const nested = document.getElementsByClassName("target")[0]
  return nested
}

function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length ; i< l; i++) {
    lis[i].innerHTML += n
    }
}
