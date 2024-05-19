function toggleTheme() {
    var element = document.body;
    if (element.classList.contains('dark-mode')) {
        element.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
        themeIcon.src = 'sample2.png'; // Path to the light theme icon
    } else {
        element.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeIcon.src = 'sample.png';
    }
}

function applyStoredTheme() {
    var storedTheme = localStorage.getItem('theme');
    var element = document.body;
    if (storedTheme === 'light-mode') {
        if (!element.classList.contains('light-mode')) {
            element.classList.remove('dark-mode');
            element.classList.add('light-mode');
        }
    } else {
        if (!element.classList.contains('dark-mode')) {
            element.classList.remove('light-mode');
            element.classList.add('dark-mode');
        }
    }
}

function printTranscript() {
    const transcript = `DevOps a set of practices to build test and release your code in small frequent steps. One of the core practices of DevOps is continuous integration which has developers commit their code to a shared repository often on a daily basis. Each commit triggers an automated workflow on a CI server that can notify developers of any issues integrating their changes. When a repo evolves in small steps like this, it prevents what's known as merge hell. Imagine Mary, your back-end developer, builds a new API for your product. Shortly after, Jane, your front-end developer, starts work on a new UI. A few months later, when it comes time to merge their features, we find that they're completely incompatible. The build fails, and we now have to spend a bunch of time and money resolving these conflicts. Let's go ahead and build a continuous integration pipeline now to see how it prevents issues like this. Here on GitHub, I have a Node.js web app. In order to deliver this out to my customers, I need to run three commands: test, build, and deploy. I can automate this entire process in the cloud by using a CI service like GitHub Actions. First, I create a workflow and then I tell it to run on every push to the master branch. The event triggers a job that runs on a Linux container in the cloud, and we tell the container what to do as a series of steps. First, it checks out the code in this GitHub repo, then sets up Node.js, installs my dependencies, and runs my tests, build, and deploy commands. Now, anytime we commit code to the master branch in this repo, it will run this workflow. If any of the steps fail, the bad software won't be delivered to our customers, and we'll automatically know there's an issue that needs to be addressed. At the end of the day, CI/CD offers two main benefits: it helps you automate things that would otherwise have to be done manually by developers, which will increase your velocity, but it also detects small problems early before they can grow into major disasters, and that results in higher code quality. This has been CI/CD or DevOps in 100 seconds. Make sure to hit the like button if you want to see more short videos like this and stay tuned tomorrow for a full DevOps project using GitHub Actions. Thanks for watching and I will see you in the next one.`;
    alert(transcript);
}

document.addEventListener('DOMContentLoaded', applyStoredTheme);
