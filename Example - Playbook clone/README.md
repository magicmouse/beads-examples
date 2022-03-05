## Example - Playbook clone experiments

[Playbook.com](http://playbook.com) is a software as a service web app, that lets artists and creatives organize and share artwork.

As an experiment, I tried to improve their UI, by cloning a subset of their product. I made a version that resizes much more gracefully. The top navigation bar uses multiple different linear interpolations of sizes for various parts of the screen, so that for each different screen size combination, the optimal proportions are used. No simple static percentage is optimal. It takes some tweaking to get the parameter right, and then the graphical interface looks good on the widest possible range of devices.

A lot of companies design for say the iPhone, but the product stinks on a Kindle Fire. There are billions of mobile devices, and they come in all shapes in sizes. No single model of phone has more than 3% of the total market at any one time.


![screenshot](http://beadslang.com/projects/playbook/edit_screen.gif)


The clone can be [run here](http://beadslang.com/projects/playbook/playbook.html)


##### Program difficulty: Medium


To reveal the hidden device picker screen, press the INSERT key on your keyboard, that will toggle the device emulator, which allows you to imagine what the product will look like on various devices.

Some of the features this example explores are how to make a dark mode/ light mode color table, how to store and load user preferences using a cookie, and how to superimpose a drag thumb on a scrollbar so you adjust a divider width.

YouTube has a [video explaining some of these features](https://youtu.be/CSpwHFfxcz0).

