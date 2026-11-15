# James Marciano

A personal portfolio website designed to show my software engineering experience.

# Starting the server locally

# Local Development Multi-Device Access

Currently, in order to have an easier time viewing the website on mobile or other sized devices without having actually deploy the website, ngrok is used as as service to create a guarded deployment based off the local host. This feature is optional, and the webiste can be run locally on a device still using `npm run dev` like normal. However, if you wish to have a url to edit the website's view on other devices, head to ngrok.com and make an account **using Google**. While Google is not mandatory, the follow up security step requires Google authentication therefore it is recommended.

Navigate to the dashboard, then to "Share Local Host". From here, install the ngrok CLI and follow the instructions on the page. On step 3 you will see a command of the following format:

`ngrok http PORT --url LINK`

Complete the following steps in your local version:

- Navigate to `.env.example` and rename the file to `.env`. Set VITE_NGROK_HOST equal to the provided link in the LINK field of the ngrok command above. Set VITE_NGROK_FORMATTED_HOST equal to the provided link without the trailing https://
- Navigate to `.ngrok_config_example.yml` and rename the file to `.ngrok_config.yml`. Replace example_email@gmail.com with the gmail you used to create your ngrok account. This protects the open port on your computer, but **ASSUMES YOU USED A GOOGLE ACCOUNT TO CREATE YOUR NGROK ACCOUNT**.

Now, you can run `npm run dev:ngrok` to recieve a link that requires google authentication to your email address. After authenticating, you can view the website freely on any device. 
