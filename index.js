function countZeros(A) {
    var zeros = []
    for(var i = 0; i <A.length; i ++){
        if(A[i] === 0) {
        zeros.push(A[i])
    }
}
console.log(zeros.length)
}
countZeros([1, 0, 5, 6, 0, 2])