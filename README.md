# Little Movie Company

Hot TV Show / Movie Watching Website

## Movie sources

The Movie Database API

## Main technology used

- ReactJS, Typescript, TailwindCSS
- Redux-Toolkit
- React-Query, Axios
- Firebase
- Swiper
- React-AutoAnimate, React-Select, React-Toastify, React-Circular-Progressbar, React-Infinite-Scroll-Component, React-Lazy-Load-Image-Component, React-Icons, React-Router-Dom
- Formik, Yup

## Features

- Well-designed homepage/detail/watching pages.
- Sort/filter (query-params based).
- Search by name, with suggestion keywords, filter result by type.
- Skeleton loading, infinite scrolling, query-based pagination and smooth animation.
- Authentication by email/password or Google/Facebook. Fully validated sign-up form.
- Bookmark favourite films, store recently watched films. Allowing to edit films list: Select All -> Clear.
- Profile page: allowing to change profile photo, name, email, password, verify, delete account after reauthentication.
- Comment: Allowing to give reactions, see who reacts to a comment (sorted and filter out the 3 most popular reactions), reply to a comment, edit, delete, hide, sort by latest/popular and load more comment.


## How to clone this project

You have to create an account on the website: https://www.themoviedb.org/ to get the API KEY. You then create a file named ".env" in your root project folder.

In that file, assign the API KEY that you get from the previous step to a variable named REACT_APP_API_KEY (it has to be this specific name).

