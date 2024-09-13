document.getElementById('resume-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const profilePictureUrl = (document.getElementById('profile-picture-url') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;

    // Populate resume sections
    const resumeHeader = document.getElementById('resume-header');
    const resumeEducation = document.getElementById('resume-education');
    const resumeSkills = document.getElementById('resume-skills');
    const resumeWorkExperience = document.getElementById('resume-work-experience');

    if (resumeHeader) {
        resumeHeader.innerHTML = `
            <img src="${profilePictureUrl}" alt="Profile Picture">
            <h1 contenteditable="true">${name}</h1>
            <p>Email: <span contenteditable="true">${email}</span> | Phone: <span contenteditable="true">${phone}</span></p>
        `;
    }

    if (resumeEducation) {
        resumeEducation.innerHTML = `
            <h2>Education</h2>
            <p contenteditable="true">${education}</p>
        `;
    }

    if (resumeSkills) {
        resumeSkills.innerHTML = `
            <h2>Skills</h2>
            <p contenteditable="true">${skills}</p>
        `;
    }

    if (resumeWorkExperience) {
        resumeWorkExperience.innerHTML = `
            <h2>Work Experience</h2>
            <p contenteditable="true">${workExperience}</p>
        `;
    }
});
