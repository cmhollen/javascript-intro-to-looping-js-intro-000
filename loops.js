function forLoop(arr){
  for(var i = 1; i < 25; i++){
    if(i === 1){
      arr += 'I am 1 strange loop.';
    } else {
      arr += `I am ${i} strange loops.`
    }
    return arr;
  }
}