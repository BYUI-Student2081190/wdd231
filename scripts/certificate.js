// DOM variables
const certifContainer = document.getElementById("certifDiv");
const creditsSpan = document.getElementById("credits");
const allButton = document.getElementById("all");
const cseButton = document.getElementById("cse");
const wddButton = document.getElementById("wdd");
const courseDetails = document.getElementById("course-details");

// Certificate list
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

// Display certificates
function displayCertificates(activeList) {
    // Clear the div
    certifContainer.replaceChildren();

    // Have a variable hold the total credits
    let totalCredits = 0;

    // Loop through the list
    activeList.forEach(item => {
        // Add the total credits
        totalCredits += item.credits;

        // Create a new p element to hold the info
        const p = document.createElement("p");

        // Create the text content
        if (item.completed) {
            // Add the completed class
            p.classList.add("completed");
            // Create the completed text
            p.innerHTML = `&check; ${item.subject} ${item.number}`;
        } else {
            // Create the not completed text
            p.innerHTML = `${item.subject} ${item.number}`;
        };

        // Add the p to the div
        certifContainer.append(p);
        // Add the total credits to the span tag
        creditsSpan.textContent = totalCredits;
    });
};

// Click events to change the display
allButton.addEventListener("click", () => {
    // Toggle the classes
    allButton.className = "activeButton";
    cseButton.className = "notActiveButton";
    wddButton.className = "notActiveButton";
    // Send in courses
    displayCertificates(courses);
});

cseButton.addEventListener("click", () => {
    // Toggle the classes
    allButton.className = "notActiveButton";
    cseButton.className = "activeButton";
    wddButton.className = "notActiveButton";

    // Filter the list to place into the function
    const cseList = courses.filter(item => item.subject === 'CSE');

    // Send in courses
    displayCertificates(cseList);
});

wddButton.addEventListener("click", () => {
    // Toggle the classes
    allButton.className = "notActiveButton";
    cseButton.className = "notActiveButton";
    wddButton.className = "activeButton";

    // Filter the list to place into the function
    const wddList = courses.filter(item => item.subject === 'WDD');

    // Send in courses
    displayCertificates(wddList);
});

// Call the all list first
displayCertificates(courses);

// Function to display the data
function displayDialog(element) {
    // Obtain the data from the object array
    const courseData = courses.find(course => element.textContent.includes(course.subject) && element.textContent.includes(course.number));
    
    // Now populate the data in the dialog box
    const header = document.createElement("h1");
    const closeButton = document.createElement("button");
    const courseTitle = document.createElement("h2");
    const credits = document.createElement("p");
    const certificate = document.createElement("p");
    const description = document.createElement("p");
    const technology = document.createElement("p");

    // Add the information to the elements
    header.textContent = `${courseData.subject} ${courseData.number}`;
    closeButton.textContent = "X";
    courseTitle.textContent = courseData.title;
    credits.textContent = `${courseData.credits} credits`;
    certificate.textContent = `Cerificate: ${courseData.certificate}`;
    description.textContent = courseData.description;
    technology.textContent = `Technology: ${courseData.technology.join(', ')}`;

    // Add some more data to the closeButton
    closeButton.setAttribute("aria-label", "Close Course Information");
    closeButton.addEventListener("click", () => {
        // Close the modal
        courseDetails.close();
        // Delete the current data in the modal
        courseDetails.replaceChildren(); // Because when this closes we are not using it anymore
    });

    // Add the current data
    courseDetails.appendChild(header);
    courseDetails.appendChild(closeButton);
    courseDetails.appendChild(courseTitle);
    courseDetails.appendChild(credits);
    courseDetails.appendChild(certificate);
    courseDetails.appendChild(description);
    courseDetails.appendChild(technology);
};

// Click event on the div, this will also help open the dialog box
certifContainer.addEventListener("click", (event) => {
    // Learned how to do all this through some research
    // Get the clicked element inside the div
    const clicked = event.target;

    // Check to see if the element was a p tag in the div
    if (clicked.tagName === 'P') {
        // Now check if it actually is a child of the parent
        if (certifContainer.contains(clicked)) {
            // Send the clicked element over to the display function to start obtaining data
            displayDialog(clicked);
            // Open the modal
            courseDetails.showModal();
        };
    };
});