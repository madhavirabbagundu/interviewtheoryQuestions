function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")
    var n = input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var out = reverse(n,arr)
  }
  function reverse(n,arr){
      var out = ''
      for(var i = n-1; i>= 0; i--){
          out+=arr[i]+ " "
      }
      console.log(out)
  }
  
  
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  