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
    "regNo": "22105131010"
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
    "name": "Sunidhi Singh",
    "branch": "CSE",
    "regNo": "22105131023"
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
    "regNo": "22105131026"
  },
  {
    "name": "Prachi Raj",
    "branch": "CSE",
    "regNo": "22105131027"
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
    "regNo": "22151131002"
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
    "regNo": "22151131019"
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
    "regNo": "23151131902"
  },
  {
    "name": "Ankesh Kumar",
    "branch": "CSE(AI)",
    "regNo": "23151131903"
  }
];









    let allStudents = studentData;

    function initYearbook() {
        const cseStudents = allStudents.filter(s => s.branch === 'CSE');
        const aiStudents = allStudents.filter(s => s.branch === 'CSE(AI)');
        
        renderYearbook(cseStudents, 'cse-grid');
        renderYearbook(aiStudents, 'ai-grid');
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

    // 3. Add Note Logic
    const addNoteBtn = document.getElementById('add-note-btn');
    addNoteBtn.addEventListener('click', () => {
        const text = prompt("Enter your reflection:");
        const author = prompt("Enter your name:");
        
        if (text && author) {
            const colors = ['pink', 'blue', 'yellow', 'green'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomRotate = (Math.random() * 10 - 5).toFixed(1) + 'deg';
            
            notesData.unshift({ text, author, color: randomColor, rotate: randomRotate });
            renderNotes();
        }
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
            if (link.getAttribute('href').includes(current)) {
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

// Direct Music Ignition Logic
function igniteMusic() {
    if (musicStarted || !player) return;
    
    try {
        if (typeof player.unMute === 'function') {
            player.unMute();
            player.playVideo();
            musicStarted = true;
            console.log("Music Engine: Force Started");
        } else {
            setTimeout(igniteMusic, 100);
        }
    } catch (e) {
        console.warn("Retrying ignition...");
        setTimeout(igniteMusic, 200);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Attempt to ignite on ANY initial interaction
    ['click', 'mousedown', 'touchstart', 'scroll', 'keydown', 'mousemove'].forEach(evt => {
        document.addEventListener(evt, igniteMusic, { once: true });
    });
    
    // Also try a direct attempt after a small delay (works if MEI is high)
    setTimeout(igniteMusic, 1000);
});





