
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
});

const hideSec = document.querySelectorAll('.hide');
hideSec.forEach((el) => observer.observe(el));

function showDiv(event) {

  const info = document.getElementById('info');
  const info2 = document.getElementById('info2');

  if (info.style.display === 'flex') {
    info.style.display = 'none';
  } else {
    info.style.display = 'flex';
    info2.style.display = 'none';
  }
  event.preventDefault();
}

const menu = document.querySelector(".menu")
const navList = document.querySelector("#navbar .nav-list")

menu.addEventListener('click', () => {
  console.log('Menu Clicked!');
  navList.classList.toggle('active')
  console.log(menu);
  console.log(navList);

})


document.getElementById('phone-info').addEventListener('click', showDiv);


function changeDiv(event) {

  const info = document.getElementById('info');
  const info2 = document.getElementById('info2');

  if (info2.style.display === 'flex') {
    info2.style.display = 'none';
  } else {
    info2.style.display = 'flex';
    info.style.display = 'none';
  }
  event.preventDefault();
}

document.getElementById('email-info').addEventListener('click', changeDiv);


function copy(targetId) {
  const clip = document.getElementById(targetId).innerText;

  navigator.clipboard.writeText(clip)
    .then(() => alert("Copied to clipboard!"))
    .catch(err => console.error('Unable to copy text', err));
}

function outFuncPhone() {
  var tooltip = document.getElementById("myTooltip-phone");
  tooltip.innerHTML = "Copy to clipboard";
}

function outFuncEmail() {
  var tooltip = document.getElementById("myTooltip-email");
  tooltip.innerHTML = "Copy to clipboard";
}

document.getElementById('text-copy-phone').addEventListener('click', () => copy('copy-to-phone'));
document.getElementById('text-copy-email').addEventListener('click', () => copy('copy-to-email'));
document.getElementById('text-copy-phone').addEventListener('mouseout', outFuncPhone);
document.getElementById('text-copy-email').addEventListener('mouseout', outFuncEmail);
