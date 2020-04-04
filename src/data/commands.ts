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
  'container': [
    new Command(
      'attach',
      'Attach local standard input, output, and error streams to a running container',
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
      'commit',
      'Create a new image from a container\'s changes',
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
      'cp',
      'Copy files/folders between a container and the local filesystem',
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
      'create',
      'Create a new container',
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
      'diff',
      'Inspect changes to files or directories on a container\'s filesystem',
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
      'exec',
      'Run a command in a running container',
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
      'Export a container\'s filesystem as a tar archive',
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
      'Display detailed information on one or more containers',
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
      'kill',
      'Kill one or more running containers',
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
      'logs',
      'Fetch the logs of a container',
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
      'ist containers',
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
      'pause',
      'Pause all processes within one or more containers',
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
      'port',
      'List port mappings or a specific mapping for the container',
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
      'Remove all stopped containers',
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
      'rename',
      'Rename a container',
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
      'restart',
      'Restart one or more containers',
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
      'Remove one or more containers',
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
      'run',
      'Run a command in a new container',
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
      'start',
      'Start one or more stopped containers',
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
      'stats',
      'Display a live stream of container(s) resource usage statistics',
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
      'stop',
      'Stop one or more running containers',
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
      'top',
      'Display the running processes of a container',
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
      'unpause',
      'Unpause all processes within one or more containers',
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
      'Update configuration of one or more containers',
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
      'wait',
      'Block until one or more containers stop, then print their exit codes',
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
  'image': [
    new Command(
      'build',
      'Build an image from a Dockerfile',
      'docker image build [OPTIONS] <PATH | URL>',
      'Replace <PATH | URL> with path of the Dockerfile.',
      [
        new CommandOption(
          '-f, --file <string>',
          'Name of the Dockerfile (Default is \'PATH/Dockerfile\')',
        ),
        new CommandOption(
          '-q, --quiet',
          'Suppress the build output and print image ID on success',
        ),
      ],
    ),
    new Command(
      'history',
      'Show the history of an image',
      'docker image history [OPTIONS] <IMAGE>',
      'Replace <IMAGE> with the name of the image and tag.',
      [
        new CommandOption(
          '-H, --human',
          'Print sizes and dates in human readable format (default true)',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only show numeric IDs',
        ),
      ],
    ),
    new Command(
      'import',
      'Import the contents from a tarball to create a filesystem image',
      'docker image import [OPTIONS] <file|URL|- REPOSITORY[:TAG]>',
      'Replace <file|URL|- REPOSITORY[:TAG]> with the name of the file.',
      [
        new CommandOption(
          '-c, --change list',
          'Apply Dockerfile instruction to the created image',
        ),
        new CommandOption(
          '-m, --message <string>',
          'Set commit message for imported image',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Display detailed information on one or more images',
      'docker image inspect [OPTIONS] IMAGE [IMAGE...]',
      '',
      [
        new CommandOption(
          '-f, --format string',
          'Format the output using the given Go template'
        ),
      ],
    ),
    new Command(
      'load',
      'Load an image from a tar archive or STDIN',
      'docker image load [OPTIONS]',
      '',
      [
        new CommandOption(
          '-i, --input string',
          'Read from tar archive file, instead of STDIN',
        ),
        new CommandOption(
          '-q, --quiet',
          'Suppress the load output',
        ),
      ],
    ),
    new Command(
      'ls',
      'List images',
      'docker image ls [OPTIONS] <REPOSITORY[:TAG]>',
      'Replace <REPOSITORY[:TAG]> with the name.',
      [
        new CommandOption(
          '-a, --all',
          'Show all images (default hides intermediate images)',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only show numeric IDs',
        ),
      ],
    ),
    new Command(
      'prune',
      'Remove unused images',
      'docker image prune [OPTIONS]',
      '',
      [
        new CommandOption(
          '-a, --all',
          'Remove all unused images, not just dangling one',
        ),
        new CommandOption(
          '-f, --force',
          'Do not prompt for confirmation',
        ),
      ],
    ),
    new Command(
      'pull',
      'Pull an image or a repository to a registry',
      'docker image pull [OPTIONS] <NAME[:TAG|@DIGEST]>',
      'Replace <NAME[:TAG|@DIGEST] with the name of the image.',
      [
        new CommandOption(
          '-a, --all-tags',
          'Download all tagged images in the repository',
        ),
        new CommandOption(
          '-q, --quiet',
          'Suppress verbose output',
        ),
      ],
    ),
    new Command(
      'push',
      'Push an image or a repository to a registry',
      'docker image push [OPTIONS] <NAME[:TAG]>',
      'Replace <NAME[:TAG] with the name of the image.',
      [
        new CommandOption(
          '--disable-content-trust',
          'Skip image signing (default true)',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more images',
      'docker image rm [OPTIONS] IMAGE [IMAGE...]',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Force removal of the image',
        ),
      ],
    ),
    new Command(
      'save',
      'Save one or more images to a tar archive',
      'docker image save [OPTIONS] IMAGE [IMAGE...]',
      '',
      [
        new CommandOption(
          '-o, --output string',
          'Write to a file, instead of STDOUT',
        ),
      ],
    ),
    new Command(
      'tag',
      'Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE',
      'docker image tag <SOURCE_IMAGE[:TAG]> <TARGET_IMAGE[:TAG]>',
      'Replace <SOURCE_IMAGE[:TAG]> with the original image and <TARGAT_IMAGE[:TAG]> with the destination image.',
      [
        new CommandOption(
          '',
          '',
        ),
      ],
    ),
  ],
  'network': [
    new Command(
      'connect',
      'Connect a container to a network',
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
      'create',
      'Create a network',
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
      'disconnect',
      'Disconnect a container from a network',
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
      'Dos[;ay detailed information on one or more networks',
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
      'List networks',
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
      'Remove all unused networks',
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
      'Remove one or more networks',
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
  'node': [
    new Command(
      'demote',
      'Demote one or more nodes from manager in the swarm',
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
      'Display detailed information on one or more nodes',
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
      'List nodes in the swarm',
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
      'promote',
      'Promote one or more nodes to manager in the swarm',
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
      'ps',
      'List tasks running on one or more nodes, defaults to current node',
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
      'Remove one or more nodes from the swarm',
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
      'Update a node',
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
  'plugin': [
    new Command(
      'create',
      'Create a plugin from a rootfs and configuration. Plugin data directory must contain config.json and rootfs directory',
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
      'disable',
      'Disable a plugin',
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
      'enable',
      'Enable a plugin',
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
      'Display detailed information on one or more plugins',
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
      'install',
      'Install a plugin',
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
      'List plugins',
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
      'push',
      'Push a plugin to a registry',
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
      'Remove one or more plugins',
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
      'set',
      'Change settings for a plugin',
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
      'upgrade',
      'Upgrade an existing plugin',
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
  'secret': [
    new Command(
      'create',
      'Create a secret from a file or STDIN as content',
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
      'Display detailed information on one or more secrets',
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
      'List secrets',
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
      'Remove one or more secrets',
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
  'service': [
    new Command(
      'create',
      'Create a new service',
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
      'Display detailed information on one or more services',
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
      'logs',
      'Fetch the logs of a service or task',
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
      'List services',
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
      'ps',
      'List the tasks of one or more services',
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
      'Remove one or more services',
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
      'rollback',
      'Revert changes to a service\'s configuration',
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
      'scale',
      'Scale one or multiple replicated services',
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
      'Update a service',
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
  'stack': [
    new Command(
      'deploy',
      'Deploy a new stack or update an existing stack',
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
      'List stacks',
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
      'ps',
      'List the tasks in the stack',
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
      'Remove one or more stacks',
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
      'services',
      'List the services in the stack',
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
  'swarm': [
    new Command(
      'ca',
      'Display and rotate the root CA',
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
      'intialize',
      'Initialize a swarm',
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
      'token',
      'Join a swarm as a node and/or manager',
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
      'join-token',
      'Manage join tokens',
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
      'leave',
      'Leave the swarm',
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
      'unlock',
      'Unlock swarm',
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
      'unlock-key',
      'Manage the unlock key',
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
      'Update the swarm',
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
  'system': [
    new Command(
      'df',
      'Show docker disk usage',
      'docker system df [OPTIONS]',
      '',
      [
        new CommandOption(
          '-v, --verbose',
          'Show detailed information on space usage',
        ),
      ],
    ),
    new Command(
      'events',
      'Get real time events from the server',
      'docker system events [OPTIONS]',
      '',
      [
        new CommandOption(
          '-f, --filter filter',
          'Filter output based on conditions provided',
        ),
      ],
    ),
    new Command(
      'info',
      'Display system-wide information',
      'docker system info [OPTIONS]',
      '',
      [
        new CommandOption(
          '-f, --format string',
          'Format the output using the given Go template',
        ),
      ],
    ),
    new Command(
      'prune',
      'Remove unused data',
      'docker system prune [OPTIONS]',
      '',
      [
        new CommandOption(
          '-a, --all',
          'Remove all unused images not just dangling ones',
        ),
        new CommandOption(
          '-f, --force',
          'Do not prompt for confirmation',
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
      'docker volume create [OPTIONS] [VOLUME]',
      '',
      [
        new CommandOption(
          '-d, --driver string',
          'Specify volume driver name (default "local")',
        ),
        new CommandOption(
          '-o, --opt map',
          'Set driver specific options (default map[])',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Display detailed information on one or more volumes',
      'docker volume inspect [OPTIONS] VOLUME [VOLUME...]',
      '',
      [
        new CommandOption(
          '-f, --format string',
          'Format the output using the given Go template',
        ),
      ],
    ),
    new Command(
      'ls',
      'List volumes',
      'docker volume ls [OPTIONS]',
      '',
      [
        new CommandOption(
          '-f, --filter filter',
          'Provide filter values (e.g. \'dangling=true\')',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only display volume names',
        ),
      ],
    ),
    new Command(
      'prune',
      'Remove all unused local volumes',
      'docker volume prune [OPTIONS]',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Do not prompt for confirmation',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more volumes',
      'docker volume rm [OPTIONS] VOLUME [VOLUME...]',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Force the removal of one or more volumes',
        ),
      ],
    ),
  ]
}
