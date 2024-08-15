import { CircleHelp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

// q: 顧客がモードを選択し、メインテーマを入力してスタートボタンを押す
export default function CustomerInput() {
  return (
    <div className="mt-6 flex items-center gap-x-2">
      <Select>
        <SelectTrigger className="w-60">
          <SelectValue placeholder="モードを選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="create">アイデア創造</SelectItem>
            <SelectItem value="achive">目標達成</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input type="text" placeholder="メインテーマを入力" />
      <Button>スタート</Button>
      <button title="使い方" className="h-6 w-6">
        <CircleHelp className="text-accent hover:text-accent-hover" />
      </button>
    </div>
  );
}
