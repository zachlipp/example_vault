<%*
const output = await tp.user.create_daily_dirs(tp);
if (output) {
    new Notice("Folders already exist!");
} else {
    new Notice("Folders created.");
}
// return here prevents creation of days/Untitled.md
return;
%>
