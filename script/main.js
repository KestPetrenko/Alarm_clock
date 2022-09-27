let hello = document.querySelector(".Hello")
let day = document.querySelector(".day");
let mount = document.querySelector(".mount");
let data = document.querySelector(".data");
let year = document.querySelector(".year");
let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let amPm = document.querySelector(".amPm");
let alarm1 = document.querySelector(".alarm1");
let hr1 = document.querySelector(".hr1");
let min1 = document.querySelector(".min1");
let audio1 = new Audio("audio/ranok.mp3");
let audio2 = new Audio("audio/gimn.mp3");
let audio3 = new Audio("audio/evening.mp3");


function funcStart() {
    setInterval(NextClock, 100);
}
function NextClock() {
    let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    let mounts = ["Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"];
    let now = new Date();
    dayNumber = now.getUTCDate();
    hour = now.getHours();
    years = now.getFullYear();
    minute = now.getMinutes();
    second = now.getSeconds();



    day.textContent = days[now.getDay()] + `, `;
    mount.textContent = mounts[now.getMonth()] + `, `;
    data.textContent = dayNumber;
    year.textContent = years + ` року`;

    hr.textContent = hour + ':';

    if (minute < 10) {
        min.textContent = `:0` + minute;
    }
    else {
        min.textContent = minute;
    }

    if (second < 10) {
        sec.textContent = `:0` + second;
    }
    else {
        sec.textContent = ':' + second;
    }

    Nhr = Number(hour);
    Nhr1 = Number(hr1.value);
    Nmin = Number(min1.value);
    Nmin1 = Number(minute);

    if (Nhr >= 12) {
        amPm.textContent = "PM";
    }
    else if (Nhr < 12) {
        amPm.textContent = "AM";
    }

    if (hour <= 10) {
        message = 'Добрий ранок';
    } else if (Nhr <= 18) {
        message = 'Доброго дня';
    } else if (Nhr > 18) {
        message = 'Доброго вечора';
    }
    hello.textContent = message + '!';


    alarm1.onclick = function () {
        let hrAlarm = 0;
        let minAlarm = 0;
        if (Nhr1 >= Nhr) {
            hrAlarm = (Nhr1 - Nhr) * 3600000;
        }
        else if (Nhr1 < Nhr) {
            hrAlarm = (24 - Nhr - Nhr1) * 3600000;
        }

        if ((Nhr1 === Nhr) && (Nmin < Nmin1)) {
            hrAlarm = (24 - Nhr - Nhr1) * 3600000;
            minAlarm = (Nmin - Nmin1) * 60000;
        }

        if ((Nmin >= Nmin1)) {
            minAlarm = (Nmin - Nmin1) * 60000;
        }

        let secAlarm = 60000 - Number(second * 1000);
        let sum = hrAlarm + minAlarm + secAlarm - 60000;

        function sayHi() {
            if (Nhr <= 10) {
                audio1.play();
            } else if (Nhr <= 18) {
                audio2.play();
            } else if (Nhr > 18) {
                audio3.play();
            }
            hello.textContent = message + '!';
        }
        setTimeout(sayHi, sum);
    }
}
funcStart();
