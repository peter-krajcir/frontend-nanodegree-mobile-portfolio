Website Performance Optimization portfolio project
==================================================

Run the project
---------------
There are 2 main directories:
 * `src` - contains readable source code
 * `dist` - contains minified version of the source code, optimized for the better page speed
In order to run the project, you need to fork/clone/download the project and click on `dist\index.html`. You can also visit my github webapge and get the latest version. (https://github.com/peter-krajcir/frontend-nanodegree-mobile-portfolio)

Task 1 - Improve the PageSpeed score to 90 for index.html (both Mobile and Desktop version)
-------------------------------------------------------------------------------------------
###Optimization performed to get PageSpeed Insights score above 90
 * Minified all JS (a.k.a. uglyfing), CSS and HTML files using automated tool `Grunt` with specific plugins
 * Optimized the images using PageSpeed Insights
 * First I separated CSS code targeting only devices with 480px width to separate file but it didn't help much so I included all the CSS code in `index.html` file, including google's open fonts code
 * marked the render blocking javascript files with `async` keyword so they won't block the browser (specifically analytics and `js\perfmatters.js`)

Task 2 - Fix FPS when scrolling and speed up the pizza resize process
---------------------------------------------------------------------
I've found 2 bottle necks in the code.
###Issue 1
Performing JavaScript function `Math.sin` in the for-loop with many items is very time-consuming each time a user scrolls. Therefore I've moved the calculation outside of the for-loop and precalculate the value for each of the 5 pizzas before the loop. The only thing the loop does, is updating the left position of the pizza in the background. This fixed the FPS issue.

###Issue 2
The loop in the function `changePizzaSizes` looped through the elements with the class `.randomPizzaContainer` and calculated the newsize for each element. First I reduced the number of times the function `document.querySelectorAll(".randomPizzaContainer")` was used and stored the result in the variable. Then I found out that all the values calculated in the loop were the same (`offsetWidth`) so I could move it outside of the for-loop and calculate it just for one pizza and then apply it to the rest of the elements.