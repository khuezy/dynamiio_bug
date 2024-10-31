export default async function A() {
  await new Promise((res) => {
    setTimeout(res, 1000)
  })
  return <>
    A
  </>
}