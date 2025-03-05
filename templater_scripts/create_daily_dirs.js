async function create_daily_dirs(tp) {
	const pathWithinVault = "days";
	const date = tp.date.now("MM-DD-YYYY");
	const daily_directories = ["meetings", "coding", "messages", "documents"];

	// TODO: Create templates for each type of note
	for (const dir of daily_directories) {
		const folder = `${pathWithinVault}/${date}/${dir}/`
		exists = await tp.file.exists(folder);
		if (!exists) {
			await tp.file.create_new("", "untitled", false, folder)
		}
	}
	return exists;
}
module.exports = create_daily_dirs;
