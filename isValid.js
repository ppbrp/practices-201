// Practices-G1 (1)
function detailedType(value) {
    if (value === null) {
        return 'null';
    } else if (Array.isArray(value)) {
        return 'array';
    } else {
        return typeof value;
    }
}

console.log(detailedType('hello'));
console.log(detailedType(123));
console.log(detailedType(true));
console.log(detailedType({}));
console.log(detailedType([]));
console.log(detailedType(null));
console.log(detailedType(function () {}));
console.log(detailedType(undefined));
console.log(detailedType(Symbol()));

// Practices-G1 (2)
function isValidPassword(password) {

    if (password.length >= 8) {
        let hasUppercase = /[A-Z]/.test(password);
        let hasLowercase = /[a-z]/.test(password);
        let hasNumber = /\d/.test(password);
        if (hasUppercase && hasLowercase && hasNumber) {           
               return true;
        }else {
            return false
        }
    } else {
        return false
    }
}


console.log(isValidPassword('Password123'))
console.log(isValidPassword('pass123'))
console.log(isValidPassword('PASSWORD123'))
console.log(isValidPassword('Pass12'))