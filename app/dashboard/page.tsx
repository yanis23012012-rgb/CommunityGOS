'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Users, BookOpen, MessageSquare, BarChart3 } from 'lucide-react'

const mockUser = {
  id: '1',
  username: 'user#1234',
  robloxNick: 'RobloxUser_2026',
  avatar: '🎖️',
  rank: 'Ст. Лейтенант',
  position: 'Командир роты',
  department: 'Сотрудник ВДВ',
  status: 'Одобрено',
  joinDate: '2026-08-15',
}

const mockStats = [
  { label: 'Активных пользователей', value: 42, icon: Users },
  { label: 'Новостей', value: 12, icon: BookOpen },
  { label: 'Тем на форуме', value: 28, icon: MessageSquare },
  { label: 'Наказаний', value: 3, icon: BarChart3 },
]

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white mb-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">👤 Личный кабинет</h1>
            <p className="text-blue-100">Добро пожаловать, <strong>{mockUser.username}</strong>!</p>
          </div>
          <div className="text-6xl">{mockUser.avatar}</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {mockStats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                </div>
                <Icon className="text-blue-300" size={32} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">📋 Профиль</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">Discord</p>
                <p className="text-gray-800 font-semibold">{mockUser.username}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Roblox</p>
                <p className="text-gray-800 font-semibold">{mockUser.robloxNick}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Звание</p>
                <p className="text-gray-800 font-semibold">{mockUser.rank}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Должность</p>
                <p className="text-gray-800 font-semibold">{mockUser.position}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Подразделение</p>
                <p className="text-gray-800 font-semibold">{mockUser.department}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Статус</p>
                <span className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  ✅ {mockUser.status}
                </span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Дата присоединения</p>
                <p className="text-gray-800 font-semibold">{mockUser.joinDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Punishments & Activity */}
        <div className="lg:col-span-2 space-y-6">
          {/* Punishments */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">⚠️ История наказаний</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <div>
                  <p className="font-semibold text-gray-800">Выговор 1/3</p>
                  <p className="text-sm text-gray-500">Причина: Нарушение устава</p>
                </div>
                <p className="text-xs text-gray-500">2026-08-25</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <div>
                  <p className="font-semibold text-gray-800">Выговор 1/3</p>
                  <p className="text-sm text-gray-500">Причина: Отсутствие на учениях</p>
                </div>
                <p className="text-xs text-gray-500">2026-08-20</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-sm text-blue-600">📊 Всего наказаний: 3</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🔗 Быстрые ссылки</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/news"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium text-center transition"
              >
                📰 Новости
              </Link>
              <Link
                href="/forum"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium text-center transition"
              >
                💬 Форум
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
