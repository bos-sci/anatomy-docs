### Editor Setup
* VS Code Extensions:
  - Install "[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)"
  - Install "[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)"
  - Install "[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.Prettier-vscode)"
  - Install "[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
* Other Editors
  - Prettier: https://Prettier.io/docs/en/editors.html
  - EditorConfig: https://editorconfig.org/#download
  - ESLint: https://eslint.org/docs/latest/user-guide/integrations#editors
  - Stylelint: https://stylelint.io/user-guide/integrations/editor

__Note: You shouldn't need to customize the extensions, as each should read their respective `.XXlintrc` file to get configuration options. If your particular extension is not picking up the config files, make sure you restart your editor.__

#### Formatting Options
* Manual
  - Use Prettier's shortcut in your editor of choice. 
  - Ex.: option + shift + f for VS Code on Macs
* Automated
  - Configure Prettier to format your code after each save.
  - VS Code: Settings > Format on Save. 
  - You must ensure a default formatter is available. Make Prettier your default formatter by using the command palette (cmd + shift + P) > format document > configure default formatter > choose Prettier

### Linting Options
* Manual
  - Run `npx eslint <file path>` on the command line for every file you change.
* Automated
  - If you installed the ESlint and Stylelint extensions for your editor, you should be getting linting options already.
