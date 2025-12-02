# Little-Movie-Company

![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white)

## 📝 Description

Dive into the world of film with Little-Movie-Company, your personalized cinematic universe! Built with React and TypeScript, this web application offers a seamless experience for sorting, exploring, and curating your favorite movies. Discover new gems, organize your watchlists, and immerse yourself in the art of cinema. 🍿✨

## ✨ Features

- 🕸️ Web


## 🛠️ Tech Stack

- ⚛️ React
- 📜 TypeScript


## 🚀 Run Commands

- **start**: `npm run start`
- **build**: `npm run build`
- **test**: `npm run test`
- **eject**: `npm run eject`


## 📁 Project Structure

```
.
├── package.json
├── postcss.config.js
├── public
│   ├── cat.jpeg
│   ├── defaultAvatar.jpg
│   ├── error.png
│   ├── fail.jpg
│   ├── favicon.ico
│   ├── icon.png
│   ├── index.html
│   ├── logo.png
│   ├── success.jpg
│   └── videoplayback.mp4
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Auth
│   │   │   ├── ModalNotification.tsx
│   │   │   ├── SignIn.tsx
│   │   │   ├── SignUp.tsx
│   │   │   └── signInWithProvider.ts
│   │   ├── Bookmark
│   │   │   └── BookmarkResult.tsx
│   │   ├── Common
│   │   │   ├── BlackBackdrop.tsx
│   │   │   ├── FilmItem.tsx
│   │   │   ├── Protected.tsx
│   │   │   ├── ReadMore.tsx
│   │   │   ├── RightbarFilms.tsx
│   │   │   ├── SearchBox.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── SidebarMini.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   ├── StarRating.tsx
│   │   │   └── Title.tsx
│   │   ├── Explore
│   │   │   ├── ExploreFilter.tsx
│   │   │   ├── ExploreResult.tsx
│   │   │   ├── ExploreResultContent.tsx
│   │   │   ├── FilterBy.tsx
│   │   │   ├── FilterByDate.tsx
│   │   │   ├── FilterByGenres.tsx
│   │   │   ├── FilterByRuntime.tsx
│   │   │   └── SortBy.tsx
│   │   ├── FilmDetail
│   │   │   ├── FilmDetail.tsx
│   │   │   ├── FilmTabInfo.tsx
│   │   │   ├── ReviewTab.tsx
│   │   │   └── SortReview.ts
│   │   ├── FilmListViewForBookmarkAndHistory
│   │   │   └── FilmListViewForBookmarkAndHistory.tsx
│   │   ├── FilmWatch
│   │   │   ├── Comment
│   │   │   │   ├── Comment.tsx
│   │   │   │   ├── CommentUserContent.tsx
│   │   │   │   ├── CommentUserData.tsx
│   │   │   │   ├── EditComment.tsx
│   │   │   │   ├── ReactionInfo.tsx
│   │   │   │   ├── Reply.tsx
│   │   │   │   ├── ReplyBox.tsx
│   │   │   │   └── UserWhoReact.tsx
│   │   │   ├── FilmWatch.tsx
│   │   │   └── SeasonSelection.tsx
│   │   ├── Footer
│   │   │   └── Footer.tsx
│   │   ├── Home
│   │   │   ├── MainHomeFilm.tsx
│   │   │   ├── RecommendGenres.tsx
│   │   │   └── TrendingNow.tsx
│   │   ├── Profile
│   │   │   ├── DeleteAcount.tsx
│   │   │   ├── Email.tsx
│   │   │   ├── EmailVerification.tsx
│   │   │   ├── Name.tsx
│   │   │   ├── Password.tsx
│   │   │   └── ProfileImage.tsx
│   │   ├── Search
│   │   │   ├── Pagination.tsx
│   │   │   └── SearchResult.tsx
│   │   └── Slider
│   │       ├── BannerSlider.tsx
│   │       └── SectionSlider.tsx
│   ├── hooks
│   │   ├── useCollectionQuery.ts
│   │   ├── useCurrentParams.ts
│   │   ├── useCurrentViewportView.ts
│   │   ├── useDebounce.ts
│   │   └── useHomeData.ts
│   ├── index.css
│   ├── index.tsx
│   ├── pages
│   │   ├── Auth.tsx
│   │   ├── Bookmarked.tsx
│   │   ├── Error.tsx
│   │   ├── Explore.tsx
│   │   ├── History.tsx
│   │   ├── Home.tsx
│   │   ├── Movie
│   │   │   ├── MovieInfo.tsx
│   │   │   └── MovieWatch.tsx
│   │   ├── Profile.tsx
│   │   ├── Search.tsx
│   │   └── TV
│   │       ├── TVInfo.tsx
│   │       └── TVWatch.tsx
│   ├── react-app-env.d.ts
│   ├── services
│   │   ├── explore.ts
│   │   ├── home.ts
│   │   ├── movie.ts
│   │   ├── search.ts
│   │   └── tv.ts
│   ├── shared
│   │   ├── axios.ts
│   │   ├── constants.ts
│   │   ├── firebase.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   └── store
│       ├── hooks.ts
│       ├── slice
│       │   └── authSlice.ts
│       └── store.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `react-scripts start`)

