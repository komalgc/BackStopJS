require('dotenv').config();

const username = process.env.DEV_UI_BFF_USERNAME;
const password = process.env.DEV_UI_BFF_PASSWORD;

module.exports = async (page, scenario, vp) => {
    // Navigate to the login page (if necessary)
    await page.goto('https://dev-ui-bff.qalara.com/login');
  

   // Type username
   await page.type('#user_register_form_email', username);
    
   // Type password
   await page.type('#user_register_form_password', password);
    
    // Click login button
    await page.click('.ant-btn.signup-button');
    
    // Wait for the page to load after login
    await page.waitForNavigation();
  };
  