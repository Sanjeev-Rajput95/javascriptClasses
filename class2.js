class Palin {
    static pyramid(n) {
        let string = "";
        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                string += "*";

            }
            string += "\n";
        }
        for (let i = 1; i <= n - 1; i++) {
            for (let j = 0; j < n - i; j++) {
                string += "*";
            }
            string += "\n";
        }
        console.log(string);

    }

    static arr1() {
        let arr1 = [0, -1, 2, -3, 1]
        for (let i = 0; i < arr1.length; i++) {
            if (i == arr1.length - 2) {
                let temp = arr1[arr1.length - 2] + arr1[arr1.length - 1] + arr1[0];
                if(temp == 0) {
                    console.log("the sum of zero of triplet is  =",arr1[arr1.length - 2] , arr1[arr1.length - 1] , arr1[0])

                }
                
            }
            if (i == arr1.length - 1) {
                let temp = arr1[arr1.length - 1] + arr1[0] + arr1[1];
                if(temp == 0) {
                    console.log(arr1[ "the sum is zero of triplet =", arr1.length - 1] , arr1[0] , arr1[1])
                }
                
            }
            let temp = arr1[i] + arr1[i + 1] + arr1[i + 2];
            if (temp == 0) {

                console.log("The triplet is that sum zero  ", arr1[i], arr1[i + 1], arr1[i + 2])
            }
        }

    }

    static arr2 () {
        let arr2 = [0, -1, 2, -3, 1]
        for (let i = 0; i < arr2.length; i++) {
            if (i == arr2.length - 2) {
                let temp = arr2[arr2.length - 2] + arr2[arr2.length - 1] + arr2[0];
                if(temp == 0) {
                    console.log("the sum of not zero of triplet is  =",arr2[arr2.length - 2] , arr2[arr2.length - 1] , arr2[0])
                }
                
            }
            if (i == arr2.length - 1) {
                let temp = arr2[arr2.length - 1] + arr2[0] + arr2[1];
                if(temp == 0) {
                    console.log(arr2[ "the sum is not  zero of triplet =", arr2.length - 1] , arr2[0] , arr2[1])

                }
                
            }
            let temp = arr2[i] + arr2[i + 1] + arr2[i + 2];
            if (temp != 0) {

                console.log("The triplet is that sum not zero  ", arr2[i], arr2[i + 1], arr2[i + 2])
            }
        }

    }
    // this is a one way of assigning a value



}
module.exports = {
    Palin
}
