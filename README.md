# Wanderly — Travel & Tourism Website

## About the Project

Wanderly is a travel and tourism website created for my Web Development II (CCO5104-20P) refresher assessment.

The website is built using HTML5, CSS and JavaScript. It allows visitors to explore different travel destinations, view destination information and create a simple trip idea.

The website is designed to work on both computers and mobile phones.

## How to Run the Website

1. Open the project folder in Visual Studio Code.
2. Open the `index.html` file.
3. Right-click and select **Open with Live Server**.
4. The website will open in a web browser.

## Website Features

- Responsive design for desktop and mobile screens
- Travel destinations including Bali, Paris and the Swiss Alps
- Light and dark mode
- Interactive destination filters
- Mobile navigation menu
- Destination information
- Trip enquiry form with JavaScript feedback
- Travel illustrations and images

## Technologies Used

**HTML5:** Used to create the structure of the website, including the header, navigation, sections, images, form and footer.

**CSS:** Used to design the website, including colours, spacing, Flexbox, Grid and responsive layouts.

**JavaScript:** Used to create interactive features such as dark mode, destination filters, mobile navigation and form feedback.

## Reflection

For this assessment, I worked on a travel and tourism website using HTML, CSS and JavaScript. I found the HTML part easier because I understood how to organise the webpage into different sections, such as the header, destinations and footer. I also learned more about using CSS to make the website look good on both computers and mobile phones.

The most challenging part for me was testing the JavaScript features and checking errors. I used Chrome Developer Tools to test the mobile layout and found an error related to the website icon, which I managed to fix. I also tested the dark mode, navigation menu and destination filters to make sure they worked properly.

In Web Development II, I would like to improve my JavaScript skills, especially creating interactive features and understanding how to fix errors on my own.

## Testing and Troubleshooting

I tested the website using Google Chrome and Chrome Developer Tools.

### Tests Completed

- [x] Opened the website successfully using Live Server
- [x] Checked the desktop layout
- [x] Checked the mobile homepage
- [x] Tested the mobile navigation menu
- [x] Tested the dark mode button
- [x] Tested the Beaches destination filter
- [x] Tested the trip enquiry form feedback
- [x] Checked the JavaScript Console
- [x] Fixed the missing favicon error
- [x] Confirmed no visible Console errors after refreshing

### Further Testing

- [ ] Test all destination filters and destination details
- [ ] Test the form with missing and invalid information
- [ ] Check the full page for horizontal scrolling at 375px width

## Problems and Solutions

During testing, I found a Console error because the browser could not find the website icon (`favicon.ico`).

I fixed this by adding the following line inside the HTML head section:

`<link rel="icon" type="image/svg+xml" href="assets/hero.svg">`

After saving the file and refreshing the webpage, the error disappeared.

I also checked the website in Chrome Incognito mode to investigate other Console errors. The additional errors did not appear in Incognito mode, suggesting they were related to browser extensions.

## Accessibility

The website includes semantic HTML elements, descriptive alternative text for images, labelled form inputs and navigation buttons.

## AI Acknowledgement

I used OpenAI ChatGPT to help generate the initial HTML, CSS, JavaScript and SVG illustrations for this website. ChatGPT also helped explain the code and guide me through testing.

I opened the project in Visual Studio Code, tested the website on desktop and mobile screen sizes, checked the interactive features and fixed the missing favicon error with guidance.

## Project Files

- `index.html` — Website HTML structure
- `style.css` — Website styling and responsive design
- `script.js` — JavaScript interactions
- `assets/hero.svg` — Homepage illustration
- `assets/bali.svg` — Bali illustration
- `assets/paris.svg` — Paris illustration
- `assets/swiss.svg` — Swiss Alps illustration
- `README.md` — Project description, reflection and testing information

## Conclusion

This project helped me practise HTML, CSS and JavaScript and understand how responsive websites work. It also gave me experience using browser developer tools to identify and fix problems.