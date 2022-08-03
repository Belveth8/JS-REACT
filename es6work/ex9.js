// 화살표 함수 : 일반함수와의 차이점(객체 생성안됨, new 사용 못함)
function f1(){
  console.log("일반함수 f1()");
}
f1();

// (이름)(param)=>(body)
let f2=()=>console.log("화살표 함수 f2()");
f2();

function f3(a, b){
  return a + b;
}

let a = f3(5, 7);
console.log(a);

let f4 = (a, b) => a + b; // 한 줄일 때 retrun, {} 생략가능 
let b = f4(11, 22);
console.log(b);

function f5(x, y, z=30){
  return x + y + z;
}

console.log(f5(1,2,3));
console.log(f5(10, 20));

// f5를 화살표 함수 f6로 구현 후 호출
const f6 = (x, y, z=30) => x + y + z;
console.log(f6(1,2,3));
console.log(f6(10, 20));

let ob = {
  f1:()=>{
    console.log(1);
    let f2=()=>console.log(2);
    f2();
    setTimeout(f2, 1000); // 1초 뒤 f2 호출
  }
}

ob.f1();