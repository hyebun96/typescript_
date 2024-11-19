let a : number[] = [1,2]
let b : string[] = ["il"]
let c : boolean[] = [true]

// name은 갖지만 age는 선택적변수로 설정
// Object 타입을 명시적으로 표시하는 법
const player : {
    name : string,
    age? : number
} = {
    name : "nico"
}

// player.age가 undefined 아니면서 10보다 작은경우 
if(player.age && player.age < 10) {

}

// 별칭 Alias 타입을 생성 가능 : 이러한 방식은 코드가 많은 타입을 재사용할 수 있음
// alias는 obejct뿐만아니라 age number 타입으로도 사용가능
type Age = number
type Name = string

// 코드를 재 사용하는 법 
// 선택적 타입
type Players = {
    name : Name,
    age? : Age
}

const nico4 : Players  = {
    name : "nico"
}

const lynn4 : Players = {
    name : "lynn"
}

// function return 타입 지정
function playerMaker(name:string) : Player {
    return {
        name:name
    }
}

const nico1 = playerMaker("nico")
nico1.age = 12;

// 화살표 함수로 쓰는법
const playerMaker2 = (name:string) : Player => ({name})
const nico2 = playerMaker2("nico2")
nico2.age = 12







////////////// Type of TS part two

// readonly 속성 타입 : 수정할 수 없음
type Player3 = {
    readonly name : Name
    age? : Age
}

const playerMaker3 = (name:string) : Player3 => ({name})
const nico3 = playerMaker3("nico3")
nico3.age = 12

const numbers : readonly number[] = [1,2, 3, 4]
// numbers.push(1) 불가

const names : readonly string[] = ["1", "2"]
// map, fill은 사용가능 변경시키지 않기 때문에



// Tuple 

// 아래와 같이 사용하면 갯수의 요소를 가져야하는 array를 지정할 수 있다
const player4 : readonly [string, number, boolean] = ["nico", 2, true]

// 선택적 타입은 undefinded가 될 수 있다
let a4 : undefined = undefined
let b4 : null = null

// any 타입 : typescirpt로부터 빠져나오고 싶을 때, 말그대로 아무 타입이나 될 수 있음을 의미 배열,string, 등등
// 웬만하면 사용하지 않을 것, any는 typescript의 보호장치를 모두 비활성화 시켜서 javascript 처럼 만들어버림
let c4 = []

// typescript설정에 any 사용을 막기위해 추가할 수 있는 몇가지 규칙
const array : any[] = [1,2,3,4]
const b44 : any = true

// 좋지않은 경우임
array + b44








///////////// typescript에만 존재하는 type : void, unknown

// 응답의 타입을 모르는 경우 사용하는 Unknown
// unknown을 사용할 경우 이 변수를 사용하기전 타입을 확인해하는 typesecipt의 보호
let a5 :unknown

if(typeof a5 === 'number') {
    let b = a5 +1
}

if(typeof a5 === "string") {
    let b = a5.toUpperCase();
}

// void 아무것도 return 하지 않느 경우를 말함, 자동으로 인식
function hello() {
    console.log('x')
}

const a6 = hello();
// a6.toUpperCase() return 값이 void 이기에 불가능


// never : 함수가 절대 return 하지 않을 때 발생함. 
// 예를들어 exception(예외)가 발생할 때를 말함
// return 하지 않고 오류를 발생시키는 함수
function hello2() : never {
    throw new Error("xxx")
}

function hello3(name:string|number) {
    if(typeof name === "string"){
        name
    } else if(typeof name === "number"){
        name
    } else {
        name
    }
} 