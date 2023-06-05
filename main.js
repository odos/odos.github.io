// COLORED TITLE
for (let i=0;i<document.getElementById("grid_container").children.length;i++) {
    let j = document.getElementById("grid_container").children.item(i)
    j.children.item(0).style.color = "hsl("+((i*config.color_step)+config.color_start)+","+config.color_hsl.join("%,")+"%)"
    console.log(j.children.item(0))
}

// document.querySelectorAll("a").forEach(el => {
//     el.setAttribute("target", "_blank")
// })
// const searchInput = document.querySelector('input[name="q"]');
// const originalPlaceholder = searchInput.placeholder;

// document.addEventListener('keydown', function(event) {
//   if (event.code === 'Escape') {
//     event.preventDefault();
//     searchInput.value = '';
//     searchInput.placeholder = originalPlaceholder;
//   }
// });




const searchInput = document.querySelector('input[type="text"]');
const placeholderText = searchInput.getAttribute('placeholder');

searchInput.addEventListener('focus', function() {
  if (this.value === placeholderText) {
    this.value = '';
  }
});

searchInput.addEventListener('blur', function() {
  if (this.value === '') {
    this.value = placeholderText;
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    searchInput.value = placeholderText;
  }
});

window.onload = function() {
  var images = ["img/s1.png", "img/c1.png", "img/c2.png", "img/ds1.png", "img/j1.png", "img/t1.png", "img/x1.png"];
  var rand = Math.floor(Math.random() * images.length);
  var url = "url('" + images[rand] + "')";
  document.documentElement.style.setProperty("--bg-image", url);
};


