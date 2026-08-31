'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, Menu, X } from 'lucide-react'

const mockUser = {
  id: '1',
  username: 'user#1234',
  avatar: '🎖️',
  rank: 'Ст. Лейтенант',
  position: 'Командир роты',
  department: 'Сотрудник ВДВ',
  status: 'Одобрено',
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn')
    setIsLoggedIn(logged === 'true')
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <nav className="bg-white shadow-lg border-b-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏛️</span>
            <span className="font-bold text-xl text-blue-600">CommunityGOS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
                  📊 Кабинет
                </Link>
                <Link href="/news" className="text-gray-700 hover:text-blue-600 font-medium">
                  📰 Новости
                </Link>
                <Link href="/forum" className="text-gray-700 hover:text-blue-600 font-medium">
                  💬 Форум
                </Link>
                <div className="flex items-center gap-3 pl-6 border-l">
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">{mockUser.username}</p>
                    <p className="text-sm text-gray-500">{mockUser.rank}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <LogOut size={18} />
                    Выход
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                  🏠 Главная
                </Link>
                <Link
                  href="/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
                >
                  🔐 Вход
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="px-4 py-4 space-y-3">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                  📊 Кабинет
                </Link>
                <Link href="/news" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                  📰 Новости
                </Link>
                <Link href="/forum" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                  💬 Форум
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center"
                >
                  <LogOut size={18} />
                  Выход
                </button>
              </>
            ) : (
              <>
                <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                  🏠 Главная
                </Link>
                <Link
                  href="/login"
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-center"
                >
                  🔐 Вход
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
