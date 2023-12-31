const { Menu } = require("electron");

module.exports = () => {
  let template = [
    {
      label: "Items",
      submenu: [],
    },
    {
      role: "editMenu",
    },
    {
      role: "windowMenu",
    },
    {
      role: "help",
      submenu: [],
    },
  ];

  if (process.platform === "darwin") template.unshift({ role: "appMenu" });

  let menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);
};
