# :sparkles:Toddler Level 9000

| [Setup(1-5 min)](#setup1-5-minutes) | [Toddler Games](#toddler-games) | [Important Notes](#important-notes) |

[![Watch The Game Preview](https://i.imgur.com/g9KbvNj.png)](https://www.youtube.com/watch?v=ygPlewiee5Q)

## Is this you?
[![Vegeta-Over-9000-Meme](https://media.giphy.com/media/ixYRj3H9HOzWE/giphy.gif?cid=790b7611080fabba35498312af4c896a2f458943c071bc6a&rid=giphy.gif&ct=g)]()
* **Do you struggle** in getting your adorable baby to learn their first 100 words?
* **Is your child tired** of your absolutely thrilling *cough* boring *cough* learning activities?
* **Are you waking up from restless nights desperately wishing** your child could be as awesome as Vegeta!?


#### WELL LOOK NO FURTHER.

Play more than 10+ fun-filled family games and activities in one simple app! 

Get your baby's brain to **Toddler Level 9000**! 

Well more specifically—

#### OVER 9000!!!!

[![Vegeta-Over-9000-Meme](https://media.giphy.com/media/oOfLwhLyRUoRW/giphy-downsized-large.gif?cid=790b761107d2071fe6039cdd32acce9dd8fae3dd5953ad0c&rid=giphy-downsized-large.gif&ct=g)]()

## Setup(1-5 minutes):
1. Create an [Unsplash account dev account](https://unsplash.com/developers).
2. Create an app in your unsplash account. Be aware you are limited to 50 requests per hour on a demo app.
3. Add your client id to an .env.local file(see .env.local.example for reference).
4. Setup 0Auth account. [Follow steps 1-3 only](https://lo-victoria.com/a-quick-beginners-guide-to-set-up-auth0-react).
5. `yarn install` then `yarn start` to start the server.

# Toddler Games
### What you can do:
* **Authenticate with Auth0** either by clicking "Parents" or one of the games.
*  **Teach your kids colors!** FYI images might show 1-3 different colors, but you will see the main color between all 3 images.
*  **Teach your kids animals while learning most letters of the alphabet too!** List of animals are displayed and they have to guess which one the image represents. Keep in mind the images are about 90% accurate due to the API being a bit unreliable on what it returns. I’ve done my best to make the images as relevant to the word as possible. For example making sure flashcard images available for the word also outputs relevant images from Unsplash.
* **Teach your kids food/drink items!** List food items and they have to guess which is the correct one!
* As well as seeing the word, **you child will also hear the word** and feel encouraged to play with someone responding to them.
* **Your kid can touch the images** and **watch them move**!
* **Stars increase as you complete each word round(child motivation)**.
* **Congrats page with confetti** at the end of each game. Go back to main page by clicking the logo.
* **UI created specifically for toddlers.** 
* **Many things are randomly generated so it’s fun to replay!**
    1. Images of word.
    2. Which choices you have.
    3. Sound and image at game completion.
    4. And more.

## Important Notes
### Games/Components I still want to make here:
1. Parent dashboard.
2. Match game.
3. 2 drag and drop games.
4. Numbers game.
5. Body parts game.
6. Refrigerator game(for practicing food words).
7. Through word into the basket game.

### Other Notes/Todo:
My priority for this project was just to complete some games so my kid can start learning. Usually I would take more time to focus on things like code cleanup, responsiveness and tests etc. after. For now these extra things are WIP while I work on another project.

I’m aware of these issues, they will be fixed when I have time to work on this project further:
1. I need to debounce requests—currently some rerenders are making multiple requests to the same asset source.
2. Some loading jumps despite adding a loader and checking if data returned, have to look a bit deeper into this later. Also need to move loader more in the middle.
3. Add tests.
4. Possibly use another API—Unsplash API unfortunately returns incorrect images once in awhile. So I would say currently it’s about 90% accurate in returning images that match the word. If you plan to use a part or all of this project for your own. I would advise using some other image API to return more relevant images. 
5. I didn’t focus too much on responsiveness since this game is meant to be played on a laptop/desktop with a toddler.
6. Need to do lots of code clean up in some components(especially the WhatIsThisGame Component).
7. Second sound when game completed not playing.
8. Add all strings into const variables. I'm not ok with directly injecting strings in the long-term.
9. Fix browser warnings.
10. If you have browser’s console open you’ll notice the confetti isn’t full page. Close your the console, refresh the page and it should work again. It's because this component is basing the width and height on the window.innerHeight/width and it doesn't update unless refreshed/change page.
