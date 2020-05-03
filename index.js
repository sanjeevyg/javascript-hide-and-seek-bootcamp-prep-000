function getFirstSelector(selector) {
  let firstElement = document.querySelector(selector)
  return firstElement
}

function nestedTarget() {
  let nestedElement = document.getElementById("nested").querySelector(".target")
  return nestedElement
}

function increaseRankBy(n) {
  let lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}