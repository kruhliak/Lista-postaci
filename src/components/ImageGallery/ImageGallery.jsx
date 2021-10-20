import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styles';

export default function ImageGallery({ items }) {
  return (
    <Gallery>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </Gallery>
  );
}
