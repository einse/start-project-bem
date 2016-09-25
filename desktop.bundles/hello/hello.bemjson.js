({
	block : 'page',
	title : 'hello',
	head : [
		{ elem : 'css', url : 'hello.min.css' }
	],
	scripts : [{ elem : 'js', url : 'hello.min.js' }],
	mods : { theme : 'islands' },
	content : [
		{
			block : 'hello',
			content : [
				{
					elem : 'greeting',
					content : 'Привет, %пользователь%!'
				},
				{
					block : 'input',
					mods : { theme : 'islands', size : 'm' },
					
					// подмешиваем элемент для добавления CSS-правил
					mix : { block : 'hello' , elem : 'input' },
					
					name : 'name',
					placeholder : 'Имя пользователя'
				},
				{
					block : 'button',
					mods : { theme : 'islands', size : 'm', type : 'submit' },
					text : 'Нажать'
				}
			]
		}
	]
})
