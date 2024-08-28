'use client';

import { MandalartData } from '@/types';
import TableCell from '@/features/mandalart/_tableCell';

type Props = Omit<MandalartData, 'id' | 'theme'>;

export default function MandalartTable({ userInputs }: Props) {
  return (
    <table className="w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-sm border">
      <tbody>
        {Object.entries(userInputs).map(([key, value]) => (
          <tr key={key} className="h-1/3 border">
            {value.map((input, i) => (
              <TableCell key={`${input}${i}`} input={input} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
