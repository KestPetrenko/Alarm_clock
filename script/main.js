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
    min.textContent = minute;
    sec.textContent = ':' + second;

    if (Number(hour) >= 12) {
        amPm.textContent = "PM";
    }
    else if(Number(hour) < 12){
        amPm.textContent = "AM";
    }

    if (hour <= 10) {
        message = 'Добрий ранок';
    } else if (Number(hour) <= 18) {
        message = 'Доброго дня';
    } else if(Number(hour) > 18){
        message = 'Доброго вечора';
    }
    hello.textContent = message + '!';
    

    alarm1.onclick = function () {
        if ((Number(hr1.value) >= Number(hour))) {
            var hrAlarm = (Number(hr1.value) - Number(hour)) * 3600000;
        }
        else if ((Number(hr1.value) < Number(hour))) {
            var hrAlarm = (24 - (Number(hour) - Number(hr1.value))) * 3600000;
        }

        if ((Number(hr1.value) === Number(hour)) && (Number(min1.value) < Number(minute))) {
            var hrAlarm = (24 - (Number(hour) - Number(hr1.value))) * 3600000;
            var minAlarm = (Number(min1.value) - Number(minute)) * 60000;
        }

        if ((Number(min1.value) >= Number(minute))) {
            var minAlarm = (Number(min1.value) - Number(minute)) * 60000;
        }

        let secAlarm = 60000 - Number(second * 1000);
        let sum = hrAlarm + minAlarm + secAlarm - 60000;

        function sayHi() {
            if (Number(hour) <= 10) {
                audio1.play();
            } else if (Number(hour) <= 18) {
                audio2.play();
            } else if(Number(hour) > 18){
                audio3.play();
            }
            hello.textContent = message + '!';
        }
        setTimeout(sayHi, sum);
    }
}
funcStart();