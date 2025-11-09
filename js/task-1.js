function slugify(title) {
    const lowerCase = title.toLowerCase();
    const arrSplit = lowerCase.split(' ');
    const slug = arrSplit.join('-');
    return slug;
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

console.log('-------------------------------------'); //divider



// I tried to combine this function with adding a link base.




// function slugifyLink(title) {
//   const lowerCase = title.toLowerCase();
//   const arrSplit = lowerCase.split(' ');
//     const slug = arrSplit.join('-');
//     const linkBase = 'https://neobound.com/';
//     const fullLink = linkBase + slug;
//     return fullLink;
// }

// console.log(slugifyLink("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugifyLink("English for developer")); // "english-for-developer"
// console.log(slugifyLink("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugifyLink("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// console.log('-------------------------------------'); //divider