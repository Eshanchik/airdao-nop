/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.io

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import inquirer from 'inquirer';
import chalk from 'chalk';

const confirmRetirementDialog = (messages) => async () => inquirer.prompt([
  {
    type: 'list',
    name: 'retirementConfirmation',
    message: chalk.yellow(chalk.bold(messages.confirmRetirement)),
    choices: [
      {
        name: messages.no,
        value: false
      },
      {
        name: messages.yes,
        value: true
      }
    ]
  }
]);

export default confirmRetirementDialog;
