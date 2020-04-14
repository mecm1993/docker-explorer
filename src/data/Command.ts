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
      'docker container attach [OPTIONS] CONTAINER',
      '',
      [
        new CommandOption(
          '--detach-keys string',
          'Override the key sequence for detaching a container',
        ),
      ],
    ),
    new Command(
      'commit',
      'Create a new image from a container\'s changes',
      'docker container commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]',
      '',
      [
        new CommandOption(
          '-a, --author string',
          'Author (e.g., "John Hannibal Smith <hannibal@a-team.com>")',
        ),
        new CommandOption(
          '-c, --change list',
          'Apply Dockerfile instruction to the created image',
        ),
        new CommandOption(
          '-m, --message string',
          'Commit message',
        ),
        new CommandOption(
          '-p, --pause',
          'Pause container during commit (default true)',
        ),
      ],
    ),
    new Command(
      'cp',
      'Copy files/folders between a container and the local filesystem',
      'docker container cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-',
      '',
      [
        new CommandOption(
          '-a, --archive',
          'Archive mode (copy all uid/gid information)',
        ),
        new CommandOption(
          '-L, --follow-link',
          'Always follow symbol link in SRC_PATH',
        ),
      ],
    ),
    new Command(
      'create',
      'Create a new container',
      'docker container create [OPTIONS] IMAGE [COMMAND] [ARG...]',
      '',
      [
        new CommandOption(
          '-e, --env list',
          'Set environment variables',
        ),
        new CommandOption(
          '-h, --hostname string',
          'Container host name',
        ),
        new CommandOption(
          '-i, --interactive',
          'Keep STDIN open even if not attached',
        ),
        new CommandOption(
          '-p, --publish list',
          'Publish a container\'s port(s) to the host',
        ),
        new CommandOption(
          '-P, --publish-all',
          'Publish all exposed ports to random ports',
        ),
        new CommandOption(
          '-t, --tty',
          'Allocate a pseudo-TTY',
        ),
        new CommandOption(
          '-v, --volume list',
          'Bind mount a volume',
        ),
      ],
    ),
    new Command(
      'diff',
      'Inspect changes to files or directories on a container\'s filesystem',
      'docker container diff CONTAINER',
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
      'docker container exec [OPTIONS] CONTAINER COMMAND [ARG...]',
      '',
      [
        new CommandOption(
          '-d, --detach',
          'Detached mode: run command in the background',
        ),
        new CommandOption(
          '-e, --env list',
          'Set environment variables',
        ),
        new CommandOption(
          '-i, --interactive',
          'Keep STDIN open even if not attached',
        ),
        new CommandOption(
          '-t, --tty',
          'Allocate a pseudo-TTY',
        ),
      ],
    ),
    new Command(
      'export',
      'Export a container\'s filesystem as a tar archive',
      'docker container export [OPTIONS] CONTAINER',
      '',
      [
        new CommandOption(
          '-o, --output string',
          'Write to a file, instead of STDOUT',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Display detailed information on one or more containers',
      'docker container inspect [OPTIONS] CONTAINER [CONTAINER...]',
      '',
      [
        new CommandOption(
          '-f, --format string',
          'Format the output using the given Go template',
        ),
        new CommandOption(
          '-s, --size',
          'Display total file sizes',
        ),
      ],
    ),
    new Command(
      'kill',
      'Kill one or more running containers',
      'docker container kill [OPTIONS] CONTAINER [CONTAINER...]',
      '',
      [
        new CommandOption(
          '-s, --signal string',
          'Signal to send to the container (default "KILL")',
        ),
      ],
    ),
    new Command(
      'logs',
      'Fetch the logs of a container',
      'docker container logs [OPTIONS] CONTAINER',
      '',
      [
        new CommandOption(
          '--details',
          'Show extra details provided to logs',
        ),
        new CommandOption(
          '-f, --follow',
          'Follow log output',
        ),
        new CommandOption(
          '--tail string',
          'Number of lines to show from the end of the logs (default "all")',
        ),
      ],
    ),
    new Command(
      'ls',
      'List containers',
      'docker container ls [OPTIONS]',
      '',
      [
        new CommandOption(
          '-a, --all',
          'Show all containers (default shows just running)',
        ),
        new CommandOption(
          '-l, --latest',
          'Show the latest created container (includes all states)',
        ),
      ],
    ),
    new Command(
      'pause',
      'Pause all processes within one or more containers',
      'docker container pause CONTAINER [CONTAINER...]',
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
      'docker container port CONTAINER [PRIVATE_PORT[/PROTO]]',
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
      'docker container prune [OPTIONS]',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Do not prompt for confirmation',
        ),
      ],
    ),
    new Command(
      'rename',
      'Rename a container',
      'docker container rename CONTAINER NEW_NAME',
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
      'docker container restart [OPTIONS] CONTAINER [CONTAINER...]',
      '',
      [
        new CommandOption(
          '-t, --time int',
          'Seconds to wait for stop before killing the container (default 10)',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more containers',
      'docker container rm [OPTIONS] CONTAINER [CONTAINER...]',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Force the removal of a running container (uses SIGKILL)',
        ),
        new CommandOption(
          '-l, --link',
          'Remove the specified link',
        ),
        new CommandOption(
          '-v, --volumes',
          'Remove anonymous volumes associated with the container',
        ),
      ],
    ),
    new Command(
      'run',
      'Run a command in a new container',
      'docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]',
      '',
      [
        new CommandOption(
          '-d, --detach',
          'Run container in background and print container ID',
        ),
        new CommandOption(
          '-e, --env list',
          'Set environment variables',
        ),
        new CommandOption(
          '-i, --interactive',
          'Keep STDIN open even if not attached',
        ),
        new CommandOption(
          '-p, --publish list',
          'Publish a container\'s port(s) to the host',
        ),
        new CommandOption(
          '-P, --publish-all',
          'Publish all exposed ports to random ports',
        ),
        new CommandOption(
          '-t, --tty',
          'Allocate a pseudo-TTY',
        ),
        new CommandOption(
          '-v, --volume list',
          'Bind mount a volume',
        ),
      ],
    ),
    new Command(
      'start',
      'Start one or more stopped containers',
      'docker container start [OPTIONS] CONTAINER [CONTAINER...]',
      '',
      [
        new CommandOption(
          '-a, --attach',
          'Attach STDOUT/STDERR and forward signals',
        ),
        new CommandOption(
          '-i, --interactive',
          'Attach container\'s STDIN',
        ),
      ],
    ),
    new Command(
      'stats',
      'Display a live stream of container(s) resource usage statistics',
      'docker container stats [OPTIONS] [CONTAINER...]',
      '',
      [
        new CommandOption(
          '-a, --all',
          'Show all containers (default shows just running)',
        ),
      ],
    ),
    new Command(
      'stop',
      'Stop one or more running containers',
      'docker container stop [OPTIONS] CONTAINER [CONTAINER...]',
      '',
      [
        new CommandOption(
          '-t, --time int',
          'Seconds to wait for stop before killing it (default 10)',
        ),
      ],
    ),
    new Command(
      'top',
      'Display the running processes of a container',
      'docker container top CONTAINER [ps OPTIONS]',
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
      'docker container unpause CONTAINER [CONTAINER...]',
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
      'docker container update [OPTIONS] CONTAINER [CONTAINER...]',
      '',
      [
        new CommandOption(
          '-c, --cpu-shares int',
          'CPU shares (relative weight)',
        ),
        new CommandOption(
          'm, --memory bytes',
          'Memory limitw',
        ),
      ],
    ),
    new Command(
      'wait',
      'Block until one or more containers stop, then print their exit codes',
      'docker container wait CONTAINER [CONTAINER...]',
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
      'docker context create [OPTIONS] CONTEXT',
      '',
      [
        new CommandOption(
          '--default-stack-orchestrator string',
          'Default orchestrator for stack operations to use with this context (swarm|kubernetes|all)',
        ),
        new CommandOption(
          '--description string',
          'Description of the context',
        ),
        new CommandOption(
          '--docker stringToString',
          'set the docker endpoint (default [])',
        ),
      ],
    ),
    new Command(
      'export',
      'Export a context to a tar or kubeconfig file',
      'docker context export [OPTIONS] CONTEXT [FILE|-]',
      '',
      [
        new CommandOption(
          '--kubeconfig',
          'Export as a kubeconfig file',
        ),
      ],
    ),
    new Command(
      'import',
      'Import a context from a tar or zip file',
      'docker context import CONTEXT FILE|-',
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
      'docker context inspect [OPTIONS] [CONTEXT] [CONTEXT...]',
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
      'List contexts',
      'docker context ls [OPTIONS]',
      '',
      [
        new CommandOption(
          '--format string',
          'Pretty-print contexts using a Go template',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only show context names',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more contexts',
      'docker context rm CONTEXT [CONTEXT...]',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Force the removal of a context in use',
        ),
      ],
    ),
    new Command(
      'update',
      'Update a context',
      'docker context update [OPTIONS] CONTEXT',
      '',
      [
        new CommandOption(
          '--default-stack-orchestrator string',
          'Default orchestrator for stack operations to use with this context (swarm|kubernetes|all)',
        ),
        new CommandOption(
          '--description string',
          'Description of the context',
        ),
        new CommandOption(
          '--docker stringToString',
          'set the docker endpoint (default [])',
        ),
      ],
    ),
    new Command(
      'use',
      'Set the current docker context',
      'docker context use CONTEXT',
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
      'docker network connect [OPTIONS] NETWORK CONTAINER',
      '',
      [
        new CommandOption(
          '--alias strings',
          'Add network-scoped alias for the container',
        ),
        new CommandOption(
          '--link list',
          'Add link to another container',
        ),
      ],
    ),
    new Command(
      'create',
      'Create a network',
      'docker network create [OPTIONS] NETWORK',
      '',
      [
        new CommandOption(
          '-d, --driver string',
          'Driver to manage the Network (default "bridge")',
        ),
        new CommandOption(
          '-o, --opt map',
          'Set driver specific options (default map[])',
        ),
      ],
    ),
    new Command(
      'disconnect',
      'Disconnect a container from a network',
      'docker network disconnect [OPTIONS] NETWORK CONTAINER',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Force the container to disconnect from a network',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Display detailed information on one or more networks',
      'docker network inspect [OPTIONS] NETWORK [NETWORK...]',
      '',
      [
        new CommandOption(
          '-f, --format string',
          'Format the output using the given Go template',
        ),
        new CommandOption(
          '-v, --verbose',
          'Verbose output for diagnostics',
        ),
      ],
    ),
    new Command(
      'ls',
      'List networks',
      'docker network ls [OPTIONS]',
      '',
      [
        new CommandOption(
          '-f, --filter filter',
          'Provide filter values (e.g. \'driver=bridge\')',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only display network IDs',
        ),
      ],
    ),
    new Command(
      'prune',
      'Remove all unused networks',
      'docker network prune [OPTIONS]',
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
      'Remove one or more networks',
      'docker network rm NETWORK [NETWORK...]',
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
      'docker node demote NODE [NODE...]',
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
      'docker node inspect [OPTIONS] self|NODE [NODE...]',
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
      'List nodes in the swarm',
      'docker node ls [OPTIONS]',
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
      'promote',
      'Promote one or more nodes to manager in the swarm',
      'docker node promote NODE [NODE...]',
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
      'docker node ps [OPTIONS] [NODE...]',
      '',
      [
        new CommandOption(
          '-f, --filter filter',
          'Filter output based on conditions provided',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only display task IDs',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more nodes from the swarm',
      'docker node rm [OPTIONS] NODE [NODE...]',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Force remove a node from the swarm',
        ),
      ],
    ),
    new Command(
      'update',
      'Update a node',
      'docker node update [OPTIONS] NODE',
      '',
      [
        new CommandOption(
          '--availability string',
          'Availability of the node ("active"|"pause"|"drain")',
        ),
        new CommandOption(
          '--role string',
          'Role of the node ("worker"|"manager")',
        ),
      ],
    ),
  ],
  'plugin': [
    new Command(
      'create',
      'Create a plugin from a rootfs and configuration. Plugin data directory must contain config.json and rootfs directory',
      'docker plugin create [OPTIONS] PLUGIN PLUGIN-DATA-DIR',
      '',
      [
        new CommandOption(
          '--compress',
          'Compress the context using gzip',
        ),
      ],
    ),
    new Command(
      'disable',
      'Disable a plugin',
      'docker plugin disable [OPTIONS] PLUGIN',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Force the disable of an active plugin',
        ),
      ],
    ),
    new Command(
      'enable',
      'Enable a plugin',
      'docker plugin enable [OPTIONS] PLUGIN',
      '',
      [
        new CommandOption(
          '--timeout int',
          'HTTP client timeout (in seconds) (default 30)',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Display detailed information on one or more plugins',
      'docker plugin inspect [OPTIONS] PLUGIN [PLUGIN...]',
      '',
      [
        new CommandOption(
          '-f, --format string',
          'Format the output using the given Go template',
        ),
      ],
    ),
    new Command(
      'install',
      'Install a plugin',
      'docker plugin install [OPTIONS] PLUGIN [KEY=VALUE...]',
      '',
      [
        new CommandOption(
          '--alias string',
          'Local name for plugin',
        ),
        new CommandOption(
          '--disable',
          'Do not enable the plugin on install',
        ),
        new CommandOption(
          '--grant-all-permissions',
          'Grant all permissions necessary to run the plugin',
        ),
      ],
    ),
    new Command(
      'ls',
      'List plugins',
      'docker plugin ls [OPTIONS]',
      '',
      [
        new CommandOption(
          '-f, --filter filter',
          'Provide filter values (e.g. \'enabled=true\')',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only display plugin IDs',
        ),
      ],
    ),
    new Command(
      'push',
      'Push a plugin to a registry',
      'docker plugin push [OPTIONS] PLUGIN[:TAG]',
      '',
      [
        new CommandOption(
          '--disable-content-trust',
          'Skip image signing (default true)',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more plugins',
      'docker plugin rm [OPTIONS] PLUGIN [PLUGIN...]',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Force the removal of an active plugin',
        ),
      ],
    ),
    new Command(
      'set',
      'Change settings for a plugin',
      'docker plugin set PLUGIN KEY=VALUE [KEY=VALUE...]',
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
      'docker plugin upgrade [OPTIONS] PLUGIN [REMOTE]',
      '',
      [
        new CommandOption(
          '--disable-content-trust',
          'Skip image verification (default true)',
        ),
        new CommandOption(
          '--grant-all-permissions',
          'Grant all permissions necessary to run the plugin',
        ),
        new CommandOption(
          '--skip-remote-check',
          'Do not check if specified remote plugin matches existing plugin image',
        ),
      ],
    ),
  ],
  'secret': [
    new Command(
      'create',
      'Create a secret from a file or STDIN as content',
      'docker secret create [OPTIONS] SECRET [file|-]',
      '',
      [
        new CommandOption(
          '-d, --driver string',
          'Secret driver',
        ),
        new CommandOption(
          '-l, --label list',
          'Secret labels',
        ),
        new CommandOption(
          '--template-driver string',
          'Template driver',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Display detailed information on one or more secrets',
      'docker secret inspect [OPTIONS] SECRET [SECRET...]',
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
      'List secrets',
      'docker secret ls [OPTIONS]',
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
      'Remove one or more secrets',
      'docker secret rm SECRET [SECRET...]',
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
      'docker service create [OPTIONS] IMAGE [COMMAND] [ARG...]',
      '',
      [
        new CommandOption(
          '-d, --detach',
          'Exit immediately instead of waiting for the service to converge',
        ),
        new CommandOption(
          '-e, --env list',
          'Set environment variables',
        ),
        new CommandOption(
          '-p, --publish port',
          'Publish a port as a node port',
        ),
        new CommandOption(
          '-t, --tty',
          'Allocate a pseudo-TTY',
        ),
        new CommandOption(
          '-u, --user string',
          'Username or UID (format: <name|uid>[:<group|gid>])',
        ),
        new CommandOption(
          '-w, --workdir string',
          'Working directory inside the container',
        ),
      ],
    ),
    new Command(
      'inspect',
      'Display detailed information on one or more services',
      'docker service inspect [OPTIONS] SERVICE [SERVICE...]',
      '',
      [
        new CommandOption(
          '-f, --format string',
          'Format the output using the given Go template',
        ),
      ],
    ),
    new Command(
      'logs',
      'Fetch the logs of a service or task',
      'docker service logs [OPTIONS] SERVICE|TASK',
      '',
      [
        new CommandOption(
          '-f, --follow',
          'Follow log output',
        ),
        new CommandOption(
          '--tail string',
          'Number of lines to show from the end of the logs (default "all")',
        ),
        new CommandOption(
          '-t, --timestamps',
          'Show timestamps',
        ),
      ],
    ),
    new Command(
      'ls',
      'List services',
      'docker service ls [OPTIONS]',
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
      'ps',
      'List the tasks of one or more services',
      'docker service ps [OPTIONS] SERVICE [SERVICE...]',
      '',
      [
        new CommandOption(
          '-f, --filter filter',
          'Filter output based on conditions provided',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only display task IDs',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more services',
      'docker service rm SERVICE [SERVICE...]',
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
      'docker service rollback [OPTIONS] SERVICE',
      '',
      [
        new CommandOption(
          '-d, --detach',
          'Exit immediately instead of waiting for the service to converge',
        ),
        new CommandOption(
          '-q, --quiet',
          'Suppress progress output',
        ),
      ],
    ),
    new Command(
      'scale',
      'Scale one or multiple replicated services',
      'docker service scale SERVICE=REPLICAS [SERVICE=REPLICAS...]',
      '',
      [
        new CommandOption(
          '-d, --detach',
          'Exit immediately instead of waiting for the service to converge',
        ),
      ],
    ),
    new Command(
      'update',
      'Update a service',
      'docker service update [OPTIONS] SERVICE',
      '',
      [
        new CommandOption(
          '-d, --detach',
          'Exit immediately instead of waiting for the service to converge',
        ),
        new CommandOption(
          '-q, --quiet',
          'Suppress progress output',
        ),
        new CommandOption(
          '-t, --tty',
          'Allocate a pseudo-TTY',
        ),
        new CommandOption(
          '-u, --user string',
          'Username or UID (format: <name|uid>[:<group|gid>])',
        ),
        new CommandOption(
          '-w, --workdir string',
          'Working directory inside the container',
        ),
      ],
    ),
  ],
  'stack': [
    new Command(
      'deploy',
      'Deploy a new stack or update an existing stack',
      'docker stack deploy [OPTIONS] STACK',
      '',
      [
        new CommandOption(
          '-c, --compose-file strings',
          'Path to a Compose file, or "-" to read from stdin',
        ),
        new CommandOption(
          '--prune',
          'Prune services that are no longer referenced',
        ),
        new CommandOption(
          '--with-registry-auth',
          'Send registry authentication details to Swarm agents',
        ),
      ],
    ),
    new Command(
      'ls',
      'List stacks',
      'docker stack ls [OPTIONS]',
      '',
      [
        new CommandOption(
          '--format string',
          'Pretty-print stacks using a Go template',
        ),
        new CommandOption(
          '--orchestrator string',
          'Orchestrator to use (swarm|kubernetes|all)',
        ),
      ],
    ),
    new Command(
      'ps',
      'List the tasks in the stack',
      'docker stack ps [OPTIONS] STACK',
      '',
      [
        new CommandOption(
          '-f, --filter filter',
          'Filter output based on conditions provided',
        ),
        new CommandOption(
          '--orchestrator string',
          'Orchestrator to use (swarm|kubernetes|all)',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only display task IDs',
        ),
      ],
    ),
    new Command(
      'rm',
      'Remove one or more stacks',
      'docker stack rm [OPTIONS] STACK [STACK...]',
      '',
      [
        new CommandOption(
          '--orchestrator string',
          'Orchestrator to use (swarm|kubernetes|all)',
        ),
      ],
    ),
    new Command(
      'services',
      'List the services in the stack',
      'docker stack services [OPTIONS] STACK',
      '',
      [
        new CommandOption(
          '-f, --filter filter',
          'Filter output based on conditions provided',
        ),
        new CommandOption(
          '--orchestrator string',
          'Orchestrator to use (swarm|kubernetes|all)',
        ),
        new CommandOption(
          '-q, --quiet',
          'Only display IDs',
        ),
      ],
    ),
  ],
  'swarm': [
    new Command(
      'ca',
      'Display and rotate the root CA',
      'docker swarm ca [OPTIONS]',
      '',
      [
        new CommandOption(
          '-d, --detach',
          'Exit immediately instead of waiting for the root rotation to converge',
        ),
        new CommandOption(
          '-q, --quiet',
          'Suppress progress output',
        ),
      ],
    ),
    new Command(
      'init',
      'Initialize a swarm',
      'docker swarm init [OPTIONS]',
      '',
      [
        new CommandOption(
          '--listen-addr node-addr',
          'Listen address (format: <ip|interface>[:port]) (default 0.0.0.0:2377)',
        ),
      ],
    ),
    new Command(
      'join',
      'Join a swarm as a node and/or manager',
      'docker swarm join [OPTIONS] HOST:PORT',
      '',
      [
        new CommandOption(
          '--token string',
          'Token for entry into the swarm',
        ),
      ],
    ),
    new Command(
      'join-token',
      'Manage join tokens',
      'docker swarm join-token [OPTIONS] (worker|manager)',
      '',
      [
        new CommandOption(
          '-q, --quiet',
          'Only display token',
        ),
      ],
    ),
    new Command(
      'leave',
      'Leave the swarm',
      'docker swarm leave [OPTIONS]',
      '',
      [
        new CommandOption(
          '-f, --force',
          'Force this node to leave the swarm, ignoring warnings',
        ),
      ],
    ),
    new Command(
      'unlock',
      'Unlock swarm',
      'docker swarm unlock',
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
      'docker swarm unlock-key [OPTIONS]',
      '',
      [
        new CommandOption(
          '-q, --quiet',
          'Only display token',
        ),
      ],
    ),
    new Command(
      'update',
      'Update the swarm',
      'docker swarm update [OPTIONS]',
      '',
      [
        new CommandOption(
          '--autolock',
          'Change manager autolocking setting (true|false)'
        ),
        new CommandOption(
          '--cert-expiry duration',
          'Validity period for node certificates (ns|us|ms|s|m|h) (default 2160h0m0s)',
        ),
        new CommandOption(
          '-external-ca external-ca',
          'Specifications of one or more certificate signing endpoints',
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
      'docker trust inspect IMAGE[:TAG] [IMAGE[:TAG]...]',
      '',
      [
        new CommandOption(
          '--pretty',
          'Print the information in a human friendly format',
        ),
      ],
    ),
    new Command(
      'revoke',
      'Remove trust for an image',
      'docker trust revoke [OPTIONS] IMAGE[:TAG]',
      '',
      [
        new CommandOption(
          '-y, --yes',
          'Do not prompt for confirmation',
        ),
      ],
    ),
    new Command(
      'sign',
      'Sign an image',
      'docker trust sign IMAGE:TAG',
      '',
      [
        new CommandOption(
          '--local',
          'Sign a locally tagged image',
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
