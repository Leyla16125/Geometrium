const portfolio = document.getElementById('portfolio');
const mainImg = document.getElementById("mainImg");
const topRightImg = document.getElementById("topRightImg");
const bottomLeftImg = document.getElementById("bottomLeftImg");
const bottomRightImg = document.getElementById("bottomRightImg");
const box = document.getElementById("compareBox");
const overlay = document.getElementById("overlay");
const slider = document.getElementById("slider");
const rect = box.getBoundingClientRect();
const container = document.getElementById("team");
const video = document.getElementById("video");
const playBtn = document.getElementById("playBtn");
const awardsList = document.getElementById("awardsList");

//section 3
const projects = [
  {
    title: 'ЖК Река 2',
    description: '198 м² Москва',
    image: 'img/1.webp',
  },
  {
    title: 'Private Jet Villa, вилла в фюзеляже самолета',
    description: '113,5 м² Uluwatu, Bali',
    image: 'img/2.webp',
  },
  {
    title: 'Сёрферский апарт-отель, Gate 360, Bali',
    description: '2 450 м² Bali',
    image: 'img/3.webp',
  },
  {
    title: 'ЖК Foriver 1',
    description: '168 м² Москва',
    image: 'img/4.jpg',
  },
  {
    title: 'ЖК Neva Towers 4',
    description: '134,3 м² Москва',
    image: 'img/5.jpg',
  },
  {
    title: 'Апартаменты для застройщика Forma (ПИК)',
    description: '90 м² Россия, Москва',
    image: 'img/6.jpg',
  },
  {
    title: 'Лобби бизнес-центра White Sea',
    description: '132 м² Москва',
    image: 'img/7.webp',
  },
  {
    title: 'ЖК Neva Towers 3',
    description: 'Москва',
    image: 'img/8.webp',
  },
  {
    title: 'Olymp Villas Complex',
    description: '15717 м² Uluwatu, Bali',
    image: 'img/9.jpg',
  },
  {
    title: 'Холлы для ЖК Южнопортовая, Level Group',
    description: 'Москва',
    image: 'img/10.jpg',
  }
];

portfolio.innerHTML = projects.map(item => `
  <div class="group">
    
    <div class="relative overflow-hidden">
      
      <img 
        src="${item.image}" 
        class="w-full h-112 object-cover transition duration-500 group-hover:scale-105 cursor-pointer">

      <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
        <div class="w-14 h-14 bg-[#ccfe0f] hover:bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 
              6.364L12 20.364 4.318 12.682a4.5 4.5 0 010-6.364z" />
          </svg>
        </div>
      </div>

    </div>

    <h3 class="mt-4 text-[22px] font-medium">${item.title}</h3>
    <p class="text-gray-400">${item.description}</p>

  </div>
`).join('');



//section 2
  function resetImgs() {
    mainImg.style.transform = "scale(1)";
    topRightImg.style.opacity = "0";
    bottomLeftImg.style.opacity = "0";
    bottomRightImg.style.opacity = "0";
  }

  function showPart(part) {
    resetImgs();
    if (part === "topLeft") {
      mainImg.style.transform = "scale(1.08)";
    } else if (part === "topRight") {
      topRightImg.style.opacity = "1";
    } else if (part === "bottomLeft") {
      bottomLeftImg.style.opacity = "1";
    } else if (part === "bottomRight") {
      bottomRightImg.style.opacity = "1";
    }
  }


  //section 4
  let isDragging = false;

    function startDrag(e) {
      isDragging = true;
      moveSlider(e.clientX);
    }

    function drag(e) {
      if (!isDragging) return;
      moveSlider(e.clientX);
    }

    function startTouch(e) {
      isDragging = true;
      moveSlider(e.touches[0].clientX);
    }

    function moveTouch(e) {
      if (!isDragging) return;
      moveSlider(e.touches[0].clientX);
    }

    function stopDrag() {
      isDragging = false;
    }

    function moveSlider(clientX) {
      let x = clientX - rect.left;

      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;

      const percent = (x / rect.width) * 100;

      overlay.style.width = percent + "%";
      slider.style.left = percent + "%";
    }


  //section 5
  const team = [
    {
      img: "https://geometrium.com/wp-content/uploads/2024/02/worker-8.png",
      name: "Серафима Демешева",
      role: "Руководитель отдела производства"
    },
    {
      img: "https://geometrium.com/wp-content/uploads/2024/02/worker-16.png",
      name: "Валерия Литвиненко",
      role: "Арт-директор интерьерного направления"
    },
    {
      img: "https://geometrium.com/wp-content/uploads/2024/02/worker-18.png",
      name: "Михаил Зубов",
      role: "Ведущий дизайнер"
    },
    {
      img: "https://geometrium.com/wp-content/uploads/2024/02/worker-5.png",
      name: "Кира Клебанова",
      role: "Дизайнер"
    },
    {
      img: "https://geometrium.com/wp-content/uploads/2024/02/worker-7.png",
      name: "Инга Хомякова",
      role: "Ведущий дизайнер"
    },
    {
      img: "https://geometrium.com/wp-content/uploads/2024/02/worker-11.png",
      name: "Виктория Булатникова",
      role: "Менеджер по работе с клиентами"
    },
    {
      img: "https://geometrium.com/wp-content/uploads/2025/09/photo_2025-09-25_14-46-33-1.png",
      name: "Даниил Асриян",
      role: "Визуализатор"
    },
    {
      img: "https://geometrium.com/wp-content/uploads/2024/02/worker-18.png",
      name: "Сергей Королев",
      role: "Архитектор"
    }
  ];



