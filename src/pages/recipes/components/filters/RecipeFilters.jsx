import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Clock, Users } from 'lucide-react';

export function RecipeFilters({
  search,
  onSearchChange,
  selectedCategory,
  categories,
  onCategoryChange,
  timeFilter,
  onTimeFilterChange,
  servingsFilter,
  onServingsFilterChange
}) {
  return (
    <div className="space-y-4 mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Buscar recetas..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="flex-1 min-w-[200px]">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => onCategoryChange('all')}
            >
              Todas
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onTimeFilterChange(timeFilter === 'asc' ? 'desc' : 'asc')}
            className="flex items-center gap-1"
          >
            <Clock className="w-4 h-4" />
            {timeFilter === 'asc' ? '↑' : '↓'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onServingsFilterChange(servingsFilter === 'asc' ? 'desc' : 'asc')}
            className="flex items-center gap-1"
          >
            <Users className="w-4 h-4" />
            {servingsFilter === 'asc' ? '↑' : '↓'}
          </Button>
        </div>
      </div>
    </div>
  );
}