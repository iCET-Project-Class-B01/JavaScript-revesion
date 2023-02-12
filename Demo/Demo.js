const text = 'Hello World';   //W

var found = false;

for (let index = 0; index < text.length; index++) {
   if (text[index] == 'z') {
      found = true;
      console.log('W is in the : ',index);
   }
}

console.log(found ? '' : 'Not Found!');

