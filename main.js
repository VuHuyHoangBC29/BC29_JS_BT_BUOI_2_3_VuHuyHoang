//Bai 1: Tinh luong nhan vien
/**
 * -Dau vao:
 *  +Luong_1_ngay: 100000
 *  +So_ngay_lam: 
 * 
 * -Xu ly:
 *  +Luong = Luong_1_ngay * So_ngay_lam
 * 
 * -Dau ra:
 *  +Luong.
 */
document.getElementById("btnTL").onclick = function () {
    var soNgayLam = document.getElementById("SNL").value * 1;
    var tinhLuong = soNgayLam * 100000;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var ketQuaBai1 = "Tiền lương là: " + currentFormat.format(tinhLuong);
    document.getElementById("footerTL").innerHTML = ketQuaBai1;
}

//Bai 2: Tinh gia tri trung binh cua 5 so thuc
/**
 * -Dau vao:
 *  +5 so thuc: A, B, C, D, E.
 * 
 * -Xu ly:
 *  +Gia tri trung binh = (A + B + C + D + E)/5
 * 
 * -Dau ra:
 *  +Gia tri trung binh.
 */
document.getElementById("btnGTTB").onclick = function () {
    var soThu1 = document.getElementById("soThu1").value * 1;
    var soThu2 = document.getElementById("soThu2").value * 1;
    var soThu3 = document.getElementById("soThu3").value * 1;
    var soThu4 = document.getElementById("soThu4").value * 1;
    var soThu5 = document.getElementById("soThu5").value * 1;
    var GTTB = (soThu1 + soThu2 + soThu3 +soThu4 + soThu5)/5;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var ketQuaBai2 = "Giá trị trung bình của 5 số thực là: " + currentFormat.format(GTTB);
    document.getElementById("footerGTTB").innerHTML = ketQuaBai2;
}

//Bai 3: Quy doi tien
/**
 * -Dau vao:
 *  +Gia tri USD hien tai: 23500
 *  +So tien USD
 * 
 * -Xu ly:
 *  +Quy doi USD ra VND = Gia tri USD hien tai * So tien USD
 * 
 * -Dau ra:
 *  +So tien VND sau khi quy doi.
 */
document.getElementById("btnQuyDoi").onclick = function () {
    var USD = document.getElementById("USD").value * 1;
    var VND = USD * 23500;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var ketQuaBai3 = "Số tiền quy đổi ra VND là: " + currentFormat.format(VND);
    document.getElementById("footerQuyDoi").innerHTML = ketQuaBai3;
}


//Bai 4: Tinh dien tich, chu vi hinh chu nhat
/**
 * -Dau vao:
 *  +Chieu dai HCN.
 *  +Chieu rong HCN.
 * 
 * -Xu ly:
 *  +Dien tich HCN = Chieu dai HCN * Chieu rong HCN
 *  +Chu vi HCN = (Chieu dai HCN + Chieu rong HCN)*2
 * 
 * -Dau ra:
 *  +Dien tich HCN
 *  +Chu vi HCN
 */
document.getElementById("btnCVDT").onclick = function () {
    var cdHCN = document.getElementById("cdHCN").value * 1;
    var crHCN = document.getElementById("crHCN").value * 1;
    var dtHCN = cdHCN * crHCN;
    var cvHCN = (cdHCN + crHCN) * 2;
    // var ketQuaBai4 = "Chu vi HCN là: " + cvHCN + "</br> Diện tích HCN là: " + dtHCN;
    var ketQuaBai4 = "";
    ketQuaBai4 += "<p>Chu vi HCN la: " + cvHCN + "</p>";
    ketQuaBai4 += "<p>Dien tich HCN la: " + dtHCN + "</p>";
    document.getElementById("footerCVDT").innerHTML = ketQuaBai4;
}

//Bai 5: Tinh tong 2 ky so
/**
 * -Dau vao:
 *  +So co 2 chu so
 * 
 * -Xu ly:
 *  +Tach lay hang chuc: Math.floor(n/10)
 *  +Tach lay hang don vi: n%10
 *  +Hang chuc + hang don vi
 * 
 * -Dau ra:
 *  +Show ket qua 
 */
document.getElementById("btnKySo").onclick = function () {
    var n = document.getElementById("so2KySo").value * 1;
    var hangChuc = Math.floor(n/10);
    var hangDonVi = n%10;
    var tong2KySo = hangChuc + hangDonVi;
    var ketQuaBai5 = "Tổng 2 ký số là: " + tong2KySo;
    document.getElementById("footerKySo").innerHTML = ketQuaBai5;
}
