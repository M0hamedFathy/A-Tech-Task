# A-Tech Jira Task

## Table of content

- [Description](#project-description)
- [Usage](#usage)
- [Directory](#directory-structure)
- [Technologies](#technologies-i-used)
- [Installation](#installation)

## Project Description

This is an Jira demo Application for displaying tasks, you can drag and drop between the tasks lits, and search functionality.

## Usage

The Website consists of few sections, is the header section the header includes website logo, the states the Deals state does show how many deals that we have, And lastly the user dropdown settings.

At the user drop down you can see logout, my team etc in case the back-end supports login functionality it would be working.

Below that you can find the filters which is native reusable component and the search input field. the search input field is fuzzy. You can search using the company name.

The main component which is the deals lists component. It does include 5 lists.

- **Potential Value.**
- **Focus.**
- **Contact Made.**
- **Offer Sent.**
- **Getting Ready.**

## Directory Structure

- Core for the core components.
- Module for the modules and each one includes it's own routing incase you would like to have lazy loading.
- Shared does include any reusable component, models, services, directives and custom pipes.

### The application contains the following directories:

- core it would come in handy in case we have interceptors, guards or handling authentication.
- module: for the main modules that you have includes their details and services.
- Shared module: for the reusable components all gathered under the ui module, and models.
- assets: assets folder includes the project assets, And the color variables for the project.
- App-routing : for the main routing configurations.
- styles.scss: for the main styling.

## Technologies used

- **Angular** for creating a SPA.
- **Angular-CDK** for drag and drop.
- **Angular CLI** for scaffolding the project.
- **bootstrap** for styling.
- **SCSS** for styling and creating the logo, custom styling.

## Installation

Simply type in Terminal **_npm install_** and then **_ng serve_** for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
