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
const imgSlider = document.getElementById("imgSlider");

//section 3


const projects = [
  {
    title: 'ЖК Река 2',
    description: '198 м² Москва',
    image: './assets/img/1.webp',
  },
  {
    title: 'Private Jet Villa, вилла в фюзеляже самолета',
    description: '113,5 м² Uluwatu, Bali',
    image: './assets/img/2.webp',
  },
  {
    title: 'Сёрферский апарт-отель, Gate 360, Bali',
    description: '2 450 м² Bali',
    image: './assets/img/3.webp',
  },
  {
    title: 'ЖК Foriver 1',
    description: '168 м² Москва',
    image: './assets/img/4.jpg',
  },
  {
    title: 'ЖК Neva Towers 4',
    description: '134,3 м² Москва',
    image: './assets/img/5.jpg',
  },
  {
    title: 'Апартаменты для застройщика Forma (ПИК)',
    description: '90 м² Россия, Москва',
    image: './assets/img/6.jpg',
  },
  {
    title: 'Лобби бизнес-центра White Sea',
    description: '132 м² Москва',
    image: './assets/img/7.webp',
  },
  {
    title: 'ЖК Neva Towers 3',
    description: 'Москва',
    image: './assets/img/8.webp',
  },
  {
    title: 'Olymp Villas Complex',
    description: '15717 м² Uluwatu, Bali',
    image: './assets/img/9.jpg',
  },
  {
    title: 'Холлы для ЖК Южнопортовая, Level Group',
    description: 'Москва',
    image: './assets/img/10.jpg',
  }
];

