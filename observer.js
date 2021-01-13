clsss Subject {
  constructor (key) {
    this.key = key
    this.pendingObserver = []
    this.response = null
  }
  notify(isFinished) {
    isFinished && this.pendingObserver.forEach(observer => observer.finish())
  }
  setResponse(response) {
    this.response = response
    this.notify(response)
  }
  add(observer) {
    this.pendingObserver.push(observer)
  }
}
clsss Observer {
  constructor (subject, reject) {
    this.subject = subject
    this.reject = reject
  }
  finish(response) {

  }
}
