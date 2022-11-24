import { ValidationError } from 'class-validator';

// Error Objects convert to stringify
export function stringified(errors: ValidationError[]): string {
  return JSON.stringify(errors);
}
