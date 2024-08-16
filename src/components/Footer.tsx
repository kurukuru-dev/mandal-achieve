export default function Footer () {
  return (
    <footer className="w-full text-center mx-auto absolute left-0 bottom-0">
        <p>© 2024 Your Name. All rights reserved.</p>
        <nav className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            プライバシーポリシー
          </a>
          <a href="/terms-of-service" className="hover:underline">
            利用規約
          </a>
          <a href="/contact" className="hover:underline">
            お問い合わせ
          </a>
        </nav>
        <p>SNS</p>
        <p className="mt-2 text-sm">Version 1.0.0</p>
      </footer>
  )
}