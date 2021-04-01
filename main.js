// const numberOfFilms=prompt("Скільки фільмів?")
// const personalMovieDb = {
//        count: numberOfFilms,
//        movies: {},
//        actors: {},
//        genres: [],
//        privat: false
// }
// console.log(personalMovieDb);
// let i = 0;
// do{
//        const a = prompt("sjrfcberfhgc"),
//        b = prompt("fgfgfgfgfgfg");
//        if(a==="" && b==="" && a.length<50 && b.length<50){
//            console.log("error");
//            i--;
//     }
//            else{
//                   personalMovieDb.movies[a] = b;  
//            }
//            i++;
//     }
// while(i<2);
  
//  console.log(personalMovieDb);

//  if(personalMovieDb.count < 10){
//          console.log("123")
//  }
//  else if(personalMovieDb.count >= 10){
//        console.log("111")
//  }
//  else{
//        console.log("eror")
//  }

const arr=[1,2,3,5,6,7];
let result = prompt("");
console.log(result.split(",").join("; "));
arr.forEach((value, key, arr)=>{
     console.log(key+" має значення "+ value);
});
const objNums = {
   x: 1,
   y: 9,
   z: 8
};
function clone(mainObj){
     let copy_obj = {};
     let key;
     for(key in mainObj){
          copy_obj[key] = mainObj[key];
     }
     return copy_obj;
}
const newObj = clone(objNums);
newObj.x = 12;
console.log(newObj);
console.log(objNums);
const newNum = Object.assign({}, objNums);
newNum.x = 25;
console.log(newNum);
console.log(objNums);
const array = [1,2,3,44,5],
      new_arr = [...array];
console.log(new_arr);

function print(a,b){
     console.log(a);
     console.log(b);
}
num = [1.2,3]
print(...num);
