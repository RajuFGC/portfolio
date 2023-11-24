const username = 'RajuFGC'
const direction = 'desc'
const repositoriesContainer = document.querySelector('.repositoreis--js')

fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
.then(response => response.json())
.then(response => {
  for (let repository of response) {
    const {name, html_url} = repository; 
    const element = `<li><a href="${html_url}">${name}</a></li>`;
    repositoriesContainer.insertAdjacentHTML('beforeend', element)
    }
})
.catch((e) => console.log(e))






        <li class="bg-gray-400/10 py-1 px-4 rounded font-bold text-sm">HTML</li>
        <li class="bg-gray-400/10 py-1 px-4 rounded font-bold text-sm">CSS</li>
        <li class="bg-gray-400/10 py-1 px-4 rounded font-bold text-sm">JS</li>