import replace from "gulp-replace"; // Пошук та заміна
import plumber from "gulp-plumber"; // Обробка помилок
import notify from "gulp-notify"; // Сповіщення (підсказки)
import browsersync from "browser-sync"; // Локальний сервер
import newer from "gulp-newer"; // Перевірка оновлень
import ifPlugin from "gulp-if"; // Умова вітвлення

// Экспортируем объект
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin,
};
