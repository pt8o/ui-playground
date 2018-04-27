# PeerUI Playground

An in-browser playground for testing the PeerUI library.

Try it out: https://staging.superko.org/peerio/ui-playground/

## About PeerUI
PeerUI is a component library built from scratch for the Peerio desktop client (`peerio-desktop`). It borrows heavily from `react-toolbox`, since the client originally used RTB. PeerUI is intended to be a bit more flexible and tailor-made to Peerio's branding.

## Build Notes
The build for this is pretty fragile because to be honest this isn't really made to be hackable... For example, I don't require `peerio-desktop` as a dependency because it's quite heavy; instead there's a `cp-desktop` command that copies the relevant PeerUI JSX files from your local `peerio-desktop` folder, assuming (a) it's located in the same folder as `ui-playground`, and (b) you haven't changed the folder names from the repo names.

On top of that, after the copy is done, there are several files in `ui-library` that you need to change manually because they reference `peerio-icebear`, or involve calls to the Peerio server, or whatever other `peerio-desktop` specific thing. PeerUI was not developed as a truly independent library, so this whole process is very hacky.

## TODOS
* CustomIcon remove 'selected'
* Chip add comment
* MaterialIcons inherit parent color
* consolidate 'primary' themes
* MenuItem remove tooltips from comment
* ProgressBar remove 'light' theme
