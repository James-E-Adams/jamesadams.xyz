---
title: Some musings on how we write code
date: 2018-07-07
path: /words/musings
---

Originally posted [**here**](https://levelup.gitconnected.com/some-musings-on-how-we-write-code-bc0e4fb5cab2) on 07/07/2018., while I was working at Drawboard.

---

![Gorilla thinking](./images/musings1.jpeg)

Every codebase is different. Likewise, every team (cohort…pride? What’s the collective noun for engineers? A byte?) of developers have different standards for what constitutes quality.

![A crowd of penguins in a grassy field](./images/musings2.jpeg)

Often, code smells that are considered heresy for one gaggle of devs are taken for granted as ‘the way to do things’ by their counterparts across the road.

I don’t just mean things like semicolons, tabs v spaces, or formatting. These things don’t change how the program executes (in JavaScript at least!) . I’m talking paradigms (functional vs declarative vs imperative), how to separate concerns, or even whether using nested ternaries is considered immoral. And I think many of these quirks, preferences and ideals are influenced by your environment, your coworkers (fellow pod members), and the technologies you adopt.

Let’s go through a few of these.

## Environmental influences

No matter how you spin it, your priorities are going to be a function of the size of your company/team (amongst other things, of course).

Take two similarly sized covens of devs. One is weighted under the bureaucracy of middle/upper management and enterprise release cycles — and the other is fighting to ship a product ASAP before they run out of money.

![Close up of foosball table](./images/musings3.jpeg)

The core agent at work here is urgency. If your day-to-day isn’t influenced by the rate at which you’re shipping software, then there is no urgency. And you won’t get things out the door as quickly as you could have. But — you might write more tests or less future legacy code. My thoughts on how the size of your team influences the manner in which you write code is summarized in the bulleted list below.

### Big company:

- You’re not in a hurry. Your output will be diminished. Your job is not on the line because money is less of an issue in established, profitable companies.

- You may have to deal with legacy code. This means, unfortunately, you will probably write more legacy code. You could also be dealing with technologies that aren’t well documented or easy to work with. Or worse…shudder…it could be bespoke. Closed-Sourced. Roll your own! This will add time to your work. This will make you slower.

- If someone more senior or more involved has done their job properly, you will have the dev-opsy side of things abstracted away for you. CI/CD will _just work_, you can spin up any number of environments/pipelines easily. You won’t have to spend time mucking around with the infrastructure. This should make you faster and more likely to write good tests.

- Big companies rarely have horizontal org structures. This means there could be someone(s) on your team that will only merge code if it satisfies their definition of ‘good code’. This could be good or bad.

### Comparatively, at a smaller company:

- You have to get shit done. This could mean you’re writing less unit tests. There could be less people looking at your code before it’s shipped. You might not even have a round of manual QA before users are on it. Write less brittle code, or find an efficient, effective way of writing automation that ‘guarantees’ your code does what is says on the packaging.

- You will still have to deal with legacy code. You will probably still write code that should be thrown out and rewritten eventually. Ideally you keep in mind that every chunk of code has a timeline and you should write it accordingly.

- It is easier to fight for standards that you believe in. Hopefully, it’s more of a meritocracy.

## Coworker/Tech choice influence

I’ve been fortunate enough to work with some wicked smart, switched-on programmers. Elusive 10xs. Downright motivated human beings. But I’ve also been on teams with developers who write shit code, don’t give a fuck about the product, and just want to do their 9–5, poorly, and gtfo.

Here it comes. Here comes the wild, corny, shudder-inducing thesis.

## No programmer is an island.

There. I said it. Now the troublemakers out there might be smiling smugly to themselves as they ask, ‘What about me? I’m on a team of one/I code 20 hours a day in eternal moonlight/I turned my startup into a unicorn without a single hire.’ You still use open source frameworks. You will still run into problems. You’re still dependent on other human beings!

But more seriously, who you work with strongly impacts how your code turns out. If the most value you can add is mentoring, code reviewing or ‘architecting’, it may be that you won’t even be writing code.

_"Productivity is my personal output. Generativity is the difference between the team’s output with me and without me"._ [**Source**](https://the-composition.com/the-origins-of-opera-and-the-future-of-programming-bcdaf8fbe960)

It could be that the greatest value proposition you have for the team is being an ‘enabler,’ assisting others to write great code.

Moving on, certain developers, as humans are wont to do, have opinions. Predilections, if you will. Whoever started building the product you work on could have LOVED jQuery and refused to let it die. (I’m sorry.)

Or they might have hated seeing `style.css` files in their React projects, so your whole app is built with inline styles.

But the scope of opinions is even wider. Even the choices and actions of programmers on other parts of the product will strongly influence how you write your code. If you’re a front-end developer, you’ll probably need to get some data. You might think you get it from the back-end, but it’s the back end engineers who are going to tell you how and when you can get it. (Ideally you can find a way to play nicely together.) And this will influence how you write your ‘data layer’ and your interactions with the API.

Your teammates can also have a strong impact on your personal ability and growth. Spend a year with a developer who is significantly smarter, more experienced than you, and who actually gives a fuck about you getting better, and you’ll see what I mean. I promise— you will write progressively better code.

### Looking back

Lately I’ve been reflecting on how the way I '_do_' programming has undergone radical shifts in the last couple years. Writing this article has allowed me to explore the hows and whys, without getting too much into the technical nitty-gritty. In a future post, I may actually explore what’s changed in the React code I’m churning out.
