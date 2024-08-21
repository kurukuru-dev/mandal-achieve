import MODE from '@/const/mode';

export type ModeValueLiteral = (typeof MODE)[keyof typeof MODE];
