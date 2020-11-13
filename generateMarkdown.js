// function to generate markdown for README
function generateMarkdown(response) {
    return `
    ##Title:
    ${response.title}

    # Table of Contents
    -[description](#description)
    -[installation](#installation)
    -[usage](#usage)
    -[licenses](#licenses)
    -[contribution](#contribution)
    -[test](#test)
    -[username](#username)
    -[email](#email)
    
    ##Username:
    ${response.username}
    
    ##Description:
    ${response.description}
    
    ##Installation:
    ${response.installation}
    
    ##Usage:
    ${response.usage}
    
    ##Licenses:
    ${response.licenses}
    
    ##Contribution:
    ${response.contribution}
    
    #Test:
    ${response.test}

    ##Contact
    To view the code for this project visit the github profile below.
    Github Profile: [${response.username}] (${response.username})
    For any questions contact us via email.
    Email: [${response.email}(mailto:${response.email})`;
}

module.exports = generateMarkdown;
