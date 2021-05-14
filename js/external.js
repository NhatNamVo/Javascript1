// // console.log('thế éo nào!!');
// // document.write('this is my website');
// // window.alert('oh');
// // window.print()

// // 1. nguyên tắc đặt tên biến là không được đặt bằng số, ký tự đặt biệt ngoài trừ dấu gạch dưới
// // 2. không đặt tên biến trùng với tên function hoặc element của javascript
// // 3. Đặt tên biến có ý nghĩa
// // biến trong javascript
// // 4. đặt tên biến theo kiểu camelCase
// // ví dụ: var hiMan = 1;
// var bienA = 1;
// document.write(bienA);
// // kiểu dữ liệu dạng số:
// // kiểu khai báo biến:
// var number=1;
// document.write(number)
// // nếu kiểu dữ liệu là String
// var st = 'Tên của bạn';
// document.write(typeof st);
// // typeof: kiểm tra kiểu dữ liệu của biến
// // kiểu yes/No
// var gioitinh = true; 
// var gioitinh= false;

// // kiểu Null
// var loop = null
// //  kiểu undefined 
// // tạo ra một biến không gián giá trị cho nó
// var chieucao;

// // dynamic type: có thể gán nhiều kiểu dữ liệu khác nhau cho một biến

// // II. CÁc toán tử
// var a=1;
// var b=2;
// var sum=a+b;
// var minus=a-b;
// var nhan=a*b;
// var div=a/b;
// var Exp=a**b; //lũy thừa
// var modulus=a%b;// lấy phần dư
// console.log(sum);
// console.log(minus);
// console.log(nhan);
// console.log(div);
// console.log(Exp);
// console.log(modulus);
// // ngoài phép + thì các phép tính còn lại đều có giá trị number

// // Tăng giá trị
// a++;
// console.log(a);

// // giảm giá trị
// b--;
// console.log(b);

// // var kq=--a: thực hiện trừ xong rồi mới gán.
// // var kq=a--: thực hiện gán rồi mới thực hiện toán tử sau.

// // III. Hằng số
// // 1. không thể gán giá trị mới cho nó
// // 2. Hằng số phải có giá trị đầu
// const NAM_SINH=1995;
// console.log(NAM_SINH);

// // IV. Mô hình ba khối:

//     // input-->Xử lý dữ liệu --> output
//     // tính tổng 2 số a,b
//     var a;b;
//     a=parseInt(prompt("nhap a"));
//     b=parseInt(prompt("nhap b"));
//     var sum=a+b;
//     console.log(sum);

// Bài tập:
// 1. Tính chiều dài cạnh huyền tam giác vuông. 
// var a=parseFloat(prompt("Nhập chiều dài cạnh góc vuông thứ 1:"));
// var b=parseFloat(prompt("Nhập chiều dài cạnh góc vuông thứ 2:"));
// var kq=Math.sqrt(a*a+b*b);
// window.alert("chiều dài cạnh huyền: "+ kq);

// 2. Tính số tiền từ thiện và tiền còn lại

const PHIM_NAME= "LAT MAT 49H";
const Adult_TicPrice=90000;
const Chil_TicPrice=45000;
var Adult_TicketCount=parseInt(prompt("Adult Ticket Count:"));
var child_TicketCount=parseInt(prompt("Children Ticket Count:"));
var Tuthien=parseInt(prompt("% Quyen gop:"));
Tuthien/=100;
var Tongdanhthu=(Adult_TicPrice*Adult_TicketCount)+(Chil_TicPrice*child_TicketCount);
var tientuthien=Tuthien*Tongdanhthu;
var tienconlai=Tongdanhthu-tientuthien;
// window.alert("Tien tu thien:" + tientuthien);
// window.alert("Tien con lai: "+ tienconlai);
document.writeln("Tong danh thu:" + Tongdanhthu);
document.write("<br><br>")
document.writeln("Tien tu thien:" + tientuthien);
document.write("<br><br>")
document.writeln("Tien con lai: "+ tienconlai);
