interface INavigatorWithDeviceMemory extends Navigator {
  deviceMemory?: number;
}

export function isMobileDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /mobile|android|iphone|ipad|tablet|ipod/.test(
    navigator.userAgent.toLowerCase()
  );
}

export function isLowPerformanceDevice(): boolean {
  if (typeof navigator === 'undefined') return false;

  const cores = navigator.hardwareConcurrency ?? 8;
  const memory = (navigator as INavigatorWithDeviceMemory).deviceMemory ?? 8;

  return cores <= 2 || memory <= 2;
}
