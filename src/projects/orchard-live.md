---
title: "Orchard Live Website"
date: "2018-11-10"
listImage: ./orchardlive-snip.png
listImageAlt: "Screenshot of the Orchard Live website"
featuredImage: ./orchardlive-snip.png
featuredImageAlt: "Screenshot of the Orchard Live website"
tech: ["Symphony", "XSLT", "CSS/Less", "Javascript"]
metaDescription: "A Symphony CMS based site to match the new Orchard Live brand"
---

With the rebrand of Orchard Entertainment as Orchard Live came an opportunity to revamp the website to create a modern site in keeping with the new brand.

As with all of the internal Orchard sites we used Symphony CMS as a basis for the back end and templating.
The front end presented interesting challenges in the form of the colourful image-based grids, and expanding blocks providing extra details about upcoming gigs.
This project instigated the creation of my [CSS Framework](/projects/css-framework) in order to have effective reusable classes to create a flexbox-based grid
which looked good no matter how many elements there were. I used a combination of XSLT templating and javascript for the toggleable panels for each listed gig,
manipulating the page query string to create shareable links where the specific gig panel would be open and on screen on page load.

Another challenge in this project was the necessity for entries to be pre-published and set to go 'live' at specific times, to coincide with gig announcements
at times when the Live team would not be at a computer to set the entry live manually. This was solved by adding a 'go live time/date' field to entries, and filtering
on both the data passed to page templates and within the template itself, so that the front-page grid would always show four items, but the entries would only be shown
after the selected 'go live' time.

- [View it live](https://orchardlive.com)
