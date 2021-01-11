function firstLastKnum(arr){
    let k = arr.shift();
    let firstKElements = arr.slice(0, k);
    let lasttKElements = arr.slice(arr.length - k, arr.length);

    console.log(firstKElements.join(' '));
    console.log(lasttKElements.join(' '));

}
firstLastKnum([3,
    6, 7, 8, 9]
   
    )