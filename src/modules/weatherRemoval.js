import sleep from "./sleep";

export default async function timeoutRemoval(weatherElement) {
  await sleep(200);
  weatherElement.remove();
}