# Multiwall Creator

Multiwall creator is a quick & dirty app that takes multiple single monitor wallpapers **of the same resolution** and merges them into a single wallpaper. It merges the wallpapers in alphabetical order creating multiple output wallpapers.

For example if you have 10 images of 1920x1080 in the "/in" folder and specify that you have 2 screens, then 5 wallpapers of 3840x1080 will be output.

## Setup

1. Install [Node.js](https://nodejs.org/en/)
2. Install [graphicsmagick](http://www.graphicsmagick.org/) (tested with version 1.3.24-Q16-win64-dll.exe). **Note:** If you're using windows I recommend using their [sourceforge](https://sourceforge.net/projects/graphicsmagick/files/graphicsmagick-binaries/1.3.24/) mirror as their FTP was really slow for me.
3. Run `NPM install` to install the required dependencies
4. Create a folder called `in` in the same directory as `main.js`
5. Add all single monitor wallpapers to the `in` directory. **Note:** Make sure that the number of image in the `in` directory is a multiple of the number of screens you have. For example 3 monitors the app requires 3, 6, 9, 12, 15, etc... wallpapers.
6. Run `node main.js`
7. All of your combined wallpapers will be output to `/out/`