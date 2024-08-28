import MODE from '@/constants/mode';

export type ModeValueLiteral = (typeof MODE)[keyof typeof MODE];
