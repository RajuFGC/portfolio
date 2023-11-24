const username = 'RajuFGC'
const direction = 'desc'
const projectsContainer = document.querySelector('.projects--js')
import smallStar from './images/star.svg'
import boxIcon from './images/box.svg'
import gitHubIcon from './images/githubButton.svg'
fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
.then(response => response.json())
.then(response => {
  for (let repository of response) {
    const {description, name, stargazers_count, topics, homepage, html_url} = repository; 
    let tags = ``;
    for (let tag of topics) {
        tag += `<li class="bg-gray-400/10 py-1 px-4 rounded font-bold text-sm">${tag}</li>`
    }
    const element = `<article class="rounded-rajuborderXL overflow-clip bg-gradient-to-br from-white/10 to white/5">
    <div class="border-b border-bg h-11 p-4 flex gap-1.5 shadow-innerLight rounded-t-rajuBorder bg-gradient-to-br from-white/10 to white/5 ">
        <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
        <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
        <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
    </div>
    <div class="p-5 md:p-6 lg:p-10">
    <header class="flex gap-4 items-center mb-4">
    <h3 class="font-bold text-2xl leading-none">${name}</h3>
    <p class="bg-gray-400/10 py-1 px-4 rounded font-medium leading-none flex items-center gap-0.5 "><img src="${smallStar}" alt="image of a star" class="w-4 h-4">${stargazers_count}</p>
    </header>
    <p class="text-gray-400 font-normal text-xl leading-6 mb-4">${description}</p>
    <ul class="flex gap-2 mb-10">
    ${tags}
    </ul>
    <div class="flex flex-col md:flex-row items-start gap-4">
    <a target ="_blank" rel="noreferrer nofollow" class="bg-bg border-stroke border-2 text-accent flex gap-3 rounded-xl font-bold text-base md:text-xl py-4 px-5 items-center"  href="${homepage}"><img src="${boxIcon}" class="w-6 h-6" alt="">View demo</a>
    <a target ="_blank" rel="noreferrer nofollow" class="bg-bg border-stroke border-2 text-accent flex gap-3 rounded-xl font-bold text-base md:text-xl py-4 px-5 items-center" href="${html_url}"><img src="${gitHubIcon}" class="w-6 h-6" alt="">Source code</a>
</div>
</div>
</article>`;
if (homepage) projectsContainer.insertAdjacentHTML('afterbegin', element)
    }
}) 
.catch((e) => console.log(e))