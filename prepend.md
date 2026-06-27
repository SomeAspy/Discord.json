# Discord.json
An attempt at documenting switches in the Discord settings.json

## Know anything not mentioned in here? Make a PR! All contributions welcome!

It is very easy to contribute! Everything is just JSDoc in `settings.json.d.ts`!

`README.md` is gitignored because the bot will always generate it.

If you wanna give it a go locally, just run `npm i` & `npx typedoc`.

The `prepend.md` file is what is attached to the top of the documentation.

## Config File location

### Windows
```
%appdata%\discord\settings.json
```

### Linux
```
~/.config/discord/settings.json
```

## Note
`DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING` is excluded from the table because it fucks up my tables.
This is just the `boolean` toggle for Chromium devtools in Discord.
