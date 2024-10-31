export default async function B() {
  await new Promise((res) => {
    setTimeout(res, 1000)
  })
  return <>
    B
  </>
}