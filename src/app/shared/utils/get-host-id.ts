import { ElementRef } from '@angular/core';

export function getHostID(host: ElementRef<HTMLElement>): string {
  if (!host) generateHostID();
  const hostId = Array.from(host.nativeElement.attributes).find(item => item.name.includes('nghost'))?.name;

  return hostId || generateHostID();
}

function generateHostID(): string {
  return (Math.random() * 1e10).toFixed().toString();
}
