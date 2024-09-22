'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar as CalendarIcon } from "lucide-react"
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const FilterCars = () => {
    const [date, setDate] = React.useState<Date>()

    return (
        <div className='w-full h-[500px] flex justify-center items-start pt-8' style={{ backgroundImage: `url(${`https://pixydrops.com/remons/assets/img/brand-bg.png`})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-[1170px] mx-auto flex justify-between items-end gap-4 bg-white rounded-xl p-10'>
                <div className="grid w-full  items-center gap-4">
                    <Label htmlFor="location">Pick-up Location</Label>
                    <Select>
                        <SelectTrigger className="w-[215px] !h-[50px] p-4">
                            <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent id='location' className='max-h-[200px]'>
                            <SelectGroup>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full  items-center gap-4">
                    <Label htmlFor="location">Pickup Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[215px] h-[50px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="grid w-full  items-center gap-4">
                    <Label htmlFor="location">Dropoff Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[215px] h-[50px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="grid w-full  items-center gap-4">
                    <Label htmlFor="location">Car Type</Label>
                    <Select>
                        <SelectTrigger className="w-[215px] !h-[50px] p-4">
                            <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent id='location' className='max-h-[200px]'>
                            <SelectGroup>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Button className='h-[50px]' size={'lg'}>Find a Car</Button>
            </div>
        </div>
    )
}

export default FilterCars