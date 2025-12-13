const arr = [1,2,3,4,5];

 // pollyfil for map method

//now we create our own map method;

Array.prototype.myMap = function(cb){
     const temp =[];
     for(let i=0;i<this.length;i++){
        temp.push(cb(this[i] , this));
     }
     return temp;
}

const newArr = arr.myMap((num , arr)=> num*2) ;
console.log(newArr);

//filter method
const filteredArray = arr.filter((num)=> num>3);
console.log(filteredArray)

//pollyfil for filter method

Array.prototype.myFilter =   function(cb){
     const temp = [];
     for(let i=0;i<this.length;i++){
        if(cb(this[i]))  temp.push(this[i]);
     }
     return temp;
}


const myFilter = arr.myFilter(num=>num>3);
console.log(myFilter);


//reduce 

const sum = arr.reduce((acc , curr )=>acc+curr, 0)
console.log(sum);

// pollyfil reduce method

Array.prototype.myReduce = function(cb , initialValue){
       let accumulator = initialValue;
       for(let i=0;i<this.length;i++){
           accumulator = accumulator ? cb(accumulator , this[i]):this[i];
       }
       return accumulator;
}

const mul = arr.myReduce((acc, curr)=>acc*curr , 1);
console.log(mul);


// map, filter , reduce - o/p based question 

//Question 1 - Return only name of the students in capital

let students = [
    {name :"Piyush" , rollNumber : 31 , marks:80},
    {name :"Jenny" , rollNumber : 15 , marks:69},
    {name :"Kaushal" , rollNumber : 16 , marks:35},
    {name :"Dilpreet" , rollNumber : 7 , marks:55},
]

const name = students.map((student)=>student.name.toUpperCase());
console.log(name);

// Question 2- return only details of those who scored more than 60 marks

console.log(students.filter((student)=>student.marks>60));

// Question 3- return only details of those who scored more than 60 marks and rollNumber grater than 15

console.log(students.filter(student=>student.marks>60 && student.rollNumber>15))

// Question- 4 - sum of marks of all students

console.log("mark:" + students.reduce((acc , curr)=>acc+curr.marks , 0) );

// Question - 5 - return only name of students who scored more than 60
console.log(students.filter(student => student.marks > 60).map((std => std.name.toUpperCase())))

// Question - 6 -  return total  marks for student with marks grater than 60 after 20 marks have been added to those who scored less than 60

console.log("totalMarks -> " +
    students.map((std1)=>{
        if(std1.marks<60) 
             std1.marks += 20;
        return std1;
    }).filter(stu=>stu.marks>60).reduce((acc , std)=>acc+std.marks , 0)

)


