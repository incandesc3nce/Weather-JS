export default function toggleLoading() {
  const body = document.querySelector('body');
  if (body.querySelector('.loader-night')) {
    body.removeChild(body.querySelector('.loader-night'));
  } else {
    const loader = document.createElement('div');
    loader.classList.add('loader-night');
    body.appendChild(loader);
  }
}