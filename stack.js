function Stack () {
    this.storage = ""
}

Stack.prototype.push = function (val) {
  this.storage = this.storage + '&' + val.toString()
}

Stack.prototype.pop = function () {
    var end = this.storage.lastIndexOf('&')
    var finalSeg = this.storage.slice(end + 1)
    this.storage = this.storage.slice(0, end)

    return finalSeg
}

Stack.prototype.getSize = function () {
    var found = this.storage.replace(/[^&]/g, '')
    return found.length
} 

var myWeeklyMenu = new Stack()

myWeeklyMenu.push("RedBeans")
myWeeklyMenu.push("RedBeans")
myWeeklyMenu.pop()
