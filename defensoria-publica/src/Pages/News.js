import React from 'react'
import NewsGrid from '../Components/NewsGrid';

const newsData = [
  {
    title: '----',
    summary: '-',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: '----',
    summary: '-',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: '-----',
    summary: '-',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: '----',
    summary: '-',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: '----',
    summary: '-',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: '------',
    summary: '-',
    image: 'https://via.placeholder.com/300',
  },
];
function News() {
  return (
        <div className="app">
          <NewsGrid news={newsData} />
        </div>
  )
}

export default News