This is your interactive notes dashboard. Rank TODO items, etc.

```meta-bind-button
label: Create daily notes
icon: ""
hidden: false
class: ""
tooltip: ""
id: daily-notes
style: default
actions:
  - type: templaterCreateNote
    templateFile: templater/daily.md
    folderPath: days
    fileName: ""
    openNote: false
    openIfAlreadyExists: false
```

```tasks
not done
sort by function task.created.toISOString()
```
