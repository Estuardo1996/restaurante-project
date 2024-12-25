import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Star } from 'lucide-react';

export function SupplierFilters({ 
  search, 
  onSearchChange,
  minRating,
  onMinRatingChange 
}) {
  return (
    <div className="space-y-4 mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Buscar proveedores..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <div className="flex gap-2">
        {[0, 3, 4, 5].map((rating) => (
          <Button
            key={rating}
            variant={minRating === rating ? 'default' : 'outline'}
            onClick={() => onMinRatingChange(rating)}
            className="flex items-center gap-1"
          >
            {rating === 0 ? 'Todos' : (
              <>
                {rating}+ <Star className="w-4 h-4" />
              </>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}