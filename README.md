# CommunityGOS - Web Platform 🏛️

Полнофункциональная веб-платформа для управления Армией в Roblox RP.

## 🚀 Возможности

- ✅ Авторизация через Discord OAuth
- ✅ Личный кабинет с профилем
- ✅ Система новостей
- ✅ Форум с разделами
- ✅ Управление рангами и должностями
- ✅ Система наказаний
- ✅ Админ-панель
- ✅ Полная адаптивность

## 📦 Стек технологий

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **Auth**: NextAuth.js + Discord OAuth
- **ORM**: Prisma

## 🔧 Установка

### 1. Клонировать репозиторий
```bash
git clone https://github.com/yourusername/CommunityGOS.git
cd CommunityGOS
```

### 2. Установить зависимости
```bash
npm install
```

### 3. Настроить переменные окружения
```bash
cp .env.example .env.local
```

Отредактировать `.env.local` и добавить:
- Database URL (PostgreSQL)
- Discord Client ID и Secret
- NextAuth Secret

### 4. Инициализировать БД
```bash
npx prisma migrate dev --name init
```

### 5. Запустить dev сервер
```bash
npm run dev
```

Отворить [http://localhost:3000](http://localhost:3000)

## 🔐 Discord OAuth Настройка

1. Перейти на [Discord Developer Portal](https://discord.com/developers/applications)
2. Создать новое приложение
3. В разделе OAuth2:
   - Скопировать Client ID и Secret
   - Добавить Redirect URL: `http://localhost:3000/api/auth/callback/discord`
4. Вставить данные в `.env.local`

## 🗄️ База данных

### Создать миграцию
```bash
npx prisma migrate dev --name <name>
```

### Открыть Prisma Studio
```bash
npx prisma studio
```

## 📁 Структура проекта

```
.
├── app/
│   ├── api/
│   │   └── auth/
│   ├── (auth)/
│   │   ├── login/
│   │   └── callback/
│   ├── dashboard/
│   ├── news/
│   ├── forum/
│   └── admin/
├── components/
│   ├── Navigation.tsx
│   ├── Sidebar.tsx
│   └── ...
├── prisma/
│   └── schema.prisma
├── public/
├── styles/
└── package.json
```

## 🚀 Деплой

### На Vercel (рекомендуется)

1. Залить репо на GitHub
2. Перейти на [vercel.com](https://vercel.com)
3. Import проекта
4. Добавить Environment Variables
5. Deploy!

```bash
vercel
```

### На другие хосты

```bash
npm run build
npm run start
```

## 📝 Лицензия

MIT
