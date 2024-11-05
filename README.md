# DynamicIO Error Min Repro

This is a very trivial setup that reproduces the error.

1. npm i && npm run dev
2. go to [http://localhost:3000](localhost:3000)
3. Open up developer console to see error logs
4. Click alternating on the `A` and `B` link fast until you see error. You have to click under 1s for each link.

If you remove the `loading.tsx`, error seems to goes away (99% sure)
If you disable `experimental.dynamicIO`, the error goes away (100% sure)

# DynamicIO Standalone Error

1. npm run build
2. npm run start
3. go to [http://localhost:3000/A](localhost:3000/A) and wait until page fully loads (browser spinner stops)
4. Click on "B" and see "connection closed" crash in console
