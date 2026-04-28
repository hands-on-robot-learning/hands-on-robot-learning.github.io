import { parse } from 'yaml';

export function parseYaml<T>(text: string): T {
	return parse(text) as T;
}
