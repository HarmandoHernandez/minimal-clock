const $ = id => document.getElementById(id)
const updateTime = (k) => (k < 10) ? "0" + k : k
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
    $("full-date").innerText =`${month_name[month]} ${day} ${year}`
    showDay[date.getDay()].style.display = 'block'
}

setInterval(currentTime, 1000)