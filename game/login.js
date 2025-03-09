localStorage.setItem("TEST", "test1")
console.log(window.Telegram)
let idx = window.Telegram.WebApp.initDataUnsafe.user.id
localStorage.setItem("USER", idx)

