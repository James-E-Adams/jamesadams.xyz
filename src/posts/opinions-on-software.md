---
title: Random opinions on building software
description: This is a collection of thoughts I have on how software should be built, and on the teams that do it. It's non-exhaustive and subject to change according to whim, time and heat.
date: 2020-11-02
path: /words/opinions-on-software
hasMetaImage: true
---

This is a collection of thoughts I have on how software should be built, and on the teams that do it. It's non-exhaustive and subject to change according to whim, time and heat. Moreover, it will likely evolve as I (ideally) learn and grow as an engineer and human. If something resonates or you strongly disagree - [**reach out**](https://twitter.com/@jamesadams0)! I'd love to know why.


- The location of buttons shouldn't change as your page loads. On first contentful paint, if a button/other clickable element renders in some position, it shouldn't jump around when CSS/JS is finally parsed and executed. Likewise in mobile apps. This is shockingly ubiquitous across technology and it baffles me! I hate clicking on the wrong thing!
- Spending time on reducing bundle size on apps that are not public-facing or targetting mainly mobile users can be a premature optimisation trap. Obviously lots of caveats to this, especially with low hanging fruit, but it's certainly something a lot of people happily spend time on before they have paying customers.
- Similarly with overoptimising db queries.
- Stupid code over smart, terse code. It took me a little bit to unlearn this - but code that has a low cognitive requirement to grok is far superior than playing code golf. Especially if other people have to maintain it.
- Antirez's post on comments is pretty similar to how I feel about commenting code https://twitter.com/jamesadams0/status/1308635484621426688.
- If you drop columns from DBs without thinking about what happens when you ship it, you're gonna have a bad time. Db migrations often run before new app code gets deployed (or maybe you have several nodes handling requests), so your app code will expect the column to be there and raise unexpected errors as the DB has already dropped the column.
- I've seen teams move way quicker with interpreted languages (like Ruby or JS) over compiled languages (C# and TS). This is obviously a vast oversimplification and of course there are many other variables like team size, code quality etc - but I haven't seen the rule broken yet. There's probably a corollary around shipping bugs that could have been prevented with a type system. 🤷‍♀️
- Accessibility is easier to do incrementally rather than at the last minute. Or put differently, it's easier to keep an app accessible than to make an inaccessible app accessible.
- Too many meetings is bad and wastes time. Not enough meetings can lead to losing shared context. I still haven't found the goldilocks solution here.
- Engineers are more likely to respect managers promoted internally. Likewise, even if the manager isn't coding, they'll be better at their job if they understand the platform at least as well as the engineers.
- The return on investment of providing shared meals to your staff is incalculable. If you continually gather a product-building team around a table and feed them good food, it will pay endless dividends.
- The inverse is also insightful. If you don't provide enough free shit like food and drinks, engineers (and co) will think the company is miserly and be less likely to go the extra mile. I once worked for a company that didn't provide coffee. It still leaves a bad taste in my mouth when I think about it.
- This is certainly corrolation not causation, but instituting an unlimited leave policy is more productive for both staff and employers. If you hire highly motivated people and give them meaningful work, they will simply trend towards getting lots of it done, whilst feeling enabled by their employer to take a rest when necessary. I would do this if I ran a company.
- Engineers should rotate through on-call. It's hard to really grasp the ramifications of breaking production until you're the one trying to fix it. You also begin to develop a spidey sense when something is going wrong on the platform.
- Investing in (good) CI/CD is an incredible use of time, with the conferred benefit growing exponentially as a function of the number of engineers. It's just common sense - if you have a quicker and more precise feedback loop (tests), you'll ship higher quality code quicker. It's also the only way to enable larger teams to maintain productivity without breaking shit.
