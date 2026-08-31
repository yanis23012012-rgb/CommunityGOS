import Link from 'next/link'
import { Users, BookOpen, MessageSquare, Shield, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Управление структурой',
    description: 'Контролируйте всех сотрудников, их ранги и должности',
  },
  {
    icon: BookOpen,
    title: 'Новости и приказы',
    description: 'Публикуйте важные объявления и приказы для всех',
  },
  {
    icon: MessageSquare,
    title: 'Форум обсуждений',
    description: 'Общайтесь, делитесь идеями и решайте проблемы вместе',
  },
  {
    icon: Shield,
    title: 'Система наказаний',
    description: 'Отслеживайте и управляйте дисциплинарными взысканиями',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">🏛️ CommunityGOS</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Официальный портал управления Армией в Roblox RP
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2"
            >
              🔐 Вход в систему
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/news"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition border border-blue-500"
            >
              📰 Смотреть новости
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">✨ Основные возможности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:scale-105 transition duration-300"
                >
                  <Icon className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ranks and Positions Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🎖️ Система рангов и должностей</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ranks */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Военные звания (20)</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>Маршал</div>
                <div>Генерал армии</div>
                <div>Ген. Полковник</div>
                <div>Ген. Лейтенант</div>
                <div>Ген. Майор</div>
                <div>Полковник</div>
                <div>Подполковник</div>
                <div>Майор</div>
                <div>Капитан</div>
                <div>Ст. Лейтенант</div>
                <div>Лейтенант</div>
                <div>Мл. Лейтенант</div>
                <div>Ст. Прапорщик</div>
                <div>Прапорщик</div>
                <div>Старшина</div>
                <div>Ст. Сержант</div>
                <div>Сержант</div>
                <div>Мл. Сержант</div>
                <div>Ефрейтор</div>
                <div>Рядовой</div>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Подразделения (9)</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div>✓ Сотрудник ОС</div>
                <div>✓ Сотрудник МСВ</div>
                <div>✓ Сотрудник РОиО</div>
                <div>✓ Сотрудник ВК</div>
                <div>✓ Сотрудник ВДВ</div>
                <div>✓ Сотрудник ПМП</div>
                <div>✓ Сотрудник ВП</div>
                <div>✓ Сотрудник ГРУ</div>
                <div>✓ Сотрудник ССО</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы присоединиться к Армии?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Заполните анкету и присоединитесь к военной структуре CommunityGOS
          </p>
          <Link
            href="/login"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg font-bold text-lg transition"
          >
            Подать анкету
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">© 2026 CommunityGOS - Армия РФ в Roblox RP</p>
          <p className="text-sm text-gray-500">Портал управления государственной структурой</p>
        </div>
      </footer>
    </div>
  )
}
