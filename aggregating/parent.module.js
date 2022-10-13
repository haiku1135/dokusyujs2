export * from './sub.module.js';

export * as subObject from './sub.module.js';

export {subVarible, subFunction, SubClass} from './sub.module.js';

export {
  subVarible as exportedVariable,
  subFunction as exportedFunction,
  SubClass as ExportedClass,
} from './sub.module.js';

export {default} from './sub.module.js';