import { ElementRef } from '@angular/core';

// export function getHostID(host: ElementRef<HTMLElement>): string {
//   if (!host) generateHostID();
//   const hostId = Array.from(host.nativeElement.attributes).find(item => item.name.includes('nghost'))?.name;

//   return hostId || generateHostID();
// }

export function generateHostID(host: ElementRef<HTMLElement>): string {
  const hostNameAttribute = Array.from(host.nativeElement.attributes).find(item => item.name.includes('nghost'))?.name;
  const hostName = hostNameAttribute || host.nativeElement.tagName;
  return `${hostName}_${(Math.random() * 1e10).toFixed().toString()}`;
}
