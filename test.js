 // 🔄 تهيئة مكتبة AOS (Animate On Scroll) للحركات عند التمرير
AOS.init({
    duration: 500, // ⏱️ مدة الحركة (بالملي ثانية)
    once: true,    // ✅ تخلي الحركة تصير مرة وحدة فقط وقت يظهر العنصر لأول مرة
});


// 📨 لوجيك فتح/غلق feedback modal box
document.addEventListener('DOMContentLoaded', function () {
    var feedbackBtn = document.getElementById('feedbackBtn'); // 🎯 زر فتح feedback
    var feedbackBox = document.getElementById('feedbackBox'); // 📦 المربع متاع feedback
    var closeBtn = document.getElementById('closeBtn');       // ❌ زر الغلق

    // 🔘 وقت نضغط على feedbackBtn: نوري feedbackBox و نخفي الزر
    feedbackBtn.onclick = function () {
        feedbackBox.classList.toggle('hidden'); // 👁️ تبديل ظهور feedback box
        feedbackBtn.classList.toggle('hidden'); // 🙈 إخفاء الزر بعد الضغط
    };

    // ❌ وقت نضغط على زر الغلق نرجع نخفي feedbackBox و نظهر الزر
    closeBtn.onclick = function () {
        feedbackBox.classList.add('hidden');       // 📴 إخفاء feedback
        feedbackBtn.classList.remove('hidden');    // 🔘 إظهار الزر من جديد
    };
});


// ❓ تشغيل accordion في قسم الأسئلة المتكررة (FAQ)
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement; // 📦 العنصر الأب فيه السؤال والجواب
        faqItem.classList.toggle('active');   // 🔃 تفعيل أو تعطيل العرض عبر toggle class
    });
});


// 🧭 Smooth scroll: تنقّل ناعم عند الضغط على روابط داخل الصفحة
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // ⛔ نمنع التنقل العادي

        const targetId = this.getAttribute('href');              // 🎯 نجيب id من href
        const targetElement = document.querySelector(targetId); // 🏁 نلقاو العنصر الهدف

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // 👣 تنقّل ناعم
                block: 'start'      // 📍 يخلي الهدف يطلع فوق
            });
        }
    });
});


// 📱 تشغيل القائمة المنسدلة في وضع الجوال
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle'); // ☰ زر الفتح
    const mobileMenu = document.getElementById('mobileMenu'); // 📃 قائمة الهاتف

    // 🔁 كل مرة نضغط، نبدّل حالة ظهور القائمة
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden'); // 🔃 إظهار/إخفاء القائمة
    });
});


// 📸 تهيئة Swiper.js للكاروسيل / السلايدر
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,       // 1️⃣ نعرض سلايد وحدة في كل مرّة
    spaceBetween: 10,       // ↔️ تباعد 10px بين السلايدات
    navigation: {
        nextEl: '.swiper-button-next', // ⏩ زر السلايد التالي
        prevEl: '.swiper-button-prev', // ⏪ زر السلايد السابق
    },
    pagination: {
        el: '.swiper-pagination',  // 🔵 النقاط أسفل السلايدر
        clickable: true,           // ✅ يمكن الضغط عليهم للتنقل
    },
});


// 🎬 تهيئة مكتبة WOW.js للحركات المتقدمة عند التمرير
new WOW().init(); // ✅ تشغيل WOW


// 🧩 تفعيل أيقونات Feather (تتحول من <i data-feather=""> إلى SVG)
feather.replace(); // 🎨 تحويل الأيقونات


// 💬 تفعيل Bootstrap Tooltips (نصوص توضيحية عند hover)
$(function () {
    $('[data-toggle="tooltip"]').tooltip(); // 🧠 أي عنصر فيه data-toggle="tooltip" يظهر فيه نص توضيحي
});
// 📅 تهيئة مكتبة Flatpickr لاختيار التواريخ
flatpickr('.datepicker', {
    dateFormat: 'Y-m-d', // 📅 تنسيق التاريخ
    locale: {
        firstDayOfWeek: 1 // 📅 بداية الأسبوع يوم الإثنين
    }
});
// 🖼️ تهيئة مكتبة Lightbox لعرض الصور بشكل جميل
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});
// 🔄 تهيئة مكتبة Isotope لترتيب العناصر
var iso = new Isotope('.grid', {
    itemSelector: '.grid-item', // 📦 العنصر اللي نرتبوه
    layoutMode: 'fitRows',       // 📏 ترتيب العناصر في صفوف
});
// 🔄 تهيئة مكتبة Magnific Popup لعرض الصور والنصوص في نافذة منبثقة
$('.popup-link').magnificPopup({
    type: 'inline',
    midClick: true // يسمح بفتح النافذة المنبثقة عند الضغط على زر الماوس الأوسط
});
