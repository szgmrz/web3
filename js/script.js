// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 案例筛选功能
    const filterButtons = document.querySelectorAll('#portfolioFilter .nav-link');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 移除所有按钮的active类
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // 为当前点击的按钮添加active类
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // 显示或隐藏案例项目
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // 联系表单提交
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // 这里可以添加表单验证
            
            // 模拟提交成功
            alert('感谢您的留言！我们会尽快与您联系。');
            this.reset();
        });
    }
    
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});