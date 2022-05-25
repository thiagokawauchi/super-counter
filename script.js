const button = document.getElementById('button')
button.addEventListener('click', showCount)

function showCount () {
	let start = Number(document.getElementById('start').value)
	let finish = Number(document.getElementById('finish').value)
	let step = Number(document.getElementById('step').value)
	let result = document.getElementById('result')
	
	if (step < 1 || step == null) {
		step = 1
	}
	if (start < finish) {
		result.innerHTML = "Counting:<br>"
		for (let i = start; i <= finish; i += step) {
			result.innerHTML += `${i} 👉 `
		}
		result.innerHTML += '🏁'
	} else if (start > finish) {
		result.innerHTML = "Counting:<br>"
		for (let i = start; i >= finish; i -= step) {
			result.innerHTML += `${i} 👉 `
		}
		result.innerHTML += '🏁'
	}	
}

