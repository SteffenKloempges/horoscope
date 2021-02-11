let inputText = document.getElementById("inputText")
let image = document.getElementById("horosImg")
let headline = document.getElementById("horosHeadline")
let description = document.getElementById("horosDescription")

function clear() {
    let clear1 = image.src = ""
    let clear2 = headline.innerHTML = ""
    let clear3 = description.innerHTML = ""
}

function showHoros() {
    if (inputText.value == 'March') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_aries.png'
        headline.innerHTML = "Your horoscope is Aries"
        description.innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone… "
    } else if (inputText.value == 'April') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_taurus.png'
        headline.innerHTML = "Your horoscope is Taurus"
        description.innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…"
    } else if (inputText.value == 'May') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_gemini.png'
        headline.innerHTML = "Your horoscope is Gemini"
        description.innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…"
    } else if (inputText.value == 'June') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_cancer.png'
        headline.innerHTML = "Your horoscope is Cancer"
        description.innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…"
    } else if (inputText.value == 'July') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_leo.png'
        headline.innerHTML = "Your horoscope is Leo"
        description.innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
    } else if (inputText.value == 'August') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_virgo.png'
        headline.innerHTML = "Your horoscope is Virgo"
        description.innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
    } else if (inputText.value == 'September') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_libra.png'
        headline.innerHTML = "Your horoscope is Libra"
        description.innerHTML = "Pick a cultural event that's coming up and get some tickets for it today."
    } else if (inputText.value == 'October') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_scorpio.png'
        headline.innerHTML = "Your horoscope is Scorpio"
        description.innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
    } else if (inputText.value == 'November') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_sagittarius.png'
        headline.innerHTML = "Your horoscope is Sagittarius"
        description.innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
    } else if (inputText.value == 'December') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_capricorn.png'
        headline.innerHTML = "Your horoscope is Capricorn"
        description.innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity."
    } else if (inputText.value == 'Januar') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_aquarius.png'
        headline.innerHTML = "Your horoscope is Aquarius"
        description.innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
    } else if (inputText.value == 'Februar') {
        clear()
        image.style.display = "inline"
        image.src = 'https://www.horoscopedates.com/img/icon_pisces.png'
        headline.innerHTML = "Your horoscope is Pisces"
        description.innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…"
    }
    else {
        clear()
        headline.innerHTML = "Gibbet nich junge"
    }
}