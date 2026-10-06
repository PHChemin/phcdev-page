'use client';

import * as React from 'react';

import {
  HoverCard as HoverCardPrimitive,
  HoverCardTrigger as HoverCardTriggerPrimitive,
  HoverCardContent as HoverCardContentPrimitive,
  HoverCardPortal as HoverCardPortalPrimitive,
  HoverCardArrow as HoverCardArrowPrimitive,
  type HoverCardProps as HoverCardPropsPrimitive,
  type HoverCardTriggerProps as HoverCardTriggerPropsPrimitive,
  type HoverCardContentProps as HoverCardContentPropsPrimitive,
  type HoverCardPortalProps as HoverCardPortalPropsPrimitive,
  type HoverCardArrowProps as HoverCardArrowPropsPrimitive,
} from '@/components/animate-ui/primitives/radix/hover-card';
import { getStrictContext } from '@/lib/get-strict-context';

type PreviewLinkCardContextType = {
  href: string;
  src?: string;
  width?: number;
  height?: number;
  preload: () => void;
};

const [PreviewLinkCardProvider, usePreviewLinkCard] =
  getStrictContext<PreviewLinkCardContextType>('PreviewLinkCardContext');

type PreviewLinkCardProps = HoverCardPropsPrimitive & {
  href: string;
  src?: string;
  width?: number;
  height?: number;
  deviceScaleFactor?: number;
  colorScheme?: 'light' | 'dark';
};

function PreviewLinkCard({
  href,
  src,
  width = 240,
  height = 135,
  deviceScaleFactor = 1,
  colorScheme = 'light',
  ...props
}: PreviewLinkCardProps) {
  const imageSrc =
    src ??
    `https://api.microlink.io/?${buildQueryString({
      url: href,
      screenshot: true,
      meta: false,
      embed: 'screenshot.url',
      colorScheme,
      'viewport.isMobile': true,
      'viewport.deviceScaleFactor': deviceScaleFactor,
      'viewport.width': width * 3,
      'viewport.height': height * 3,
    })}`;

  const preloaded = React.useRef<string | null>(null);
  const preload = React.useCallback(() => {
    if (preloaded.current === imageSrc) return;
    preloaded.current = imageSrc;
    const image = new Image();
    image.src = imageSrc;
  }, [imageSrc]);

  return (
    <PreviewLinkCardProvider
      value={{ href, src: imageSrc, width, height, preload }}
    >
      <HoverCardPrimitive data-slot="preview-link-card" {...props} />
    </PreviewLinkCardProvider>
  );
}

type PreviewLinkCardTriggerProps = HoverCardTriggerPropsPrimitive &
  React.ComponentProps<'a'>;

function PreviewLinkCardTrigger({
  asChild,
  children,
  href: hrefProp,
  onPointerEnter,
  onFocus,
  ...props
}: PreviewLinkCardTriggerProps) {
  const { href, preload } = usePreviewLinkCard();

  return (
    <HoverCardTriggerPrimitive
      data-slot="preview-link-card-trigger"
      asChild
      onPointerEnter={(event) => {
        preload();
        onPointerEnter?.(event);
      }}
      onFocus={(event) => {
        preload();
        onFocus?.(event);
      }}
      {...props}
    >
      {asChild ? children : <a href={hrefProp ?? href}>{children}</a>}
    </HoverCardTriggerPrimitive>
  );
}

type PreviewLinkCardPortalProps = HoverCardPortalPropsPrimitive;

function PreviewLinkCardPortal(props: PreviewLinkCardPortalProps) {
  return (
    <HoverCardPortalPrimitive data-slot="preview-link-card-portal" {...props} />
  );
}

function buildQueryString(
  params: Record<string, string | number | boolean | undefined | null>,
) {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null) continue;
    sp.append(k, String(v));
  }
  return sp.toString();
}

type PreviewLinkCardContentProps = HoverCardContentPropsPrimitive &
  React.ComponentProps<'a'>;

function PreviewLinkCardContent({
  side = 'top',
  sideOffset = 10,
  align = 'center',
  alignOffset,
  avoidCollisions,
  collisionBoundary,
  collisionPadding,
  arrowPadding,
  sticky,
  hideWhenDetached,
  transition = { type: 'spring', stiffness: 300, damping: 25 },
  asChild,
  children,
  href: hrefProp,
  style,
  ...props
}: PreviewLinkCardContentProps) {
  const { href } = usePreviewLinkCard();

  return (
    <HoverCardContentPrimitive
      data-slot="preview-link-card-content"
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      avoidCollisions={avoidCollisions}
      collisionBoundary={collisionBoundary}
      collisionPadding={collisionPadding}
      arrowPadding={arrowPadding}
      sticky={sticky}
      hideWhenDetached={hideWhenDetached}
      transition={transition}
      asChild={asChild}
      {...(asChild ? { style, ...props } : {})}
    >
      {asChild ? (
        children
      ) : (
        <a
          style={{
            display: 'block',
            ...style,
          }}
          href={hrefProp ?? href}
          {...props}
        >
          {children}
        </a>
      )}
    </HoverCardContentPrimitive>
  );
}

type PreviewLinkCardImageProps = Omit<
  React.ComponentProps<'img'>,
  'src' | 'width' | 'height'
>;

function PreviewLinkCardImage({
  alt = 'preview image',
  ...props
}: PreviewLinkCardImageProps) {
  const { src, width, height } = usePreviewLinkCard();

  return <img src={src} width={width} height={height} alt={alt} {...props} />;
}

type PreviewLinkCardArrowProps = HoverCardArrowPropsPrimitive;

function PreviewLinkCardArrow(props: PreviewLinkCardArrowProps) {
  return (
    <HoverCardArrowPrimitive data-slot="preview-link-card-arrow" {...props} />
  );
}

export {
  PreviewLinkCard,
  PreviewLinkCardTrigger,
  PreviewLinkCardPortal,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
  PreviewLinkCardArrow,
  usePreviewLinkCard,
  type PreviewLinkCardProps,
  type PreviewLinkCardTriggerProps,
  type PreviewLinkCardPortalProps,
  type PreviewLinkCardContentProps,
  type PreviewLinkCardImageProps,
  type PreviewLinkCardArrowProps,
  type PreviewLinkCardContextType,
};
