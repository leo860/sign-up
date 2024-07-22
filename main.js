const email = document.getElementById("email")
const form = document.getElementById("form")
const error = document.getElementById("errorMessage")
const main = document.getElementById("main")
const subcripcion = document.getElementById("sub")
const personalizeEmail = document.getElementById("confirmationEmail")
const back = document.getElementById("back")
form.addEventListener("submit",(e)=>{
	e.preventDefault()
	const verificeEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,20}$/i

	if (!email.value) {
		console.log("Valid email required")
		error.innerHTML = "Valid email required"
		error.style.color = "hsl(4, 100%, 67%)"
		error.style.fontWeight = 700
		error.style.fontSize = '10px'
		error.style.textShadow = '0 0 3px hsl(4, 100%, 67%, 0.6)'
		email.style.border = '1px solid red'
		email.style.backgroundColor = 'hsl(4, 100%, 67%, 0.2)'
		email.style.color = "hsl(4, 100%, 67%)"
	}

	else if (!verificeEmail.test(email.value)) {
		console.log("Valid email required")
		error.innerHTML = "Valid email required"
		error.style.color = "hsl(4, 100%, 67%)"
		error.style.fontWeight = 700
		error.style.fontSize = '10px'
		error.style.textShadow = '0 0 3px hsl(4, 100%, 67%, 0.6)'
		email.style.border = '1px solid red'
		email.style.backgroundColor = 'hsl(4, 100%, 67%, 0.2)'
		email.style.color = "hsl(4, 100%, 67%)"
	}
	else {
	error.innerHTML = "Valid email"
	error.style.color = "green"
	error.style.fontWeight = 700
	error.style.fontSize = '10px'
	error.style.textShadow = '0 0 3px green'
	email.style.border = null
	email.style.backgroundColor = null
	email.style.color = null
	sub.style.display = 'flex'
	main.style.display = 'none'
	personalizeEmail.innerHTML = `A confirmation email has been sent to <b>${email.value}</b>. 
    Please open it and click the button inside to confirm your subscription.`
	}
})
back.addEventListener("click",(e)=>{
	sub.style.display = 'none'
	main.style.display = 'flex'
	email.value = ' '
	error.innerHTML = " "

})
console.log()