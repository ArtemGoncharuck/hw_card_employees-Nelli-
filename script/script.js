//*Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст.
// Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные в массив,
//  а затем формировать карточки работников с полученной информацией.

//*Добавьте к форме поля ввода для ставки (rate), количества дней (days)
// и добавьте в карточку работника его зарплату.
// Зарплата рассчитывается через умножение ставки на количество дней.

//*Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

//*Добавьте к форме поле ввода почты. Карточки должны включать отображение фотографии.

//*Добавьте к форме поле ввода прогресса. Выведите прогресс в карточку.

const data_form_elem = document.querySelector('.data_form');
const data = [];

function render() {
	const container = document.querySelector('.data-container');
	container.innerText = '';
    data.forEach(
        ({name, surname, age, rate, days, email, photo, progress, salary}) => {
			const product = document.createElement('div');
			const nameElem = document.createElement('p');
			const surnameElem = document.createElement('p');
			const ageElem = document.createElement('p');
			const rateElem = document.createElement('p');
			const daysElem = document.createElement('p');
			const salaryElem = document.createElement('p');
			const emailElem = document.createElement('a');
			const photoElem = document.createElement('img');
			const progressContainer = document.createElement('div');
			const progressLine = document.createElement('div');
			const progressValue = document.createElement('p');

            nameElem.innerText = name;
            surnameElem.innerText = surname;
            ageElem.innerText = age;
			rateElem.innerText = rate;
			daysElem.innerText = days;
			salaryElem.innerText = `Salary: ${rate * days}`;
			emailElem.innerText = email;
			progressValue.innerText = progress + '%';

			emailElem.setAttribute('href', `mailto: ${email}`);
			photoElem.setAttribute('src', photo);
			photoElem.setAttribute('alt', 'photo of employees');

			progressContainer.classList.add('progress-container');
			progressLine.classList.add('progress-line');
			progressValue.classList.add('progress-value');

			setTimeout(() => {
				progressLine.style.opacity = 1;
				progressLine.style.width = progress + '%';
			}, 1000);

			progressContainer.append(progressLine, progressValue);
			product.append(
				nameElem,
				surnameElem,
				ageElem,
				rateElem,
				daysElem,
				salaryElem,
				emailElem,
				photoElem,
				progressContainer
				);
            container.append(product);
			product.classList.add('data');
        });
}

data_form_elem.addEventListener('submit', (event) => {
	event.preventDefault();
	const { name, surname, age, rate, days, email, photo, progress } = event.target;
	data.push({
		name: name.value,
		surname: surname.value,
		age: age.value,
		rate: rate.value,
		days: days.value,
		email: email.value,
		photo: photo.value,
		progress: progress.value,
	});

	name.value = '';
	surname.value = '';
	age.value = '';
	rate.value = '';
	days.value = '';
	email.value = '';
	photo.value = '';
	progress.value = '';

	render();
});
