# Weather App
This program is a weather app which is primarily an introduction to using JavaScript's `promise` and `async/await`. This was made using the [Open Weather Map](https://openweathermap.org/current) API.

Unlike my previous projects with Rails, this project did not make use of Environment Variables because, well, it's just for demonstration on Frontend development. However, I highly recommend their use.

## How to run
Either click on the Github Pages link or do the following:

1. Clone the repo with `git clone git@github.com:qamk/weather-app.git`
2. Enter the directory `cd weather-app`
3. Open up the `dist/index.html` file in your browser.

## Tasks
The main task was just to use promises in some fashion and display some weather data from a user's query.

One thing I may do is add some `.gif` or `.svg` to display based on the weather description.

## Resources
The following resources were useful and may be useful/interesting to you:

- Asset Management with Webpack
  - https://webpack.js.org/guides/asset-management/
- Named Parameters (keyword arguments)
  - https://stackoverflow.com/questions/11796093/is-there-a-way-to-provide-named-parameters-in-a-function-call-in-javascript
- All about promises (You Don't Know JS)
  - https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md
- Output files to directories using Webpack
  - https://stackoverflow.com/questions/39798095/multiple-html-files-using-webpack



## Discussion
This was a very nice exercise. I got much more familiar with webpack, SCSS/Sass and, of course, Javascript -- especially asynchronous Javascript. There is plenty to learn, especially with regards to catching errors from promises.

My module `domCreator` is probably one I will reuse again when I want to use Javascript to create elements. If nothing else, it's a testament to how refactoring your code can help immensely (you can check the earlier commits). `domEditor` is not yet used so I may remove it. `styles.scss` was fun to create. I mainly used it so styles were easy to vary and I recommend it even for a project this small.

Overall this was quite enjoyable and a good learning experience and I would recommend making a similar app to practise the aforementioned skills.