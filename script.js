const portfolio = document.getElementById('portfolio');

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