// problem 1 Given a square matrix print both the diagonals

let arr=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

let row=arr.length;
let col=arr[0].length;

let left="";
let right="";

for(let i=0;i<row;i++)
  {
    for(let j=0;j<col;j++)
      {
        if(i==j)
        {
          left=left+arr[i][j]+" ";
        }
        if(i+j==row-1)
        {
          right=right+arr[i][j]+" ";
        }
        
      }
  }
console.log(left);
console.log(right);


