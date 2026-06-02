function fun(num) {
    if (num < 1) {
        return;
    }
    console.log(num);
    num = num - 1;
    fun(num);
}

let number = 5;
fun(number);