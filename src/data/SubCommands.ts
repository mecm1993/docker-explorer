import { SubCommand } from '../models/SubCommand';
import { CommandOption } from '../models/CommandOption';

export const tertiaryOptions: Record<string, Array<SubCommand>> = {
  'key': [
    new SubCommand(
      'generate',
      'Generate and load a signing key-pair',
      'docker trust key generate NAME',
      [
          new CommandOption(
              '--dir string',
              'Directory to generate key in, defaults to current director',
          ),
      ],
    ),
    new SubCommand(
      'load',
      'Load a private key file for signing',
      'docker trust key load [OPTIONS] KEYFILE',
      [
        new CommandOption(
            '--name string',
            'Name for the loaded key (default "signer")',
        ),
      ],
    ),
  ],
  'signer': [
    new SubCommand(
      'add',
      'Add a signer',
      'docker trust signer add OPTIONS NAME REPOSITORY [REPOSITORY...]',
      [
        new CommandOption(
            '--key list',
            'Path to the signer\'s public key file',
        ),
      ],
    ),
    new SubCommand(
      'remove',
      'Remove a signer',
      'docker trust signer remove [OPTIONS] NAME REPOSITORY [REPOSITORY...]',
      [
          new CommandOption(
              '-f, --force',
              'Do not prompt for confirmation before removing the most recent signer',
          ),
      ],
    ),
  ],
};
