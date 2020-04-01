const commands = [
  { value: 'builder', label: 'Manage builds' },
  { value: 'config', label: 'Manage Docker configs' },
  { value: 'container', label: 'Manage containers' },
  { value: 'context', label: 'Manage contexts' },
  { value: 'image', label: 'Manage images' },
  { value: 'network', label: 'Manage networks' },
  { value: 'node', label: 'Manage Swarm nodes' },
  { value: 'plugin', label: 'Mange plugins' },
  { value: 'secret', label: 'Manage Docker secrets' },
  { value: 'service', label: 'Manage services' },
  { value: 'stack', label: 'Manage Docker stacks' },
  { value: 'swarm', label: 'Manage Swarm' },
  { value: 'system', label: 'Manage Docker' },
  { value: 'trust', label: 'Manage trust on Docker images' },
  { value: 'volume', label: 'Manage volumes' }
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
