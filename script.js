// Giữ nguyên phần firebaseConfig của bạn ở trên
var firebaseConfig = {
  apiKey: "AIzaSyC7JuajBmEX_wEWQmEYWzW0QhBA1PSSrGM",
  authDomain: "go-hanoi.firebaseapp.com",
  databaseURL: "https://go-hanoi-default-rtdb.firebaseio.com",
  projectId: "go-hanoi",
  storageBucket: "go-hanoi.firebasestorage.app",
  messagingSenderId: "459668307615",
  appId: "1:459668307615:web:8a1ca0c60e896efe042caa",
  measurementId: "G-547Z5GQWSK"
};
firebase.initializeApp(firebaseConfig);


$(document).ready(function() {
    var database = firebase.database();


    /* DEPRECATED: Insecure DB register - Use auth.js + Firebase Auth instead
    $(".btn-create-account").click(function() { // Giả sử nút "Tạo tài khoản" có class này
        var fullName = $("#name-input").val();      // Ô Họ và tên
        var email    = $("#email-input").val();     // Ô Email
        var password = $("#pass-input").val();      // Ô Mật khẩu
        var confirm  = $("#confirm-input").val();   // Ô Xác nhận mật khẩu


        // Kiểm tra cơ bản
        if (password !== confirm) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }


        // Lưu thông tin vào Realtime Database
        // Lưu ý: Trong thực tế nên dùng Firebase Auth để bảo mật hơn
        var userId = email.replace(/\./g, '_'); // Đổi dấu '.' thành '_' vì Firebase key không nhận dấu chấm
       
        database.ref('users/' + userId).set({
            fullName: fullName,
            email: email,
            password: password, // Chỉ nên dùng cho bài tập, thực tế không nên lưu pass trực tiếp
            createdAt: new Date().toISOString()
        }).then(function() {
            alert("Đăng ký thành công tài khoản cho: " + fullName);
            window.location.href = "trachu.html"; // Chuyển sang trang đăng nhập
        }).catch(function(error) {
            console.error("Lỗi: ", error);
        });
    });
    */


    /* DEPRECATED: Insecure DB login - Use auth.js + Firebase Auth instead
    $(".btn-login").click(function() { // Nút Đăng nhập
        var loginEmail = $("#login-email").val();
        var loginPass  = $("#login-pass").val();
        var userId = loginEmail.replace(/\./g, '_');


        database.ref('users/' + userId).once('value', function(snapshot) {
            var userData = snapshot.val();
            if (userData && userData.password === loginPass) {
                alert("Chào mừng " + userData.fullName + " trở lại Go Hanoi!");
                window.location.href = "trachu.html"; // Vào trang chủ
            } else {
                alert("Email hoặc mật khẩu không chính xác!");
            }
        });
    });
    */
});



