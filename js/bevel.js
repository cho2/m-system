function RunBlankOnLinux() {
	Utils.run_command("exo-open --launch WebBrowser %u http://blankonlinux.or.id");
}
function RunDevBlankOnLinux() {
	Utils.run_command("exo-open --launch WebBrowser %u http://dev.blankonlinux.or.id");
}
function RunFacebook() {
	Utils.run_command("exo-open --launch WebBrowser %u https://www.facebook.com/blankon.linux");
}
function RunTwitter() {
	Utils.run_command("exo-open --launch WebBrowser %u https://twitter.com/BlankOnLinux");
}

// gnome control center

function RunWallpaper() {
	Utils.run_command("gnome-control-center background");
}
function RunAccount() {
	Utils.run_command("gnome-control-center user-accounts");
}
function RunSound() {
	Utils.run_command("gnome-control-center sound");
}
function RunInfo() {
	Utils.run_command("gnome-control-center info");
}
function RunBluetooth() {
	Utils.run_command("gnome-control-center bluetooth");
}
function RunRegional() {
	Utils.run_command("gnome-control-center region");
}
function RunKeyboard() {
	Utils.run_command("gnome-control-center keyboard");
}
function RunPower() {
	Utils.run_command("gnome-control-center power");
}
function RunDate() {
	Utils.run_command("gnome-control-center datetime");
}
function RunDisplay() {
	Utils.run_command("gnome-control-center display");
}
function RunMouse() {
	Utils.run_command("gnome-control-center mouse");
}
function RunNetwork() {
	Utils.run_command("gnome-control-center network");
}
function RunOnline() {
	Utils.run_command("gnome-control-center online-accounts");
}
function RunPrinter() {
	Utils.run_command("gnome-control-center printers");
}
function RunShare() {
	Utils.run_command("gnome-control-center sharing");
}
