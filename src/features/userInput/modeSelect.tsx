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
      <SelectTrigger className="w-60">
        <SelectValue placeholder="モードを選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={MODE.CREATE}>{MODE.CREATE_IDEA_JP}</SelectItem>
          <SelectItem value={MODE.ACHIVE}>{MODE.ACHIVE_GOAL_JP}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
