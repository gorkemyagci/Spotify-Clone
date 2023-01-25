import React, { useEffect, useRef, useState } from 'react'
import categories from 'data/categories'
import Title from 'components/Title'
import favorites from 'data/favorites'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Icon } from 'icons'

function Category({ category, key }) {
  return (
    <div key={key} className='rounded-lg relative before:pt-[100%] before:block overflow-hidden' style={{ background: category.color }}>
      <div className='absolute inset-0'>
        <h3 className='p-4 font-bold text-2xl tracking-tighter'>{category.title}</h3>
      </div>
      <img src={category.cover} alt={category.title} className="w-[6.25rem] shadow-spotify h-[6.25rem] rotate-[25deg] absolute bottom-0 right-0 translate-x-4 -translate-y-[-2%]" />
    </div>
  )
}

function WideCategory({ favorite, key }) {
  return (
    <div key={key} className='rounded-lg overflow-hidden flex-shrink-0 relative w-[27.375rem] h-[13.75rem]' style={{ background: favorite.color }}>
      <div className='absolute inset-0'>
        <h3 className='p-4 font-bold text-[2.5rem] tracking-tighter'>{favorite.title}</h3>
      </div>
      <img src={favorite.cover} alt={favorite.title} className="w-32 shadow-spotify h-32 rotate-[25deg] absolute bottom-0 right-0 translate-x-4 -translate-y-[-2%]" />
    </div>
  )
}

const Search = () => {
  const favoritesRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  useEffect(() => {
    const isEnd = favoritesRef.current.offsetWidth + favoritesRef.current.scrollLeft == favoritesRef.current.scrollWidth;
    setNext(!isEnd);
    favoritesRef.current.addEventListener('scroll', () => {
      const isEnd = favoritesRef.current.offsetWidth + favoritesRef.current.scrollLeft == favoritesRef.current.scrollWidth;
      const isBeging = favoritesRef.current.scrollLeft == 0;
      setPrev(!isBeging);
      setNext(!isEnd);
    })
    if (favoritesRef.current) {
      console.log(favoritesRef.current);
      console.log(favoritesRef.current.scrollWidth);
      console.log(favoritesRef.current.scrollLeft);
    }
  }, [favoritesRef])
  const slideFavoritesNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
  }
  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
  }
  return (
    <React.Fragment>
      <section className='mb-8'>
        <Title title="En çok dinlediğin türler" />
        <div className='relative'>
          {prev && <button onClick={slideFavoritesPrev} className="rounded-full absolute hover:scale-[1.06] -left-6 z-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white flex justify-center items-center text-black"><Icon name="arrowLeft" size={24} /></button>}
          {next && <button onClick={slideFavoritesNext} className="rotate-180 absolute hover:scale-[1.06] -right-6 z-10 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-white flex justify-center items-center text-black"><Icon name="arrowLeft" size={24} /></button>}
          <ScrollContainer innerRef={favoritesRef} className='flex scrollable overflow-x gap-x-6'>
            {favorites.map((favorite, index) => <WideCategory key={index} favorite={favorite} />)}
          </ScrollContainer>
        </div>
      </section>
      <section>
        <Title title="Hepsine göz at" more="/" />
        <div className='grid grid-cols-5 gap-6'>
          {categories.map((category, index) => <Category category={category} key={index} />)}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Search