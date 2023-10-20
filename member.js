function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsButton = document.getElementById("member-skills-button");
    var memberSkillsButtonIcon = document.getElementById("member-skills-button-icon");
    var memberSkillsButtonIconClass = memberSkillsButtonIcon.getAttribute("class");
    if (memberSkillsButtonIconClass == "fas fa-chevron-down") {
        memberSkillsButtonIcon.setAttribute("class", "fas fa-chevron-up");
        memberSkillsButton.setAttribute("class", "member-skills-button member-skills-button-active");
        memberSkills.setAttribute("class", "member-skills member-skills-active");
    } else {
        memberSkillsButtonIcon.setAttribute("class", "fas fa-chevron-down");
        memberSkillsButton.setAttribute("class", "member-skills-button");
        memberSkills.setAttribute("class", "member-skills");
    }
}