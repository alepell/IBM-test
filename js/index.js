function openProducts(event, product) {
  let i, tablinks, tabcontent;

  //pegar os elementos com a class tabcontent e dar hide neles.

  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //pegar todos os elementos com class tablinks e remover o active

  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  //mostrar a tab atual e adicionar um active no botao que abriu a tab
  document.getElementById(product).style.display = "flex";
  event.currentTarget.className += " active";
}

document.querySelector("#botao").onclick = function() {
  var element = document.getElementById("span");
  var range = document.createRange();
  range.selectNode(element);
  window.getSelection().addRange(range);
  $("#botao").text("Copied!");
  document.execCommand("copy");
};

var element = document.getElementById("span1");
var range = document.createRange();
document.querySelector("#botao1").onclick = function() {
  range.selectNode(element);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  $("#botao1").text("Copied!");
};
