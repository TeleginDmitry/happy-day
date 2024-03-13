const activation = document.querySelector('.activation')
const image = document.querySelector('.image')
const mainBlock = document.querySelector('#main')


const words = ['Вот и наступил тот день когда тебе исполняется 18 лет', 'А это значит, что от всех души хочу поздравить тебя', 'С днём Рождения!', 'И пожелать всего самого лучшего', 'Пусть в этом году ты чипокнешь самую сочную девчонку','И купишь немеренное количество алкоголя пацанам', 'И самое главное запомни', 'Жизнь ворам, ХУЙ мусорам', 'С днём Рождения!', '']


activation.addEventListener('click', () => {
	activation.style.display = 'none'

	const p = document.createElement('p')

	p.classList.add('text')

	p.innerHTML = words[0]

	mainBlock.append(p);

	selectText()
	showImage()
})



async function selectText() {
	for (var i = 1; i < words.length; i++) {
		await new Promise((resolve) => {
			setTimeout(() => {
				const text = document.querySelector('.text')

				const currentText = words[i]

				text.innerHTML = currentText


				resolve()
			}, 2500)
		})
	}
}


function showImage() {
	setTimeout(() => {
		image.style.display = 'block'
	}, ( words.length - 1) * 2500)
}