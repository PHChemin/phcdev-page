'use client';

import * as React from 'react';
import { motion, useReducedMotion, type Transition } from 'motion/react';
import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { cn } from '@/lib/utils';

type MotionCarouselProps = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  className?: string;
  slideClassName?: string;
  /** Scale applied to slides that are not selected. */
  inactiveScale?: number;
  ariaLabel?: string;
  getDotLabel?: (index: number) => string;
  showDotLabel?: boolean;
};

type EmblaControls = {
  selectedIndex: number;
  scrollSnaps: number[];
  prevDisabled: boolean;
  nextDisabled: boolean;
  onDotClick: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

type DotButtonProps = {
  selected?: boolean;
  label: string;
  showLabel: boolean;
  onClick: () => void;
};

const transition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
};

const useEmblaControls = (
  emblaApi: EmblaCarouselType | undefined,
): EmblaControls => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(true);

  const onDotClick = React.useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const updateSelectionState = (api: EmblaCarouselType) => {
      setSelectedIndex(api.selectedScrollSnap());
      setPrevDisabled(!api.canScrollPrev());
      setNextDisabled(!api.canScrollNext());
    };
    const onInit = (api: EmblaCarouselType) => {
      setScrollSnaps(api.scrollSnapList());
      updateSelectionState(api);
    };

    onInit(emblaApi);
    emblaApi.on('reInit', onInit).on('select', updateSelectionState);

    return () => {
      emblaApi.off('reInit', onInit).off('select', updateSelectionState);
    };
  }, [emblaApi]);

  return {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  };
};

function MotionCarousel({
  slides,
  options,
  className,
  slideClassName,
  inactiveScale = 0.9,
  ariaLabel = 'Carrossel',
  getDotLabel = (index) => `Slide ${index + 1}`,
  showDotLabel = true,
}: MotionCarouselProps) {
  const reducedMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDownCapture={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          onPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          onNext();
        }
      }}
      className={cn(
        'w-full space-y-4 [--slide-height:9rem] [--slide-size:80%] [--slide-spacing:1rem] sm:[--slide-height:13rem] sm:[--slide-size:65%] md:[--slide-height:18rem] md:[--slide-size:55%] md:[--slide-spacing:1.5rem]',
        className,
      )}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((slide, index) => {
            const isActive = index === selectedIndex;

            return (
              <div
                key={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${slides.length}`}
                className="mr-(--slide-spacing) flex h-(--slide-height) min-w-0 flex-none basis-(--slide-size)"
              >
                <motion.div
                  className={cn(
                    'size-full overflow-hidden rounded-xl border border-border bg-card',
                    slideClassName,
                  )}
                  initial={false}
                  animate={{ scale: isActive || reducedMotion ? 1 : inactiveScale }}
                  transition={reducedMotion ? { duration: 0 } : transition}
                >
                  {slide}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <Button
          size="icon-lg"
          onClick={onPrev}
          disabled={prevDisabled}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="size-5" />
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              label={getDotLabel(index)}
              showLabel={showDotLabel}
              selected={index === selectedIndex}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>

        <Button
          size="icon-lg"
          onClick={onNext}
          disabled={nextDisabled}
          aria-label="Próximo slide"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

function DotButton({
  selected = false,
  label,
  showLabel,
  onClick,
}: DotButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-current={selected ? 'true' : undefined}
      layout
      initial={false}
      className="flex cursor-pointer select-none items-center justify-center rounded-full border-none bg-primary text-sm text-primary-foreground"
      animate={{
        width: selected ? (showLabel ? 68 : 28) : 12,
        height: selected && showLabel ? 28 : 12,
        opacity: selected ? 1 : 0.5,
      }}
      transition={transition}
    >
      {showLabel ? (
        <motion.span
          layout
          initial={false}
          aria-hidden
          className="block whitespace-nowrap px-3 py-1"
          animate={{
            opacity: selected ? 1 : 0,
            scale: selected ? 1 : 0,
          }}
          transition={transition}
        >
          {label}
        </motion.span>
      ) : null}
    </motion.button>
  );
}

export { MotionCarousel, type MotionCarouselProps };
