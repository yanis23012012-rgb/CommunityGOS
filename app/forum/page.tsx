'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, MessageCircle, Eye } from 'lucide-react'
import { FORUM_SECTIONS } from '@/lib/config'

const mockTopics = [
  {
    id: 1,
    title: 'Вопрос по устройству иерархии',
    section: 'Идеи',
    author: 'Боец#5678',
    rank: 'Рядовой',
    views: 124,
    comments: 8,
    date: '2026-08-30',
  },
  {
    id: 2,
    title: 'Баг с системой наказаний',
    section: 'Баги',
    author: 'Командир#1234',
    rank: 'Майор',
    views: 89,
    comments: 5,
    date: '2026-08-29',
  },
  {
    id: 3,
    title: 'Предложение по улучшению форума',
    section: 'Идеи',
    author: 'Admin#0000',
    rank: 'Маршал',
    views: 256,
    comments: 12,
    date: '2026-08-28',
  },
  {
    id: 4,
    title: 'Опечатка в приказе №5',
    section: 'Печати',
    author: 'Editor#9999',
    rank: 'Подполковник',
    views: 45,
    comments: 2,
    date: '2026-08-27',
  },
  {
    id: 5,
    title: 'Общее обсуждение расписания',
    section: 'Прочее',
    author: 'User#2222',
    rank: 'Ст. Лейтенант',
    views: 167,
    comments: 18,
    date: '2026-08-26',
  },
]

export default function ForumPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedSection, setSelectedSection] = useState('Все темы')
  const [selectedTopic, setSelectedTopic] = useState<typeof mockTopics[0] | null>(null)
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

  const filteredTopics = selectedSection === 'Все темы'
    ? mockTopics
    : mockTopics.filter(topic => topic.section === selectedSection)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">💬 Форум</h1>
        <p className="text-gray-500">Обсуждение, идеи и сообщения об ошибках</p>
      </div>

      {/* Stats and Create Button */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-1">Активных пользователей на форуме</p>
            <p className="text-3xl font-bold text-blue-600">👥 15</p>
          </div>
        </div>

        <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition">
          <Plus size={24} />
          Новая тема
        </button>
      </div>

      {/* Sections */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {['��се темы', ...FORUM_SECTIONS].map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
                selectedSection === section
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Topics Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 p-4 font-bold text-gray-700 border-b">
          <div className="col-span-5">Тема</div>
          <div className="col-span-2">Автор</div>
          <div className="col-span-2 text-center">Ответы</div>
          <div className="col-span-3 text-center">Просмотры</div>
        </div>

        {/* Topics */}
        <div className="divide-y">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className="p-4 hover:bg-blue-50 cursor-pointer transition md:grid md:grid-cols-12 md:gap-4 md:items-center"
            >
              <div className="col-span-5 mb-3 md:mb-0">
                <h3 className="font-bold text-gray-800 text-lg hover:text-blue-600 transition">{topic.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium mr-2">
                    {topic.section}
                  </span>
                  {topic.date}
                </p>
              </div>
              <div className="col-span-2 mb-2 md:mb-0">
                <p className="text-sm font-semibold text-gray-700">{topic.author}</p>
                <p className="text-xs text-gray-500">{topic.rank}</p>
              </div>
              <div className="col-span-2 text-center">
                <div className="flex items-center justify-center gap-1 text-gray-700 font-semibold">
                  <MessageCircle size={16} />
                  {topic.comments}
                </div>
              </div>
              <div className="col-span-3 text-center">
                <div className="flex items-center justify-center gap-1 text-gray-700 font-semibold">
                  <Eye size={16} />
                  {topic.views}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Topic Modal */}
      {selectedTopic && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 sticky top-0">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {selectedTopic.section}
                  </span>
                  <h2 className="text-2xl font-bold">{selectedTopic.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="text-2xl text-white hover:text-green-200 transition"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Author Info */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6 border">
                <p className="font-semibold text-gray-800">{selectedTopic.author}</p>
                <p className="text-sm text-gray-600">{selectedTopic.rank}</p>
                <p className="text-xs text-gray-500 mt-2">📅 {selectedTopic.date}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">Просмотров</p>
                  <p className="text-2xl font-bold text-blue-600">{selectedTopic.views}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Ответов</p>
                  <p className="text-2xl font-bold text-green-600">{selectedTopic.comments}</p>
                </div>
              </div>

              {/* Comment Section */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">💬 Комментарии</h3>
                <div className="space-y-4 mb-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Пользователь#{i}</p>
                      <p className="text-sm text-gray-600 mt-2">Это отличная идея, поддерживаю!</p>
                      <p className="text-xs text-gray-500 mt-2">2 дня назад</p>
                    </div>
                  ))}
                </div>

                {/* Reply Form */}
                <textarea
                  placeholder="Напишите ваш ответ..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 mb-3"
                  rows={3}
                ></textarea>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition">
                  Отправить ответ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
