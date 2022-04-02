// Create a function to generate markdown for README
function generateMarkdown(data) {
  //Create constant that store user license selection
  const licenseChoice = data.license;
  //To verify
console.log(licenseChoice);
//Depending on choice, user gets a generated page, that is clickable.
function renderLicenseBadge() {
  if (licenseChoice == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
} else if (licenseChoice == "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
} else if (licenseChoice == "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
} else if (licenseChoice == "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
} else if (licenseChoice == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
} else if (licenseChoice == "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
} 
else if (licenseChoice == "Open") {
  return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
} 
else {return
   "";}
}
//Returns all user data, and creates the readme.
//Includes clickable links.
  return `
  # ${data.projectName}
  ## ${data.license}
  ${renderLicenseBadge()}


 
  # Description:
  ${data.description}

  # Table of Content:

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# Installation
${data.installation}

# Usage
${data.usage}

# Contributing
${data.contributing}

# Test
${data.tests}

# Questions
Here is the following information to reach the creator:

- Github Username: [${data.username}](https://github.com/${data.username})
- Email Address: ${data.email}

`;

}

module.exports = generateMarkdown;
