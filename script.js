document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Mock Data
    const notesData = [
        { text: "Building the legacy of Purnea College of Engineering together!", author: "Saurav Poddar", color: "pink", rotate: "-2deg" },
        { text: "Grateful for the journey and the friendships made here.", author: "Uday Kumar", color: "yellow", rotate: "3deg" },
        { text: "Every reflection here tells a story of our growth.", author: "Ritupriya", color: "blue", rotate: "-3deg" },
        { text: "Saraswati Puja 2025 was a highlight of our college years!", author: "Ankit Kumar", color: "green", rotate: "2deg" }
    ];

    const studentData = [
  {
    "name": "Om Kamal",
    "branch": "CSE",
    "regNo": "22105131001",
    "image": "om.jpg"
  },
  {
    "name": "Ankit Kumar",
    "branch": "CSE",
    "regNo": "22105131003"
  },
  {
    "name": "Ankit Kumar",
    "branch": "CSE",
    "regNo": "22105131004"
  },
  {
    "name": "Rajhansh Kumar",
    "branch": "CSE",
    "regNo": "22105131005"
  },
  {
    "name": "Nitish Kumar",
    "branch": "CSE",
    "regNo": "22105131006",
    "image": "nitish.jpg"
  },
  {
    "name": "Gautam Kumar",
    "branch": "CSE",
    "regNo": "22105131007",
    "image": "gautam.jpg"
  },
  {
    "name": "Prashant Kumar",
    "branch": "CSE",
    "regNo": "22105131008"
  },
  {
    "name": "Arya",
    "branch": "CSE",
    "regNo": "22105131009"
  },
  {
    "name": "Archana Roy",
    "branch": "CSE",
    "regNo": "22105131010",
    "image": "archana.jpeg"
  },
  {
    "name": "Vishwajit Singh",
    "branch": "CSE",
    "regNo": "22105131011"
  },
  {
    "name": "Yuvraj Singh",
    "branch": "CSE",
    "regNo": "22105131012"
  },
  {
    "name": "Sudhakar Kumar",
    "branch": "CSE",
    "regNo": "22105131013"
  },
  {
    "name": "Reshav Raj",
    "branch": "CSE",
    "regNo": "22105131014"
  },
  {
    "name": "Vishal Kumar Rajak",
    "branch": "CSE",
    "regNo": "22105131015"
  },
  {
    "name": "Abhishek Kumar",
    "branch": "CSE",
    "regNo": "22105131016"
  },
  {
    "name": "Prince Kumar Gupta",
    "branch": "CSE",
    "regNo": "22105131017"
  },
  {
    "name": "Abhinandan Kumar",
    "branch": "CSE",
    "regNo": "22105131018",
    "image": "abhinandan.jpg"
  },
  {
    "name": "Prabhat Kumar",
    "branch": "CSE",
    "regNo": "22105131019"
  },
  {
    "name": "Afjal Ansari",
    "branch": "CSE",
    "regNo": "22105131020"
  },
  {
    "name": "Pravin Kumar",
    "branch": "CSE",
    "regNo": "22105131022"
  },
  {
    "name": "Sunidhi Kumar",
    "branch": "CSE",
    "regNo": "22105131023",
    "image": "sunidhi.jpeg"
  },
  {
    "name": "Ankita Kumari",
    "branch": "CSE",
    "regNo": "22105131024"
  },
  {
    "name": "Srishti Raj",
    "branch": "CSE",
    "regNo": "22105131025"
  },
  {
    "name": "Manish Kumar",
    "branch": "CSE",
    "regNo": "22105131026",
    "image": "manish.jpeg"
  },
  {
    "name": "Prachi Raj",
    "branch": "CSE",
    "regNo": "22105131027",
    "image": "prachi.jpeg"
  },
  {
    "name": "Vivek Kumar",
    "branch": "CSE",
    "regNo": "22105131028"
  },
  {
    "name": "Kumar Gaurabh",
    "branch": "CSE",
    "regNo": "22105131029"
  },
  {
    "name": "Ritupriya",
    "branch": "CSE",
    "regNo": "23105131901",
    "image": "ritu.jpg"
  },
  {
    "name": "Rohit Chakraverty",
    "branch": "CSE",
    "regNo": "23105131902",
    "image": "rohit.jpg"
  },
  {
    "name": "Rashmi Pacheriya",
    "branch": "CSE",
    "regNo": "23105131903"
  },
  {
    "name": "Abhishek Kumar Choudhary",
    "branch": "CSE(AI)",
    "regNo": "22151131001",
    "image": "abhishek.jpg"
  },
  {
    "name": "Arti Kumari",
    "branch": "CSE(AI)",
    "regNo": "22151131002",
    "image": "arti.jpeg"
  },
  {
    "name": "Jyoti Kumari",
    "branch": "CSE(AI)",
    "regNo": "22151131003"
  },
  {
    "name": "Abhishek Anand",
    "branch": "CSE(AI)",
    "regNo": "22151131004"
  },
  {
    "name": "Suraj Kumar",
    "branch": "CSE(AI)",
    "regNo": "22151131005"
  },
  {
    "name": "Uday Kumar",
    "branch": "CSE(AI)",
    "regNo": "22151131006"
  },
  {
    "name": "Pintu Raj",
    "branch": "CSE(AI)",
    "regNo": "22151131007"
  },
  {
    "name": "Govind Kumar Sahu",
    "branch": "CSE(AI)",
    "regNo": "22151131008"
  },
  {
    "name": "Shubham Kumar",
    "branch": "CSE(AI)",
    "regNo": "22151131009"
  },
  {
    "name": "Divyanshi Kumari",
    "branch": "CSE(AI)",
    "regNo": "22151131010"
  },
  {
    "name": "Abhijeet Roy",
    "branch": "CSE(AI)",
    "regNo": "22151131013"
  },
  {
    "name": "Naveen Kumar",
    "branch": "CSE(AI)",
    "regNo": "22151131014"
  },
  {
    "name": "Aseem Raj",
    "branch": "CSE(AI)",
    "regNo": "22151131015",
    "image": "aseem.jpg"
  },
  {
    "name": "Aniket Kumar Singh",
    "branch": "CSE(AI)",
    "regNo": "22151131017"
  },
  {
    "name": "Raushan Kumar",
    "branch": "CSE(AI)",
    "regNo": "22151131018"
  },
  {
    "name": "Om Shankar Kumar",
    "branch": "CSE(AI)",
    "regNo": "22151131019",
    "image": "om_shankar.jpg"
  },
  {
    "name": "Rishav Kumar Singh",
    "branch": "CSE(AI)",
    "regNo": "22151131020"
  },
  {
    "name": "Rahul Kumar",
    "branch": "CSE(AI)",
    "regNo": "22151131021"
  },
  {
    "name": "Gautam Kumar Thakur",
    "branch": "CSE(AI)",
    "regNo": "22151131022"
  },
  {
    "name": "Saurav Kumar",
    "branch": "CSE(AI)",
    "regNo": "22151131023"
  },
  {
    "name": "Arpita Kumari",
    "branch": "CSE(AI)",
    "regNo": "22151131024"
  },
  {
    "name": "Aditi Kumari",
    "branch": "CSE(AI)",
    "regNo": "22151131025"
  },
  {
    "name": "Saurav Poddar",
    "branch": "CSE(AI)",
    "regNo": "22151131026",
    "image": "saurav.jpg"
  },
  {
    "name": "Praveen Kumar",
    "branch": "CSE(AI)",
    "regNo": "22151131027"
  },
  {
    "name": "Vinit Kumar",
    "branch": "CSE(AI)",
    "regNo": "22151131028"
  },
  {
    "name": "Madhu Priya",
    "branch": "CSE(AI)",
    "regNo": "22151131029"
  },
  {
    "name": "Kajal Kumari",
    "branch": "CSE(AI)",
    "regNo": "22151131030"
  },
  {
    "name": "Soni Priya",
    "branch": "CSE(AI)",
    "regNo": "22151131031"
  },
  {
    "name": "Annu Kumari",
    "branch": "CSE(AI)",
    "regNo": "22151131032"
  },
  {
    "name": "Sushant Sagar",
    "branch": "CSE(AI)",
    "regNo": "23151131901"
  },
  {
    "name": "Priya Kumari",
    "branch": "CSE(AI)",
    "regNo": "23151131902",
    "image": "priya.jpeg"
  },
  {
    "name": "Ankesh Kumar",
    "branch": "CSE(AI)",
    "regNo": "23151131903"
  }
];

