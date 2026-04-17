// Lấy dữ liệu từ Form
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;
const fullname = document.querySelector('#fullname').value;


// 1. Tạo tài khoản trên Authentication
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      const user = userCredential.user;
      // 2. Lưu tên người dùng vào Realtime Database bằng ID của họ
      firebase.database().ref('users/' + user.uid).set({
          fullname: fullname,
          email: email
      });
      alert("Đăng ký thành công!");
      window.location.href = "login.html";
  })
  .catch((error) => {
      alert("Lỗi: " + error.message);
  });


