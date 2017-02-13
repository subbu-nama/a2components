# Installation
Clone the repository and do </br>
npm install </br>

# Building library
npm run build </br>

# Publish component
npm adduser </br>
npm publish </br>

# Consume component
npm install a2components </br>

# Import component and added to declarations in app.module.ts
import { HelloWorld } from 'a2componentspublish/components'; </br>
declarations: [
    HelloWorld
  ] </br>

# Add HelloWorld selector to the app.component.html
<wtc-hello-world></ wtc-hello-world>