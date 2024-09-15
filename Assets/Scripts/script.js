// Typewriter effect

// const texts = ["Small Forward","Rapper","Student"];

// let speed = 100;
// const textElements = document.querySelector(".typewriter-text");
// let textIndex = 0;
// let charcterIndex = 0;

// function typeWriter() {
//     if (charcterIndex < texts[textIndex].length){
//         textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
//         charcterIndex++;
//         setTimeout(typeWriter, speed);
//     }
//     else{
//         setTimeout(eraseText, 1000);
//     }
// }

// function eraseText() {
//     if(textElements.innerHTML.length > 0){
//         textElements.innerHTML = textElements.innerHTML.slice(0,-1);
//         setTimeout(eraseText,50)
//     }
//     else{
//         textIndex = (textIndex + 1) % texts.length;
//         charcterIndex = 0;
//         setTimeout(typeWriter, 500)
//     }
// }

// window.onload = typeWriter

// Nav animation
function showNav() {
  const nav = document.querySelector(".nav");
  const logo = document.querySelector(".hero img");
  const navItems = document.querySelectorAll(".nav ul li");

  nav.classList.toggle("active"); // Hiển thị hoặc ẩn menu

  if (nav.classList.contains("active")) {
    logo.classList.add("hidden"); // Ẩn logo khi menu xuất hiện

    // Hiển thị từng mục trong thanh nav từ trên xuống
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 600); // Điều chỉnh thời gian delay giữa các mục (200ms)
    });
  } else {
    logo.classList.remove("hidden"); // Hiển thị logo khi menu bị ẩn

    // Ẩn tất cả các mục trong thanh nav
    navItems.forEach((item) => {
      item.classList.remove("show");
    });
  }
}

// Animation Artists
document.addEventListener("DOMContentLoaded", function () {
  const transitionVideo = document.getElementById("transitionVideo");

  // Thêm sự kiện khi người dùng nhấp vào link đến trang "Artists"
  document
    .querySelector('a[href="./artists.html"]')
    .addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

      // Hiển thị video chuyển tiếp
      transitionVideo.style.display = "block";

      // Phát video và sau khi kết thúc sẽ chuyển trang
      transitionVideo.play();

      transitionVideo.onended = function () {
        window.location.href = "./artists.html"; // Chuyển hướng đến trang "Artists" sau khi video kết thúc
      };
    });
});
