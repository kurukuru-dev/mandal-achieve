import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem
} from '@/components/ui/select';

// q: 顧客がモードを選択し、メインテーマを入力してスタートボタンを押す
export default function CustomerInput() {
  return (
    <div className="mt-4 flex flex-col justify-center items-center">
      <Select>
        <SelectTrigger className="w-60">
          <SelectValue placeholder="使用方法を選択してください" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>使用方法</SelectLabel>
            <SelectItem value="create">アイデア創造</SelectItem>
            <SelectItem value="achive">目標達成</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <input type="text" placeholder="メインテーマを入力" />
      <Button>スタート</Button>
      <button>使い方</button>
    </div>
  );
}
