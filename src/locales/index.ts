import { path } from 'ramda';

import strings from '@/locales/fr.json';

export const t = <T>(key: string): T => path(key.split('.'), strings)!;
