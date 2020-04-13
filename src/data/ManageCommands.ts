const commands = [
  { value: 'builder', label: 'Builds' },
  { value: 'config', label: 'Docker configs' },
  { value: 'container', label: 'Containers' },
  { value: 'context', label: 'Contexts' },
  { value: 'image', label: 'Images' },
  { value: 'network', label: 'Networks' },
  { value: 'node', label: 'Swarm nodes' },
  { value: 'plugin', label: 'Plugins' },
  { value: 'secret', label: 'Docker secrets' },
  { value: 'service', label: 'Services' },
  { value: 'stack', label: 'Docker stacks' },
  { value: 'swarm', label: 'Swarm' },
  { value: 'system', label: 'Docker' },
  { value: 'trust', label: 'Trust on Docker images' },
  { value: 'volume', label: 'Volumes' }
];

export const primaryOptions = commands.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});
