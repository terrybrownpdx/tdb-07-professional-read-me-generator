// function to generate markdown for README
function generateMarkdown(response) {
    return `
    # ${response.title}
    # Table of Contents
    -[description](#description)
    -[installation](#installation)
    -[usage](#usage)
    -[licenses](#licenses)
    -[contribution](#contribution)
    -[test](#test)
    -[username](#username)
    -[email](#email)

    ${response.username}
    ##username:

    ${response.description}
    ##description:

    ${response.installation}
    ##installation:

    ${response.usage}
    ##usage:

    ${response.licenses}
    ##licenses:

    ${response.contribution}
    ##contribution:

    ${response.test}
    ##test:

    ${response.username}
    ##username:

    ${response.email}
    ##email:
    `;
}

module.exports = generateMarkdown;
