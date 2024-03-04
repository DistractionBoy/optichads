import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";

type PropType = {
  groups: Array<any>
  options?: EmblaOptionsType
}

type ThumbPropType = {
  selected: boolean
  onClick: () => void
  collection: any
}

const Thumb: React.FC<ThumbPropType> = (props) => {
  const { selected, onClick, collection } = props

  return (
    <div
      className={'embla-thumbs__slide '.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {collection.name}
      </button>
    </div>
  )
}

const CarouselThumbs: React.FC<PropType> = (props) => {
  const { groups, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="m-auto max-full embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {groups.map((collection) => (
            <div className={`embla__slide h-full ${collection.bgColor}`} key={collection.name}>
              <div className="relative p-32 flex gap-20">
                  <Image
                    className="h-1/3 w-1/3 bg-white p-2 rounded-xl col-span-10"
                    src={collection.img}
                    alt=""
                  />
                  <div>
                    <div className="text-4xl font-bold">{collection.name}</div>
                    <div className={`${collection.bgDescription} text-gray-100 p-2 rounded-xl my-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Obcaecati inventore sint neque asperiores? Dignissimos saepe culpa ipsam inventore dolorum. 
                    Eaque corporis quisquam esse dicta incidunt commodi inventore dolores amet obcaecati.</div>
                    <div className="p-2 rounded-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Obcaecati inventore sint neque asperiores? Dignissimos saepe culpa ipsam inventore dolorum. 
                    Eaque corporis quisquam esse dicta incidunt commodi inventore dolores amet obcaecati.</div>
                  </div>
                </div>
            </div>
          ))}
          
        </div>
        <div className="embla-thumbs ">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {groups.map((collection) => (
              <div>
                <Thumb
                  key={collection.name}
                  onClick={() => onThumbClick(collection)}
                  selected={collection.index === selectedIndex}
                  collection={collection}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* <div className="embla-thumbs ">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {groups.map((collection) => (
              <div>
                <Thumb
                  key={collection.name}
                  onClick={() => onThumbClick(collection)}
                  selected={collection.index === selectedIndex}
                  collection={collection}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default CarouselThumbs
