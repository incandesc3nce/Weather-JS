export default function createSummary() {
  const summary = document.createElement("div");
  summary.classList.add("summary");

  const condition = document.createElement("div");
  condition.classList.add("condition");
  const icon = document.createElement("img");
  icon.classList.add("icon");
  icon.setAttribute("alt", "weather icon");

  const text = document.createElement("div");
  text.classList.add("text");

  const temp = document.createElement("div");
  temp.classList.add("temp");
  const actualTemp = document.createElement("div");
  actualTemp.classList.add("actual-temp");

  const feelsLikeContainer = document.createElement("div");
  feelsLikeContainer.textContent = "Feels like";
  const feelsLike = document.createElement("span");
  feelsLike.classList.add("feels-like");

  summary.appendChild(condition);
  summary.appendChild(temp);

  condition.appendChild(icon);
  condition.appendChild(text);

  temp.appendChild(actualTemp);
  temp.appendChild(feelsLikeContainer);
  feelsLikeContainer.appendChild(feelsLike);

  return summary;
}
