'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { POSITIONS, DEPARTMENTS } from '@/lib/config'

const RANKS = [
  'Маршал',
  'Генерал армии',
  'Ген. Полковник',
  'Ген. Лейтенант',
  'Ген. Майор',
  'Полковник',
  'Подполковник',
  'Майор',
  'Капитан',
  'Ст. Лейтенант',
  'Лейтенант',
  'Мл. Лейтенант',
  'Ст. Прапорщик',
  'Прапорщик',
  'Старшина',
  'Ст. Сержант',
  'Сержант',
  'Мл. Сержант',
  'Ефрейтор',
  'Рядовой',
]

export default function LoginPage() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    discord: '',
    roblox: '',
    position: '',
    department: '',
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 0) {
      if (formData.discord && formData.roblox) {
        setStep(1)
      }
    } else {
      if (formData.position && formData.department) {
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('user', JSON.stringify(formData))
        router.push('/dashboard')
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2">🏛️</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">CommunityGOS</h2>
          <p className="text-gray-500">Армия РФ в Roblox RP</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 0 ? (
            <>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
                📝 Шаг 1: Основные данные
              </h3>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Discord ник
                </label>
                <input
                  type="text"
                  name="discord"
                  value={formData.discord}
                  onChange={handleChange}
                  placeholder="user#1234"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Roblox ник
                </label>
                <input
                  type="text"
                  name="roblox"
                  value={formData.roblox}
                  onChange={handleChange}
                  placeholder="RobloxUser_2026"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
              >
                Далее →
              </button>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
                💼 Шаг 2: Должность и подразделение
              </h3>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Желаемая должность
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Выберите должность</option>
                  {POSITIONS.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Подразделение
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Выберите подразделение</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg transition"
                >
                  ← Назад
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
                >
                  Вход
                </button>
              </div>
            </>
          )}
        </form>

        {/* Info */}
        <p className="text-center text-gray-500 text-sm mt-6">
          После подачи анкеты она отправится на рассмотрение администратору
        </p>
      </div>
    </div>
  )
}
