This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About this repo.

To learn more about How this repo working:
- Cities component gets default values and ready to choose which city to show it on map.
- When choosing a city to display its data, a req with message will be sent to our Next. Js api routes to extract city name with regex, will check spelling if wrong (hardcoded for now but need dictionary or so), then a request will be made to openstreetmap to get coords of city name to send them as response with lat& long.
- By using leaflet package, we display our coords as markers with info message when hovering over the marker, with different marker color based on sentiment.
- Find the sentiments guide on the left.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

Demo: https://casita-nine.vercel.app/