const facultyData = [
  {
    "name": "Prof. Raju Kumar",
    "designation": "Assistant Professor (H.O.D.)",
    "image": "https://www.pcepurnia.org/wp-content/uploads/2025/11/file_691afe427fd86.jpg"
  },
  {
    "name": "Prof. Supriya Kumari",
    "designation": "Assistant Professor",
    "image": "https://www.pcepurnia.org/wp-content/uploads/2022/12/file_63a70fba9378f.jpg"
  },
  {
    "name": "Prof. Tapan Kumar",
    "designation": "Assistant Professor",
    "image": "https://www.pcepurnia.org/wp-content/uploads/2024/04/file_660fae418b518.jpg"
  },
  {
    "name": "Prof. Rahat Yezdani",
    "designation": "Assistant Professor",
    "image": "https://www.pcepurnia.org/wp-content/uploads/2024/05/file_663c96c759378-scaled.jpg"
  },
  {
    "name": "Prof. Ravi Kumar",
    "designation": "Assistant Professor",
    "image": ""
  },
  {
    "name": "Prof. Shubhlaxmi",
    "designation": "Assistant Professor",
    "image": "Prof. Shubhlaxmi.jpeg"
  },
  {
    "name": "Dr. Priti Kumari",
    "designation": "Assistant Professor",
    "image": ""
  }
];









    let allStudents = studentData;

    function initYearbook(filter = '') {
        const normalizedFilter = filter.toLowerCase();
        const filteredStudents = studentData.filter(s => 
            s.name.toLowerCase().includes(normalizedFilter) || 
            s.regNo.toLowerCase().includes(normalizedFilter)
        );

        const cseStudents = filteredStudents.filter(s => s.branch === 'CSE');
        const aiStudents = filteredStudents.filter(s => s.branch === 'CSE(AI)');
        
        renderYearbook(cseStudents, 'cse-grid');
        renderYearbook(aiStudents, 'ai-grid');
        renderFaculty();
    }

    // Search Logic
    const searchInput = document.getElementById('yearbookSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            initYearbook(e.target.value);
        });
    }


    // 2. Render Functions
    const notesContainer = document.getElementById('notes-container');

    function renderNotes() {
        notesContainer.innerHTML = '';
        notesData.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.className = `note ${note.color}`;
            noteEl.style.setProperty('--rotate', note.rotate);
            noteEl.innerHTML = `
                <div class="note-body">${note.text}</div>
                <div class="note-footer">- ${note.author}</div>
            `;
            notesContainer.appendChild(noteEl);
        });
    }

    function renderYearbook(students, containerId) {
        const grid = document.getElementById(containerId);
        grid.innerHTML = '';
        students.forEach(student => {
            const card = document.createElement('div');
            card.className = 'student-card';
            
            const imageHtml = student.image 
                ? `<img src="${student.image}" alt="${student.name}" class="profile-photo">`
                : `<i class="fa-solid fa-user"></i>`;

            card.innerHTML = `
                <div class="card-image ${student.image ? 'with-photo' : ''}">
                    ${imageHtml}
                </div>
                <div class="card-info">
                    <h3 class="card-name">${student.name}</h3>
                    <p class="card-branch">${student.branch}</p>
                    <p class="card-quote">Reg No: ${student.regNo}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function renderFaculty() {
        const grid = document.getElementById('faculty-grid');
        if (!grid) return;
        grid.innerHTML = '';
        facultyData.forEach(faculty => {
            const card = document.createElement('div');
            card.className = 'faculty-card';
            
            const isHOD = faculty.designation.includes('(H.O.D.)');
            const imageHtml = faculty.image 
                ? `<img src="${faculty.image}" alt="${faculty.name}" class="profile-photo">`
                : `<div class="placeholder-icon"><i class="fa-solid fa-user-tie"></i></div>`;

            card.innerHTML = `
                <div class="card-image ${faculty.image ? 'with-photo' : ''} ${isHOD ? 'hod-border' : ''}">
                    ${imageHtml}
                    ${isHOD ? '<span class="hod-badge">H.O.D.</span>' : ''}
                </div>
                <div class="card-info">
                    <h3 class="card-name">${faculty.name}</h3>
                    <p class="card-designation">${faculty.designation}</p>
                    <div class="card-department">Computer Science & Engineering</div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // 3. Add Note Logic (Modern Modal)
    const addNoteBtn = document.getElementById('add-note-btn');
    const modal = document.getElementById('reflection-modal');
    const closeBtn = document.querySelector('.close-modal');
    const cancelBtn = document.getElementById('cancel-reflection');
    const submitBtn = document.getElementById('submit-reflection');
    const reflectionText = document.getElementById('reflection-text');
    const reflectionAuthor = document.getElementById('reflection-author');

    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        reflectionText.value = '';
        reflectionAuthor.value = '';
    };

    if (addNoteBtn) addNoteBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const text = reflectionText.value.trim();
            const author = reflectionAuthor.value.trim();
            
            if (text && author) {
                const colors = ['pink', 'blue', 'yellow', 'green'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                const randomRotate = (Math.random() * 10 - 5).toFixed(1) + 'deg';
                
                notesData.unshift({ text, author, color: randomColor, rotate: randomRotate });
                renderNotes();
                closeModal();
                
                // Scroll to the wall to see the new note
                const wallSection = document.getElementById('wall');
                if (wallSection) wallSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert("Please fill in both fields to share your reflection.");
            }
        });
    }

    // Close modal on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // 4. Scroll Effects
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.navbar');
        header.classList.toggle('scrolled', window.scrollY > 50);

        // Highlight active nav link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // 6. Video Hover Sound Logic
    const videos = document.querySelectorAll('.video-item video');
    videos.forEach(v => {
        v.addEventListener('mouseenter', () => { v.muted = false; });
        v.addEventListener('mouseleave', () => { v.muted = true; });
    });

    // 5. Initial Call
    renderNotes();
    initYearbook();
});

