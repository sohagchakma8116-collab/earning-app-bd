export default function Home() {
      return (
        <main className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold text-green-700">বাংলা আয় অ্যাপ</h1>
            <p className="mt-4 text-gray-600">দৈনিক কাজ করে বিকাশে টাকা নিন</p>
            
            <div className="mt-8 p-4 bg-white rounded-lg shadow">
              <h2 className="font-bold">আজকের টাস্ক</h2>
              <p className="mt-2">ভিডিও দেখুন - 10 টাকা</p>
              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">শুরু করুন</button>
            </div>

            <p className="mt-6 text-sm text-gray-500">Balance: 0 টাকা</p>
          </div>
        </main>
      )
}
