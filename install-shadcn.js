// version: 2024-08-09
const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

const components = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "collapsible",
  "command",
  "context-menu",
  "table",
  "dialog",
  "drawer",
  "dropdown-menu",
  "form",
  "hover-card",
  "input",
  "input-otp",
  "label",
  "menubar",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "skeleton",
  "slider",
  "sonner",
  "switch",
  "tabs",
  "textarea",
  "toast",
  "toggle",
  "toggle-group",
  "tooltip",
];

const installComponents = async () => {
  try {
    for (const component of components) {
      console.log(`Installing ${component}...`);
      const { stdout, stderr } = await execAsync(
        `yes N | npx shadcn-ui@latest add ${component}`
      );

      // Log stdout if there's output
      if (stdout) {
        console.log(stdout);
      }

      // If stderr contains output, log it as a warning
      // if (stderr) {
      //   if (stderr.trim() === " ") {
      //     // console.log(
      //     //   `No errors reported during the installation of ${component}.`
      //     // );
      //   } else {
      //     console.warn(
      //       `Warning during installation of ${component}: ${stderr}`
      //     );
      //   }
      // }
    }

    // Install additional packages
    console.log("Installing additional packages...");
    const { stdout: stdout2, stderr: stderr2 } = await execAsync(
      `npm install @tanstack/react-table react-hook-form zod`
    );

    // Log stdout if there's output
    if (stdout2) {
      console.log(stdout2);
    }

    // Handle potential errors in stderr
    // if (stderr2) {
    //   if (stderr2.trim() === " ") {
    //     // console.log(
    //     //   `No errors reported during the installation of additional packages.`
    //     // );
    //   } else {
    //     console.warn(
    //       `Warning during installation of additional packages: ${stderr2}`
    //     );
    //   }
    // }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

installComponents();
