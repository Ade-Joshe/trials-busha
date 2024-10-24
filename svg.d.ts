// svg.d.ts
// declare module '*.svg' {
//   import * as React from 'react';
//   export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
//   const src: string;
//   export default src;
// }

declare module "*.svg?react" {
  import { FunctionComponent, SVGAttributes } from "react";
  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  export default content;
}