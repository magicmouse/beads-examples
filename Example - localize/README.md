
## Localization Utility

This is an example of how you can use the Beads language to quickly make useful web apps, desktop and mobile applications. This particualr product was intended to be a desktop app. It needs to be a desktop app because it does a lot of file manipulation on your local drive, reading in and merging string files, etc.

You first click on the folder icon to locate the source code file that needs to be scanned for localizable strings. After it finds all the localizable strings, that becomes the "base language" for the product, and you can add more localizations. You can have as many languages as you want.  

Each little colored chip in the display corresponds to a message. In the example below, we have just started the Spanish translation, and the first 3 translations we did were marked as "tentative" because we are aren't sure the translation is good. The green chips mean the translation is finalized. The white cells show missing translations, that need to be done.

The utility stores the external translation phrase dictionaries in Excel-friendly tab delimited format (sometimes call CSV format, although we aren't using comma-delimited for obvious reasons). We have buttons so you can do rough translations via Google Translate, which works remarkeably well for many computer oriented phrases. There is no substutute for a native speaker, but I have found google to be correct more than 80% of the time, so it definitely helps.

This is the handy graphical interactive localization utility for Beads, but could easily be adapted to some other source language, as it only needs to be able to parse enough of your source code to extract the strings that need translation.

 It allows you to visit Google translate to get your translation started, and lets you keep track of your translation progress, add new languages, etc.
 
It is smart enough to detect when the original phrase has changed so that you might need to re-translate strings, if the meaning of the base language changed.

Beads has a wonderful localization methodology, that people will find user friendly and convenient.

for a [video explanation of how to use it](https://youtu.be/xKQ9Uj8o_4w)

![screenshot](https://beadslang.com/examples/localize/screenshot.gif)

In the Beads language, to mark a localized string you append brackets after the string literal:  "Hello World'[], then this tool will assign the next unique string number and update the source code automatically. 

The program is about 1000 lines of code, about 4000 words. It took about 2 weeks to build.

See beadslang.com for the SDK download.
Feel free to ask any questions on the Discord server at https://discord.gg/pTAdsSW


