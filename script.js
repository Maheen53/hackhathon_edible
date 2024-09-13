var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePictureUrl = document.getElementById('profile-picture-url').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var workExperience = document.getElementById('work-experience').value;
    // Populate resume sections
    var resumeHeader = document.getElementById('resume-header');
    var resumeEducation = document.getElementById('resume-education');
    var resumeSkills = document.getElementById('resume-skills');
    var resumeWorkExperience = document.getElementById('resume-work-experience');
    if (resumeHeader) {
        resumeHeader.innerHTML = "\n            <img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\">\n            <h1 contenteditable=\"true\">").concat(name, "</h1>\n            <p>Email: <span contenteditable=\"true\">").concat(email, "</span> | Phone: <span contenteditable=\"true\">").concat(phone, "</span></p>\n        ");
    }
    if (resumeEducation) {
        resumeEducation.innerHTML = "\n            <h2>Education</h2>\n            <p contenteditable=\"true\">".concat(education, "</p>\n        ");
    }
    if (resumeSkills) {
        resumeSkills.innerHTML = "\n            <h2>Skills</h2>\n            <p contenteditable=\"true\">".concat(skills, "</p>\n        ");
    }
    if (resumeWorkExperience) {
        resumeWorkExperience.innerHTML = "\n            <h2>Work Experience</h2>\n            <p contenteditable=\"true\">".concat(workExperience, "</p>\n        ");
    }
});
