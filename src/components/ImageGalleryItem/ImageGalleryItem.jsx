import { Item } from './ImageGalleryItem.styles';

export default function ImageGalleryItem({ item }) {
  return (
    <Item className="ImageGalleryItem">
      <div>
        <img src={`${item.image}`} alt={item.name} width="150px" />
      </div>

      <div>
        <p>Name: {item.name}</p>

        <p>Status: {item.status}</p>

        <p>Species: {item.species}</p>

        {item.type && <p>Type: {item.type}</p>}

        <p>Gender: {item.gender}</p>

        <p>Created: {item.created}</p>
      </div>
    </Item>
  );
}
