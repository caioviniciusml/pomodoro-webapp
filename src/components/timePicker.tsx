import { Input } from "@/components/ui/input"

export default function TimePicker() {
    return (
        <div className="flex justify-center">
            <Input className="w-[60px]" type="number" />
            <span className="pr-2">Min</span>
            <Input className="w-[60px]" type="number" step={10} min={0} max={50} />
            <span>Sec</span>
        </div>
    )
}