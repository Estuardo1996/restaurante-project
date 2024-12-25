import { useState } from 'react';
import { useMenuStore } from '@/store/menu';
import { MenuItem } from '@/types/menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

interface MenuSelectorProps {
  onSelect: (item: MenuItem) => void;
}

export function MenuSelector({ onSelect }: MenuSelectorProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const categories = useMenuStore((state) => state.categories);

  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(category => 
    selectedCategory ? category.id === selectedCategory : true
  );

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col">
      <div className="sticky top-0 bg-white z-10 space-y-4 pb-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar en el menú..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-2">
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(null)}
                className="whitespace-nowrap"
              >
                Todos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {view === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {filteredCategories.map((category) =>
              category.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item)}
                  className="text-left p-4 border rounded-lg hover:border-blue-500 transition-colors bg-white"
                >
                  {item.image && (
                    <div className="aspect-video mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  )}
                  <h3 className="font-medium">{item.name}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <p className="text-sm font-medium text-blue-600 mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                </button>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-2 p-4">
            {filteredCategories.map((category) =>
              category.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item)}
                  className="w-full flex items-center gap-4 p-4 border rounded-lg hover:border-blue-500 transition-colors bg-white"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  )}
                  <div className="flex-1 text-left">
                    <h3 className="font-medium">{item.name}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-600 line-clamp-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <p className="text-sm font-medium text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}