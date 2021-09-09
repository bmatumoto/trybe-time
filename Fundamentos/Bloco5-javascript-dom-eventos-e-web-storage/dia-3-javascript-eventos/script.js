function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function generateCalendarDay(arrDays) {
  const listDays = document.getElementById('days');
  for (let day of arrDays) {
    const itemList = document.createElement('li');
    itemList.innerText = day;
    itemList.classList.add('day')
    if (day === 24 || day === 25 || day === 31) {
      itemList.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      itemList.classList.add('friday');
    }
    listDays.appendChild(itemList);
  }
}
generateCalendarDay(dezDaysList)

function createHolidays(paramHoliday) {
  const btnHoliday = document.createElement('button');
  btnHoliday.innerText = paramHoliday;
  btnHoliday.id = 'btn-holiday';
  const containerHoliday = document.querySelector('.buttons-container');
  containerHoliday.appendChild(btnHoliday);
}
createHolidays('Feriados')

const holidayButton = document.getElementById('btn-holiday');
const dayHoliday = document.querySelectorAll('.holiday');
holidayButton.addEventListener('click', function (event) {
  for (let day of dayHoliday) {
    day.classList.toggle('holiday-day');
  }
})

function friday(param) {
  const btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday'
  btnFriday.innerText = param
  const containerFriday = document.querySelector('.buttons-container');
  containerFriday.appendChild(btnFriday)
}
friday('Sexta-feira')

const fridayButton = document.getElementById('btn-friday');
const fridayDays = document.querySelectorAll('.friday');
const text = 'MufasaDay';
let arrayDays = [];
for (let day of fridayDays) {
  arrayDays.push(day.innerText)
}
fridayButton.addEventListener('click', function() {
  for (let day in fridayDays) {
    if (fridayDays[day].innerText !== text) {
      fridayDays[day].innerText = text;
    } else {
      fridayDays[day].innerText = arrayDays[day];
    }
  }
})

function zoom() {
  const dias = document.querySelectorAll('.day');
  dias.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      item.style.fontSize = '26px';
    })
    item.addEventListener('mouseleave', function () {
      item.style.fontSize = '20px';
    })
  })
}
zoom()