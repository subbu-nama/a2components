#Pre-Requisites
Node.js – Make sure NodeJS is installed in your system </br>
Refer "https://nodejs.org/en/download/" to download and install Node.js. </br>

# Installation
Clone the repository and do </br>
npm install </br>

# Generate doc
gulp typedoc </br>

# Building library
npm run build </br>

# Publish component
npm adduser </br>
npm publish </br>

# Consume component
npm install a2components </br>

# Import component and added to declarations in app.module.ts
import { HelloAngular2 } from 'a2components/components'; </br>
declarations: [
    HelloAngular2 
  ] </br>

# Add HelloAngular2 selector to the app.component.html
wtc-hello-angular2