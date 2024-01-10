let a = 5;
let b = "5";
console.log(a == b); // so sánh ko quan tâm đến kiểu dữ liệu
console.log(a === b);// so sánh cả kiểu dữ liệu
console.log(a != b);  //  so sánh ko quan tâm đến kiểu dữ liệu
console.log(a !== b);// so sánh cả kiểu dữ liệu

let result = ++a + a + a++ + ++a + a;
console.log(result);
// (++a) giá trị của a đc tăng lên sau khi kết thúc câu lệnh
// (a++)  giá trị của a đc tăng lên ngay lập tức