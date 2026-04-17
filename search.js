// 1. Tạo danh sách dữ liệu các trang web của bạn
const pages = [
    // Địa điểm
    { keywords: ["hồ gươm", "hoàn kiếm", "tháp rùa", "cầu thê húc", "đền ngọc sơn", "phố đi bộ"], url: "trang-dia-diem.html#diem-den-0" },
    { keywords: ["quảng trường ba đình", "lăng bác", "hồ chí minh", "hùng vương"], url: "trang-dia-diem.html#diem-den-1" },
    { keywords: ["văn miếu", "quốc tử giám", "khổng tử", "học thuật"], url: "trang-dia-diem.html#diem-den-2" },
    { keywords: ["nhà thờ lớn"], url: "trang-dia-diem.html#diem-den-3" },
    { keywords: ["nhà tù hỏa lò"], url: "trang-dia-diem.html#diem-den-4" },
    { keywords: ["phố sách", "đinh lễ"], url: "trang-dia-diem.html#diem-den-5" },
    { keywords: ["hồ tây"], url: "trang-dia-diem.html#diem-den-6" },
    { keywords: ["bảo tàng dân tộc học"], url: "trang-dia-diem.html#diem-den-7" },
    { keywords: ["phố cổ", "36 phố phường"], url: "trang-dia-diem.html#diem-den-8" },
    { keywords: ["nhà hát lớn"], url: "trang-dia-diem.html#diem-den-9" },
    { keywords: ["hoàng thành thăng long"], url: "trang-dia-diem.html#diem-den-10" },
    { keywords: ["con đường gốm sứ"], url: "trang-dia-diem.html#diem-den-11" },
    { keywords: ["bảo tàng lịch sử quân sự"], url: "trang-dia-diem.html#diem-den-12" },
    { keywords: ["phố phan đình phùng"], url: "trang-dia-diem.html#diem-den-13" },
    // Ẩm thực
    { keywords: ["phở", "phở hà nội"], url: "ẩm thực.html" },
    { keywords: ["bún thang"], url: "ẩm thực.html" },
    { keywords: ["bún riêu"], url: "ẩm thực.html" },
    { keywords: ["chả cá", "chả cá lã vọng"], url: "ẩm thực.html" },
    { keywords: ["chả rươi"], url: "ẩm thực.html" },
    { keywords: ["bún chả"], url: "ẩm thực.html" },
    { keywords: ["cháo sườn"], url: "ẩm thực.html" },
    { keywords: ["bánh cuốn"], url: "ẩm thực.html" },
    { keywords: ["bánh giò"], url: "ẩm thực.html" },
    { keywords: ["bánh gối"], url: "ẩm thực.html" },
    { keywords: ["bánh mì"], url: "ẩm thực.html" },
    { keywords: ["kem tràng tiền"], url: "ẩm thực.html" },
    { keywords: ["chè"], url: "ẩm thực.html" },
    { keywords: ["cốm", "cốm làng vòng"], url: "ẩm thực.html" },
    { keywords: ["cà phê", "cà phê trứng"], url: "ẩm thực.html" },
    // Lịch sử văn hóa
    { keywords: ["thành cổ loa", "văn hóa đông sơn"], url: "lịch sử và văn hóa.html" },
    { keywords: ["dời đô", "lý thái tổ"], url: "lịch sử và văn hóa.html" },
    { keywords: ["văn miếu", "quốc tử giám"], url: "lịch sử và văn hóa.html" },
    { keywords: ["thăng long lý trần"], url: "lịch sử và văn hóa.html" },
    { keywords: ["lê sơ nho học"], url: "lịch sử và văn hóa.html" },
    { keywords: ["36 phố phường"], url: "lịch sử và văn hóa.html" },
    { keywords: ["lễ hội"], url: "lịch sử và văn hóa.html" },
    { keywords: ["pháp thuộc"], url: "lịch sử và văn hóa.html" },
    { keywords: ["cách mạng tháng 8"], url: "lịch sử và văn hóa.html" },
    { keywords: ["giải phóng thủ đô"], url: "lịch sử và văn hóa.html" },
    { keywords: ["thành phố hòa bình"], url: "lịch sử và văn hóa.html" },
    { keywords: ["đại lễ 1000 năm"], url: "lịch sử và văn hóa.html" },
    { keywords: ["hà nội hội nhập"], url: "lịch sử và văn hóa.html" },
];


const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');


// 2. Hàm xử lý tìm kiếm toàn cục + scroll to section
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
   
    if (query === "") {
        alert("Nhập từ khóa tìm kiếm!");
        return;
    }


    const result = pages.find(page =>
        page.keywords.some(keyword => keyword.includes(query) || query.includes(keyword))
    );


    if (result) {
        // Redirect + scroll to specific section
        window.location.href = result.url;
        // JS scroll after load
        setTimeout(() => {
            const element = document.querySelector(result.url.split('#')[1]);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    } else {
        alert(`Không tìm thấy "${query}". Gợi ý: phở, hồ gươm, văn miếu, bún thang...`);
    }
}


// 3. Lắng nghe sự kiện nhấn Enter
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});


// 4. Lắng nghe sự kiện click vào icon kính lúp
searchBtn.addEventListener('click', performSearch);

