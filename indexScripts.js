async function typeSentence(sentence, eleRef, delay = 100) {
	const letters = sentence.split("");
	let i = 0;
	const element = document.getElementById(eleRef)
	while(i < letters.length) {
		await sleep(delay);
	  	element.append(letters[i]);
	  	i++
	}
	return;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


async function intro() {
	await typeSentence("Presense.", "specialWord");
	await sleep(2000);
	await typeSentence(" My Creation for @innerarthoe's third Weekly Art Prompt.", "introText");
	await sleep(1000);
	const element = document.getElementById("specialWord");
	const wrapper = document.createElement('a');
	element.parentNode.insertBefore(wrapper, element);
	wrapper.appendChild(element);
	wrapper.classList.toggle ("trans");
	wrapper.classList.toggle ("slowYellow");
	await sleep(3000);
	wrapper.setAttribute("href", "presence.html");

}

window.addEventListener('DOMContentLoaded', () => { intro() });