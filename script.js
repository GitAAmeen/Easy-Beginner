const words = ['Apple','Orange','Banana','Grape','Mango','Pear','Cherry','Lemon','Peach','Plum'];

function pick(){
	return words[Math.floor(Math.random()*words.length)];
}

function render(){
	const el = document.getElementById('randomWords');
	if(!el) return;
	el.innerHTML = `<div>${pick()}</div><div>${pick()}</div>`;
}

// Change a single word (one of the two lines) when the button is clicked
function changeOne(){
	const el = document.getElementById('randomWords');
	if(!el){ render(); return; }
	const children = el.children;
	if(children.length === 0){ render(); return; }
	const idx = Math.floor(Math.random() * children.length);
	children[idx].textContent = pick();
}

document.addEventListener('DOMContentLoaded', ()=>{
	render();
	const btn = document.getElementById('startBtn');
	if(btn) btn.addEventListener('click', changeOne);
});