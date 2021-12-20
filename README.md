
# Prerequisite
* Docker installed

# Running the tests
        docker-compose -f docker-compose.yml up --build

# Reporting
Reports are generated under cypress/reports

HTML report is generated under cypress/reports/mochareports/index.html

Reporting inspired by: [Mochawesome example on github](https://github.com/qaboxletstest/cypress-docker-mochawesome-crossbrowser)

# Tasks
- [x] Nordic sea monster 404 in titles and filenames
- [x] Dockerized (docker folder + docker-compose.yml)
- [x] Written in Cypress
- [x] Cypress with additional frameworks (cypress and mocha related reporting)
- [x] Runs both on Firefox and Chrome (parallel)
- [x] Reporting (based on mocha)
- Tests
  - [x] Checked anchor links' response code
  - [x] Checked console errors
  - [x] Checked response codes