function hideElement(selector) {
    const el = document.querySelector(selector)
    el.classList.add('hidden')
  }
  
  function showElement(selector) {
    const el = document.querySelector(selector)
    el.classList.remove('hidden')
  }
  function getDateNow() {
    const event = new Date
    return event.toString()
}