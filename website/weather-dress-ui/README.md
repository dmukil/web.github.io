

## Special Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Since this project was built with React, deploying it to a web server (e.g. Apache) requires some additional configurations on the server side. That is, for the routing module, one must enable the `rewrite module` so that Apache knows how to properly route the views of the site.

*IMPORTANT: Since we don't have root permissions, such actions must executed by a user (e.g. the TAs, Admin) with the proper rights in order to allow such a functionality. If not known, the instructions to enable the options is explained in [here (Enable rewriting module for Apache2 web server)](https://www.digitalocean.com/community/tutorials/how-to-rewrite-urls-with-mod_rewrite-for-apache-on-ubuntu-16-04) or running this `sudo a2enmod rewrite` command as `root`.*

Proving that the web page has been created as required, we add some screenshots of the views: home page and legal imprint. See them under folder `screenshots`.

The web page is accessible under [this address](http://clabsql.clamv.jacobs-university.de/~rflorent/)

---

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