// ---------------------------------------------------------
// BACKGROUND MUSIC CONTROLLER (YouTube API Integration)
// ---------------------------------------------------------

window.updateMusicUI = function() {
    const btn = document.getElementById('music-toggle');
    if (!btn) return;
    const icon = btn.querySelector('i');
    
    if (isPlaying) {
        btn.classList.add('playing');
        icon.className = 'fas fa-pause';
    } else {
        btn.classList.remove('playing');
        icon.className = 'fas fa-play';
    }
};

function toggleMusic() {
    if (!player || typeof player.getPlayerState !== 'function') return;
    
    const state = player.getPlayerState();
    if (state === 1) { // Playing
        player.pauseVideo();
        isPlaying = false;
    } else {
        player.playVideo();
        player.unMute();
        isPlaying = true;
        musicStarted = true;
    }
    window.updateMusicUI();
}

function igniteMusic() {
    if (musicStarted || !player) return;
    
    try {
        if (typeof player.unMute === 'function') {
            player.unMute();
            player.playVideo();
            musicStarted = true;
            isPlaying = true;
            window.updateMusicUI();
            console.log("Music Engine: Activated");
        } else {
            setTimeout(igniteMusic, 100);
        }
    } catch (e) {
        setTimeout(igniteMusic, 200);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const musicBtn = document.getElementById('music-toggle');
    if (musicBtn) {
        musicBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMusic();
        });
    }

    // Attempt to ignite on initial interaction (Browser Autoplay Requirement)
    const interactionEvents = ['click', 'mousedown', 'touchstart', 'keydown'];
    interactionEvents.forEach(evt => {
        document.addEventListener(evt, () => {
            if (!musicStarted) igniteMusic();
        }, { once: true });
    });
    
    // Initial UI Sync
    setTimeout(window.updateMusicUI, 1000);
});





