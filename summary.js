function sumArray(arr) {
    try {
        if (sumArray == "undefined" || sumArray == null) {
            return 0
        } else if (typeof arr != "object") {
            return 0
        }
        else if (arr.length === 0) {
            return 0
        } else {
            let ans = 0
            for (let i = 0; i < arr.length; i++) {
                ans += arr[i]
            }
            return ans
        }
    } catch (error) {
        return 0
    }
}

console.log(sumArray([1,2,3]))