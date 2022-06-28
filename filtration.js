let courses = [
   { name: "Courses in England", prices: [0, 100] }, 
   { name: "Courses in Germany", prices: [500, null] }, 
   { name: "Courses in Italy", prices: [100, 200] }, 
   { name: "Courses in Russia", prices: [null, 400] },
   { name: "Courses in China", prices: [50, 250] },
   { name: "Courses in USA", prices: [200, null] },
   { name: "Courses in Kazakhstan", prices: [56, 324] },
   { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null,200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterHandler(allcourses, range) {
   const [ min,max ] = range;

   let finalArray = []

   if(min == null) {
      finalArray = allcourses.filter(course => course.prices[0] < max)
   } else if (max == null) {
      finalArray = allcourses.filter(course => course.prices[0] >= min || course.prices[1] > min)
   } else {
      finalArray = allcourses.filter(course => course.prices[0] >= min && course.prices[0] < max || course.prices[1] > min && course.prices[1] <= max  )
   }

   console.log(finalArray.map(course => course.name))
   return finalArray
}

filterHandler(courses, requiredRange2)
