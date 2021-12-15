// In this challenge, you'll build a password validator for a signup form, which tests whether or not a user's desired password is strong enough. You must use a regular expression in your solution. If the user's password is strong enough, return the string, your password is valid. Otherwise, return the string, your password is invalid. You must also use a ternary operator to return a Boolean value.

//  criteria which must be met in order for a password to be strong enough. The password must have at least one lowercase letter. The password must have at least one uppercase letter. It must contain one digit and one special character. And it must be at least eight characters long.

function checkPassword(password){
    let validate = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*~.?])[a-zA-Z0-9!@#$%^&*~.?]{8,}$/g
    return password.match(validate) ? console.log("your password is valid") : console.log("your password is invalid")
}

checkPassword("abc4K*lo") //valid
checkPassword("abc4K*l") //too short
checkPassword("abcD$lkn") //no number
checkPassword("abc4k*lo") //no uppercase
checkPassword("ABCD4$LO") //no lowercase
checkPassword("abc4KPlo") //no special char