import MODE from '@/constants/mode';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from '@/components/ui/select';

import { ModeValueLiteral } from '@/types/mode';

type Props = {
  mode?: ModeValueLiteral;
  className: string;
};

export default function ModeSelect({ mode, className }: Props) {
  return (
    <Select defaultValue={mode} name="mode">
      <SelectTrigger className={className}>
        <SelectValue placeholder="モードを選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={MODE.CREATE}>アイデア発想</SelectItem>
          <SelectItem value={MODE.ACHIVE}>目標達成</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
