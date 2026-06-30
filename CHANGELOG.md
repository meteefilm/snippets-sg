# Change Log

All notable changes to the "snippets-sg" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

- Initial release

## [1.5.1]

- Replace the extension icon with a professional snippets/utility themed icon.
- Exclude the previous `post-it.png` icon from packaged output.

## [1.5.0]

- Add project hook snippets based on `nt-nsw-register/layout/hooks`.
- Add shorter project hook prefixes such as `uhp`, `uhai`, `uhaf`, and `uha`.
- Add utility-fns v2 snippets for imports, validation, payload, object, string, date, UUID, safe execution, and null helpers.
- Add direct null helper snippets such as `ufns`, `ufna`, and dashed aliases like `uf-ns`.
- Add client and Node UUID snippets for utility-fns.
- Improve TypeScript `onInputTextChange` snippets with a short local event type alias and typed state updater.
- Add common React snippets for `useState`, typed `useState`, `useEffect`, and React imports.
- Add TypeScript `onInputCheckedChange` snippet.
- Add JavaScript React (`.jsx`) snippet contributions.
- Add a snippet validation script.
- Align JavaScript `useConfig` prefixes with TypeScript and avoid `ufp` collision.
- Remove accidental self dependency from extension metadata.
- Exclude old VSIX packages and node_modules from extension packaging.
