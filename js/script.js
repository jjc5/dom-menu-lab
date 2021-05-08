//Task 3.0
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];
//Task 1.0
const mainEl = document.querySelector('main');
//Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
//Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
//Task 1.3
mainEl.classList.add('flex-ctr');
//Task 2.0
const topMenuEl = document.getElementById("top-menu");

//Task 2.1
topMenuEl.style.height = '100%';
console.log(topMenuEl);
//task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//task2.3
topMenuEl.classList.add('flex-around');

//Task 3.1
menuLinks.forEach(function(link, i){
  const a = document.createElement('a');
  a.href = menuLinks[i].href;
  a.innerHTML = menuLinks[i].text;
  topMenuEl.appendChild(a);
});
//BONUS
//Task 4.0
const subMenuEl = document.getElementById("sub-menu");
//Task 4.1
subMenuEl.style.height = '100%';
//Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//Task 4.3
subMenuEl.classList.add('flex-around');
