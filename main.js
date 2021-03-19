const numberOfFilms=prompt("Скільки фільмів?")
const personalMovieDb = {
       count: numberOfFilms,
       movies: {},
       actors: {},
       genres: [],
       privat: false
}
console.log(personalMovieDb);
let i = 0;
do{
       const a = prompt("sjrfcberfhgc"),
       b = prompt("fgfgfgfgfgfg");
       if(a==="" && b==="" && a.length<50 && b.length<50){
           console.log("error");
           i--;
    }
           else{
                  personalMovieDb.movies[a] = b;  
           }
           i++;
    }
while(i<2);
  
 console.log(personalMovieDb);

 if(personalMovieDb.count < 10){
         console.log("123")
 }
 else if(personalMovieDb.count >= 10){
       console.log("111")
 }
 else{
       console.log("eror")
 }