portfolio.innerHTML = projects.map(item => `
  <div class="group w-full">
    
    <div class="relative overflow-hidden w-full">
      
      <img 
        src="${item.image}" 
        class="w-full h-65 sm:h-85 md:h-107 lg:h-112 object-cover transition duration-500 group-hover:scale-105 cursor-pointer">

      <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
        <div class="w-12 h-12 md:w-14 md:h-14 bg-[#ccfe0f] hover:bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 
              6.364L12 20.364 4.318 12.682a4.5 4.5 0 010-6.364z" />
          </svg>
        </div>
      </div>

    </div>

    <h3 class="mt-4 text-[14px] md:text-[20px] font-medium">${item.title}</h3>
    <p class="text-[#6f6f6f] text-[13px] md:text-[20px]">${item.description}</p>

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
    const preview = document.getElementById('previewVideo');
    const video = document.getElementById('video');
    const playBtn = document.getElementById('playBtn');

    if (preview.style.display !== 'none') {
      preview.style.display = 'none';
      video.style.display = 'block';
      video.play();
      playBtn.style.backgroundColor = "#ddd";
      return;
    }

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



//section 10


const reviews = [
  {
    id: 1,
    title: "Реализовали все, что хотели",
    text: "Когда мы обратились в студию, хотели получить современный функциональный интерьер, в котором была бы продумана вся эргономика. Хотели также хорошую кухню, потому что мы оба любим готовить. Чтобы кухня закрывалась и открывалась, убирая лишний шум. Хотели общую зону, чтобы собираться с друзьями. Одновременно можно было и готовить, и общаться всем вместе. Вот это всё реализовано в нашей квартире. Мы очень довольны конечным продуктом.",
    subtitle: "Илья и Елена",
    info: "ЖК Серебряный парк 82 м²",
    img: "https://geometrium.com/wp-content/uploads/2024/04/dizayn-interera-zakazat-v-moskve.jpg"
  },
  {
    id: 2,
    title: "Всегда на связи",
    text: "Всем остались довольны. Сделали проект нашей квартиры с архитектурным бюро GEOMETRIUM. Работой команды дизайнеров остались очень довольны. Всегда на связи, всегда готовы выслушать и внести свои коррективы. В результате нашей совместной работы мы получили очень интересный проект.",
    subtitle: "Лилия",
    info: "Москва, 113 м²",
    img: "https://geometrium.com/wp-content/uploads/2025/04/20_HW_3-post-_1_.webp"
  },
  {
    id: 3,
    title: "Тендер для выбора студии",
    text: "Для своей квартиры мы сделали целый тендер, чтобы выбрать студию дизайна. Анализировали качество, подход, стоимость и стиль. В результате компания Geometrium выиграла тендер. Мы очень много времени уделили именно проектированию, чтобы всё было продумано и понятно.",
    subtitle: "Алексей и Дарья",
    info: "ЖК Династия 73 м²",
    img: "https://geometrium.com/wp-content/uploads/2024/04/3R5A6379-1.jpg"
  },
  {
    id: 4,
    title: "Сделали кухню-гостинную на 11 м² больше!",
    text: "Хочется сказать спасибо дизайнеру Эльвире и в целом команде Geometrium, что им удалось в наши 85 кв.м уместить всё, что нам хотелось. В результате всё получилось. Общая зона достаточно большая, и получилось очень удобно для жизни.",
    subtitle: "ЖК Небо",
    info: "95 м²",
    img: "https://geometrium.com/wp-content/uploads/2024/04/3R5A3229-1-1.png"
  },
  {
    id: 5,
    title: "В процессе реализации",
    text: "Очень рады, что выбрали вас в качестве дизайнеров для нашей квартиры. У нас был основной вопрос по залу с кухней, так как площадь была совсем небольшая, и мы не понимали, как лучше всё организовать.",
    subtitle: "Павел и Анна",
    info: "Москва 90 м²",
    img: "https://geometrium.com/wp-content/uploads/2025/04/5-_3_.webp"
  },
  {
    id: 6,
    title: "100 баллов",
    text: "Готова поставить студии просто 100 баллов. Отработали весь проект от начала и завершения авторского надзора на высшем уровне. Я осталась очень довольна результатом выполненной работы команды.",
    subtitle: "Венера",
    info: "Москва, 64 м²",
    img: "https://geometrium.com/wp-content/uploads/2025/04/2-_70_.webp"
  },
  {
    id: 7,
    title: "Были уверены, что обратимся именно к вам",
    text: "Мы находимся не в Москве, поэтому для нас было важно, чтобы связь со студией была постоянной. Такой запрос был учтен. Дизайнер всегда был на связи, устраивал зум звонки и подробно всё объяснял.",
    subtitle: "Анастасия",
    info: "Ставрополь, квартира 57 м²",
    img: "https://geometrium.com/wp-content/uploads/2024/01/slide-review-img-3.jpg"
  },
  {
    id: 8,
    title: "Уровень работы студии действительно на высоте",
    text: "Хочу выразить благодарность за отличный мини-проект двухкомнатной квартиры. Очень понравились креативность и профессионализм специалистов. Получилось создать очень комфортную планировку.",
    subtitle: "Антон",
    info: "Королев, планировка квартиры 95 м²",
    img: "https://geometrium.com/wp-content/uploads/2024/01/slide-review-img-1.jpg"
  }
];

let currentIndex = 0;
const sldr = document.getElementById("reviewSlider");

function renderSlide() {
  const item = reviews[currentIndex];

  sldr.innerHTML = `
  <div class="w-full lg:w-[40%] pt-4 order-2 lg:order-1">
    <div class="text-[60px] lg:text-[70px] leading-none text-white/80 font-serif">“</div>

    <h2 class="text-[20px] lg:text-[24px] font-medium text-black leading-[1.3]">
      ${item.title}
    </h2>

    <p class="mt-6 lg:mt-12 text-[16px] lg:text-[18px] tracking-[0.024rem] text-black leading-[1.6]">
      ${item.text}
    </p>
  </div>

  <div class="w-full lg:w-[60%] order-1 lg:order-2">
    <div class="flex items-start justify-between mb-6 lg:mb-8">
      <div>
        <p class="text-[14px] lg:text-[16px] font-medium text-black leading-tight">
          ${item.subtitle}
        </p>
        <p class="mt-1 text-[13px] lg:text-[14px] text-gray-500 leading-tight">
          ${item.info}
        </p>
      </div>

      <div class="text-[20px] lg:text-[26px] font-medium text-black">
        ${item.id}
        <span class="text-gray-500">/ ${reviews.length}</span>
      </div>
    </div>

    <div class="group relative overflow-hidden">
      <img 
        src="${item.img}" 
        alt="${item.title}"
        class="w-full h-65 md:h-105 lg:h-120 object-cover block"
      >

      <button
        onclick="prevSlide()"
        class="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-16 lg:h-16 rounded-full bg-[#ccfe0f] flex items-center justify-center text-[16px] lg:text-[22px] text-black transition duration-300 cursor-pointer ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100'}"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>

      <button
        onclick="nextSlide()"
        class="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-16 lg:h-16 rounded-full bg-[#ccfe0f] flex items-center justify-center text-[16px] lg:text-[22px] text-black transition duration-300 cursor-pointer ${currentIndex === reviews.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100'}"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
`;
}

function nextSlide() {
  if (currentIndex < reviews.length - 1) {
    currentIndex = currentIndex + 1;
    renderSlide();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
    renderSlide();
  }
}

renderSlide();



const imgSliderData = [
  {
    id: 1,
    img: 'https://geometrium.com/wp-content/themes/Geometrium-template/img/kinoteatr.webp',
    info: 'Настоящий кинотеатр, который полностью звукоизолирован от других помещений загородного дома'
  },
  {
    id: 2,
    img: 'https://geometrium.com/wp-content/themes/Geometrium-template/img/saml.webp',
    info: 'Переоборудовали фюзеляж Boeing 737 в жилую виллу на высоте 150 метров над уровнем океана'
  },
  {
    id: 3,
    img: 'https://geometrium.com/wp-content/themes/Geometrium-template/img/smart-home.webp',
    info: 'Использовали SMART-стекло, которое может менять свою прозрачность, и скрывает от глаз рабочее пространство'
  },
  {
    id: 4,
    img: 'https://geometrium.com/wp-content/themes/Geometrium-template/img/loft.webp',
    info: 'Спроектировали подиум, нижняя часть которого относится к кухне и в него встроена бытовая техника, а верхний ярус служит рабочим местом'
  },
  {
    id: 5,
    img: 'https://geometrium.com/wp-content/themes/Geometrium-template/img/smart-home.webp',
    info: 'Система умный дом, которая отвечает за все электроприборы, безопасность, шторы, а также'
  }
];

const techSliderRight = document.getElementById("techSliderRight");
let techCurrentIndex = 0;

function renderTechSlider() {
  const item = imgSliderData[techCurrentIndex];

techSliderRight.innerHTML = `
  <div>
    <div class="group relative overflow-hidden">
      <img 
        src="${item.img}" 
        class="w-full h-65 md:h-105 lg:h-120 object-cover block"
      >

      <button
        onclick="prevTechSlide()"
        class="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-16 md:h-16 rounded-full bg-[#ccfe0f] flex items-center justify-center text-[16px] md:text-[22px] text-black transition duration-300 ${
          techCurrentIndex === 0
            ? 'opacity-30 cursor-not-allowed'
            : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100 cursor-pointer'
        }"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>

      <button
        onclick="nextTechSlide()"
        class="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-16 md:h-16 rounded-full bg-[#ccfe0f] flex items-center justify-center text-[16px] md:text-[22px] text-black transition duration-300 ${
          techCurrentIndex === imgSliderData.length - 1
            ? 'opacity-30 cursor-not-allowed'
            : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100 cursor-pointer'
        }"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>

    <div class="mt-4 lg:mt-6">
      <p class="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] font-medium">${item.info}</p>
    </div>
  </div>
`;
}

function nextTechSlide() {
  if (techCurrentIndex < imgSliderData.length - 1) {
    techCurrentIndex++;
    renderTechSlider();
  }
}

function prevTechSlide() {
  if (techCurrentIndex > 0) {
    techCurrentIndex--;
    renderTechSlider();
  }
}

renderTechSlider();

function openMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}