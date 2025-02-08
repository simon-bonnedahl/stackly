import Image from 'next/image';
import { CSSProperties } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
  className?: string;
}

const CustomImage = ({ src, alt, width, height, style, className }: ImageProps) => {
  // Convert width and height to numbers if they're strings with numeric values
  const numericWidth = typeof width === 'string' ? parseInt(width, 10) : width;
  const numericHeight = typeof height === 'string' ? parseInt(height, 10) : height;

  return (
    <div className={className} style={{ position: 'relative', ...style }}>
      <Image
        src={src}
        alt={alt}
        width={numericWidth || 600}
        height={numericHeight || 300}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        priority={true}
      />
    </div>
  );
};

export default CustomImage;