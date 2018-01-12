function leftPad(string, length = 20) {
    return `${' '.repeat(length - string.length)}${string}`;
}

console.log(leftPad('Boom'));
console.log(leftPad('Boom Boom'));
console.log(leftPad('Boom Boom Boom'));
console.log(leftPad('Boom Boom Boom Boom'));
