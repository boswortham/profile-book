# Design Doc for Platform Computing

## About

This project is being produced as an assignment for a [Platform Computing Course](https://github.com/csusbdt/4500-2021-spring/wiki/syllabus) at CSUSB. It's genuinely something I'm interested in continuing development for after the class ends, so we'll see how far I get with it.

## Concept

My goal is to make a ["Profile Book"](https://translate.google.com/translate?sl=ja&tl=en&u=https://kakakumag.com/houseware/?id%3D11809) web application.

## Requirements

The requirements for this class are as follows:

- Uses JSON stringify and parse
- Uses Node.js
- Uses an outside API

### Fulfilling Requirements

This concept can fulfill the requirements in the following ways:

- Use JSON to store to and load from templates for allowable question types (true/false, multiple choice, free entry, etc.).
- Use Node.js with MongoDB to easily handle JSON←→Database transfer of information.
- Use an outside API for timezone data, weather data, or verification that the user is not a bot.

### Features Wishlist

- Ability for the organizer to create custom field entries throughout the book, with templates available as jumping off points.
- Organizer "About Me" / "About Event" page (similar to foldout in physical profile book.
- Uniform profile for signers, with some entries mandatory, others non-mandatory.
- Ability to mark some answers visible to everyone, some visible only to the organizer.
- Ability for the signer to see "organizer view" and "signer view" preview of what users with different privilege levels see of their entry in the book.
- Sends code to signers where they can access the book they signed after the fact. Code acts as "not quite a password" for non-registered users in conjunction with the email address they used at the time they signed the given book.
- Ability, at time of registration / once registered, to enter email/code pairs and have them connected to users' accounts.

### Features of MVP

Realistically, we cannot achieve these features in a single semester's time span. Instead, we will focus on a **minimum viable product**.

- Predefined fields for both organizer/event "about" page and signer profile pages.
- Very simple "about" page; maybe just a header and a description text field. Maybe users can't even create their own book and it's just one, big, public book for everyone to sign as a proof of concept.
- Uniform profile for signers with all entries mandatory.
- All answers visible to all parties.
- No preview mode.
- No email/password system. Book is publicly available at an address. (Consider clearing the database every 3 hours using a script or something.)
- No user accounts / no editing after the fact.
- Limit of 10 or so signer profiles.

### Potential for Abuse

- Until the full version, don't have any fields which encourage entry of real personal data.
- For the full version, use a blocklist for banned words.
- For the full version, have a place to report abuse.
- For the full version, have a code of conduct/TOS.
