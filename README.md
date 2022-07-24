Create an application that will return a random color in the command line.

It should work like this:

When a user enters `node index.js` in the command line, a block of approximately 31x9 `#` characters colored with a random color (using hex code, e.g. `#ff0000`) should be generated.

It should look pretty close to this:

![Screen Shot 2020-09-09 at 15 53 33](https://user-images.githubusercontent.com/1935696/92607675-b56bd700-f2b4-11ea-9085-67af9369fa71.png)

In addition to `node index.js`, it should also be able to accept the request for a:

- hue (e.g. green or red or blue)
- luminosity (e.g. light or dark)

...and then generate random colors that match those choices.

For example:

![Screen Shot 2020-09-09 at 15 54 42](https://user-images.githubusercontent.com/1935696/92607766-daf8e080-f2b4-11ea-9d6d-3bd8501da443.png)

## Stretch goals

- [ ] If a user types "ask" instead of a color name, print questions to ask the user for the name of the color and the luminosity
- [ ] If a user types a size in the format of `WWxHH` (eg. `31x9`) **before** the color and luminosity, it will use this as the size of the box

## Acceptance Criteria

- [x] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: repl.it demo
- [ ] [Drone bot](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-git-github/#writing-commit-messages))
