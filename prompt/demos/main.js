document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // 阻止表单默认提交行为
      
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      
      const username = usernameInput.value;
      const password = passwordInput.value;
      
      if (!username || !password) {
        alert('用户名和密码不能为空');
        return;
      }
      
      // 在此处进行登录逻辑处理，可以向后端发送登录请求等
      // ...
      
      alert('登录成功！');
    });
  });
  