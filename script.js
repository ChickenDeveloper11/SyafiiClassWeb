const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const navLinks = document.querySelectorAll(".nav-link");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });

function moveCard(direction) {
    const wrappper = document.querySelector('.structure-wrapper');
    const cardWidth = wrappper.offsetWidth;

    wrappper.scrollLeft += direction * cardWidth;
}

const studentData = [
    {
        id: 'student1',
        name: 'Aisyah Azzahra',
        details: 'Halo!',
        image: 'assets/Aisyah.JPG'
    },
    {
        id: 'student2',
        name: 'Alicia Humaira Brilliant',
        details: 'Halo!',
        image: 'assets/Alicia.JPG'
    },
    {
        id: 'student3',
        name: 'Annisa Cahya Afifah',
        details: 'Halo!',
        image: 'assets/Annisa.JPG'
    },
    {
        id: 'student4',
        name: 'Aqella Faheema Putri',
        details: 'Halo!',
        image: 'assets/Cila.JPG'
    },
    {
        id: 'student5',
        name: 'Jeumpa Bilqis',
        details: 'Halo!',
        image: 'assets/Jeumpa.JPG'
    },
    {
        id: 'student6',
        name: 'Cut Nyak Almira Malaeka',
        details: 'Halo!',
        image: 'assets/Putroe.JPG'
    },
    {
        id: 'student7',
        name: 'Farah Nailaah Putri',
        details: 'Halo!',
        image: 'assets/Farah.JPG'
    },
    {
        id: 'student8',
        name: 'Indah Fatina',
        details: 'Halo!',
        image: 'assets/Indah.JPG'
    },
    {
        id: 'student9',
        name: 'Khanza Aqila',
        details: 'Halo!',
        image: 'assets/Khanza.JPG'
    },
    {
        id: 'student10',
        name: 'Latifa Nabila Rizki',
        details: 'Halo!',
        image: 'assets/Latifa.JPG'
    },
    {
        id: 'student11',
        name: 'Niswa Ufaira',
        details: 'Halo!',
        image: 'assets/Niswa.JPG'
    },
    {
        id: 'student12',
        name: 'Reyhanna Sheza Risky',
        details: 'Halo!',
        image: 'assets/Sheza.JPG'
    },
    {
        id: 'student13',
        name: 'Salsabila Nadhifa',
        details: 'Halo!',
        image: 'assets/Diva.JPG'
    },
    {
        id: 'student14',
        name: 'Queenza Azalea',
        details: 'Halo!',
        image: 'assets/Queen.JPG'
    },
    {
        id: 'student27',
        name: 'Naira Shidqia',
        details: 'Halo!',
        image: 'assets/Naira.JPG'
    },
    {
        id: 'student15',
        name: 'Bhasil Ardiansyah',
        details: 'Halo!',
        image: 'assets/Bhasil.JPG'
    },
    {
        id: 'student16',
        name: 'M. Hafiz Haikal',
        details: 'Halo!',
        image: 'assets/Hafiz.JPG'
    },
    {
        id: 'student17',
        name: 'M. Fathan Asfa Kaisan',
        details: 'Halo!',
        image: 'assets/Fatan.JPG'
    },
    {
        id: 'student18',
        name: 'M. Faris Firdaus',
        details: 'Halo!',
        image: 'assets/Faris.JPG'
    },
    {
        id: 'student19',
        name: 'M. Fathir Syah',
        details: 'Halo!',
        image: 'assets/Fathir.JPG'
    },
    {
        id: 'student20',
        name: 'Owais Almir',
        details: 'Halo!',
        image: 'assets/Owais.JPG'
    },
    {
        id: 'student21',
        name: 'Maulana',
        details: 'Halo!',
        image: 'assets/Mol.JPG'
    },
    {
        id: 'student22',
        name: 'Saif Agil Munawar',
        details: 'Halo!',
        image: 'assets/Saif.JPG'
    },
    {
        id: 'student23',
        name: 'Teuku Fabian Ferdiansyah',
        details: 'Halo!',
        image: 'assets/Fabian.JPG'
    },
    {
        id: 'student24',
        name: 'Rafiqul Islam',
        details: 'Halo!',
        image: 'assets/Rafi.JPG'
    },
    {
        id: 'student25',
        name: 'Raisul Qahhar',
        details: 'Halo!',
        image: 'assets/Rais.JPG'
    },
    {
        id: 'student26',
        name: 'Teuku Parsa Rayeuk',
        details: 'Halo!',
        image: 'assets/Parsa.JPG'
    },
];

const gridContainer = document.querySelector('.students-grid');

if (gridContainer) {
    studentData.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.onclick = () => showBio(student.id);
        card.innerHTML = `
            <img src="${student.image}" alt="${student.name}">
            <h3>${student.name}</h3>
        `;
        gridContainer.appendChild(card);
    });
}

function showBio(studentId) {
    const student = studentData.find(s => s.id === studentId);
    if (student) {
        const bioDetail = document.querySelector('.student-bio-detail');
        if (bioDetail) {
            bioDetail.querySelector('img').src = student.image;
            bioDetail.querySelector('h3').textContent = student.name;
            bioDetail.querySelector('p').textContent = student.details;
            bioDetail.style.display = 'block';
        }

        const overlay = document.querySelector('.biodata-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
        }
    }
}

function closeBio() {
    const overlay = document.querySelector('.biodata-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}