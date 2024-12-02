

require('dotenv').config();

const username = process.env.DEV_UI_USERNAME;
const password = process.env.DEV_UI_PASSWORD;

module.exports = async (page, scenario, vp) => {
    // Navigate to the login page (if necessary)
    await page.goto('https://dev-ui.qalara.com/signin/');
  
    // Type username
    await page.type('#user_register_form_email', username);
    
    // Type password
    await page.type('#user_register_form_password', password);
    
    // Click login button
    await page.click('.ant-btn.signup-button');
    
    // Wait for navigation or the element after login to ensure login completes
    await page.waitForNavigation();
    // or you can wait for a specific element after login
    // await page.waitForSelector('#post-login-element');
  };
  