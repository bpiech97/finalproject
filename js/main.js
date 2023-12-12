const header = document.getElementById('header-main');
header.innerHTML = getHeader();

const footer = document.getElementById('footer-main');
footer.innerHTML = getFooter();

const form = document.forms.validationForm;

function getHeader() {
    return `
        <nav>
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a href="contactme.html">Contact Me!</a>
                </li>
                <li class="nav-item">
                    <a href="aboutme.html">More About Me!</a>
                </li>
                <li class="nav-item">
                    <a href="mycertifications.html">My Certifications!</a>
                </li>
                <li class="nav-item">
                <a href="myworks.html">My Portfolio!</a>
                </li>
                <li class="nav-item">
                <a href="education.html">My Education!</a>
                </li>
            </ul>
        </nav>
    `
}

function getFooter() {
    return `<footer>
                <p>Bartosz Piech, Brooklyn NY, 2023</p>
            </footer>`
}

function validateForm() {
    var firstName = document.getElementById('firstName');
    var email = document.getElementById('email')

    if (firstName.value.length <= 1) {
        alert("Must enter first name that has more than 1 character");
        firstName.focus();
        return false;
    }else if (!((email.value).includes(".com")&&(email.value).includes("@"))) {
        alert("Must be a valid email!");
        email.focus();
        return false;
    }else {
        return true;
    }
}
