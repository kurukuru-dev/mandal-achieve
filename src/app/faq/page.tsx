import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export default function Faq() {
  return (
    <main className="relative mt-10 flex flex-grow flex-col items-center">
      <h1 className="text-4xl text-primary">FAQ</h1>
      <div className="mt-6 w-full max-w-screen-md">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>入力したデータはどこに保存されますか？</AccordionTrigger>
            <AccordionContent>
              入力したデータは保存されません。保存が必要な場合、お手数ですがスクリーンショットを撮るなどしてご自分で保存してください。
              ※一部メインテーマのデータのみローカルストレージに保存されます。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>問い合わせ先はありますか？</AccordionTrigger>
            <AccordionContent>
              お問い合わせは、
              <a className="underline hover:opacity-70" href="https://x.com/kurukuru_dev">
                X(旧: Twitter)
              </a>
              にて受け付けております。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
