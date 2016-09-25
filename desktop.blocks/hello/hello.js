modules.define(
	'hello', // имя блока
	['i-bem__dom'], // подключение зависимости
	
	// функция, в которую передаются имена используемых модулей
	function(provide, BEMDOM) {
		provide(BEMDOM.decl('hello', { // декларация блока
			onSetMod: { // конструктор для описания реакции на события
				'js': {
					'inited': function() {
						this._input = this.findBlockInside('input');
						
						// событие, на которое будет реакция
						this.bindTo('submit', function(e) {
							// предотвращение срабатывания события по умолчанию:
							// отправка формы на сервер с перезагрузкой страницы
							e.preventDefault();
							
							this.elem('greeting').text('Привет, ' + 
								this._input.getVal() + '!');
						});
					}
				}
			}
		}));
	}
);
