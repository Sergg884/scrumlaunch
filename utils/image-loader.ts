export default function customLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // Проверяем, является ли изображение из Contentful
  if (src.includes('images.ctfassets.net')) {
    const separator = src.includes('?') ? '&' : '?';
    return `${src}${separator}w=${width}&q=${quality || 75}&fm=webp`;
  }
  
  // Для локальных изображений возвращаем исходный путь
  return src;
} 