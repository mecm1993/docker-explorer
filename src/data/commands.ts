import { Command } from '../models/Command';
import { CommandOption } from '../models/CommandOption';

export const secondaryOptions: Record<string, Array<Command>> = {
  'builder': [
    new Command(
      'build',
      'Build an image from a Dockerfile',
      'docker builder build [OPTIONS] <PATH | URL>',
      'Replace <PATH | URL> with the route to the Dockerfile.',
      [
        new CommandOption(
          '-c, --cpu-shares int',
          'CPU shares (relative weight)',
        ),
        new CommandOption(
          '-f, --file string',
          'Name of the Dockerfile (Default is \'PATH/Dockerfile\')',
        ),
      ],
    ),
    new Command(
      'prune',
      'Remove build cache',
      'docker builder prune',
      '',
      [
        new CommandOption(
          '-a, --all',
          'Remove all unused build cache, not just dangling ones',
        ),
        new CommandOption(
          '-f, --force',
          'Do not prompt for confirmation',
        ),
      ],
    ),
  ],
  'config': [
    new Command(
      'create',
      'Create a config from a file or STDIN',
      'docker config create [OPTIONS] CONFIG <FILE>',
      'Replace <FILE> with the source file.',
      [
        new CommandOption(
          '-l, --label list',
          'Config labels',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Display detailed information on one or more configs',
      'docker config inspect [OPTIONS] CONFIG [CONFIG...]',
      '',
      [
        new CommandOption(
          '-f, --format string',
          'CPU shares (relative weight)',
        ),
        new CommandOption(
          '-f, --file string',
          'Format the output using the given Go template',
        ),
      ],
    ),
    new Command(
      'ls',
      'List configs',
      'docker config ls [OPTIONS]',
      '',
      [
        new CommandOption(
          '-f, --filter filter',
          'Filter output based on conditions provided',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only display IDs',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more configs',
      'docker config rm CONFIG [CONFIG...]',
      '',
      [],
    ),
  ],
  // container: [
    
  // ],
  'context': [
    new Command(
      'create',
      'Create a context',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'export',
      'Export a context to a tar or kubeconfig file',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'import',
      'Import a context from a tar or zip file',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Display detailed information on one or more contexts',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'ls',
      'List contexts',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more contexts',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'update',
      'Update a context',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'use',
      'Set the current docker context',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
  ],
  // image: [
  //   {
  //     value: 'build',
  //     label: 'Build an image from a Dockerfile',
  //     usage: 'docker image build [OPTIONS] <PATH | URL>',
  //     nb: 'Replace <PATH | URL> with path of the Dockerfile.',
  //     options: [
  //       {
  //         flag: '-f, --file <string>',
  //         message: 'Name of the Dockerfile (Default is \'PATH/Dockerfile\')',
  //       },
  //       {
  //         flag: '-q, --quiet',
  //         message: 'Suppress the build output and print image ID on success',
  //       },
  //     ],
  //   },
  //   {
  //     value: 'history',
  //     label: 'Show the history of an image',
  //     usage: 'docker image history [OPTIONS] <IMAGE>',
  //     nb: 'Replace <IMAGE> with the name of the image and tag.',
  //     options: [
  //       {
  //         flag: '-H, --human',
  //         message: 'Print sizes and dates in human readable format (default true)',
  //       },
  //       {
  //         flag: '-q, --quiet',
  //         message: 'Only show numeric IDs',
  //       },
  //     ],
  //   },
  //   {
  //     value: 'import',
  //     label: 'Import the contents from a tarball to create a filesystem image',
  //     usage: 'docker image import [OPTIONS] <file|URL|- REPOSITORY[:TAG]>',
  //     nb: 'Replace <file|URL|- REPOSITORY[:TAG]> with the name of the file.',
  //     options: [
  //       {
  //         flag: '-c, --change list',
  //         message: 'Apply Dockerfile instruction to the created image',
  //       },
  //       {
  //         flag: '-m, --message <string>',
  //         message: 'Set commit message for imported image',
  //       },
  //     ],
  //   },
  //   {
  //     value: 'inspect',
  //     label: 'Display detailed information on one or more images',
  //     usage: 'docker image inspect [OPTIONS] IMAGE [IMAGE...]',
  //     options: [
  //       {
  //         flag: '-f, --format string',
  //         message: 'Format the output using the given Go template'
  //       },
  //     ],
  //   },
  //   {
  //     value: 'load',
  //     label: 'Load an image from a tar archive or STDIN',
  //     usage: 'docker image load [OPTIONS]',
  //     options: [
  //       {
  //         flag: '-i, --input string',
  //         message: 'Read from tar archive file, instead of STDIN',
  //       },
  //       {
  //         flag: '-q, --quiet',
  //         message: 'Suppress the load output',
  //       },
  //     ],
  //   },
  //   {
  //     value: 'ls',
  //     label: 'List images',
  //     usage: 'docker image ls [OPTIONS] <REPOSITORY[:TAG]>',
  //     nb: 'Replace <REPOSITORY[:TAG]> with the name.',
  //     options: [
  //       {
  //         flag: '-a, --all',
  //         message: 'Show all images (default hides intermediate images)',
  //       },
  //       {
  //         flag: '-q, --quiet',
  //         message: 'Only show numeric IDs',
  //       },
  //     ],
  //   },
  //   {
  //     value: 'prune',
  //     label: 'Remove unused images',
  //     usage: 'docker image prune [OPTIONS]',
  //     options: [
  //       {
  //         flag: '-a, --all',
  //         message: 'Remove all unused images, not just dangling one',
  //       },
  //       {
  //         flag: '-f, --force',
  //         message: 'Do not prompt for confirmation',
  //       },
  //     ],
  //   },
  //   {
  //     value: 'pull',
  //     label: 'Pull an image or a repository from a registry',
  //     usage: 'docker image pull [OPTIONS] <NAME[:TAG|@DIGEST]>',
  //     nb: 'Replace <NAME[:TAG|@DIGEST]> with the name of the image.',
  //     options: [
  //       {
  //         flag: '-a, --all-tags',
  //         message: 'Download all tagged images in the repository',
  //       },
  //       {
  //         flag: '-q, --quiet',
  //         message: 'Suppress verbose output',
  //       },
  //     ],
  //   },
  //   {
  //     value: 'push',
  //     label: 'Push an image or a repository to a registry',
  //     usage: 'docker image push [OPTIONS] <NAME[:TAG]>',
  //     nb: 'Replace <NAME[:TAG] with the name of the image.',
  //     options: [
  //       {
  //         flag: '--disable-content-trust',
  //         message: 'Skip image signing (default true)',
  //       },
  //     ],
  //   },
  //   {
  //     value: 'rm',
  //     label: 'Remove one or more images',
  //     usage: 'docker image rm [OPTIONS] IMAGE [IMAGE...]',
  //     options: [
  //       {
  //         flag: '-f, --force',
  //         message: 'Force removal of the image',
  //       },
  //     ],
  //   },
  //   {
  //     value: 'save',
  //     label: 'Save one or more images to a tar archive',
  //     usage: 'docker image save [OPTIONS] IMAGE [IMAGE...]',
  //     options: [
  //       {
  //         flag: '-o, --output string',
  //         message: 'Write to a file, instead of STDOUT',
  //       },
  //     ],
  //   },
  //   {
  //     value: 'tag',
  //     label: 'Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE',
  //     usage: 'docker image tag <SOURCE_IMAGE[:TAG]> <TARGET_IMAGE[:TAG]>',
  //     nb: 'Replace <SOURCE_IMAGE[:TAG]> with the original image and <TARGAT_IMAGE[:TAG]> with the destination image.'
  //   }
  // ],
  // network: [
  //   {
  //     value: 'connect',
  //     label: 'Connect a container to a network',
  //   },
  //   {
  //     value: 'create',
  //     label: 'Create a network',
  //   },
  //   {
  //     value: 'disconnect',
  //     label: 'Disconnect a container from a network',
  //   },
  //   {
  //     value: 'inspect',
  //     label: 'Display detailed information on one or more networks',
  //   },
  //   {
  //     value: 'ls',
  //     label: 'List networks',
  //   },
  //   {
  //     value: 'prune',
  //     label: 'Remove all unused networks',
  //   },
  //   {
  //     value: 'rm',
  //     label: 'Remove one or more networks',
  //   },
  // ],
  // node: [
  //   {
  //     value: 'demote',
  //     label: 'Demote one or more nodes from manager in the swarm',
  //   },
  //   {
  //     value: 'inspect',
  //     label: 'Display detailed information on one or more nodes',
  //   },
  //   {
  //     value: 'ls',
  //     label: 'List nodes in the swarm',
  //   },
  //   {
  //     value: 'promote',
  //     label: 'Promote one or more nodes to manager in the swarm',
  //   },
  //   {
  //     value: 'ps',
  //     label: 'List tasks running on one or more nodes, defaults to current node',
  //   },
  //   {
  //     value: 'rm',
  //     label: 'Remove one or more nodes from the swarm',
  //   },
  //   {
  //     value: 'update',
  //     label: 'Update a node',
  //   },
  // ],
  // plugin: [
  //   {
  //     value: 'create',
  //     label: 'Create a plugin from a rootfs and configuration. Plugin data directory must contain config.json and rootfs directory.',
  //   },
  //   {
  //     value: 'disable',
  //     label: 'Disable a plugin',
  //   },
  //   {
  //     value: 'enable',
  //     label: 'Enable a plugin',
  //   },
  //   {
  //     value: 'inspect',
  //     label: 'Display detailed information on one or more plugins',
  //   },
  //   {
  //     value: 'install',
  //     label: 'Install a plugin',
  //   },
  //   {
  //     value: 'ls',
  //     label: 'List plugins',
  //   },
  //   {
  //     value: 'push',
  //     label: 'Push a plugin to a registry',
  //   },
  //   {
  //     value: 'rm',
  //     label: 'Remove one or more plugins',
  //   },
  //   {
  //     value: 'set',
  //     label: 'Change settings for a plugin',
  //   },
  //   {
  //     value: 'upgrade',
  //     label: 'Upgrade an existing plugin',
  //   },
  // ],
  // secret: [
  //   {
  //     value: 'create',
  //     label: 'Create a secret from a file or STDIN as content',
  //   },
  //   {
  //     value: 'inspect',
  //     label: 'Display detailed information on one or more secrets',
  //   },
  //   {
  //     value: 'ls',
  //     label: 'List secrets',
  //   },
  //   {
  //     value: 'rm',
  //     label: 'Remove one or more secrets',
  //   },
  // ],
  // service: [
  //   {
  //     value: 'create',
  //     label: 'Create a new service',
  //   },
  //   {
  //     value: 'inspect',
  //     label: 'Display detailed information on one or more services',
  //   },
  //   {
  //     value: 'logs',
  //     label: 'Fetch the logs of a service or task',
  //   },
  //   {
  //     value: 'ls',
  //     label: 'List services',
  //   },
  //   {
  //     value: 'ps',
  //     label: 'List the tasks of one or more services',
  //   },
  //   {
  //     value: 'rm',
  //     label: 'Remove one or more services',
  //   },
  //   {
  //     value: 'rollback',
  //     label: 'Revert changes to a service\'s configuration',
  //   },
  //   {
  //     value: 'scale',
  //     label: 'Scale one or multiple replicated services',
  //   },
  //   {
  //     value: 'update',
  //     label: 'Update a service',
  //   },
  // ],
  // stack: [
  //   {
  //     value: 'deploy',
  //     label: 'Deploy a new stack or update an existing stack',
  //   },
  //   {
  //     value: 'ls',
  //     label: 'List stacks',
  //   },
  //   {
  //     value: 'ps',
  //     label: 'List the tasks in the stack',
  //   },
  //   {
  //     value: 'rm',
  //     label: 'Remove one or more stacks',
  //   },
  //   {
  //     value: 'services',
  //     label: 'List the services in the stack',
  //   },
  // ],
  // swarm: [
  //   {
  //     value: 'ca',
  //     label: 'Display and rotate the root CA',
  //   },
  //   {
  //     value: 'init',
  //     label: 'Initialize a swarm',
  //   },
  //   {
  //     value: 'join',
  //     label: 'Join a swarm as a node and/or manager',
  //   },
  //   {
  //     value: 'join-token',
  //     label: 'Manage join tokens',
  //   },
  //   {
  //     value: 'leave',
  //     label: 'Leave the swarm',
  //   },
  //   {
  //     value: 'unlock',
  //     label: 'Unlock swarm',
  //   },
  //   {
  //     value: 'unlock-key',
  //     label: 'Manage the unlock key',
  //   },
  //   {
  //     value: 'update',
  //     label: 'Update the swarm',
  //   },
  // ],
  'system': [
    new Command(
      'df',
      'Show docker disk usage',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'events',
      'Get real time events from the server',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'info',
      'Display system-wide information',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'prune',
      'Remove unused data',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
  ],
  'trust': [
    new Command(
      'key',
      'Manage keys for signing Docker images',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'signer',
      'Manage entities who can sign Docker images',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Return low-level information about keys and signatures',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'revoke',
      'Remove trust for an image',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'sign',
      'Sign an image',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
  ],
  'volume': [
    new Command(
      'create',
      'Create a volume',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Display detailed information on one or more volumes',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'ls',
      'List volumes',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'prune',
      'Remove all unused local volumes',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more volumes',
      '',
      '',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
  ]
}
