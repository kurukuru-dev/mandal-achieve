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
    <div className="mt-6 flex flex-col justify-center items-center">
      <div className="flex gap-x-2">
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
      </div>
      <button>使い方</button>
    </div>
  );
}
