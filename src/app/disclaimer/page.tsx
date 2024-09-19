export default function Disclaimer() {
  return (
    <main className="relative mt-10 flex flex-grow flex-col items-center">
      <h1 className="text-4xl text-primary">免責事項</h1>
      <ol className="mt-6 max-w-screen-md">
        <li>
          <p className="text-lg">1.損害等の責任について</p>
          <p className="mt-1 text-sm">
            当サイトの利用、またはアクセスできない状態に関連して発生した損害について、当サイトは何らの責任も負いません。
          </p>
        </li>
        <li className="mt-4">
          <p className="text-lg">2.機器のトラブル・メンテナンス</p>
          <p className="mt-1 text-sm">
            ユーザーが当サイトを利用する際に使用する機器のトラブルやメンテナンスに関して、当サイトは一切の責任を負いません。ユーザーは自身の機器の管理と維持を適切に行ってください。
          </p>
        </li>
      </ol>
    </main>
  );
}
