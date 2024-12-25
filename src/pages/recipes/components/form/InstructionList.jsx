import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Minus } from 'lucide-react';

export function InstructionList({ instructions, onChange }) {
  const addInstruction = () => {
    onChange([...instructions, '']);
  };

  const removeInstruction = (index) => {
    onChange(instructions.filter((_, i) => i !== index));
  };

  const updateInstruction = (index, value) => {
    onChange(instructions.map((inst, i) => i === index ? value : inst));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700">Instrucciones</label>
        <Button type="button" variant="outline" size="sm" onClick={addInstruction}>
          <Plus className="w-4 h-4 mr-1" /> Agregar
        </Button>
      </div>
      <div className="space-y-2">
        {instructions.map((instruction, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={instruction}
              onChange={(e) => updateInstruction(index, e.target.value)}
              placeholder={`Paso ${index + 1}`}
              required
            />
            {instructions.length > 1 && (
              <Button 
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeInstruction(index)}
              >
                <Minus className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}