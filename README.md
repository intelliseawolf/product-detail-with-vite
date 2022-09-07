# Repro

- run `npm i`
- run `npm run preview`
- go to http://localhost:3000/carousel, which should fail with `Error: render function or template not defined in component: carousel`
(going to http://localhost:3000 and clicking on `Carousel` should be fine, since that's not SSR, but reloading afterwards will trigger the issue)

## Notes

 - running `npm run dev` and visiting the carousel route http://localhost:3000/carousel does not lead to the same issue, only the prod SSR build
