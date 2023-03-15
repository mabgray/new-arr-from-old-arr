var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];



/*var evenNums = stuff.filter((thingy, index) => {
  return index % 2 === 0;
});

console.log(evenNums);*/

/*var removeItem = function (arr, item) {
  var index = arr.indexOf(item);
  if (index === -1) {
    console.log(`${item} is not listed in the array`);
  } else {
    arr.splice(index, 1);
    console.log(`we have removed ${item} from the list`);
  }
};

removeItem(stuff, "tofu");
removeItem(stuff, "coffee");*/


var arr1 = stuff.filter((hasS) => {
 return hasS.includes("s");
  }
);
console.log(arr1);
