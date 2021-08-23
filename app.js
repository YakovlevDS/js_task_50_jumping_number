// ? Task:Реализуй функцию isJumping, которая принимает число number и возвращает строку JUMPING, если каждая цифра в числе отличается от соседней на 1. Если условие не выполняется - строку NOT JUMPING.

// Примечания:

// Входное число всегда положительное
// Разница между 9 и 0 не является 1
// Все числа, которые состоят из одной цифры - JUMPING
// Примеры:

// isJumping(9) === 'JUMPING'
// It's single-digit number
// isJumping(79) === 'NOT JUMPING'
// Adjacent digits don't differ by 1
// isJumping(23454) === 'JUMPING'
// Adjacent digits differ by 1


// Solution 1

function isJumping(number) {
  const arr = number.toString().split("");

  if (arr.length === 1) {
    return "JUMPING";
  }

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(+arr[i] - +arr[i - 1]) !== 1) {
      return "NOT JUMPING";
    }
  }

  return "JUMPING";
}
console.log(isJumping(9));
console.log(isJumping(79));
console.log(isJumping(23454));
console.log(isJumping(13456));
console.log(isJumping(87653));
console.log(isJumping(123676));
// ! Explanation: 