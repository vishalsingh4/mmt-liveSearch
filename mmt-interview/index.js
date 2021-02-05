// console.log('a')
// console.log('b')
// setTimeout(()=> console.log('c'), 0) -- eventQueue - 0
// for (let i = 0; i < 5; i++){console.log('i')}
// const abc = new Promise((resolve, reject) => {resolve('d')});
// abc.then((a) => console.log(a));
// setTimeout(()=> console.log('e'), 2000) -- eQ - 2000
// console.log('f')
// for (let i = 0; i < 5; i++){setTimeout(()=> console.log('g + ', i), 1000)} -- eq - 1000

// // a
// // b
// // 0 --> 4
// // d
// // f
// // c
// // g0 --> 4
// // e

// console.log(3 > 2 > 1) --> false
// console.log(1 > 2 > 1) --> false

// const arr = [1,0,0,3];

// const testFn = arr => {
//     let sum = 0;
//     let result = false;
//     for(let i =0; i< arr.length; i++) {
//         sum=0;
//         for(let j=i; j < arr.length; j++) {
//             sum += arr[j];
//             if(!sum) {
//                 result = true;
//             }
//         }
//     }
//     return result;
// };

// const testFn2 = arr => {

// let min = 0;
//   for(let i=0; i< arr.length; i++) {
//       if((Math.abs(arr[i-1] + arr[i])) <= min) {
//           swap //
//       }
//   }
// }

// console.log(testFn(arr));


// useState --> useEffect --> 
// . 
// useComponentWillMount = fn => {
//     // const val = useRef(true);

//     // if(val.current) fn();

//     // val.current = false;

//     useMemo(fn(), []);
// }

// componentDidMount => useEffect(() => {});

// shouldComponentUpdate => 


// const functionCOmp  = props => {
//     return <div> test</div>;
// };

// const WrapperComp = React.useMemo(functionCOmp, comparatorFn(prevProps, nexProps));

// useEffect(() => {

//     return () => {
//         // unsubscribe
//     }
// }, [a,b,c]);

// useCallback(() => fn(), []);
