
let demo = {
    // 和值加和合
    Sumsum: function (a, b, c, d, e, f) {
        let tol = a + b + c + d + e + f
        let getbai = (a + b + c + d + e + f) / 100
        let getshi = (a + b + c + d + e + f) / 10
        // console.log(tol)
        let bai = parseInt(getbai) % 10;
        let shi = parseInt(getshi) % 10;
        let ge = tol % 10;
        // console.log(tol + bai + shi + ge)
        let getallyu = (tol + bai + shi + ge) % 33
        let getallshang = (tol + bai + shi + ge) / 33
        var num1 = parseInt(getallyu); //取余
        var num2 = parseInt(getallshang); //取商
        return {
            msg: "和值加和合",
            data: [num2, num1, (num1 - num2), (num1 + num2)]
        }
    },
    Sumvalueplustailsum: function (a, b, c, d, e, f) {
        let tol = a + b + c + d + e + f + a % 10 + b % 10 + c % 10 + d % 10 + e % 10 + f % 10
        let getyu = (a + b + c + d + e + f + a % 10 + b % 10 + c % 10 + d % 10 + e % 10 + f % 10) % 33
        let getshang = (a + b + c + d + e + f + a % 10 + b % 10 + c % 10 + d % 10 + e % 10 + f % 10) / 33
        var num1 = parseInt(getyu); //取余
        var num2 = parseInt(getshang); //取商
        // console.log("商"+num2); 
        // console.log("余"+num1); 
        // console.log("和值加尾和" + num2 + "/" + num1 + "=>" + (num1 - num2) + "/" + (num1 + num2))
        return {
            msg: "和值加尾和",
            data: [num2, num1, (num1 - num2), (num1 + num2)]
        }
    },
    Summinuspolespacing: function (a, b, c, d, e, f) {
        let tol = (a + b + c + d + e + f) - (f - a)
        let getyu = ((a + b + c + d + e + f) - (f - a)) % 33
        let getshang = ((a + b + c + d + e + f) - (f - a)) / 33
        var num1 = parseInt(getyu); //取余
        var num2 = parseInt(getshang); //取商
        // console.log("和值减极间距" + num2 + "/" + num1 + "=>" + (num1 - num2) + "/" + (num1 + num2))
        return {
            msg: "和值减极间距",
            data: [num2, num1, (num1 - num2), (num1 + num2)]
        }
    },



    ACsumvalue: function (a, b, c, d, e, f) {
        function getSumvalue(a, b, c, d, e, f) {
            let tol = a + b + c + d + e + f
            return tol
        }
        let sumvalue = getSumvalue(a, b, c, d, e, f)
        // console.log("和值" + sumvalue)

        function getHehe(sumvalue) {

            let getbaiwei = sumvalue / 100
            var baiwei = parseInt(getbaiwei);
            //6.54取整 得到百位6
            let getshiwei = (sumvalue % 100) / 10
            var shiwei = parseInt(getshiwei);
            //num%10  得到的是54，然后/10取整 得到的是十位5
            let getgewei = sumvalue % 10
            var gewei = parseInt(getgewei);
            //num%10  得到的是4，模10取余;

            var zong = parseInt(baiwei) + parseInt(shiwei) + parseInt(gewei)
            let zongqian = (zong % 100) / 10
            let zonghou = zong % 10
            if (zong >= 10) {
                return parseInt(zongqian) + parseInt(zonghou)

            } else {
                return zong
            }
        }

        let hehe = getHehe(sumvalue)
        // console.log("何合" + hehe);

        function getAc(a, b, c, d, e, f) {
            let num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15
            num1 = b - a
            num2 = c - a
            num3 = d - a
            num4 = e - a
            num5 = f - a
            num6 = c - b
            num7 = d - b
            num8 = e - b
            num9 = f - b
            num10 = d - c
            num11 = e - c
            num12 = f - c
            num13 = e - d
            num14 = f - d
            num15 = f - e
            var arr = []
            // var brr = [1, 2, 1, 56, 5, 6, 6, 8, 78, 8, 10]
            arr.push(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15)
            // console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15)
            // console.log(arr)
            function newArr(arr) {
                for (var i = 0; i < arr.length; i++) {
                    for (var j = i + 1; j < arr.length; j++) {
                        if (arr[i] == arr[j]) {
                            //如果第一个等于第二个，splice方法删除第二个
                            arr.splice(j, 1);
                            j--;
                        }
                    }
                }
                return arr;
            }
            var beforac = newArr(arr).length
            return beforac - (6 - 1)
        }
        let ac = getAc(a, b, c, d, e, f)
        // console.log("AC值=" + ac)
        function getTailsum(a, b, c, d, e, f) {
            let anum = a % 10
            let bnum = b % 10
            let cnum = c % 10
            let dnum = d % 10
            let eenum = e % 10
            let fnum = f % 10
            return parseInt(anum) + parseInt(bnum) + parseInt(cnum) + parseInt(dnum) + parseInt(eenum) + parseInt(fnum)
        }
        let tailsum = getTailsum(a, b, c, d, e, f)
        // console.log("尾和" + tailsum)
        function getlast(sumvalue, hehe, ac, tailsum) {
            let k = sumvalue + hehe + ac + tailsum
            let getNum = k / 33
            var Num = parseFloat(getNum);
            var result = "";
            var a = Math.floor(Num);
            let getb = k % 33
            var b = parseInt(getb);
            result = "AC和值和合" + a + "/" + b + "=>" + (b - a) + "/" + (b + a);
            // return result;
            return {
                msg: "AC和值和合",
                data: [a, b, (b - a), (b + a)]
            }
        }
        return getlast(sumvalue, hehe, ac, tailsum)
    }

}

export default demo;
