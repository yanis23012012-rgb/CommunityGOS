'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Eye } from 'lucide-react'

const mockNews = [
  {
    id: 1,
    title: 'Новое назначение командира части',
    content: 'Поздравляем товарища Петрова с назначением на должность командира части. Пожелаем ему успехов в служении Отечеству!',
    author: 'Министр обороны',
    rank: 'Маршал',
    date: '2026-08-30',
  },
  {
    id: 2,
    title: 'Плановые учения армии',
    content: 'Согласно приказу командования, с 01.09.2026 начинаются плановые учения всех подразделений. Приказ прилагается.',
    author: 'Начальник Ген штаба',
    rank: 'Ген. Полковник',
    date: '2026-08-28',
  },
  {
    id: 3,
    title: 'Открыт новый набор в ВДВ',
    content: 'В связи с убытием части личного состава, объявляется набор желающих служить в элитном подразделении ВДВ.',
    author: 'Командир ВДВ',
    rank: 'Ген. Лейтенант',
    date: '2026-08-25',
  },
]

export default function NewsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedNews, setSelectedNews] = useState<typeof mockNews[0] | null>(null)
  const router = useRouter()

  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn')
    if (logged !== 'true') {
      router.push('/login')
    } else {
      setIsLoggedIn(true)
    }
  }, [])

  if (!isLoggedIn) return null

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">📰 Новости от администрации</h1>
        <p className="text-gray-500">Последние обновления и приказы</p>
      </div>

      {/* Admin Panel */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🛠️</span>
          <h2 className="text-xl font-bold text-gray-800">Панель администратора</h2>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition">
          <Plus size={20} />
          Создать новость
        </button>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNews.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
              <h3 className="font-bold text-lg line-clamp-2">{news.title}</h3>
            </div>

            {/* Content */}
            <div className="p-4 flex-1">
              <p className="text-gray-700 text-sm line-clamp-3 mb-4">{news.content}</p>
              
              <div className="border-t pt-3 space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Автор:</strong> {news.author}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Звание:</strong> {news.rank}
                </p>
                <p className="text-xs text-gray-500">📅 {news.date}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-3 border-t">
              <button
                onClick={() => setSelectedNews(news)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition text-sm"
              >
                <Eye size={16} />
                Читать полностью
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 sticky top-0">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedNews.title}</h2>
                  <p className="text-blue-100">Автор: {selectedNews.author} ({selectedNews.rank})</p>
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="text-2xl text-white hover:text-blue-200 transition"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-6">{selectedNews.content}</p>
              <p className="text-sm text-gray-500 border-t pt-4">Опубликовано: {selectedNews.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
