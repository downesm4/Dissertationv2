To use the repo on your own computer:

You will need Node.js and npm as well as XCode and Android Studio both with simulators set up. 

1.	Clone the repository –
  `git clone https://github.com/downesm4/Dissertationv2`
2.	Navigate into the project folder 
3.	Install project dependencies
  `npm install`
4. Add Capacitor for iOS
   `npx cap add ios`
5.	Run the ios simulator 
  `npm run ios` – then select a device and the simulator will open 
6.	Run the android simulator 
  `npm run android` – then select a device and the simulator will open 

---

Conventional Commits
- feat - Commits that add or remove a UI component/page
- fix - Commits that fix a bug
- refactor - Commits, that rewrite/restructure code but do not change behaviour
- style - Commits that do not affect meaning (white space, formatting)

Scope 
- Layout - Layout Templates
- UI - Commits which affect only the static UI of pages
- Interactivity - Commits which affect interactivity of the pages
- Other 

Example Commits:
feat(Layout): Added Mobile Template layout<br/>
fix(UI): fixed padding and margins on homepage<br/>
refactor(UI): Converted buttons into a reusable component<br/>
style(other): Added comments to go code<br/>



