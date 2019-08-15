# Good First Issue Demo

Fork the project:
https://github.com/cutenode/good-first-issue

```
proj
git clone https://github.com/bmoeskau/good-first-issue.git
cd good-first-issue
git checkout -b add-gfi
```

Review the contributing guidelines:
https://github.com/cutenode/good-first-issue#contributing

Install the local project for testing:
`npm i`

Verify that good-first-issue is not an option:
`good-first-issue`

Edit:
`code .`

edit data/projects.json:
```
  "good-first-issue": {
    "name": "Good First Issue",
    "q": " repo:cutenode/good-first-issue is:issue is:open sort:updated-desc label:\"good first issue\"",
    "description": "CLI for finding good first issues"
  },
```

Check current edit:
`git status`

Update the README:
```
npm run markdown
git status
```

Save changes and push:
```
git add .
git commit -m "Added good-first-issue as a project"
git push --set-upstream origin add-gfi
```

Cmd-click the link to create a PR:
https://github.com/bmoeskau/good-first-issue/pull/new/add-gfi
