import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  groups: any
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
      className={'embla-thumbs__slide'.concat(
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
            <div className={`embla__slide bg-[${collection.bgColor}]`} key={collection.name}>
              <div className="embla__slide__number">{collection.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {groups.map((collection) => (
              <Thumb
                key={collection.name}
                onClick={() => onThumbClick(collection)}
                selected={collection.index === selectedIndex}
                collection={collection}
              />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default CarouselThumbs
