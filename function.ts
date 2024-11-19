// function 

// call signature : react프로그램을 디자인하면서 타입을 먼저 생각하고 코드를 구현가능해짐
type Add = (a:number, b:number) => number;

const add:Add = (a,b) => a+b


// Overloading : 오버로딩은 call signature이 다수 존재하는 것
type Add2 = {
   (a:number, b:number) : number,
   (a:string, b:string) : string
}

const add2: Add = (a,b) => {
   if(typeof b === "string") return a
   return a + b
}

// 오버로딩 예시, 파라미터만 다른경우,
type Config = {
   path: string,
   state: object
}

type Pash = {
   (path:string):void
   (config: Config):void
}

const push:Pash = (config) => {
   if(typeof config === "string"){ console.log(config)}
   else {
       console.log(config.path)
   }
}

// 오버로딩 : 다른 여러개의 argument를 가지고 있을 때 발생하는 효과(파라미터의 갯수도 다른경우)
type Add3 = {
   (a:number, b:number) : number
   (a:number, b:number, c:number) : number
}

// c parameter은 옵션 으로 있을수도 있고 없을 수 도 있다 그래서  number일 것이라고 표현해줘야함
const add3:Add3 = (a, b, c?:number) => {
   if(c) return a + b + c
   return a + b
}

add3(1,2)
add3(1,2,3)



// number, boolean, string : concreate type
// void, unknown, : concreate type

// 다형성(polymorphism) : 여러가지 다른 구조들
// type SuperPrint = {
//     (arr: number[]):void
//     (arr: boolean[]):void
//     (arr: string[]):void
//     (arr: (number|boolean)[]):void
// }

// generic type : placeholder 같은것 concreate 대신 쓸 수 있음
// call signature를 작성할때, 여기 들어올 확실한 타입을 모를때 generic을 사용함
type SuperPrint = {
   <TypePlaceholder>(arr: TypePlaceholder[]):void
}

const superPrint: SuperPrint = (arr) => {
   arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4])
superPrint([true, false, false, false])
superPrint(["1", "2", "3"])
superPrint([1,2,true,false])

// Generics Recap
type SuperPrint2 = <T, M>(a: T[], b: M) => T

const superPrint2: SuperPrint2 = (arr) => arr[0]
superPrint2([1,2,3,4], "X")

// conclusions
function superPrint3<T>(a: T[]) {
   return a[0]
}

// 타입스크립트가 스스로 찾게 만드는걸 추천
type Player<E> = {
   name: string,
   extraInfo : E
}

// z코드 확장
type NicoExtra = {
   favFood:string
}

type NicoPlayer = Player<NicoExtra>

//{object}
const nico : NicoPlayer = {
   name: "nico",
   extraInfo: {
       favFood : "kimchi"
   }
}

const lynn : Player<null> = {
   name: "lynn",
   extraInfo: null
}

type arrNumbers = Array<number>

let a2 : arrNumbers = [1,2,3,4]

function printAllNumbers(arr: Array<number>) {

}


// useState<number>()






