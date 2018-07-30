function forLoop(arr){
  var arr = [];
  var loop;
  for(var i = 0; i < 25; i++){
    if(i === 1){
      loop = 'I am 1 strange loop.';
    } else {
      loop = `I am ${i} strange loops.`
    }
      arr += loop;
      return arr;
  }

}
