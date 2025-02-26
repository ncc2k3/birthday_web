// // Import the data to customize and insert them into page
// const fetchData = () => {
//   fetch("customize.json")
//     .then(data => data.json())
//     .then(data => {
//       dataArr = Object.keys(data);
//       dataArr.map(customData => {
//         if (data[customData] !== "") {
//           if (customData === "imagePath") {
//             document
//               .querySelector(`[data-node-name*="${customData}"]`)
//               .setAttribute("src", data[customData]);
//           } else {
//             document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
//           }
//         }

//         // Check if the iteration is over
//         // Run amimation if so
//         if ( dataArr.length === dataArr.indexOf(customData) + 1 ) {
//           animationTimeline();
//         } 
//       });
//     });
// };
// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .querySelector(`[data-node-name*="${customData}"]`)
              .setAttribute("src", data[customData]);
          } else {
            document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
          }
        }
      });
    });
};

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Run fetch and animation in sequence
fetchData();

document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('overlay');
  const lightBtn = document.getElementById('lightBtn');
  const decorateBtn = document.getElementById('decorateBtn');
  const musicBtn = document.getElementById('musicBtn');
  const startBtn = document.getElementById('startBtn');
  const container = document.querySelector('.container');
  const music = document.getElementById('birthdayMusic');

  // Xử lý nút "Bật Đèn"
  lightBtn.addEventListener('click', function() {
    document.body.style.background = 'white'; // Đổi màu nền body thành trắng
    document.body.classList.add('lights-on'); // Thêm class để đổi màu chữ nút
    overlay.style.background = 'transparent'; // Làm overlay trong suốt
    lightBtn.style.display = 'none'; // Ẩn nút "Bật Đèn"
    decorateBtn.style.display = 'block'; // Hiện nút "Trang Trí"
});

decorateBtn.addEventListener('click', function() {
  // Hiển thị ruy băng
  document.querySelector('.ribbon.left').style.display = 'block';
  document.querySelector('.ribbon.right').style.display = 'block';

  // Tạo hiệu ứng lấp lánh
  for (let i = 0; i < 50; i++) {
    let sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(sparkle);
    // Xóa sparkle sau khi animation hoàn tất để tránh tích lũy
    setTimeout(() => sparkle.remove(), 2000);
  }

  // Hiệu ứng confetti
  confetti({
    particleCount: 200, // Tăng số lượng hạt
    spread: 100,
    colors: ['#ff0066', '#00ffcc', '#ffcc00', '#FFD700', '#C0C0C0'], // Thêm vàng và bạc
    origin: { y: 0.6 },
    angle: 90,
    drift: 1,
  });

  // Thêm hiệu ứng rung nhẹ cho overlay
  overlay.style.transition = 'transform 0.1s';
  overlay.style.transform = 'scale(1.05)';
  setTimeout(() => {
    overlay.style.transform = 'scale(1)';
  }, 100);

  decorateBtn.style.display = 'none';
  musicBtn.style.display = 'block';
});

  // Xử lý nút "Bật Nhạc"
  musicBtn.addEventListener('click', function() {
    music.play(); // Phát nhạc
    musicBtn.style.display = 'none'; // Ẩn nút "Bật Nhạc"
    startBtn.style.display = 'block'; // Hiện nút "Bắt Đầu"
  });

  // Xử lý nút "Bắt Đầu"
  startBtn.addEventListener('click', function() {
    overlay.style.display = 'none'; // Ẩn overlay
    container.style.display = 'block'; // Hiện nội dung chính
    animationTimeline();
  });

  // Tải particles.js
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles loaded');
  });
});


document.getElementById('decorateBtn').addEventListener('click', function() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});


