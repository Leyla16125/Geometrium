    const blogs = [
        {
            id: 1,
            title: "Стиль барокко в интерьере",
            date: "02 апреля 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/04/image8-2.png",
        },
        {
            id: 2,
            title: "Сиреневый цвет в интерьере",
            date: "02 апреля 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/04/image18.png",
        },
        {
            id: 3,
            title: "Интерьер спальни в светлых тонах",
            date: "01 апреля 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/04/image1.png",
        },
        {
            id: 4,
            title: "Квартира в современном стиле: лучшие дизайн-проекты",
            date: "31 марта 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/03/image1-4-600x346.jpg",
        },
        {
            id: 5,
            title: "Сиреневый цвет в интерьере",
            date: "02 апреля 2026",
            category: "Итальянский стиль в интерьере",
            image: "https://geometrium.com/wp-content/uploads/2026/04/italyanskiy-stil-v-interere-600x399.png",
        },
        {
            id: 6,
            title: "Что такое графический дизайн",
            date: "01 апреля 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/03/image3-4-600x400.png",
        },
        {
            id: 7,
            title: "Дизайн интерьера в стиле лофт",
            date: "31 марта 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/03/image2-3-600x335.jpg",
        },
        {
            id: 8,
            title: "Дизайн интерьера в стиле лофт",
            date: "31 марта 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/03/dizayn-kukhni-600x400.png",
        },
        {
            id: 9,
            title: "Дизайн интерьера в стиле лофт",
            date: "31 марта 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/03/image1-2-600x369.jpg",
        },
        {
            id: 10,
            title: "Дизайн интерьера в стиле лофт",
            date: "31 марта 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/03/image2-1-600x400.jpg",
        },
        {
            id: 11,
            title: "Дизайн интерьера в стиле лофт",
            date: "31 марта 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/03/bedroom-interior-design-zoom-calls-side-view-600x400.jpg",
        },
        {
            id: 12,
            title: "Дизайн интерьера в стиле лофт",
            date: "31 марта 2026",
            category: "Статьи о дизайне интерьера",
            image: "https://geometrium.com/wp-content/uploads/2026/03/image7-1-600x400.png",
        }
    ];
        
    const blogsContainer = document.getElementById('blogs');
    const blogsContainerTwo = document.getElementById('blogstwo');

    const firstBlogs = blogs.slice(0, 6);
    const secondBlogs = blogs.slice(3, 12);

    firstBlogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = "cursor-pointer";

        blogCard.innerHTML = `
        <a href="blog-detail.html?id=${blog.id}">
            <div class="group">
                <div class="relative overflow-hidden">
                    <img 
                        src="${blog.image}" 
                        alt="${blog.title}" 
                        class="w-100 h-60 object-cover hover:scale-105 transition duration-500"
                    >

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

                <h2 class="mt-4 text-[18px] font-medium leading-tight">
                    ${blog.title}
                </h2>

                <div class="flex gap-3 text-[12px] text-[#6f6f6f] mt-2">
                    <span>${blog.date}</span>
                    <span>${blog.category}</span>
                </div>
            </div>
        </a>
    `;

        blogsContainer.appendChild(blogCard);
    });

    secondBlogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = "cursor-pointer";

        blogCard.innerHTML = `
        <a href="blog-detail.html?id=${blog.id}">
            <div class="group">
                <div class="relative overflow-hidden">
                    <img 
                        src="${blog.image}" 
                        alt="${blog.title}" 
                        class="w-100 h-60 object-cover hover:scale-105 transition duration-500"
                    >

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

                <h2 class="mt-4 text-[18px] font-medium leading-tight">
                    ${blog.title}
                </h2>

                <div class="flex gap-3 text-[12px] text-[#6f6f6f] mt-2">
                    <span>${blog.date}</span>
                    <span>${blog.category}</span>
                </div>
            </div>
        </a>
    `;

        blogsContainerTwo.appendChild(blogCard);
    });
