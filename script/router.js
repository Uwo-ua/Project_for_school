
const router = (e) => {
  let event = e || window.event
  event.preventDefault()
  window.history.pushState({}, "", event.target.href)
  rootView()
}

var index = 1;

const slideChangeLeft = () => {
  index -= 1
  slideView()
}

const slideChangeRight = () => {
  index += 1
  slideView()
}

const routes = {
  '/': "../pages/1.html",
  "/about": "../pages/about.html",
  "/2": "../pages/2.html",
  "/3": "../pages/3.html",
  "/4": "../pages/4.html",
  "/5": "../pages/5.html",
}


const rootView = async () => {
  let path = window.location.pathname
  let route = routes[path]
  let HTML = await fetch(route).then((d) => d.text())
  document.getElementById('root').innerHTML = HTML
  document.title = path
}

const slideView = async () => {
  var path
  if (index == 0) {
    index = 5
    path = `/${index}`
  } else if (index > 5 || index == 1) {
    path = '/'
    index = 1
  } else {
    path = `/${index}`
  }
  let route = routes[path]
  let HTML = await fetch(route).then((d) => d.text())
  document.getElementById('root').innerHTML = HTML
  document.title = path
}

rootView()

window.route = router