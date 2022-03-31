const $ = id => document.getElementById(id)
const updateTime = (k) => (k < 10) ? '0' + k : k
const month_name = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
]

function currentTime() {
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()
  
    let showDay = document.querySelectorAll("#days span")
    hour = updateTime(hour)
    min = updateTime(min)
    day = updateTime(day)

    $("hour").innerText = hour
    $("min").innerText = min
    $('seconds-indicator').style.transform = `rotate(${sec * 6}deg)`

    const numlgyDay = calcNumerology(day)
    const numlgyMonth = calcNumerology(month + 1)
    const numlgyYear = calcNumerology(year)

    const num = calcNumerology(numlgyDay + numlgyMonth + numlgyYear)
    $("full-date").innerText =`${month_name[month]} ${day} ${year} (${num})`
    showDay[date.getDay()].style.display = 'block'
}

function calcNumerology(num) {
    num = num + ''
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '11', '22', '33'].includes(num)) {
        return num;
    } else {
        const nums = num.split('');
        const sum = nums.reduce((acum, currentNum) => +acum + +currentNum).toString()
        return calcNumerology(sum);
    }
}

setInterval(currentTime, 1000)