team.forEach(member => {
  container.innerHTML += `
    <div class="group cursor-pointer p-2">
      
      <div class="relative overflow-hidden bg-[#e5e5e5]">
        
        <div class="absolute inset-0 bg-[#ccfe0f] translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-0"></div>

        <img src="${member.img}" class="relative z-10 w-full object-cover" alt="${member.name}" >
      </div>

      <div class="mt-3 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <p class="font-medium">${member.name}</p>
        <p class="text-[#6f6f6f]">${member.role}</p>
      </div>

    </div>
  `;
});


const rowContainer = document.getElementById("teamRow");

const row = team.slice(0, 5);

rowContainer.innerHTML = `
  ${[...row.map(member => `
    
    <div class="group cursor-pointer p-2 mt-4">
      
      <div class="relative overflow-hidden bg-[#e5e5e5]">
        <div class="absolute inset-0 bg-[#ccfe0f] translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-0"></div>

        <img 
          src="${member.img}" 
          class="relative z-10 w-full object-cover" 
          alt="${member.name}"
        >
      </div>

      <div class="mt-3 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <p class="font-medium">${member.name}</p>
        <p class="text-[#6f6f6f]">${member.role}</p>
      </div>

    </div>

  `),

  `
    <div class="flex items-start justify-center p-2">
      <button class="w-16 h-16 rounded-full cursor-pointer bg-white hover:bg-[#ccfe0f] flex items-center mt-10 justify-center  hover:rotate-180 transition duration-500">⟳</button>
    </div>
  `
].join("")}
`;


//section 8

function toggleVideo() {
  if (video.paused) {
    video.play();
    playBtn.style.backgroundColor = "#ddd";
  } else {
    video.pause();
    playBtn.style.backgroundColor = "#ccfe0f";
  }
}




//section 9
const awards = [
  {
    img: "https://geometrium.com/wp-content/uploads/2025/11/RBG-_1__1.svg",
    year: "2024",
    text: "Победитель Russian Business Guide. ЛЮДИ ГОДА в номинации “ДИЗАЙНЕР ГОДА”",
    yearClass: "text-black"
  },
  {
    img: "https://geometrium.com/wp-content/uploads/2025/11/best_2__1.svg",
    year: "2024",
    text: "BEST RUSSIAN DESIGN AWARDS ( ЖК Neva Towers 2 )",
    yearClass: "text-black"
  },
  {
    img: "https://geometrium.com/wp-content/uploads/2024/01/logo-1.svg",
    year: "2022",
    text: "ADD Awards Победитель в номинации Проект «Лобби»",
    yearClass: "text-black/70"
  },
  {
    img: "https://geometrium.com/wp-content/uploads/2025/11/RBG-_1__1.svg",
    year: "2024",
    text: "Победитель Russian Business Guide. ЛЮДИ ГОДА в номинации “ДИЗАЙНЕР ГОДА”",
    yearClass: "text-black"
  },
  {
    img: "https://geometrium.com/wp-content/uploads/2025/11/best_2__1.svg",
    year: "2024",
    text: "BEST RUSSIAN DESIGN AWARDS ( ЖК Neva Towers 2 )",
    yearClass: "text-black"
  },
  {
    img: "https://geometrium.com/wp-content/uploads/2024/01/logo-1.svg",
    year: "2022",
    text: "ADD Awards Победитель в номинации Проект «Лобби»",
    yearClass: "text-black/70"
  }
];


awardsList.innerHTML = awards.map(item => `
  <div class="group">
    <div class="flex items-center gap-8 py-4 cursor-pointer">

      <div class="w-20 h-20 shrink-0 flex items-center justify-center">
        <div class="w-0 h-0 rounded-full bg-[#ccfe0f] overflow-hidden opacity-0 scale-0 group-hover:w-20 group-hover:h-20 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out flex items-center justify-center">
          <img src="${item.img}" class="w-[70%] h-[70%] object-contain">
        </div>
      </div>

      <div class="flex flex-1 items-center justify-between">
        <div class="w-24 text-[18px] ${item.yearClass}">
          ${item.year}
        </div>

        <div class="flex-1 text-[18px] text-right">
          ${item.text}
        </div>
      </div>
    </div>

    <div class="relative h-px bg-black/20 overflow-hidden">
      <span class="absolute left-0 top-0 h-full w-full bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
    </div>
  </div>
`).join("");