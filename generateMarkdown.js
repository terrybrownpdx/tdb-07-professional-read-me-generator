// function to generate markdown for README
function generateMarkdown(response) {
    return `
    ##Title:
    ${response.title}

    ##Description:
    ${response.description}

    # Table of Contents
    ![Installation](#installation)
    ![Usage](#usage)
    ![Licenses](#licenses)
    ![Contributing](#contribution)
    ![Tests](#test)    
    
    ##Installation:
    ${response.installation}
    
    ##Usage:
    ${response.usage}
    
    ##Licenses:
    ${response.licenses}

    ##Badge
    ${response.badge}
    
    ##Contributing:
    ${response.contribution}
    
    #Tests:
    ${response.test}

    ##Questions
    To view the code for this project visit the github profile below.
    Github Profile: [${response.username}] (${response.username})
    For any questions contact us via email.
    Email: [${response.email}(mailto:${response.email})`;
}

module.exports = generateMarkdown;
