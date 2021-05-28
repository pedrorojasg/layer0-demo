## Assignment:
First, I implemented steps 1-11.

Then, I understand how the code works.

Then, I added a prefetch route to '/p/:path*' (routes.ts).

To improve performance, I decided to implement Deepfetching to PDP. So, I added to service-workers.ts the CSS image selectors of PDP page (.primary-image, .productthumbnail, .lazyloaded).

I could verify how in the collection pages, the prefetch and deepfetching started working as expected.


## Next steps:
I would like to implement deepfetching for PDP styling sheets.
I would like to do more tests to could optimize the configuration.

## Tests results
* My demo with Layer0: https://www.webpagetest.org/result/210528_BiDcFF_b8e2aef7df123513d841b788320bd207/
* Original site: https://www.webpagetest.org/result/210528_AiDcEF_0471a089cfbfbe5b80a257de8b6e0693/

My demo using the power of Layer0 has great performance improvements web vitals in Largest and Total Blocking Time.

There were improvements in Security Score and other important perfomance indicators: Contentful Paint, First Byte, Start Render, First Contentful Paint, Speed Index and Fully loaded time.

## Feedback to Layer0:
I had fun with this project, was great understand how Layer 0 works. The docs are self explanatory.

There are some broken links in the original repo README:
* (https://docs.layer0.co/guides/routingg) => should be (https://docs.layer0.co/guides/routing)

I found the challenge great to gain a first look how Layer0 works and their capabilities.

It confuses me a bit that there were two routes.ts files, one in the root and one inside the src folder. It would be good to explain this better in the docs and / or in the challenge

+++++++++++++++++
# Layer0 Traditional Template

The repository for the layer0 Traditional template.

Layer0 for Traditional Sites enables traditional Server Side Rendered websites (i.e. jQuery, PHP, VanillaJS, etc.) to take advantage of the performance benefits of Layer0's advanced caching and predictive prefetching.

## Documentation

Visit [documentation](https://docs.layer0.co/guides/traditional_sites) for more details.

## Getting Started

Make sure to use NodeJS 12.x

Clone the repo, and in your terminal run:
```
npm install
```

This will install all dependencies and link interdependent package.

## Example Workflow

### Step 1)
Update *layer0.config.js*, *package.json*, *shoppingFlowRouteHandler.ts* with your project domain name.

### Step 2)
Next we need to configure the caching in our newly created project. To do so, add a route for each URL you want to cache to the *routes.ts*

Refer to the guides on [Routing](https://docs.layer0.co/guides/routingg) and [Caching](https://docs.layer0.co/guides/caching) for the full syntax to use in your *routes.js* file.

You should be able to run your project using:
```
npm start
```

Caching is turned off during development. This is done to ensure that developers don't see stale responses after making changes to their code or other upstream APIs. If you want to use cacheing function in development run your server with following command:
```
layer0 run --cache
```

### Step 3)
By default, only HTML content is prefetched. In order to achieve truly instant page transitions, all of the assets needed to render the content that appears above the fold need to be prefetched. These typically include images, CSS, and JavaScript.

In order to prefetch Images, CSS & JavaSCript go into your *service-worker.ts* file and update selectors.

Refer to the guides on [Deep Fetching](https://app.layer0.co/guides/traditional#section_deep_fetching) for the full syntax to use in your *service-worker.ts* file.

## Deploying an App

To deploy your site, you must first sign up for an account. [Sign up here for free](https://app.layer0.co/signup). 
Once you have an account, you can deploy your site using the deploy command:
```
layer0 deploy --team=[team-name]
```