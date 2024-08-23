import MODE from '@/constants/mode';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from '@/components/ui/select';

export default function ModeSelect() {
  return (
    <Select name="mode">
      <SelectTrigger>
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
