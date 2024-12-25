export function RecipeImage({ image, name }) {
  if (!image) return null;
  
  return (
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover rounded-t-lg"
    />
  );
}