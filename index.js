
var root = document.body

var rootHeader = { 
  view: function() {
    return m("header", [
      m("h1", {class: "w3-center w3-padding-64"}, "Hello World"),
      m("button", "I am Bored"),
      ])
     }
}

m.mount(root, rootHeader)
